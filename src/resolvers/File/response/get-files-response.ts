import { Field, Int, ObjectType } from "type-graphql";
import { FileType } from "../../../types/File";

@ObjectType()
export class IGetFilesResponse {
  @Field(() => [FileType])
  files!: FileType[];
  @Field(() => Int)
  total_len!: number;
}
