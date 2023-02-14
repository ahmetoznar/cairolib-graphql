import { Field, InputType } from "type-graphql";

@InputType()
export class IUpdateAuthorInput {
  @Field(() => String, { nullable: true })
  description!: string;
  @Field(() => String, { nullable: true })
  author_name!: string;
  @Field(() => String, { nullable: true })
  github_link!: string;
  @Field(() => String, { nullable: true })
  website_link!: string;
  @Field(() => String, { nullable: true })
  author_image!: string;
}
