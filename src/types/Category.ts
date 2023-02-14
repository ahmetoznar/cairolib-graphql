import { Field, ObjectType } from "type-graphql";
import { FileType } from "./File";

@ObjectType()
export class CategoryType {
  @Field(() => String)
  uuid!: string
  @Field(() => String)
  title!: string
  @Field(() => String)
  value!: string
  @Field(() => String)
  configUuid!: string
  @Field(() => String)
  config!: string
  @Field(() => String)
  fileUuid!: string
  @Field(() => FileType, { nullable: true })
  file!: FileType
}