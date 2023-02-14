import { Prisma } from "@prisma/client";

export const fileIncludes: Prisma.FileInclude = {
  _count: {
    select: {
      sub_links: true
    }
  },
  author: true,
  sub_links: true,
}
export const authorIncludes: Prisma.AuthorInclude = {
  _count: true,
  contract_ids: true,
  deployed_contracts: true,
  files: {
    include: fileIncludes
  }
}