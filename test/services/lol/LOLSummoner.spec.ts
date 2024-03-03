import { expect, it, describe, afterEach, vi, beforeEach } from 'vitest';
import axios from 'axios';
import nock from 'nock';

import { LOLSummoner } from '../../../src/services/lol/LOLSummoner';
import { RequestHandler } from '../../../src/RequestHandler';
import { EndpointParser } from '../../../src/EndpointParser';
import { REGION } from '../../../src';

describe('LOLSummoner', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should export all services', () => {
    const lolSummoner = new LOLSummoner(
      new RequestHandler(axios.create()),
      new EndpointParser()
    );
    expect(lolSummoner.byPuuid).toBeDefined();
    expect(lolSummoner.byId).toBeDefined();
  });

  describe('byPuuid', () => {
    it('should call the correct service', async () => {
      const region = REGION.EUW;
      const puuid = 'test-puuid';
      const mockResponse = { message: 'OK' };

      const lolSummoner = new LOLSummoner(
        new RequestHandler(axios.create()),
        new EndpointParser()
      );
      nock('https://euw1.api.riotgames.com')
        .get(`/lol/summoner/v4/summoners/by-puuid/${puuid}`)
        .reply(200, mockResponse);

      const response = await lolSummoner.byPuuid(region, puuid);

      expect(response.data).toEqual(mockResponse);
    });
  });

  describe('byId', () => {
    it('should call the correct service', async () => {
      const region = REGION.EUW;
      const summonerId = 'test-summonerId';
      const mockResponse = { message: 'OK' };

      const lolSummoner = new LOLSummoner(
        new RequestHandler(axios.create()),
        new EndpointParser()
      );
      nock('https://euw1.api.riotgames.com')
        .get(`/lol/summoner/v4/summoners/${summonerId}`)
        .reply(200, mockResponse);

      const response = await lolSummoner.byId(region, summonerId);

      expect(response.data).toEqual(mockResponse);
    });
  });
});
