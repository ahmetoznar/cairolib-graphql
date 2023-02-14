import db from "../db";
const total_lines_of_code = 157272;
export default async function createConfig() {
  await db.config.create({
    data: {
      totalLinesOfCode: total_lines_of_code,
    }
  });
}