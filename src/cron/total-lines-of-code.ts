import db from "../db";
import axios from "axios";
import cron from "node-cron";

export const combine = (array: any) => {
  let newArray: any = [];

  array.forEach((elements: any) => {
    elements.forEach((element: any) => {
      newArray.push(element);
    });
  });

  return newArray;
};

export const calculateTotalOfLinesCode = async (data: any) => {
  try {
    const res = await Promise.all(
      data.map(async (c: any) => await axios.get(c.url))
    );

    let lines_of_code = 0;
    res.map((elem) => {
      lines_of_code += Number(elem.data.split("\n").length);
    });

    return lines_of_code;
  } catch (error: any) {
    console.log(error.message, "error message");
  }
};

const bootstrap = async () => {
  const skip_value = await db.config.findMany();
  const all_file_urls = await db.file.findMany({
    select: {
      sub_links: {
        select: {
          url: true,
        },
      },
    },
    skip: skip_value[0].last_index,
  });
  if (all_file_urls.length > 0) {
    let total_lines_of_code = skip_value[0].totalLinesOfCode;
    for (let index = 0; index < all_file_urls.length; index++) {
      const lines_of_code = await calculateTotalOfLinesCode(
        all_file_urls[index].sub_links
      );
      total_lines_of_code += lines_of_code == undefined ? 0 : lines_of_code;
    }
    const update_config = await db.config.update({
      data: {
        totalLinesOfCode: total_lines_of_code,
        last_index: skip_value[0].last_index + all_file_urls.length,
      },
      where: {
        uuid: skip_value[0].uuid,
      },
    });
  } else {
  }
};

cron.schedule("*/60 * * * *", () => {
  bootstrap();
});

bootstrap();
