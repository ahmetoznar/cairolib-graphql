import { ArgsType, Field, Int } from "type-graphql";

@ArgsType()
export class FilterArgs {
  @Field(() => Int, { defaultValue: 0 })
  public skip!: number;
  @Field(() => Int, { defaultValue: 12 })
  public take!: number;
  @Field(() => String, { defaultValue: "desc" })
  public orderBy!: "asc" | "desc";
}
@ArgsType()
export class FileFilterArgs {
  @Field(() => Int, { defaultValue: 0 })
  public skip!: number;
  @Field(() => Int, { defaultValue: 20 })
  public take!: number;
  @Field(() => Boolean, { nullable: true })
  public is_audited!: boolean;
  @Field(() => String, { nullable: true })
  public date!: string;
  @Field(() => String, { nullable: true })
  public category!: string;
  @Field(() => String, { nullable: true })
  public authorUuid!: string;
  @Field(() => String, { nullable: true })
  public wallet_address!: string;
}
@ArgsType()
export class FileSearchArgs {
  @Field(() => String, { nullable: true })
  public title!: string;
  @Field(() => String, { nullable: true })
  public category!: string;
  @Field(() => Int, { nullable: true })
  public cairoVersion!: number;
}
