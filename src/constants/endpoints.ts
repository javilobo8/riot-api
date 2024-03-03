import { Region, Cluster, REGION, CLUSTER, CPID } from './regional';

export const REGION_HOST: Record<Region, string> = {
  [REGION.BR]: `https://${CPID.BR1.toLowerCase()}.api.riotgames.com`,
  [REGION.EUNE]: `https://${CPID.EUN1.toLowerCase()}.api.riotgames.com`,
  [REGION.EUW]: `https://${CPID.EUW1.toLowerCase()}.api.riotgames.com`,
  [REGION.JP]: `https://${CPID.JP1.toLowerCase()}.api.riotgames.com`,
  [REGION.KR]: `https://${CPID.KR.toLowerCase()}.api.riotgames.com`,
  [REGION.LAN]: `https://${CPID.LA1.toLowerCase()}.api.riotgames.com`,
  [REGION.LAS]: `https://${CPID.LA2.toLowerCase()}.api.riotgames.com`,
  [REGION.NA]: `https://${CPID.NA1.toLowerCase()}.api.riotgames.com`,
  [REGION.OCE]: `https://${CPID.OC1.toLowerCase()}.api.riotgames.com`,
  [REGION.TR]: `https://${CPID.TR1.toLowerCase()}.api.riotgames.com`,
  [REGION.RU]: `https://${CPID.RU.toLowerCase()}.api.riotgames.com`,
  [REGION.PH]: `https://${CPID.PH2.toLowerCase()}.api.riotgames.com`,
  [REGION.SG]: `https://${CPID.SG2.toLowerCase()}.api.riotgames.com`,
  [REGION.TH]: `https://${CPID.TH2.toLowerCase()}.api.riotgames.com`,
  [REGION.TW]: `https://${CPID.TW2.toLowerCase()}.api.riotgames.com`,
  [REGION.VN]: `https://${CPID.VN2.toLowerCase()}.api.riotgames.com`,
} as const;

export const CLUSTER_HOST: Record<Cluster, string> = {
  [CLUSTER.AMERICAS]: `https://${CLUSTER.AMERICAS.toLowerCase()}.api.riotgames.com`,
  [CLUSTER.EUROPE]: `https://${CLUSTER.EUROPE.toLowerCase()}.api.riotgames.com`,
  [CLUSTER.ASIA]: `https://${CLUSTER.ASIA.toLowerCase()}.api.riotgames.com`,
  [CLUSTER.SEA]: `https://${CLUSTER.SEA.toLowerCase()}.api.riotgames.com`,
} as const;

export const REGION_TO_CLUSTER: Record<
  Region,
  (typeof CLUSTER_HOST)[keyof typeof CLUSTER_HOST]
> = {
  [REGION.BR]: CLUSTER_HOST[CLUSTER.AMERICAS],
  [REGION.EUNE]: CLUSTER_HOST[CLUSTER.EUROPE],
  [REGION.EUW]: CLUSTER_HOST[CLUSTER.EUROPE],
  [REGION.JP]: CLUSTER_HOST[CLUSTER.ASIA],
  [REGION.KR]: CLUSTER_HOST[CLUSTER.ASIA],
  [REGION.LAN]: CLUSTER_HOST[CLUSTER.AMERICAS],
  [REGION.LAS]: CLUSTER_HOST[CLUSTER.AMERICAS],
  [REGION.NA]: CLUSTER_HOST[CLUSTER.AMERICAS],
  [REGION.TR]: CLUSTER_HOST[CLUSTER.EUROPE],
  [REGION.RU]: CLUSTER_HOST[CLUSTER.EUROPE],
  [REGION.OCE]: CLUSTER_HOST[CLUSTER.SEA],
  [REGION.PH]: CLUSTER_HOST[CLUSTER.SEA],
  [REGION.SG]: CLUSTER_HOST[CLUSTER.SEA],
  [REGION.TH]: CLUSTER_HOST[CLUSTER.SEA],
  [REGION.TW]: CLUSTER_HOST[CLUSTER.SEA],
  [REGION.VN]: CLUSTER_HOST[CLUSTER.SEA],
} as const;

export const CPID_REGION: Record<CPID, Region> = {
  [CPID.NA1]: REGION.NA,
  [CPID.EUW1]: REGION.EUW,
  [CPID.EUN1]: REGION.EUNE,
  [CPID.KR]: REGION.KR,
  [CPID.BR1]: REGION.BR,
  [CPID.TR1]: REGION.TR,
  [CPID.RU1]: REGION.RU,
  [CPID.RU]: REGION.RU,
  [CPID.LA1]: REGION.LAN,
  [CPID.LA2]: REGION.LAS,
  [CPID.OCE]: REGION.OCE,
  [CPID.OC1]: REGION.OCE,
  [CPID.JP1]: REGION.JP,
  [CPID.PH2]: REGION.PH,
  [CPID.SG2]: REGION.SG,
  [CPID.TW2]: REGION.TW,
  [CPID.TH2]: REGION.TH,
  [CPID.VN2]: REGION.VN,
} as const;

export type RegionHost = (typeof REGION_HOST)[keyof typeof REGION_HOST];
export type ClusterHost = (typeof CLUSTER_HOST)[keyof typeof CLUSTER_HOST];
export type RegionToCluster =
  (typeof REGION_TO_CLUSTER)[keyof typeof REGION_TO_CLUSTER];
