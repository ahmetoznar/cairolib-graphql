import { Field, Int, ObjectType } from "type-graphql";
import { AuthorType } from "./Author";
import { CategoryType } from "./Category";
import { FileCountType } from "./Count";
import { FileSublinkType } from "./FileSubLink";

@ObjectType()
export class FileType {
  @Field(() => String)
  uuid!: string;
  @Field(() => String)
  title!: string;
  @Field(() => String)
  description!: string;
  @Field(() => [FileSublinkType])
  sub_links!: FileSublinkType[];
  @Field(() => String)
  is_audited!: string;
  @Field(() => Int)
  cairo_version!: number;
  @Field(() => String)
  date!: string;
  @Field(() => String)
  authorUuid!: string;
  @Field(() => FileCountType)
  _count!: FileCountType;
  @Field(() => AuthorType, { nullable: true })
  author!: AuthorType;
  @Field(() => [String])
  categories!: string[];
}
