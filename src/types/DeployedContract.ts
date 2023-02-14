import { Field, ObjectType } from "type-graphql";
import { AuthorType } from "./Author";

@ObjectType()
export class DeployedContractType {
  @Field(() => String)
  uuid!: string
  @Field(() => String)
  name!: string
  @Field(() => String)
  address!: string
  @Field(() => String)
  network!: string
  @Field(() => String)
  is_audited!: string
  @Field(() => String)
  authorUuid!: string
  @Field(() => AuthorType, { nullable: true })
  author!: AuthorType
}