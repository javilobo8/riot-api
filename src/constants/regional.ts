export const REGION = {
  BR: 'BR',
  EUNE: 'EUNE',
  EUW: 'EUW',
  JP: 'JP',
  KR: 'KR',
  LAN: 'LAN',
  LAS: 'LAS',
  NA: 'NA',
  OCE: 'OCE',
  TR: 'TR',
  RU: 'RU',
  PH: 'PH',
  SG: 'SG',
  TH: 'TH',
  TW: 'TW',
  VN: 'VN',
} as const;

export const CLUSTER = {
  AMERICAS: 'AMERICAS',
  ASIA: 'ASIA',
  EUROPE: 'EUROPE',
  SEA: 'SEA',
} as const;

export const CPID = {
  NA1: 'NA1',
  EUW1: 'EUW1',
  EUN1: 'EUN1',
  KR: 'KR',
  BR1: 'BR1',
  TR1: 'TR1',
  RU1: 'RU1',
  RU: 'RU',
  LA1: 'LA1',
  LA2: 'LA2',
  OCE: 'OCE',
  OC1: 'OC1',
  JP1: 'JP1',
  PH2: 'PH2',
  SG2: 'SG2',
  TW2: 'TW2',
  TH2: 'TH2',
  VN2: 'VN2',
} as const;

export type Region = typeof REGION[keyof typeof REGION];
export type Cluster = typeof CLUSTER[keyof typeof CLUSTER];
export type CPID = typeof CPID[keyof typeof CPID];
