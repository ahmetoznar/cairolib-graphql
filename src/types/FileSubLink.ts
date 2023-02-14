import { Field, InputType, ObjectType } from "type-graphql";
import { FileType } from "./File";

@InputType()
export class FileSublinkInput {
  @Field(() => String)
  title!: string
  @Field(() => String)
  url!: string
}
@ObjectType()
export class FileSublinkType {
  @Field(() => String)
  uuid!: string
  @Field(() => String)
  title!: string
  @Field(() => String)
  url!: string
  @Field(() => String)
  fileUuid!: string
  @Field(() => FileType, { nullable: true })
  file!: FileType
}