import { Field, InputType, Int } from "type-graphql";
import { FileSublinkInput } from "../../../types/FileSubLink";

@InputType()
export class ICreateFileInput {
  @Field(() => Int)
  cairo_version!: number;
  @Field(() => String)
  date!: string;
  @Field(() => String)
  description!: string;
  @Field(() => Boolean)
  is_audited!: boolean;
  @Field(() => String)
  title!: string;
  @Field(() => String)
  authorUuid!: string;
  @Field(() => [FileSublinkInput])
  sub_links!: FileSublinkInput[];
  @Field(() => [String])
  categories!: string[];
}
