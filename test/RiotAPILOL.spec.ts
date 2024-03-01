import { expect, it, describe } from 'vitest';

import { RiotAPILOL } from '../src';
import { LOLLeague } from '../src/services/lol/LOLLeague';
import { LOLMatch } from '../src/services/lol/LOLMatch';
import { LOLSummoner } from '../src/services/lol/LOLSummoner';
import { RiotAccount } from '../src/services/riot/RiotAccount';

describe('RiotAPILOL', () => {
  it('should export all services', () => {
    const riotApi = new RiotAPILOL({ apiKey: 'test' });

    expect(riotApi.account).toBeInstanceOf(RiotAccount);
    expect(riotApi.summoner).toBeInstanceOf(LOLSummoner);
    expect(riotApi.league).toBeInstanceOf(LOLLeague);
    expect(riotApi.match).toBeInstanceOf(LOLMatch);
  });
});
