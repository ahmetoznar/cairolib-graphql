import { Query, Resolver } from "type-graphql";
import db from "../../db";
import { ConfigType } from "../../types/Config";

@Resolver()
export class ConfigResolver {
  @Query(() => ConfigType)
  async getConfig() {
    const config = await db.config.findMany();
    return config[0];
  }
}