import { expect, it, describe, afterEach, vi, beforeEach } from 'vitest';
import axios from 'axios';
import nock from 'nock';

import { LOLMatch } from '../../../src/services/lol/LOLMatch';
import { RequestHandler } from '../../../src/RequestHandler';
import { EndpointParser } from '../../../src/EndpointParser';
import { REGION } from '../../../src';

describe('LOLMatch', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should export all services', () => {
    const lolMatch = new LOLMatch(
      new RequestHandler(axios.create()),
      new EndpointParser()
    );
    expect(lolMatch.matchesList).toBeDefined();
    expect(lolMatch.match).toBeDefined();
    expect(lolMatch.matchTimeline).toBeDefined();
  });

  describe('matchesList', () => {
    it('should call the correct service', async () => {
      const region = REGION.EUW;
      const puuid = 'test-puuid';
      const mockResponse = { message: 'OK' };

      const lolMatch = new LOLMatch(
        new RequestHandler(axios.create()),
        new EndpointParser()
      );
      nock('https://europe.api.riotgames.com')
        .get(`/lol/match/v5/matches/by-puuid/${puuid}/ids`)
        .reply(200, mockResponse);

      const response = await lolMatch.matchesList(region, puuid);

      expect(response.data).toEqual(mockResponse);
    });
  });

  describe('match', () => {
    it('should call the correct service', async () => {
      const region = REGION.EUW;
      const matchId = 'test-matchId';
      const mockResponse = { message: 'OK' };

      const lolMatch = new LOLMatch(
        new RequestHandler(axios.create()),
        new EndpointParser()
      );
      nock('https://europe.api.riotgames.com')
        .get(`/lol/match/v5/matches/${matchId}`)
        .reply(200, mockResponse);

      const response = await lolMatch.match(region, matchId);

      expect(response.data).toEqual(mockResponse);
    });
  });

  describe('matchTimeline', () => {
    it('should call the correct service', async () => {
      const region = REGION.EUW;
      const matchId = 'test-matchId';
      const mockResponse = { message: 'OK' };

      const lolMatch = new LOLMatch(
        new RequestHandler(axios.create()),
        new EndpointParser()
      );
      nock('https://europe.api.riotgames.com')
        .get(`/lol/match/v5/matches/${matchId}/timeline`)
        .reply(200, mockResponse);

      const response = await lolMatch.matchTimeline(region, matchId);

      expect(response.data).toEqual(mockResponse);
    });
  });
});
