import { Field, Int, ObjectType } from "type-graphql";
import { AuthorType } from "./Author";

@ObjectType()
export class ContractIdType {
  @Field(() => String)
  uuid!: string
  @Field(() => Int)
  value!: number
  @Field(() => String)
  authorUuid!: string
  @Field(() => AuthorType, { nullable: true })
  author!: AuthorType
}