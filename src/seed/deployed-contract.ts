import { DeployedContract } from "@prisma/client";
import { createUUID } from "../constants/helpers";
import db from "../db";
import { authorsData } from "./author";

import {
  dolvenUUID,
  jediSwapUUID,
  KSwap10UUID,
  fibrousFinanceUUID,
} from './author';

export const deployedContractsData: DeployedContract[] = [
  {
    uuid: createUUID(),
    authorUuid: authorsData[2].wallet_address,
    name: "briq contract",
    address:
      "0x01317354276941f7f799574c73fd8fe53fa3f251084b4c04d88cf601b6bd915e",
    network: 'GOERLI',
    is_audited: true,
  },
  {
    uuid: createUUID(),
    authorUuid: authorsData[2].wallet_address,
    name: "Set contract",
    address:
      "0x0266b1276d23ffb53d99da3f01be7e29fa024dd33cd7f7b1eb7a46c67891c9d0",
    network: "GOERLI",
    is_audited: true,
  },
  {
    uuid: createUUID(),
    authorUuid: dolvenUUID,
    name: "StrategyVault",
    address:
      "0x02dcc7bbea2ddbefa7492a10df128cfebaf3bf532a6ac168222d0adb64c917a9",
    network: "GOERLI",
    is_audited: false,
  },
  {
    uuid: createUUID(),
    authorUuid: dolvenUUID,
    name: "Undelegate Strategy",
    address:
      "0x0155bf4832449a8df5e8373c3f5ec05173cef62cdf3e9021fc0eca3b0019113e",
    network: "GOERLI",
    is_audited: false,
  },
  {
    uuid: createUUID(),
    authorUuid: dolvenUUID,
    name: "DL Distributor",
    address:
      "0x033531b2a6fca8b928b64da1b93dd8f463611da0915cce7f5150d559a18075cc",
    network: "GOERLI",
    is_audited: false,
  },
  {
    uuid: createUUID(),
    authorUuid: dolvenUUID,
    name: "DLV Token",
    address:
      "0x01dd02e3ced0361cf2de88c692d98c4b359d8a76ba60826051e41236a7ed9a73",
    network: "GOERLI",
    is_audited: false,
  },
  {
    uuid: createUUID(),
    authorUuid: jediSwapUUID,
    name: "Router",
    address:
      "0x012b063b60553c91ed237d8905dff412fba830c5716b17821063176c6c073341",
    network: "GOERLI",
    is_audited: false,
  },
  {
    uuid: createUUID(),
    authorUuid: jediSwapUUID,
    name: "Factory",
    address:
      "0x06c872d0696e7bf45735239393774f51455e3bdb08760a0dc76cd7c8688cfd60",
    network: "GOERLI",
    is_audited: false,
  },
  {
    uuid: createUUID(),
    authorUuid: KSwap10UUID,
    name: "Router",
    address:
      "0x07a6f98c03379b9513ca84cca1373ff452a7462a3b61598f0af5bb27ad7f76d1",
    network: "MAINNET",
    is_audited: false,
  },
  {
    uuid: createUUID(),
    authorUuid: KSwap10UUID,
    name: "Factory",
    address:
      "0x01c0a36e26a8f822e0d81f20a5a562b16a8f8a3dfd99801367dd2aea8f1a87a2",
    network: "MAINNET",
    is_audited: false,
  },
  {
    uuid: createUUID(),
    authorUuid: KSwap10UUID,
    name: "PairClassHash",
    address:
      "0x231adde42526bad434ca2eb983efdd64472638702f87f97e6e3c084f264e06f",
    network: "MAINNET",
    is_audited: false,
  },
  {
    uuid: createUUID(),
    authorUuid: KSwap10UUID,
    name: "Router",
    address:
      "0x00975910cd99bc56bd289eaaa5cee6cd557f0ddafdb2ce6ebea15b158eb2c664",
    network: "GOERLI",
    is_audited: false,
  },
  {
    uuid: createUUID(),
    authorUuid: KSwap10UUID,
    name: "Factory",
    address:
      "0x06c31f39524388c982045988de3788530605ed08b10389def2e7b1dd09d19308",
    network: "GOERLI",
    is_audited: false,
  },
  {
    uuid: createUUID(),
    authorUuid: KSwap10UUID,
    name: "PairClassHash",
    address:
      "0x231adde42526bad434ca2eb983efdd64472638702f87f97e6e3c084f264e06f",
    network: "GOERLI",
    is_audited: false,
  },
  {
    uuid: createUUID(),
    authorUuid: fibrousFinanceUUID,
    name: "Router Contract",
    address:
      "0x7c6f04a78f405bb2ff08cb07a1a1e0868800fa1ed41d9067d8f8f28ba73a4f9",
    network: "GOERLI",
    is_audited: false,
  },
];;


export default async function create() {
  await db.deployedContract.createMany({
    data: deployedContractsData
  });
}