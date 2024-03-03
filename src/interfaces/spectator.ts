export interface BannedChampion {
  pickTurn: number;
  championId: number;
  teamId: number;
}

export interface CurrentGameParticipant {
  championId: number;
  perks: {
    perkIds: number[];
    perkStyle: number;
    perkSubStyle: number;
  };
  profileIconId: number;
  bot: boolean;
  teamId: number;
  puuid: string;
  spell1Id: number;
  spell2Id: number;
  gameCustomizationObjects: {
    category: string;
    content: string;
  }[];
}

export interface CurrentGameInfo {
  gameId: number;
  gameType: string;
  gameStartTime: number;
  mapId: number;
  gameLength: number;
  platformId: string;
  gameMode: string;
  bannedChampions: BannedChampion[];
  gameQueueConfigId: number;
  observers: {
    encryptionKey: string;
  };
  participants: CurrentGameParticipant[];
}
