import { expect, it, describe, afterEach, vi, beforeEach } from 'vitest';
import axios from 'axios';
import nock from 'nock';

import { RiotAccount } from '../../../src/services/riot/RiotAccount';
import { RequestHandler } from '../../../src/RequestHandler';
import { EndpointParser } from '../../../src/EndpointParser';
import { REGION } from '../../../src';

describe('RiotAccount', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should export all services', () => {
    const riotAccount = new RiotAccount(
      new RequestHandler(axios.create()),
      new EndpointParser()
    );
    expect(riotAccount.byPuuid).toBeDefined();
    expect(riotAccount.byRiotId).toBeDefined();
  });

  describe('byPuuid', () => {
    it('should return the account by puuid', async () => {
      const region = REGION.EUW;
      const puuid = 'test-puuid';

      const riotAccount = new RiotAccount(
        new RequestHandler(axios.create()),
        new EndpointParser()
      );
      nock('https://europe.api.riotgames.com')
        .get(`/riot/account/v1/accounts/by-puuid/${puuid}`)
        .reply(200, { puuid });

      const response = await riotAccount.byPuuid(region, puuid);

      expect(response.data).toEqual({ puuid });
    });
  });

  describe('byRiotId', () => {
    it('should return the account by puuid', async () => {
      const region = REGION.EUW;
      const gameName = 'test-gameName';
      const tagLine = 'test-tagLine';

      const riotAccount = new RiotAccount(
        new RequestHandler(axios.create()),
        new EndpointParser()
      );
      nock('https://europe.api.riotgames.com')
        .get(`/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}`)
        .reply(200, { gameName, tagLine });

      const response = await riotAccount.byRiotId(region, gameName, tagLine);

      expect(response.data).toEqual({ gameName, tagLine });
    });
  });
});
