import { expect, it, describe } from 'vitest';

import { RiotAPILOL } from '../src';
import { LOLLeague } from '../src/services/lol/LOLLeague';
import { LOLMatch } from '../src/services/lol/LOLMatch';
import { LOLSummoner } from '../src/services/lol/LOLSummoner';
import { RiotAccount } from '../src/services/riot/RiotAccount';
import { LOLSpectator } from '../src/services/lol/LOLSpectator';
import { LOLChampionMastery } from '../src/services/lol/LOLChampionMastery';

describe('RiotAPILOL', () => {
  it('should export all services', () => {
    const riotApi = new RiotAPILOL({ apiKey: 'test' });

    expect(riotApi.account).toBeInstanceOf(RiotAccount);
    expect(riotApi.summoner).toBeInstanceOf(LOLSummoner);
    expect(riotApi.league).toBeInstanceOf(LOLLeague);
    expect(riotApi.match).toBeInstanceOf(LOLMatch);
    expect(riotApi.spectator).toBeInstanceOf(LOLSpectator);
    expect(riotApi.championMastery).toBeInstanceOf(LOLChampionMastery);
  });

  it('should throw an error if no apiKey provided', () => {
    try {
      // @ts-expect-error Testing for error
      new RiotAPILOL({});
      expect.fail('Should throw an error');
    } catch (error) {
      if (error instanceof Error) {
        expect(error.message).toBe('API key is required');
      } else {
        expect.fail('Should throw an error');
      }
    }
  });
});
