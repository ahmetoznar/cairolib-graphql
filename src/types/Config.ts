import { Field, Int, ObjectType } from "type-graphql";
import { CategoryType } from "./Category";

@ObjectType()
export class ConfigType {
  @Field(() => String)
  uuid!: string
  @Field(() => [CategoryType])
  categories!: CategoryType[]
  @Field(() => [String])
  cairoVersions!: string[]
  @Field(() => Int)
  totalLinesOfCode!: number
}