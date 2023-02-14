import { Category } from "@prisma/client";
import {
  Arg,
  Args,
  Ctx,
  Mutation,
  Query,
  Resolver,
  UseMiddleware,
} from "type-graphql";
import { fileIncludes } from "../../constants/helpers/table-includes";
import db from "../../db";
import { FileFilterArgs, FileSearchArgs, FilterArgs } from "../../types/App";
import { FileType } from "../../types/File";
import moment from "moment";
import {
  controlSubLinks,
  isHexString,
  tableIncludes,
} from "../../constants/helpers";
import { ICreateFileInput } from "./input/create-file-input";
import { IGetFilesResponse } from "./response/get-files-response";
import { isUserAuthenticated } from "../../middleware/isAuthenticated";

@Resolver()
export class FileResolver {
  @Query(() => FileType)
  async getFile(@Arg("uuid", () => String) uuid: string) {
    const file = await db.file.findFirst({
      where: {
        uuid,
      },
      include: tableIncludes.fileIncludes,
    });
    file.author.author_name == ""
      ? (file.author.author_name = file.author.wallet_address)
      : null;
    return file;
  }

  @Query(() => IGetFilesResponse)
  async getFiles(
    @Args({ validate: false })
    { wallet_address, skip, take, category, date, is_audited }: FileFilterArgs
  ) {
    const stringDate = String(moment(date).unix());
    const total_len = await db.file.count({
      where: {
        authorUuid: wallet_address ?? undefined,
        categories: category
          ? {
              hasSome: category as Category,
            }
          : undefined,
        date: date
          ? {
              gt: stringDate ?? undefined,
            }
          : undefined,
        is_audited: is_audited ?? undefined,
      },
    });
    const files = await db.file.findMany({
      skip: skip,
      take: take,
      orderBy: {
        date: "desc",
      },
      where: {
        authorUuid: wallet_address ?? undefined,
        categories: category
          ? {
              hasSome: category as Category,
            }
          : undefined,
        date: date
          ? {
              gt: stringDate ?? undefined,
            }
          : undefined,
        is_audited: is_audited ?? undefined,
      },
      include: fileIncludes,
    });
    files.map((obj) =>
      obj.author.author_name == ""
        ? (obj.author.author_name = obj.author.wallet_address)
        : null
    );
    return { files, total_len };
  }

  @Mutation(() => FileType)
  @UseMiddleware(isUserAuthenticated)
  async createFile(
    @Ctx()
    ctx: any,
    @Arg("payload", () => ICreateFileInput, { validate: false })
    payload: ICreateFileInput
  ) {
    const author = await db.author.findFirst({
      where: {
        wallet_address: ctx.req.user,
      },
    });
    if (!payload.sub_links.length || !controlSubLinks(payload.sub_links)) {
      throw new Error("File raw link broken!");
    }

    var uuid = author ? author.wallet_address : null;
    let last_submit_date = author ? author.last_submit_date : 0;
    let author_name = author ? author.author_name : "";
    if (!author) {
      const { wallet_address } = await db.author.create({
        data: {
          author_name: "",
          description: "",
          github_link: "",
          wallet_address: payload.authorUuid,
          website_link: "",
        },
      });
      uuid = wallet_address;
    }
    if (author_name == "") {
      if (2592000 > Date.now() - Number(last_submit_date)) {
        throw new Error(
          "You have to register your domain and complete your profile"
        );
      }
    }
    const updatedAuthor = await db.author.update({
      data: {
        last_submit_date: String(Date.now()),
      },
      where: {
        wallet_address: payload.authorUuid,
      },
    });

    const file = await db.file.create({
      data: {
        cairo_version: payload.cairo_version,
        date: payload.date,
        description: payload.description,
        is_audited: payload.is_audited,
        title: payload.title,
        authorUuid: uuid!,
        sub_links: {
          createMany: {
            data: payload.sub_links,
          },
        },
        categories: {
          set: payload.categories as Category[],
        },
      },
    });
    return file;
  }
  @Mutation(() => Boolean)
  @UseMiddleware(isUserAuthenticated)
  async deleteFile(@Ctx() ctx: any, @Arg("uuid", () => String) uuid: string) {
    await db.fileSublink.deleteMany({
      where: {
        fileUuid: uuid,
        file: {
          authorUuid: ctx.req.user,
        },
      },
    });

    const findedFile = await db.file.findFirst({
      where: {
        authorUuid: ctx.req.user,
      },
    });

    if (findedFile) {
      await db.file.delete({
        where: {
          uuid,
        },
      });
    } else {
      throw new Error("An error occured!");
    }

    return true;
  }
  @Query(() => [FileType])
  async searchFiles(
    @Args({ validate: false })
    { cairoVersion, category, title }: FileSearchArgs,
    @Args({ validate: false }) { skip, take }: FilterArgs
  ) {
    const files = db.file.findMany({
      skip,
      take,
      where: {
        cairo_version: cairoVersion ?? undefined,
        categories: category
          ? {
              hasSome: category as Category,
            }
          : undefined,
        title: title
          ? {
              contains: title,
              mode: "insensitive",
            }
          : undefined,
      },
      include: tableIncludes.fileIncludes,
    });
    return files;
  }
}
