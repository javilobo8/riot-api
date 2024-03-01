export interface SummonerDTO {
  accountId: string; // Encrypted account ID. Max length 56 characters.
  profileIconId: number; // ID of the summoner icon associated with the summoner.
  revisionDate: number; // Date summoner was last modified specified as epoch milliseconds. The following events will update this timestamp: summoner name change, summoner level change, or profile icon change.
  name: string; // Summoner name.
  id: string; // Encrypted summoner ID. Max length 63 characters.
  puuid: string; // Encrypted PUUID. Exact length of 78 characters.
  summonerLevel: number; // Summoner level associated with the summoner.
}
