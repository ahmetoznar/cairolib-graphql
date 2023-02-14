import { Category } from "@prisma/client";
import moment from "moment";
import { createUUID } from "../constants/helpers";
import db from "../db";
import { astralyUUID, authorsData, briqUUID, cygnusDAOUUID, darlington02UUID, lindyLabsUUID, lostInCairoUUID, onlyDustUUID, starkDefiUUID } from "./author";
import {
  dolvenUUID,
  jediSwapUUID,
  KSwap10UUID,
  fibrousFinanceUUID,
  cartridgeUUID
} from './author';
const fileData = [
  {
    file_id: 85174386427,
    file_title: "SHA256 Converter",
    file_desc: "SHA256 Implementation in cairo-lang.",
    file_git_raw_link: [
      {
        title: "sha256.cairo",
        url: "https://raw.githubusercontent.com/cartridge-gg/cairo-sha256/main/src/sha256.cairo",
      },
      {
        title: "packed_sha256.cairo",
        url: "https://raw.githubusercontent.com/cartridge-gg/cairo-sha256/main/src/packed_sha256.cairo",
      },
      {
        title: "README.md",
        url: "https://raw.githubusercontent.com/cartridge-gg/cairo-sha256/main/README.md",
      },
    ],
    is_audited: false,
    cairo_version: 2,
    date: 1667402169,
    author: cartridgeUUID,
    category: ['MATH'],
  },
  {
    file_id: 36794083165,
    file_title: "Classic AMM",
    file_desc: "Fundamentals of AMM, De-Fi, Swap in cairo-lang.",
    file_git_raw_link: [
      {
        title: "l0k_factory.cairo",
        url: "https://raw.githubusercontent.com/10k-swap/10k_swap-contracts/main/contracts/l0k_factory.cairo",
      },
      {
        title: "l0k_pair.cairo",
        url: "https://raw.githubusercontent.com/10k-swap/10k_swap-contracts/main/contracts/l0k_pair.cairo",
      },
      {
        title: "l0k_router.cairo",
        url: "https://raw.githubusercontent.com/10k-swap/10k_swap-contracts/main/contracts/l0k_router.cairo",
      },
      {
        title: "l0k_library.cairo",
        url: "https://raw.githubusercontent.com/10k-swap/10k_swap-contracts/main/contracts/libraries/l0k_library.cairo",
      },
    ],
    is_audited: false,
    cairo_version: 2,
    date: 1659957107,
    author: KSwap10UUID,
    category: ["DEFI", "AMM"],
  },
  {
    file_id: 23258234843,
    file_title: "Launchpad & IDO",
    file_desc:
      "IDO contracts, Merkle tree supported Token Launch in cairo-lang.",
    file_git_raw_link: [
      {
        title: "AstralyIDOContract.cairo",
        url: "https://raw.githubusercontent.com/Astraly-Labs/astraly-contracts/main/contracts/IDO/AstralyIDOContract.cairo",
      },
      {
        title: "AstralyIDOFactory.cairo",
        url: "https://raw.githubusercontent.com/Astraly-Labs/astraly-contracts/main/contracts/IDO/AstralyIDOFactory.cairo",
      },
      {
        title: "ido_library.cairo",
        url: "https://raw.githubusercontent.com/Astraly-Labs/astraly-contracts/main/contracts/IDO/ido_library.cairo",
      },
    ],
    is_audited: false,
    cairo_version: 1,
    date: 1666086362,
    author: astralyUUID,
    category: ["IDO", "DEFI"],
  },
  {
    file_id: 69490791800,
    file_title: "Base64 in Cairo",
    file_desc:
      "A library for base64 + base64url encoding multi character ascii felts in cairo-lang.",
    file_git_raw_link: [
      {
        title: "base64.cairo",
        url: "https://raw.githubusercontent.com/cartridge-gg/cairo-base64/main/src/base64.cairo",
      },
      {
        title: "base64url.cairo",
        url: "https://raw.githubusercontent.com/cartridge-gg/cairo-base64/main/src/base64url.cairo",
      },
      {
        title: "library.cairo",
        url: "https://raw.githubusercontent.com/cartridge-gg/cairo-base64/main/src/library.cairo",
      },
    ],
    is_audited: false,
    cairo_version: 1,
    date: 1663089114,
    author: cartridgeUUID,
    category: ["MATH"],
  },
  {
    file_id: 46193173609,
    file_title: "INO & NFT Launch",
    file_desc: "INO Contracts, NFT Launch in cairo-lang.",
    file_git_raw_link: [
      {
        title: "AstralyINOContract.cairo",
        url: "https://raw.githubusercontent.com/Astraly-Labs/astraly-contracts/main/contracts/IDO/AstralyINOContract.cairo",
      },
    ],
    is_audited: false,
    cairo_version: 0,
    date: 1665754253,
    author: astralyUUID,
    category: ["IDO", "NFT"],
  },
  {
    file_id: 12513992722,
    file_title: "Felt - Uint Converter",
    file_desc: "Felt to Uint256 conversion in cairo-lang.",
    file_git_raw_link: [
      {
        title: "Uint256_felt_conv.cairo",
        url: "https://raw.githubusercontent.com/Astraly-Labs/astraly-contracts/main/contracts/utils/Uint256_felt_conv.cairo",
      },
    ],
    is_audited: false,
    cairo_version: 3,
    date: 1665589296,
    author: astralyUUID,
    category: ["MATH"],
  },
  {
    file_id: 78703476872,
    file_title: "OnChain Football Based NFT",
    file_desc:
      "Non Fungible Football is an onchain game that will take place during the World Cup 2022 ",
    file_git_raw_link: [
      {
        title: "NFFBridge.sol",
        url: "https://raw.githubusercontent.com/cartridge-gg/non-fungible-football/main/contracts/src/NFFBridge.sol",
      },
      {
        title: "components.cairo",
        url: "https://raw.githubusercontent.com/cartridge-gg/non-fungible-football/main/contracts/src/components.cairo",
      },
      {
        title: "configuration.cairo",
        url: "https://raw.githubusercontent.com/cartridge-gg/non-fungible-football/main/contracts/src/configuration.cairo",
      },
      {
        title: "data.cairo",
        url: "https://raw.githubusercontent.com/cartridge-gg/non-fungible-football/main/contracts/src/data.cairo",
      },
      {
        title: "player.cairo",
        url: "https://raw.githubusercontent.com/cartridge-gg/non-fungible-football/main/contracts/src/player.cairo",
      },
      {
        title: "tournament.cairo",
        url: "https://raw.githubusercontent.com/cartridge-gg/non-fungible-football/main/contracts/src/tournament.cairo",
      },
    ],
    is_audited: false,
    cairo_version: 1,
    date: 1668183916,
    author: cartridgeUUID,
    category: ["NFT"],
  },
  {
    file_id: 81435727005,
    file_title: "Access Control with OZ",
    file_desc: "Secure Ownership, Access control for functions in cairo-lang.",
    file_git_raw_link: [
      {
        title: "AstralyAccessControl.cairo",
        url: "https://raw.githubusercontent.com/Astraly-Labs/astraly-contracts/main/contracts/AstralyAccessControl.cairo",
      },
    ],
    is_audited: false,
    cairo_version: 3,
    date: 1665589296,
    author: astralyUUID,
    category: ["ACCESS_CONTROL"],
  },
  {
    file_id: 11785651801,
    file_title: "Array Concat in Cairo",
    file_desc: "Concat Arrays in cairo-lang.",
    file_git_raw_link: [
      {
        title: "array.cairo",
        url: "https://raw.githubusercontent.com/cartridge-gg/contracts/main/src/util/array.cairo",
      },
    ],
    is_audited: false,
    cairo_version: 2,
    date: 1664385528,
    author: cartridgeUUID,
    category: ["ARRAY_MANIPULATIONS"],
  },
  {
    file_id: 94226031517,
    file_title: "Strings in Cairo",
    file_desc: "String &amp; Array Manipulation in cairo-lang.",
    file_git_raw_link: [
      {
        title: "str.cairo",
        url: "https://raw.githubusercontent.com/cartridge-gg/contracts/main/src/util/str.cairo",
      },
    ],
    is_audited: false,
    cairo_version: 0,
    date: 1664385528,
    author: cartridgeUUID,
    category: ["ARRAY_MANIPULATIONS"],
  },
  {
    file_id: 94552291686,
    file_title: "Price Oracle",
    file_desc: "On Chain Price Data",
    file_git_raw_link: [
      {
        title: "cygnus_nebula_oracle.cairo",
        url: "https://raw.githubusercontent.com/CygnusDAO/starknet-price-oracle/main/src/cygnus_oracle/cygnus_nebula_oracle.cairo",
      },
      {
        title: "math_ud58x18.cairo",
        url: "https://raw.githubusercontent.com/CygnusDAO/starknet-price-oracle/main/src/cygnus_oracle/libraries/math_ud58x18.cairo",
      },
    ],
    is_audited: false,
    cairo_version: 2,
    date: 1665509889,
    author: cygnusDAOUUID,
    category: ["DEFI"],
  },
  {
    file_id: 42228496206,
    file_title: "ERC1155 in Cairo",
    file_desc: "ERC1155 Implementation in cairo-lang.",
    file_git_raw_link: [
      {
        title: "library.cairo",
        url: "https://raw.githubusercontent.com/cartridge-gg/contracts/main/src/tokens/erc1155/library.cairo",
      },
    ],
    is_audited: false,
    cairo_version: 1,
    date: 1664385528,
    author: cartridgeUUID,
    category: ["NFT"],
  },
  {
    file_id: 12091044902,
    file_title: "On Chain SVG",
    file_desc: "On Chain SVG Generator in cairo-lang.",
    file_git_raw_link: [
      {
        title: "Avatar.cairo",
        url: "https://raw.githubusercontent.com/cartridge-gg/contracts/main/src/fixtures/Avatar.cairo",
      },
      {
        title: "library.cairo",
        url: "https://raw.githubusercontent.com/cartridge-gg/contracts/main/src/tokens/Avatar/library.cairo",
      },
      {
        title: "progress.cairo",
        url: "https://raw.githubusercontent.com/cartridge-gg/contracts/main/src/tokens/Avatar/progress.cairo",
      },
    ],
    is_audited: false,
    cairo_version: 0,
    date: 1668454085,
    author: cartridgeUUID,
    category: ["NFT"],
  },
  {
    file_id: 31093463535,
    file_title: "Lending Borrow AMM",
    file_desc: "Router Contracts for core lending - borrow in cairo-lang.",
    file_git_raw_link: [
      {
        title: "cygnus_altair_x.cairo",
        url: "https://raw.githubusercontent.com/CygnusDAO/starknet-periphery/main/src/cygnus_periphery/cygnus_altair_x.cairo",
      },
      {
        title: "math_ud58x18.cairo",
        url: "https://raw.githubusercontent.com/CygnusDAO/starknet-periphery/main/src/cygnus_periphery/libraries/math_ud58x18.cairo",
      },
    ],
    is_audited: false,
    cairo_version: 2,
    date: 1664969830,
    author: cygnusDAOUUID,
    category: ["AMM", "LENDING_BORROW"],
  },
  {
    file_id: 81749239333,
    file_title: "Perpetual Protocol",
    file_desc: "StableCoin lending and margin trading in cairo-lang.",
    file_git_raw_link: [
      {
        title: "albireo_orbiter.cairo",
        url: "https://raw.githubusercontent.com/CygnusDAO/starknet-core/main/src/cygnus_core/albireo_orbiter.cairo",
      },
      {
        title: "cygnus_borrow.cairo",
        url: "https://raw.githubusercontent.com/CygnusDAO/starknet-core/main/src/cygnus_core/cygnus_borrow.cairo",
      },
      {
        title: "cygnus_borrow_approve.cairo",
        url: "https://raw.githubusercontent.com/CygnusDAO/starknet-core/main/src/cygnus_core/cygnus_borrow_approve.cairo",
      },
      {
        title: "cygnus_borrow_control.cairo",
        url: "https://raw.githubusercontent.com/CygnusDAO/starknet-core/main/src/cygnus_core/cygnus_borrow_control.cairo",
      },
      {
        title: "cygnus_borrow_tracker.cairo",
        url: "https://raw.githubusercontent.com/CygnusDAO/starknet-core/main/src/cygnus_core/cygnus_borrow_tracker.cairo",
      },
      {
        title: "cygnus_collateral.cairo",
        url: "https://raw.githubusercontent.com/CygnusDAO/starknet-core/main/src/cygnus_core/cygnus_collateral.cairo",
      },
      {
        title: "cygnus_collateral_control.cairo",
        url: "https://raw.githubusercontent.com/CygnusDAO/starknet-core/main/src/cygnus_core/cygnus_collateral_control.cairo",
      },
      {
        title: "cygnus_collateral_model.cairo",
        url: "https://raw.githubusercontent.com/CygnusDAO/starknet-core/main/src/cygnus_core/cygnus_collateral_model.cairo",
      },
      {
        title: "cygnus_terminal.cairo",
        url: "https://raw.githubusercontent.com/CygnusDAO/starknet-core/main/src/cygnus_core/cygnus_terminal.cairo",
      },
      {
        title: "deneb_orbiter.cairo",
        url: "https://raw.githubusercontent.com/CygnusDAO/starknet-core/main/src/cygnus_core/deneb_orbiter.cairo",
      },
      {
        title: "erc20.cairo",
        url: "https://raw.githubusercontent.com/CygnusDAO/starknet-core/main/src/cygnus_core/erc20.cairo",
      },
      {
        title: "giza_power_plant.cairo",
        url: "https://raw.githubusercontent.com/CygnusDAO/starknet-core/main/src/cygnus_core/giza_power_plant.cairo",
      },
    ],
    is_audited: false,
    cairo_version: 2,
    date: 1668870720,
    author: cygnusDAOUUID,
    category: ["DEFI", "AMM"],
  },
  {
    file_id: 60368168711,
    file_title: "OnChain DAO",
    file_desc: "OnChain DAO - Governance",
    file_git_raw_link: [
      {
        title: "DolvenGovernance.cairo",
        url: "https://raw.githubusercontent.com/dolven-labs-catalyst/Dolven-DAO/main/DolvenGovernance.cairo",
      },
      {
        title: "DolvenGovernorTimelock.cairo",
        url: "https://raw.githubusercontent.com/dolven-labs-catalyst/Dolven-DAO/main/DolvenGovernorTimelock.cairo",
      },
      {
        title: "DolvenProposalValidator.cairo",
        url: "https://raw.githubusercontent.com/dolven-labs-catalyst/Dolven-DAO/main/DolvenProposalValidator.cairo",
      },
      {
        title: "GovernanceControlLayer.cairo",
        url: "https://raw.githubusercontent.com/dolven-labs-catalyst/Dolven-DAO/main/GovernanceControlLayer.cairo",
      },
      {
        title: "DolvenApprover.cairo",
        url: "https://raw.githubusercontent.com/dolven-labs-catalyst/Dolven-DAO/main/Libraries/DolvenApprover.cairo",
      },
      {
        title: "DolvenRole.cairo",
        url: "https://raw.githubusercontent.com/dolven-labs-catalyst/Dolven-DAO/main/Libraries/DolvenRole.cairo",
      },
    ],
    is_audited: false,
    cairo_version: 0,
    date: 1669000305,
    author: dolvenUUID,
    category: ["DAO"],
  },
  {
    file_id: 30958182620,
    file_title: "WebAuthn Credential Auth",
    file_desc:
      "A library for WebAuthn credential authentication in cairo-lang.",
    file_git_raw_link: [
      {
        title: "webauthn.cairo",
        url: "https://raw.githubusercontent.com/cartridge-gg/cairo-webauthn/main/src/webauthn.cairo",
      },
    ],
    is_audited: false,
    cairo_version: 0,
    date: 1665411315,
    author: cartridgeUUID,
    category: ["ON_CHAIN_VERIFICATION"],
  },
  {
    file_id: 93778452667,
    file_title: "Multi-Sig Protection",
    file_desc: "Secure contract ownership with multi-sig in cairo-lang.",
    file_git_raw_link: [
      {
        title: "DolvenApprover.cairo",
        url: "https://raw.githubusercontent.com/dolven-labs-catalyst/Dolven-DAO/main/Libraries/DolvenApprover.cairo",
      },
      {
        title: "DolvenRole.cairo",
        url: "https://raw.githubusercontent.com/dolven-labs-catalyst/Dolven-DAO/main/Libraries/DolvenRole.cairo",
      },
    ],
    is_audited: false,
    cairo_version: 2,
    date: 1667668424,
    author: dolvenUUID,
    category: ["MULTI_SIG"],
  },
  {
    file_id: 17940567811,
    file_title: "Merkle Tree based Token vester",
    file_desc: "Merkle tree supported token vester in cairo-lang.",
    file_git_raw_link: [
      {
        title: "DolvenVesting.cairo",
        url: "https://raw.githubusercontent.com/dolven-labs-catalyst/Dolven-Vestings/main/contracts/DolvenVesting.cairo",
      },
    ],
    is_audited: false,
    cairo_version: 3,
    date: 1661711733,
    author: dolvenUUID,
    category: ["DEFI", "ON_CHAIN_VERIFICATION", "VESTING"],
  },
  {
    file_id: 59781631124,
    file_title: "Token Vester",
    file_desc: "Voting Power based token vester & distributer in cairo-lang.",
    file_git_raw_link: [
      {
        title: "Dolven-Vesting-v2.cairo",
        url: "https://raw.githubusercontent.com/dolven-labs-catalyst/Dolven-Vestings/main/contracts/Dolven-Vesting-v2.cairo",
      },
    ],
    is_audited: false,
    cairo_version: 0,
    date: 1668999956,
    author: dolvenUUID,
    category: ["VESTING", "DEFI", "DAO"],
  },
  {
    file_id: 79616707009,
    file_title: "Array Manipulations & Algo",
    file_desc: "Solutions of Cairo kings arena",
    file_git_raw_link: [
      {
        title: "ques-1.cairo",
        url: "https://raw.githubusercontent.com/dolven-labs-catalyst/cairo-kings-arena-solutions/main/ques-1.cairo",
      },
      {
        title: "ques-10.cairo",
        url: "https://raw.githubusercontent.com/dolven-labs-catalyst/cairo-kings-arena-solutions/main/ques-10.cairo",
      },
      {
        title: "ques-2.cairo",
        url: "https://raw.githubusercontent.com/dolven-labs-catalyst/cairo-kings-arena-solutions/main/ques-2.cairo",
      },
      {
        title: "ques-3.cairo",
        url: "https://raw.githubusercontent.com/dolven-labs-catalyst/cairo-kings-arena-solutions/main/ques-3.cairo",
      },
      {
        title: "ques-4.cairo",
        url: "https://raw.githubusercontent.com/dolven-labs-catalyst/cairo-kings-arena-solutions/main/ques-4.cairo",
      },
      {
        title: "ques-5.cairo",
        url: "https://raw.githubusercontent.com/dolven-labs-catalyst/cairo-kings-arena-solutions/main/ques-5.cairo",
      },
      {
        title: "ques-6.cairo",
        url: "https://raw.githubusercontent.com/dolven-labs-catalyst/cairo-kings-arena-solutions/main/ques-6.cairo",
      },
      {
        title: "ques-7.cairo",
        url: "https://raw.githubusercontent.com/dolven-labs-catalyst/cairo-kings-arena-solutions/main/ques-7.cairo",
      },
      {
        title: "ques-8.cairo",
        url: "https://raw.githubusercontent.com/dolven-labs-catalyst/cairo-kings-arena-solutions/main/ques-8.cairo",
      },
      {
        title: "ques-9.cairo",
        url: "https://raw.githubusercontent.com/dolven-labs-catalyst/cairo-kings-arena-solutions/main/ques-9.cairo",
      },
    ],
    is_audited: false,
    cairo_version: 1,
    date: 1665176477,
    author: dolvenUUID,
    category: ["ARRAY_MANIPULATIONS", "MATH"],
  },
  {
    file_id: 69496705418,
    file_title: "Merkle Tree Implementation",
    file_desc: "Merkle Tree verifier in cairo-lang.",
    file_git_raw_link: [
      {
        title: "DolvenMerkle.cairo",
        url: "https://raw.githubusercontent.com/dolven-labs-catalyst/Dolven-Vestings/main/contracts/Libraries/DolvenMerkle.cairo",
      },
      {
        title: "DolvenMerkleVerifier.cairo",
        url: "https://raw.githubusercontent.com/dolven-labs-catalyst/Dolven-Vestings/main/contracts/Libraries/DolvenMerkleVerifier.cairo",
      },
    ],
    is_audited: false,
    cairo_version: 3,
    date: 1659293252,
    author: dolvenUUID,
    category: ["ON_CHAIN_VERIFICATION"],
  },
  {
    file_id: 8405084894,
    file_title: "Faucet",
    file_desc: "Faucet for DLV tokens",
    file_git_raw_link: [
      {
        title: "DolvenFaucet.cairo",
        url: "https://raw.githubusercontent.com/dolven-labs-catalyst/dolven-faucet/main/DolvenFaucet.cairo",
      },
    ],
    is_audited: false,
    cairo_version: 2,
    date: 1659302237,
    author: dolvenUUID,
    category: ["DEFI"],
  },
  {
    file_id: 66684396153,
    file_title: "Aggregator AMM",
    file_desc: "Aggregator and AMM Contracts in cairo-lang.",
    file_git_raw_link: [
      {
        title: "router.cairo",
        url: "https://raw.githubusercontent.com/Fibrous-Finance/fibrous-aggregator-contracts/main/contracts/router.cairo",
      },
      {
        title: "swap_handler.cairo",
        url: "https://raw.githubusercontent.com/Fibrous-Finance/fibrous-aggregator-contracts/main/contracts/swap_handler.cairo",
      },
      {
        title: "erc20_self_mintable.cairo",
        url: "https://raw.githubusercontent.com/Fibrous-Finance/fibrous-aggregator-contracts/main/contracts/erc20_self_mintable.cairo",
      },
      {
        title: "amm_1.cairo",
        url: "https://raw.githubusercontent.com/Fibrous-Finance/fibrous-aggregator-contracts/main/contracts/amm/amm_1.cairo",
      },
      {
        title: "amm_1_oracle.cairo",
        url: "https://raw.githubusercontent.com/Fibrous-Finance/fibrous-aggregator-contracts/main/contracts/amm/amm_1_oracle.cairo",
      },
      {
        title: "amm_1_swapper.cairo",
        url: "https://raw.githubusercontent.com/Fibrous-Finance/fibrous-aggregator-contracts/main/contracts/amm/amm_1_swapper.cairo",
      },
    ],
    is_audited: false,
    cairo_version: 0,
    date: 1662810421,
    author: fibrousFinanceUUID,
    category: ["AMM", "DEFI"],
  },
  {
    file_id: 84569449534,
    file_title: "Proxy AMM",
    file_desc: "Proxy supported AMM contracts in cairo-lang.",
    file_git_raw_link: [
      {
        title: "PairProxy.cairo",
        url: "https://raw.githubusercontent.com/jediswaplabs/JediSwap/main/contracts/PairProxy.cairo",
      },
      {
        title: "Factory.cairo",
        url: "https://raw.githubusercontent.com/jediswaplabs/JediSwap/main/contracts/Factory.cairo",
      },
      {
        title: "Pair.cairo",
        url: "https://raw.githubusercontent.com/jediswaplabs/JediSwap/main/contracts/Pair.cairo",
      },
      {
        title: "Router.cairo",
        url: "https://raw.githubusercontent.com/jediswaplabs/JediSwap/main/contracts/Router.cairo",
      },
      {
        title: "RouterProxy.cairo",
        url: "https://raw.githubusercontent.com/jediswaplabs/JediSwap/main/contracts/RouterProxy.cairo",
      },
    ],
    is_audited: false,
    cairo_version: 1,
    date: 1669206068,
    author: jediSwapUUID,
    category: ["AMM", "DEFI", "PROXY_CONTRACTS"],
  },
  {
    file_id: 80705905623,
    file_title: "OnChain Game",
    file_desc: "Lost in Cairo's game protocol, written in Cairo",
    file_git_raw_link: [
      {
        title: "game.cairo",
        url: "https://raw.githubusercontent.com/lostincairo/protocol/main/src/contracts/game/game.cairo",
      },
      {
        title: "lobby.cairo",
        url: "https://raw.githubusercontent.com/lostincairo/protocol/main/src/contracts/lobby/lobby.cairo",
      },
      {
        title: "lobby_state.cairo",
        url: "https://raw.githubusercontent.com/lostincairo/protocol/main/src/contracts/lobby/lobby_state.cairo",
      },
      { title: "", url: "" },
    ],
    is_audited: false,
    cairo_version: 3,
    date: 1665509404,
    author: lostInCairoUUID,
    category: ["NFT"],
  },
  {
    file_id: 94621500162,
    file_title: "Ticket based Staking",
    file_desc: "Ticket Based Staking contracts in cairo-lang.",
    file_git_raw_link: [
      {
        title: "strategy_vault.cairo",
        url: "https://raw.githubusercontent.com/dolven-labs-catalyst/Dolven-Vaults/main/Vault-2/strategy_vault.cairo",
      },
      {
        title: "ticket_manager.cairo",
        url: "https://raw.githubusercontent.com/dolven-labs-catalyst/Dolven-Vaults/main/Vault-2/ticket_manager.cairo",
      },
      {
        title: "unstaker_vault.cairo",
        url: "https://raw.githubusercontent.com/dolven-labs-catalyst/Dolven-Vaults/main/Vault-2/unstaker_vault.cairo",
      },
    ],
    is_audited: false,
    cairo_version: 3,
    date: 1669000183,
    author: dolvenUUID,
    category: ["STAKING", "DEFI"],
  },
  {
    file_id: 82230313998,
    file_title: "Flash Loan Borrower",
    file_desc: "Flash loan borrower in cairo-lang.",
    file_git_raw_link: [
      {
        title: "FlashLoanBorrower.cairo",
        url: "https://raw.githubusercontent.com/Darlington02/flashloan/master/src/contracts/FlashLoanBorrower.cairo",
      },
    ],
    is_audited: false,
    cairo_version: 0,
    date: 1663287915,
    author: darlington02UUID,
    category: ["DEFI"],
  },
  {
    file_id: 37757377528,
    file_title: "Aggregation Functions",
    file_desc:
      "Provides a felt-based implementation of arithmetic functions in cairo-lang.",
    file_git_raw_link: [
      {
        title: "wad_ray.cairo",
        url: "https://raw.githubusercontent.com/lindy-labs/cairo-wadray/main/contracts/wad_ray.cairo",
      },
      {
        title: "aliases.cairo",
        url: "https://raw.githubusercontent.com/lindy-labs/cairo-wadray/main/contracts/aliases.cairo",
      },
    ],
    is_audited: false,
    cairo_version: 1,
    date: 1670333736,
    author: lindyLabsUUID,
    category: ["MATH", "ARRAY_MANIPULATIONS"],
  },
  {
    file_id: 519832433,
    file_title: "SHA256 Implementation",
    file_desc: "SHA256 Implementation in cairo-lang.",
    file_git_raw_link: [
      {
        title: "sha256.cairo",
        url: "https://raw.githubusercontent.com/briqNFT/briq-protocol/main/contracts/vendor/cairopen/hash/sha256.cairo",
      },
    ],
    is_audited: false,
    cairo_version: 0,
    date: 1664295966,
    author: briqUUID,
    category: ["MATH"],
  },
  {
    file_id: 20600310236,
    file_title: "Access Control, Verification",
    file_desc: "Access Control implentation in cairo-lang.",
    file_git_raw_link: [
      {
        title: "accesscontrol_external.cairo",
        url: "https://raw.githubusercontent.com/lindy-labs/cairo-accesscontrol/main/contracts/accesscontrol_external.cairo",
      },
      {
        title: "accesscontrol_library.cairo",
        url: "https://raw.githubusercontent.com/lindy-labs/cairo-accesscontrol/main/contracts/accesscontrol_library.cairo",
      },
      {
        title: "aliases.cairo",
        url: "https://raw.githubusercontent.com/lindy-labs/cairo-accesscontrol/main/contracts/aliases.cairo",
      },
    ],
    is_audited: false,
    cairo_version: 3,
    date: 1664852024,
    author: lindyLabsUUID,
    category: ["ACCESS_CONTROL"],
  },
  {
    file_id: 73712663484,
    file_title: "Strings in Cairo",
    file_desc: "String implementation in cairo-lang.",
    file_git_raw_link: [
      {
        title: "string.cairo",
        url: "https://raw.githubusercontent.com/briqNFT/briq-protocol/main/contracts/vendor/cairopen/string/string.cairo",
      },
      {
        title: "utils.cairo",
        url: "https://raw.githubusercontent.com/briqNFT/briq-protocol/main/contracts/vendor/cairopen/string/utils.cairo",
      },
      {
        title: "conversion.cairo",
        url: "https://raw.githubusercontent.com/briqNFT/briq-protocol/main/contracts/vendor/cairopen/string/libs/conversion.cairo",
      },
      {
        title: "manipulation.cairo",
        url: "https://raw.githubusercontent.com/briqNFT/briq-protocol/main/contracts/vendor/cairopen/string/libs/manipulation.cairo",
      },
      {
        title: "storage.cairo",
        url: "https://raw.githubusercontent.com/briqNFT/briq-protocol/main/contracts/vendor/cairopen/string/libs/storage.cairo",
      },
      {
        title: "ASCII.cairo",
        url: "https://raw.githubusercontent.com/briqNFT/briq-protocol/main/contracts/vendor/cairopen/string/ASCII.cairo",
      },
      {
        title: "constants.cairo",
        url: "https://raw.githubusercontent.com/briqNFT/briq-protocol/main/contracts/vendor/cairopen/string/constants.cairo",
      },
      {
        title: "str.cairo",
        url: "https://raw.githubusercontent.com/briqNFT/briq-protocol/main/contracts/vendor/caistring/str.cairo",
      },
    ],
    is_audited: false,
    cairo_version: 0,
    date: 1664295966,
    author: briqUUID,
    category: ["ARRAY_MANIPULATIONS"],
  },
  {
    file_id: 9046169289,
    file_title: "Important Array Functions",
    file_desc: "Implementing important array functions in cairo-lang.",
    file_git_raw_link: [
      {
        title: "generic.cairo",
        url: "https://raw.githubusercontent.com/onlydustxyz/cairo-streams/main/src/onlydust/stream/generic.cairo",
      },
      {
        title: "default_implementation.cairo",
        url: "https://raw.githubusercontent.com/onlydustxyz/cairo-streams/main/src/onlydust/stream/default_implementation.cairo",
      },
      {
        title: "common.cairo",
        url: "https://raw.githubusercontent.com/onlydustxyz/cairo-streams/main/src/onlydust/stream/internal/common.cairo",
      },
      {
        title: "filter.cairo",
        url: "https://raw.githubusercontent.com/onlydustxyz/cairo-streams/main/src/onlydust/stream/internal/filter.cairo",
      },
      {
        title: "foreach.cairo",
        url: "https://raw.githubusercontent.com/onlydustxyz/cairo-streams/main/src/onlydust/stream/internal/foreach.cairo",
      },
      {
        title: "map.cairo",
        url: "https://raw.githubusercontent.com/onlydustxyz/cairo-streams/main/src/onlydust/stream/internal/map.cairo",
      },
      {
        title: "reduce.cairo",
        url: "https://raw.githubusercontent.com/onlydustxyz/cairo-streams/main/src/onlydust/stream/internal/reduce.cairo",
      },
    ],
    is_audited: false,
    cairo_version: 0,
    date: 1663167629,
    author: onlyDustUUID,
    category: ["ARRAY_MANIPULATIONS"],
  },
  {
    file_id: 13535010753,
    file_title: "ERC20 Token",
    file_desc: "Standart ERC20 in cairo-lang.",
    file_git_raw_link: [
      {
        title: "ERC20.cairo",
        url: "https://raw.githubusercontent.com/Starkdefi/StarkDefi-contracts/main/contracts/token/ERC20.cairo",
      },
    ],
    is_audited: false,
    cairo_version: 2,
    date: 1660760567,
    author: starkDefiUUID,
    category: ["TOKEN_STANDARTS"],
  },
  {
    file_id: 32496016959,
    file_title: "Array Concat by Briq",
    file_desc: "Concat Array in cairo-lang.",
    file_git_raw_link: [
      {
        title: "array.cairo",
        url: "https://raw.githubusercontent.com/briqNFT/briq-protocol/main/contracts/vendor/cairopen/math/array.cairo",
      },
      {
        title: "array.cairo",
        url: "https://raw.githubusercontent.com/briqNFT/briq-protocol/main/contracts/vendor/caistring/array.cairo",
      },
    ],
    is_audited: false,
    cairo_version: 2,
    date: 1664295966,
    author: briqUUID,
    category: ["ARRAY_MANIPULATIONS"],
  },
  {
    file_id: 11269130226,
    file_title: "DEX & Aggregator AMM",
    file_desc: "DEX & Aggregator in cairo-lang.",
    file_git_raw_link: [
      {
        title: "StarkDRouterAggregator.cairo",
        url: "https://raw.githubusercontent.com/Starkdefi/StarkDefi-contracts/main/contracts/dex/StarkDRouterAggregator.cairo",
      },
      {
        title: "StarkDRouter.cairo",
        url: "https://raw.githubusercontent.com/Starkdefi/StarkDefi-contracts/main/contracts/dex/StarkDRouter.cairo",
      },
      {
        title: "StarkDPathFinder.cairo",
        url: "https://raw.githubusercontent.com/Starkdefi/StarkDefi-contracts/main/contracts/dex/StarkDPathFinder.cairo",
      },
      {
        title: "StarkDPair.cairo",
        url: "https://raw.githubusercontent.com/Starkdefi/StarkDefi-contracts/main/contracts/dex/StarkDPair.cairo",
      },
      {
        title: "StarkDFactory.cairo",
        url: "https://raw.githubusercontent.com/Starkdefi/StarkDefi-contracts/main/contracts/dex/StarkDFactory.cairo",
      },
      {
        title: "StarkDefiLib.cairo",
        url: "https://raw.githubusercontent.com/Starkdefi/StarkDefi-contracts/main/contracts/dex/libraries/StarkDefiLib.cairo",
      },
      {
        title: "array.cairo",
        url: "https://raw.githubusercontent.com/Starkdefi/StarkDefi-contracts/main/contracts/dex/libraries/array.cairo",
      },
      {
        title: "utils.cairo",
        url: "https://raw.githubusercontent.com/Starkdefi/StarkDefi-contracts/main/contracts/dex/libraries/utils.cairo",
      },
    ],
    is_audited: false,
    cairo_version: 0,
    date: 1661043881,
    author: starkDefiUUID,
    category: ["DEFI"],
  },
  {
    file_id: 34336861524,
    file_title: "Array Functions",
    file_desc:
      "Array manipulations, includes array_shift, get_at_index and update in cairo-lang.",
    file_git_raw_link: [
      {
        title: "array.cairo",
        url: "https://raw.githubusercontent.com/Starkdefi/StarkDefi-contracts/main/contracts/dex/libraries/array.cairo",
      },
    ],
    is_audited: false,
    cairo_version: 1,
    date: 1661043881,
    author: starkDefiUUID,
    category: ["ARRAY_MANIPULATIONS"],
  },
];


export default async function create() {
  for (let index = 0; index < fileData.length; index++) {
    const item = fileData[index];
    const sub_links = item.file_git_raw_link;
    await db.file.create({
      data: {
        uuid: createUUID(),
        cairo_version: item.cairo_version,
        date: item.date.toString(),
        description: item.file_desc,
        is_audited: item.is_audited,
        title: item.file_title,
        authorUuid: item.author,
        categories: item.category as Category[],
        sub_links: {
          createMany: {
            data: sub_links.map((item, idx) => ({
              uuid: createUUID(),
              title: item.title,
              url: item.url,
            }))
          }
        }
      }
    })
  }
}