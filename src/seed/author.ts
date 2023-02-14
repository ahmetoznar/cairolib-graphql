import { Author } from "@prisma/client";
import { createUUID } from "../constants/helpers";
import { stark } from "starknet";
import db from "../db";
export const authorsData: Author[] = [
  {
    register_date: new Date(),
    description:
      "10KSwap, being built on StarkNet, is an AMM protocol that advances with Ethereum. 10K aims to revolutionize the performance of the AMM protocol by leveraging the rollup feature, bringing lower fees, less friction, and ultimately better liquidity to the L2 world and advance DeFi adoption.",
    author_name: "10KSwap",
    author_image:
      "https://raw.githubusercontent.com/argentlabs/dappland/develop/public/dapps/10kswap/dapp-icon-10kswap.png",
    github_link: "https://github.com/10k-swap",
    website_link: "https://twitter.com/10KSwap",
    wallet_address: stark.randomAddress(),
    last_submit_date: "",
  },
  {
    register_date: new Date(),
    description:
      "Astraly builds the infrastructure around decentralized reputation, helping users own their content and reputation so that any application that wants to build on-chain reputation-based systems can do so with ease. Astraly aggregates and sorts all reputation sources in an optimized way, all on-chain. In addition, Astraly is developing the first on top of this reputation protocol, the first ever repu",
    author_name: "Astraly",
    author_image:
      "https://raw.githubusercontent.com/argentlabs/dappland/develop/public/dapps/astraly/dapp-icon-astraly.png",
    github_link: "https://github.com/Astraly-Labs",
    website_link: "https://twitter.com/AstralyXYZ",
    wallet_address: stark.randomAddress(),
    last_submit_date: "",
  },
  {
    register_date: new Date(),
    description:
      "briq is an NFT construction protocol based around fundamental elements called briqs. You can assemble your briqs into an NFT and disassemble it to get the briqs back and build something else. briqs are NFT building blocks!",
    author_name: "briq",
    author_image:
      "https://raw.githubusercontent.com/argentlabs/dappland/develop/public/dapps/briq/dapp-icon-briq.png",
    github_link: "https://github.com/briqNFT",
    website_link: "https://twitter.com/briqNFT",
    wallet_address: stark.randomAddress(),
    last_submit_date: "",
  },
  {
    register_date: new Date(),
    description: "Starknet Gaming Console. Play your favorite games.",
    author_name: "Cartridge",
    author_image:
      "https://raw.githubusercontent.com/argentlabs/dappland/develop/public/dapps/cartridge/logo.jpeg",
    github_link: "https://github.com/cartridge-gg",
    website_link: "https://twitter.com/cartridge_gg",
    wallet_address: stark.randomAddress(),
    last_submit_date: "",
  },
  {
    register_date: new Date(),
    description:
      "CygnusDAO is a decentralized Stablecoin Lending and Margin Trading protocol. Lenders can supply their stablecoins in isolated lending pools acting as investors in these without the risk of impermanent loss. Borrowers can deposit their LP Tokens as collateral to borrow these stablecoins or leverage their position up to 13x. Cygnus aims to bring profitability to liquidity providers and stablecoin hodlers alike.",
    author_name: "CygnusDAO",
    author_image:
      "https://raw.githubusercontent.com/argentlabs/dappland/develop/public/dapps/cygnus/dapp-icon-cygnus.png",
    github_link: "https://github.com/CygnusDAO",
    website_link: "https://twitter.com/CygnusDAO",
    wallet_address: stark.randomAddress(),
    last_submit_date: "",
  },
  {
    register_date: new Date(),
    description: "Engineering Blockchains || Building whats next",
    author_name: "Darlington02",
    author_image: "https://avatars.githubusercontent.com/u/75126961?v=4",
    github_link: "https://github.com/Darlington02",
    website_link: "https://twitter.com/Darlington02",
    wallet_address: stark.randomAddress(),
    last_submit_date: "",
  },
  {
    register_date: new Date(),
    description:
      "Dolven Labs is a DAO Based Ecosystem Catalyst for projects built on the StarkNet Network it is an initiative to empower, accelerate and support innovative projects in the StarkNet ecosystem by providing them with early-stage investment. We aim to be the future of investment, deal flow, and value creation in the StarkNet ecosystem.",
    author_name: "Dolven Labs",
    author_image:
      "https://raw.githubusercontent.com/argentlabs/dappland/develop/public/dapps/dolvenlabs/dapp-icon-dolven.png",
    github_link: "https://github.com/dolven-labs-catalyst",
    website_link: "https://twitter.com/dolvenlabs",
    wallet_address: stark.randomAddress(),
    last_submit_date: "",
  },
  {
    register_date: new Date(),
    description:
      "Fibrous is a price exploration and routing algorithm across multiple AMMs that offers token exchanges with the best and cheapest rate at StarkNet validity Rollup.",
    author_name: "Fibrous Finance",
    author_image:
      "https://raw.githubusercontent.com/argentlabs/dappland/develop/public/dapps/fibrousfinance/dapp-icon-fibrous.png",
    github_link: "https://github.com/Fibrous-Finance",
    website_link: "https://twitter.com/FibrousFinance",
    wallet_address: stark.randomAddress(),
    last_submit_date: "",
  },
  {
    register_date: new Date(),
    description:
      "A community-led fully permissionless and composable AMM on Starknet",
    author_name: "JediSwap",
    author_image:
      "https://raw.githubusercontent.com/argentlabs/dappland/develop/public/dapps/jediswap/dapp-icon-jediswap.png",
    github_link: "https://github.com/jediswaplabs",
    website_link: "https://twitter.com/jediswap",
    wallet_address: stark.randomAddress(),
    last_submit_date: "",
  },
  {
    register_date: new Date(),
    description: "",
    author_name: "lindy-labs",
    author_image: "https://avatars.githubusercontent.com/u/78759818?s=200&v=4",
    github_link: "https://github.com/lindy-labs",
    website_link: "https://twitter.com/lindy-labs",
    wallet_address: stark.randomAddress(),
    last_submit_date: "",
  },
  {
    register_date: new Date(),
    description:
      "Year 2208: A quest for meaning in the Post-Information Society. Escaping the Solarpunk walled society of New Cairo was only the first step. In this Autonomous World, you will have to rebuild a new community alongside fellow explorers, gathered in the ruins of Cairo. Collaborate to survive and find answers about a lost collective memory in this MMORPG built on Starknet.",
    author_name: "Lost in Cairo",
    author_image:
      "https://raw.githubusercontent.com/argentlabs/dappland/develop/public/dapps/lostincairo/dapp-icon-lostincairo.png",
    github_link: "https://github.com/lostincairo",
    website_link: "https://twitter.com/lostincairogame/",
    wallet_address: stark.randomAddress(),
    last_submit_date: "",
  },
  {
    register_date: new Date(),
    description:
      "Contribute to the best projects within the StarkNet Ecosystem\nWork on the best open-source repo, gain credibility, meet amazing teams, and get paid in TOKENS or USDC.",
    author_name: "Only Dust",
    author_image:
      "https://raw.githubusercontent.com/argentlabs/dappland/develop/public/dapps/onlydust/dapp-icon-onlydust.png",
    github_link: "https://github.com/onlydustxyz",
    website_link: "https://twitter.com/OnlyDust_xyz",
    wallet_address: stark.randomAddress(),
    last_submit_date: "",
  },
  {
    register_date: new Date(),
    description:
      "A permissionless & trustless hub of comprehensive defi solutions to leverage ZK-Rollup on StarkNet's L2",
    author_name: "StarkDefi",
    author_image:
      "https://raw.githubusercontent.com/argentlabs/dappland/develop/public/dapps/starkdefi/dapp-icon-starkdefi.png",
    github_link: "https://github.com/Starkdefi",
    website_link: "https://twitter.com/StarkDefi",
    wallet_address: stark.randomAddress(),
    last_submit_date: "",
  },
];

export const dolvenUUID = authorsData.find(
  (e) => e.author_name == "Dolven Labs"
)!.wallet_address;
export const jediSwapUUID = authorsData.find(
  (e) => e.author_name == "JediSwap"
)!.wallet_address;
export const KSwap10UUID = authorsData.find(
  (e) => e.author_name == "10KSwap"
)!.wallet_address;
export const fibrousFinanceUUID = authorsData.find(
  (e) => e.author_name == "Fibrous Finance"
)!.wallet_address;
export const cartridgeUUID = authorsData.find(
  (e) => e.author_name == "Cartridge"
)!.wallet_address;
export const astralyUUID = authorsData.find(
  (e) => e.author_name == "Astraly"
)!.wallet_address;
export const cygnusDAOUUID = authorsData.find(
  (e) => e.author_name == "CygnusDAO"
)!.wallet_address;
export const lostInCairoUUID = authorsData.find(
  (e) => e.author_name == "Lost in Cairo"
)!.wallet_address;
export const darlington02UUID = authorsData.find(
  (e) => e.author_name == "Darlington02"
)!.wallet_address;
export const lindyLabsUUID = authorsData.find(
  (e) => e.author_name == "lindy-labs"
)!.wallet_address;
export const briqUUID = authorsData.find(
  (e) => e.author_name == "briq"
)!.wallet_address;
export const onlyDustUUID = authorsData.find(
  (e) => e.author_name == "Only Dust"
)!.wallet_address;
export const starkDefiUUID = authorsData.find(
  (e) => e.author_name == "StarkDefi"
)!.wallet_address;

export default async function create() {
  await db.author.createMany({
    data: authorsData,
  });
}
