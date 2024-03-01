export interface LeagueDTO {
  leagueId: string;
  entries: LeagueItemDTO[];
  tier: string;
  name: string;
  queue: string;
}

export interface LeagueItemDTO {
  freshBlood: boolean;
  wins: number; // Winning team on Summoners Rift.
  summonerName: string;
  miniSeries: MiniSeriesDTO;
  inactive: boolean;
  veteran: boolean;
  hotStreak: boolean;
  rank: string;
  leaguePoints: number;
  losses: number; // Losing team on Summoners Rift.
  summonerId: string; // Player's encrypted summonerId.
}

export interface MiniSeriesDTO {
  losses: number;
  progress: string;
  target: number;
  wins: number;
}

export interface LeagueEntryDTO {
  leagueId: string;
  summonerId: string; //Player's encrypted summonerId.
  summonerName: string;
  queueType: string;
  tier: string;
  rank: string; // The player's division within a tier.
  leaguePoints: number;
  wins: number; // Winning team on Summoners Rift.
  losses: number; // Losing team on Summoners Rift.
  hotStreak: boolean;
  veteran: boolean;
  freshBlood: boolean;
  inactive: boolean;
  miniSeries?: MiniSeriesDTO;
}
