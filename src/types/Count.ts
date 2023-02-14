import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
export class FileCountType {
 @Field(() => Int)
 sub_links!: number
}