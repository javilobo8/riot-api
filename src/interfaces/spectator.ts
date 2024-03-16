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
  gameId: number; // The ID of the game
  gameType: string; // The game type
  gameStartTime: number; // The game start time represented in epoch milliseconds
  mapId: number; // The ID of the map
  gameLength: number; // The amount of time in seconds that has passed since the game started
  platformId: string; // The ID of the platform on which the game is being played
  gameMode: string; // The game mode
  bannedChampions: BannedChampion[]; // Banned champion information
  gameQueueConfigId: number; // The queue type (queue types are documented on the Game Constants page)
  observers: {
    // The observer information
    encryptionKey: string;
  };
  participants: CurrentGameParticipant[]; // The participant information
}
