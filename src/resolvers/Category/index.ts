import { Query, Resolver } from "type-graphql";
import { categories } from "../../constants/app";

@Resolver()
export class CategoryResolver {
  @Query(() => [String])
  async getCategories() {
    return categories;
  }
}