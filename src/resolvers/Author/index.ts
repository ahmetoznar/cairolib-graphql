import {
  Arg,
  Ctx,
  Mutation,
  Query,
  Resolver,
  UseMiddleware,
} from "type-graphql";
import { tableIncludes } from "../../constants/helpers";
import db from "../../db";
import { AuthorType } from "../../types/Author";
import { IUpdateAuthorInput } from "./input/update-author-input";
import { isUserAuthenticated } from "../../middleware/isAuthenticated";

@Resolver()
export class AuthorResolver {
  @Mutation(() => AuthorType)
  @UseMiddleware(isUserAuthenticated)
  async updateAuthor(
    @Ctx()
    ctx: any,
    @Arg("payload", () => IUpdateAuthorInput, { validate: false })
    payload: IUpdateAuthorInput
  ) {
    const author = await db.author.upsert({
      create: {
        ...payload,
        wallet_address: ctx.req.user,
      },
      update: {
        ...payload,
      },
      where: {
        wallet_address: ctx.req.user,
      },
      include: tableIncludes.authorIncludes,
    });
    return author;
  }
  @Query(() => [AuthorType])
  async getAuthors() {
    const authors = await db.author.findMany({
      include: tableIncludes.authorIncludes,
    });
    authors.map((obj) =>
      obj.author_name == "" ? (obj.author_name = obj.wallet_address) : null
    );
    return authors;
  }
  @Query(() => AuthorType)
  async getAuthor(@Arg("wallet_address", () => String) wallet_address: string) {
    const author = await db.author.findFirst({
      where: {
        wallet_address,
      },
      include: tableIncludes.authorIncludes,
    });
    author.author_name == ""
      ? (author.author_name = author.wallet_address)
      : null;
    return author;
  }
}
