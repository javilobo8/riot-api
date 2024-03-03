import { expect, it, describe, afterEach, vi, beforeEach } from 'vitest';
import axios from 'axios';
import nock from 'nock';

import { LOLSpectator } from '../../../src/services/lol/LOLSpectator';
import { RequestHandler } from '../../../src/RequestHandler';
import { EndpointParser } from '../../../src/EndpointParser';
import { REGION } from '../../../src';

describe('LOLSpectator', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should export all services', () => {
    const lolSpectator = new LOLSpectator(
      new RequestHandler(axios.create()),
      new EndpointParser()
    );
    expect(lolSpectator.bySummoner).toBeDefined();
  });

  describe('bySummoner', () => {
    it('should call the correct service', async () => {
      const region = REGION.EUW;
      const summonerId = 'test-summonerId';

      const lolSpectator = new LOLSpectator(
        new RequestHandler(axios.create()),
        new EndpointParser()
      );
      nock('https://euw1.api.riotgames.com')
        .get(`/lol/spectator/v4/active-games/by-summoner/${summonerId}`)
        .reply(200, { summonerId });

      const response = await lolSpectator.bySummoner(region, summonerId);

      expect(response.data).toEqual({ summonerId });
    });
  });
});
