import { IBCAsset } from "../stores/assets";

export const IS_FRONTIER = process.env.NEXT_PUBLIC_IS_FRONTIER === "true";
export const UNSTABLE_MSG = "Transfers are disabled due to instability";

/**
 * Determine the channel info per the chain.
 * Guide users to use the same channel for convenience.
 */
export const IBCAssetInfos: (IBCAsset & {
  /** URL if the asset requires a custom deposit external link. Must include `https://...`. */
  depositUrlOverride?: string;

  /** URL if the asset requires a custom withdrawal external link. Must include `https://...`. */
  withdrawUrlOverride?: string;

  /** Alternative chain name to display as the source chain */
  sourceChainNameOverride?: string;

  /** Related to showing assets on main (canonical) vs frontier (permissionless). Verified means that governance has
   *  voted on its incentivization or general approval (amongst other possibilities).
   */
  isVerified?: boolean;
})[] = [
  {
    counterpartyChainId: "axelar-dojo-1",
    sourceChannelId: "channel-208",
    destChannelId: "channel-3",
    coinMinimalDenom: "uusdc",
    depositUrlOverride:
      "https://satellite.money/?source=ethereum&destination=osmosis&asset_denom=uusdc",
    withdrawUrlOverride:
      "https://satellite.money/?source=osmosis&destination=ethereum&asset_denom=uusdc",
    sourceChainNameOverride: "Ethereum",
    isUnstable: true,
    isVerified: true,
  },
  {
    counterpartyChainId: "axelar-dojo-1",
    sourceChannelId: "channel-208",
    destChannelId: "channel-3",
    coinMinimalDenom: "weth-wei",
    depositUrlOverride:
      "https://satellite.money/?source=ethereum&destination=osmosis&asset_denom=weth-wei",
    withdrawUrlOverride:
      "https://satellite.money/?source=osmosis&destination=ethereum&asset_denom=weth-wei",
    sourceChainNameOverride: "Ethereum",
    isUnstable: true,
    isVerified: true,
  },
  {
    counterpartyChainId: "axelar-dojo-1",
    sourceChannelId: "channel-208",
    destChannelId: "channel-3",
    coinMinimalDenom: "wbtc-satoshi",
    depositUrlOverride:
      "https://satellite.money/?source=ethereum&destination=osmosis&asset_denom=wbtc-satoshi",
    withdrawUrlOverride:
      "https://satellite.money/?source=osmosis&destination=ethereum&asset_denom=wbtc-satoshi",
    sourceChainNameOverride: "Ethereum",
    isUnstable: true,
    isVerified: true,
  },
  {
    counterpartyChainId: "axelar-dojo-1",
    sourceChannelId: "channel-208",
    destChannelId: "channel-3",
    coinMinimalDenom: "dai-wei",
    depositUrlOverride:
      "https://satellite.money/?source=ethereum&destination=osmosis&asset_denom=dai-wei",
    withdrawUrlOverride:
      "https://satellite.money/?source=osmosis&destination=ethereum&asset_denom=dai-wei",
    sourceChainNameOverride: "Ethereum",
    isUnstable: true,
    isVerified: true,
  },
  {
    counterpartyChainId: "cosmoshub-4",
    sourceChannelId: "channel-0",
    destChannelId: "channel-141",
    coinMinimalDenom: "uatom",
    isUnstable: true,
    isVerified: true,
  },
  {
    counterpartyChainId: "crypto-org-chain-mainnet-1",
    sourceChannelId: "channel-5",
    destChannelId: "channel-10",
    coinMinimalDenom: "basecro",
    isUnstable: true,
    isVerified: true,
  },
  {
    counterpartyChainId: "juno-1",
    sourceChannelId: "channel-42",
    destChannelId: "channel-0",
    coinMinimalDenom: "ujuno",
    isUnstable: true,
    isVerified: true,
  },
  {
    counterpartyChainId: "evmos_9001-2",
    sourceChannelId: "channel-204",
    destChannelId: "channel-0",
    coinMinimalDenom: "aevmos",
    depositUrlOverride: "https://app.evmos.org/transfer",
    withdrawUrlOverride: "https://app.evmos.org/transfer",
    isUnstable: true,
    isVerified: true,
  },
  {
    counterpartyChainId: "kava_2222-10",
    sourceChannelId: "channel-143",
    destChannelId: "channel-1",
    coinMinimalDenom: "ukava",
    isUnstable: true,
    isVerified: true,
  },
  {
    counterpartyChainId: "secret-4",
    sourceChannelId: "channel-88",
    destChannelId: "channel-1",
    coinMinimalDenom: "uscrt",
    isUnstable: true,
    isVerified: true,
  },
  {
    counterpartyChainId: "columbus-5",
    sourceChannelId: "channel-72",
    destChannelId: "channel-1",
    coinMinimalDenom: "uluna",
    isUnstable: true,
    isVerified: true,
  },
  {
    counterpartyChainId: "columbus-5",
    sourceChannelId: "channel-72",
    destChannelId: "channel-1",
    coinMinimalDenom: "uusd",
    isUnstable: true,
    isVerified: true,
  },
  {
    counterpartyChainId: "stargaze-1",
    sourceChannelId: "channel-75",
    destChannelId: "channel-0",
    coinMinimalDenom: "ustars",
    isUnstable: true,
    isVerified: true,
  },
  {
    counterpartyChainId: "chihuahua-1",
    sourceChannelId: "channel-113",
    destChannelId: "channel-7",
    coinMinimalDenom: "uhuahua",
    isUnstable: true,
    isVerified: true,
  },
  {
    counterpartyChainId: "core-1",
    sourceChannelId: "channel-4",
    destChannelId: "channel-6",
    coinMinimalDenom: "uxprt",
    isUnstable: true,
    isVerified: true,
  },
  {
    counterpartyChainId: "core-1",
    sourceChannelId: "channel-4",
    destChannelId: "channel-6",
    coinMinimalDenom:
      "ibc/A6E3AF63B3C906416A9AF7A556C59EA4BD50E617EFFE6299B99700CCB780E444",
    ibcTransferPathDenom:
      "transfer/channel-38/gravity0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006",
    isUnstable: true,
    isVerified: true,
  },
  {
    counterpartyChainId: "akashnet-2",
    sourceChannelId: "channel-1",
    destChannelId: "channel-9",
    coinMinimalDenom: "uakt",
    isUnstable: true,
    isVerified: true,
  },
  {
    counterpartyChainId: "regen-1",
    sourceChannelId: "channel-8",
    destChannelId: "channel-1",
    coinMinimalDenom: "uregen",
    isUnstable: true,
    isVerified: true,
  },
  {
    counterpartyChainId: "sentinelhub-2",
    sourceChannelId: "channel-2",
    destChannelId: "channel-0",
    coinMinimalDenom: "udvpn",
    isUnstable: true,
    isVerified: true,
  },
  {
    counterpartyChainId: "irishub-1",
    sourceChannelId: "channel-6",
    destChannelId: "channel-3",
    coinMinimalDenom: "uiris",
    isUnstable: true,
    isVerified: true,
  },
  {
    counterpartyChainId: "iov-mainnet-ibc",
    sourceChannelId: "channel-15",
    destChannelId: "channel-2",
    coinMinimalDenom: "uiov",
    isUnstable: true,
    isVerified: true,
  },
  {
    counterpartyChainId: "emoney-3",
    sourceChannelId: "channel-37",
    destChannelId: "channel-0",
    coinMinimalDenom: "ungm",
    isUnstable: true,
    isVerified: true,
  },
  {
    counterpartyChainId: "emoney-3",
    sourceChannelId: "channel-37",
    destChannelId: "channel-0",
    coinMinimalDenom: "eeur",
    isUnstable: true,
    isVerified: true,
  },
  {
    counterpartyChainId: "likecoin-mainnet-2",
    sourceChannelId: "channel-53",
    destChannelId: "channel-3",
    coinMinimalDenom: "nanolike",
    isUnstable: true,
    isVerified: true,
  },
  {
    counterpartyChainId: "impacthub-3",
    sourceChannelId: "channel-38",
    destChannelId: "channel-4",
    coinMinimalDenom: "uixo",
    isUnstable: true,
    isVerified: true,
  },
  {
    counterpartyChainId: "bitcanna-1",
    sourceChannelId: "channel-51",
    destChannelId: "channel-1",
    coinMinimalDenom: "ubcna",
    isUnstable: true,
    isVerified: true,
  },
  {
    counterpartyChainId: "bitsong-2b",
    sourceChannelId: "channel-73",
    destChannelId: "channel-0",
    coinMinimalDenom: "ubtsg",
    isUnstable: true,
    isVerified: true,
  },
  {
    counterpartyChainId: "kichain-2",
    sourceChannelId: "channel-77",
    destChannelId: "channel-0",
    coinMinimalDenom: "uxki",
    isUnstable: true,
    isVerified: true,
  },
  {
    counterpartyChainId: "panacea-3",
    sourceChannelId: "channel-82",
    destChannelId: "channel-1",
    coinMinimalDenom: "umed",
    isUnstable: true,
    isVerified: true,
  },
  {
    counterpartyChainId: "bostrom",
    sourceChannelId: "channel-95",
    destChannelId: "channel-2",
    coinMinimalDenom: "boot",
    isUnstable: true,
    isVerified: true,
  },
  {
    counterpartyChainId: "comdex-1",
    sourceChannelId: "channel-87",
    destChannelId: "channel-1",
    coinMinimalDenom: "ucmdx",
    isUnstable: true,
    isVerified: true,
  },
  {
    counterpartyChainId: "cheqd-mainnet-1",
    sourceChannelId: "channel-108",
    destChannelId: "channel-0",
    coinMinimalDenom: "ncheq",
    isUnstable: true,
    isVerified: true,
  },
  {
    counterpartyChainId: "lum-network-1",
    sourceChannelId: "channel-115",
    destChannelId: "channel-3",
    coinMinimalDenom: "ulum",
    isUnstable: true,
    isVerified: true,
  },
  {
    counterpartyChainId: "vidulum-1",
    sourceChannelId: "channel-124",
    destChannelId: "channel-0",
    coinMinimalDenom: "uvdl",
    isUnstable: true,
    isVerified: true,
  },
  {
    counterpartyChainId: "desmos-mainnet",
    sourceChannelId: "channel-135",
    destChannelId: "channel-2",
    coinMinimalDenom: "udsm",
    isUnstable: true,
    isVerified: true,
  },
  {
    counterpartyChainId: "dig-1",
    sourceChannelId: "channel-128",
    destChannelId: "channel-1",
    coinMinimalDenom: "udig",
    isUnstable: true,
    isVerified: true,
  },
  {
    counterpartyChainId: "sommelier-3",
    sourceChannelId: "channel-165",
    destChannelId: "channel-0",
    coinMinimalDenom: "usomm",
    isUnstable: true,
    isVerified: true,
  },
  {
    counterpartyChainId: "sifchain-1",
    sourceChannelId: "channel-47",
    destChannelId: "channel-17",
    coinMinimalDenom: "rowan",
    isUnstable: true,
    isVerified: true,
  },
  {
    counterpartyChainId: "laozi-mainnet",
    sourceChannelId: "channel-148",
    destChannelId: "channel-83",
    coinMinimalDenom: "uband",
    isUnstable: true,
    isVerified: true,
  },
  {
    counterpartyChainId: "darchub",
    sourceChannelId: "channel-171",
    destChannelId: "channel-0",
    coinMinimalDenom: "udarc",
    isUnstable: true,
    isVerified: true,
  },
  {
    counterpartyChainId: "umee-1",
    sourceChannelId: "channel-184",
    destChannelId: "channel-0",
    coinMinimalDenom: "uumee",
    isUnstable: true,
    isVerified: true,
  },
  {
    counterpartyChainId: "gravity-bridge-3",
    sourceChannelId: "channel-144",
    destChannelId: "channel-10",
    coinMinimalDenom: "ugraviton",
    isUnstable: true,
    isVerified: true,
  },
  {
    counterpartyChainId: "mainnet-3",
    sourceChannelId: "channel-181",
    destChannelId: "channel-1",
    coinMinimalDenom: "udec",
    isUnstable: true,
    isVerified: true,
  },
  {
    counterpartyChainId: "juno-1",
    sourceChannelId: "channel-169",
    destChannelId: "channel-47",
    coinMinimalDenom:
      "cw20:juno1g2g7ucurum66d42g8k5twk34yegdq8c82858gz0tq2fc75zy7khssgnhjl",
    ics20ContractAddress:
      "juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn",
    isUnstable: true,
    isVerified: true,
  },
  {
    counterpartyChainId: "carbon-1",
    sourceChannelId: "channel-188",
    destChannelId: "channel-0",
    coinMinimalDenom: "swth",
    isUnstable: true,
    isVerified: true,
  },
  {
    counterpartyChainId: "cerberus-chain-1",
    sourceChannelId: "channel-212",
    destChannelId: "channel-1",
    coinMinimalDenom: "ucrbrus",
    isUnstable: true,
    isVerified: true,
  },
  {
    counterpartyChainId: "fetchhub-4",
    sourceChannelId: "channel-229",
    destChannelId: "channel-10",
    coinMinimalDenom: "afet",
    isUnstable: true,
    isVerified: true,
  },
  {
    counterpartyChainId: "mantle-1",
    sourceChannelId: "channel-232",
    destChannelId: "channel-0",
    coinMinimalDenom: "umntl",
    isUnstable: true,
    isVerified: true,
  },
  {
    counterpartyChainId: "juno-1",
    sourceChannelId: "channel-169",
    destChannelId: "channel-47",
    coinMinimalDenom:
      "cw20:juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr",
    ics20ContractAddress:
      "juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn",
    isUnstable: true,
    isVerified: true,
  },
  {
    counterpartyChainId: "columbus-5",
    sourceChannelId: "channel-72",
    destChannelId: "channel-1",
    coinMinimalDenom: "ukrw",
    isUnstable: true,
  },
  {
    counterpartyChainId: "microtick-1",
    sourceChannelId: "channel-39",
    destChannelId: "channel-16",
    coinMinimalDenom: "utick",
    isUnstable: true,
  },
  {
    counterpartyChainId: "shentu-2.2",
    sourceChannelId: "channel-146",
    destChannelId: "channel-8",
    coinMinimalDenom: "uctk",
    isUnstable: true,
  },
  {
    counterpartyChainId: "juno-1",
    sourceChannelId: "channel-169",
    destChannelId: "channel-47",
    coinMinimalDenom:
      "cw20:juno1re3x67ppxap48ygndmrc7har2cnc7tcxtm9nplcas4v0gc3wnmvs3s807z",
    ics20ContractAddress:
      "juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn",
    isUnstable: true,
  },
  {
    counterpartyChainId: "juno-1",
    sourceChannelId: "channel-169",
    destChannelId: "channel-47",
    coinMinimalDenom:
      "cw20:juno1r4pzw8f9z0sypct5l9j906d47z998ulwvhvqe5xdwgy8wf84583sxwh0pa",
    ics20ContractAddress:
      "juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn",
    isUnstable: true,
  },
  {
    counterpartyChainId: "injective-1",
    sourceChannelId: "channel-122",
    destChannelId: "channel-8",
    coinMinimalDenom: "inj",
    depositUrlOverride:
      "https://hub.injective.network/bridge/?destination=osmosis&origin=injective&token=inj",
    withdrawUrlOverride:
      "https://hub.injective.network/bridge/?destination=injective&origin=osmosis&token=inj",
    isUnstable: true,
  },
  {
    counterpartyChainId: "axelar-dojo-1",
    sourceChannelId: "channel-208",
    destChannelId: "channel-3",
    coinMinimalDenom: "uusdt",
    depositUrlOverride:
      "https://satellite.money/?source=ethereum&destination=osmosis&asset_denom=uusdt",
    withdrawUrlOverride:
      "https://satellite.money/?source=osmosis&destination=ethereum&asset_denom=uusdt",
    sourceChainNameOverride: "Ethereum",
    isUnstable: true,
  },
  {
    counterpartyChainId: "axelar-dojo-1",
    sourceChannelId: "channel-208",
    destChannelId: "channel-3",
    coinMinimalDenom: "frax-wei",
    depositUrlOverride:
      "https://satellite.money/?source=ethereum&destination=osmosis&asset_denom=frax-wei",
    withdrawUrlOverride:
      "https://satellite.money/?source=osmosis&destination=ethereum&asset_denom=frax-wei",
    sourceChainNameOverride: "Ethereum",
    isUnstable: true,
  },
  {
    counterpartyChainId: "gravity-bridge-3",
    sourceChannelId: "channel-144",
    destChannelId: "channel-10",
    coinMinimalDenom: "gravity0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
    depositUrlOverride: "https://spacestation.zone/",
    withdrawUrlOverride: "https://spacestation.zone/",
    isUnstable: true,
  },
  {
    counterpartyChainId: "gravity-bridge-3",
    sourceChannelId: "channel-144",
    destChannelId: "channel-10",
    coinMinimalDenom: "gravity0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    depositUrlOverride: "https://spacestation.zone/",
    withdrawUrlOverride: "https://spacestation.zone/",
    isUnstable: true,
  },
  {
    counterpartyChainId: "gravity-bridge-3",
    sourceChannelId: "channel-144",
    destChannelId: "channel-10",
    coinMinimalDenom: "gravity0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    depositUrlOverride: "https://spacestation.zone/",
    withdrawUrlOverride: "https://spacestation.zone/",
    isUnstable: true,
  },
  {
    counterpartyChainId: "gravity-bridge-3",
    sourceChannelId: "channel-144",
    destChannelId: "channel-10",
    coinMinimalDenom: "gravity0x6B175474E89094C44Da98b954EedeAC495271d0F",
    depositUrlOverride: "https://spacestation.zone/",
    withdrawUrlOverride: "https://spacestation.zone/",
    isUnstable: true,
  },
  {
    counterpartyChainId: "gravity-bridge-3",
    sourceChannelId: "channel-144",
    destChannelId: "channel-10",
    coinMinimalDenom: "gravity0xdAC17F958D2ee523a2206206994597C13D831ec7",
    depositUrlOverride: "https://spacestation.zone/",
    withdrawUrlOverride: "https://spacestation.zone/",
    isUnstable: true,
  },
  {
    counterpartyChainId: "juno-1",
    sourceChannelId: "channel-169",
    destChannelId: "channel-47",
    coinMinimalDenom:
      "cw20:juno1y9rf7ql6ffwkv02hsgd4yruz23pn4w97p75e2slsnkm0mnamhzysvqnxaq",
    ics20ContractAddress:
      "juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn",
    isUnstable: true,
  },
  {
    counterpartyChainId: "pio-mainnet-1",
    sourceChannelId: "channel-222",
    destChannelId: "channel-7",
    coinMinimalDenom: "nhash",
    isUnstable: true,
  },
  {
    counterpartyChainId: "galaxy-1",
    sourceChannelId: "channel-236",
    destChannelId: "channel-0",
    coinMinimalDenom: "uglx",
    isUnstable: true,
  },
  {
    counterpartyChainId: "juno-1",
    sourceChannelId: "channel-169",
    destChannelId: "channel-47",
    coinMinimalDenom:
      "cw20:juno1tdjwrqmnztn2j3sj2ln9xnyps5hs48q3ddwjrz7jpv6mskappjys5czd49",
    ics20ContractAddress:
      "juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn",
  },
  {
    counterpartyChainId: "juno-1",
    sourceChannelId: "channel-169",
    destChannelId: "channel-47",
    coinMinimalDenom:
      "cw20:juno15u3dt79t6sxxa3x3kpkhzsy56edaa5a66wvt3kxmukqjz2sx0hes5sn38g",
    ics20ContractAddress:
      "juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn",
    isUnstable: true,
  },
  {
    counterpartyChainId: "meme-1",
    sourceChannelId: "channel-238",
    destChannelId: "channel-1",
    coinMinimalDenom: "umeme",
    isUnstable: true,
  },
  {
    counterpartyChainId: "juno-1",
    sourceChannelId: "channel-169",
    destChannelId: "channel-47",
    coinMinimalDenom:
      "cw20:juno17wzaxtfdw5em7lc94yed4ylgjme63eh73lm3lutp2rhcxttyvpwsypjm4w",
    ics20ContractAddress:
      "juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn",
    isUnstable: true,
  },
  {
    counterpartyChainId: "juno-1",
    sourceChannelId: "channel-169",
    destChannelId: "channel-47",
    coinMinimalDenom:
      "cw20:juno1n7n7d5088qlzlj37e9mgmkhx6dfgtvt02hqxq66lcap4dxnzdhwqfmgng3",
    ics20ContractAddress:
      "juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn",
    isUnstable: true,
  },
  {
    counterpartyChainId: "phoenix-1",
    sourceChannelId: "channel-251",
    destChannelId: "channel-1",
    coinMinimalDenom: "uluna",
    isUnstable: true,
  },
  {
    counterpartyChainId: "titan-1",
    sourceChannelId: "channel-221",
    destChannelId: "channel-1",
    coinMinimalDenom: "uatolo",
    isUnstable: true,
  },
  {
    counterpartyChainId: "kava_2222-10",
    sourceChannelId: "channel-143",
    destChannelId: "channel-1",
    coinMinimalDenom: "hard",
    isUnstable: true,
  },
  {
    counterpartyChainId: "kava_2222-10",
    sourceChannelId: "channel-143",
    destChannelId: "channel-1",
    coinMinimalDenom: "swp",
    isUnstable: true,
  },
  {
    counterpartyChainId: "axelar-dojo-1",
    sourceChannelId: "channel-208",
    destChannelId: "channel-3",
    coinMinimalDenom: "link-wei",
    depositUrlOverride:
      "https://satellite.money/?source=ethereum&destination=osmosis&asset_denom=link-wei",
    withdrawUrlOverride:
      "https://satellite.money/?source=osmosis&destination=ethereum&asset_denom=link-wei",
    sourceChainNameOverride: "Ethereum",
    isUnstable: true,
  },
  {
    counterpartyChainId: "genesis_29-2",
    sourceChannelId: "channel-253",
    destChannelId: "channel-1",
    coinMinimalDenom: "el1",
    isUnstable: true,
  },
  {
    counterpartyChainId: "axelar-dojo-1",
    sourceChannelId: "channel-208",
    destChannelId: "channel-3",
    coinMinimalDenom: "aave-wei",
    depositUrlOverride:
      "https://satellite.money/?source=ethereum&destination=osmosis&asset_denom=aave-wei",
    withdrawUrlOverride:
      "https://satellite.money/?source=osmosis&destination=ethereum&asset_denom=aave-wei",
    sourceChainNameOverride: "Ethereum",
    isUnstable: true,
  },
  {
    counterpartyChainId: "axelar-dojo-1",
    sourceChannelId: "channel-208",
    destChannelId: "channel-3",
    coinMinimalDenom: "ape-wei",
    depositUrlOverride:
      "https://satellite.money/?source=ethereum&destination=osmosis&asset_denom=ape-wei",
    withdrawUrlOverride:
      "https://satellite.money/?source=osmosis&destination=ethereum&asset_denom=ape-wei",
    sourceChainNameOverride: "Ethereum",
    isUnstable: true,
  },
  {
    counterpartyChainId: "axelar-dojo-1",
    sourceChannelId: "channel-208",
    destChannelId: "channel-3",
    coinMinimalDenom: "axs-wei",
    depositUrlOverride:
      "https://satellite.money/?source=ethereum&destination=osmosis&asset_denom=axs-wei",
    withdrawUrlOverride:
      "https://satellite.money/?source=osmosis&destination=ethereum&asset_denom=axs-wei",
    sourceChainNameOverride: "Ethereum",
    isUnstable: true,
  },
  {
    counterpartyChainId: "axelar-dojo-1",
    sourceChannelId: "channel-208",
    destChannelId: "channel-3",
    coinMinimalDenom: "mkr-wei",
    depositUrlOverride:
      "https://satellite.money/?source=ethereum&destination=osmosis&asset_denom=mkr-wei",
    withdrawUrlOverride:
      "https://satellite.money/?source=osmosis&destination=ethereum&asset_denom=mkr-wei",
    sourceChainNameOverride: "Ethereum",
    isUnstable: true,
  },
  {
    counterpartyChainId: "axelar-dojo-1",
    sourceChannelId: "channel-208",
    destChannelId: "channel-3",
    coinMinimalDenom: "rai-wei",
    depositUrlOverride:
      "https://satellite.money/?source=ethereum&destination=osmosis&asset_denom=rai-wei",
    withdrawUrlOverride:
      "https://satellite.money/?source=osmosis&destination=ethereum&asset_denom=rai-wei",
    sourceChainNameOverride: "Ethereum",
    isUnstable: true,
  },
  {
    counterpartyChainId: "axelar-dojo-1",
    sourceChannelId: "channel-208",
    destChannelId: "channel-3",
    coinMinimalDenom: "shib-wei",
    depositUrlOverride:
      "https://satellite.money/?source=ethereum&destination=osmosis&asset_denom=shib-wei",
    withdrawUrlOverride:
      "https://satellite.money/?source=osmosis&destination=ethereum&asset_denom=shib-wei",
    sourceChainNameOverride: "Ethereum",
    isUnstable: true,
  },
  {
    counterpartyChainId: "axelar-dojo-1",
    sourceChannelId: "channel-208",
    destChannelId: "channel-3",
    coinMinimalDenom: "steth-wei",
    depositUrlOverride:
      "https://satellite.money/?source=ethereum&destination=osmosis&asset_denom=steth-wei",
    withdrawUrlOverride:
      "https://satellite.money/?source=osmosis&destination=ethereum&asset_denom=steth-wei",
    sourceChainNameOverride: "Ethereum",
    isUnstable: true,
  },
  {
    counterpartyChainId: "axelar-dojo-1",
    sourceChannelId: "channel-208",
    destChannelId: "channel-3",
    coinMinimalDenom: "uni-wei",
    depositUrlOverride:
      "https://satellite.money/?source=ethereum&destination=osmosis&asset_denom=uni-wei",
    withdrawUrlOverride:
      "https://satellite.money/?source=osmosis&destination=ethereum&asset_denom=uni-wei",
    sourceChainNameOverride: "Ethereum",
    isUnstable: true,
  },
  {
    counterpartyChainId: "axelar-dojo-1",
    sourceChannelId: "channel-208",
    destChannelId: "channel-3",
    coinMinimalDenom: "xcn-wei",
    depositUrlOverride:
      "https://satellite.money/?source=ethereum&destination=osmosis&asset_denom=xcn-wei",
    withdrawUrlOverride:
      "https://satellite.money/?source=osmosis&destination=ethereum&asset_denom=xcn-wei",
    sourceChainNameOverride: "Ethereum",
    isUnstable: true,
  },
].filter((ibcAsset) => (IS_FRONTIER ? true : ibcAsset.isVerified));

export default IBCAssetInfos;
