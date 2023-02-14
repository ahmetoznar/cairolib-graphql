import { Field, ObjectType } from "type-graphql";
import { ContractIdType } from "./ContractId";
import { DeployedContractType } from "./DeployedContract";
import { FileType } from "./File";

@ObjectType()
export class AuthorType {
  @Field(() => String)
  description!: string;
  @Field(() => String)
  author_name!: string;
  @Field(() => String)
  author_image!: string;
  @Field(() => String)
  register_date!: string;
  @Field(() => String)
  github_link!: string;
  @Field(() => String)
  website_link!: string;
  @Field(() => String)
  wallet_address!: string;
  @Field(() => String, { nullable: true })
  last_submit_date!: string | null;
  @Field(() => [ContractIdType], { nullable: true })
  contract_ids: ContractIdType[];
  @Field(() => [DeployedContractType], { nullable: true })
  deployed_contracts!: DeployedContractType[];
  @Field(() => [FileType])
  files!: FileType[];
}
