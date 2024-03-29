import { afterEach, describe, expect, it } from 'vitest';
import axios from 'axios';
import nock from 'nock';

import { LOLChampionMastery } from '../../../src/services/lol/LOLChampionMastery';
import { RequestHandler } from '../../../src/RequestHandler';
import { EndpointParser } from '../../../src/EndpointParser';
import { REGION } from '../../../src';

describe('LOLChampionMastery', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should export all services', () => {
    const lolChampionMastery = new LOLChampionMastery(
      new RequestHandler(axios.create()),
      new EndpointParser()
    );
    expect(lolChampionMastery.masteries).toBeDefined();
    expect(lolChampionMastery.masteryByChampionId).toBeDefined();
    expect(lolChampionMastery.topMastery).toBeDefined();
    expect(lolChampionMastery.scores).toBeDefined();
  });

  describe('masteries', () => {
    it('should call the correct service', async () => {
      const region = REGION.EUW;
      const puuid = 'test-puuid';
      const mockResponse = { message: 'OK' };

      const lolChampionMastery = new LOLChampionMastery(
        new RequestHandler(axios.create()),
        new EndpointParser()
      );
      nock('https://euw1.api.riotgames.com')
        .get(`/lol/champion-mastery/v4/champion-masteries/by-puuid/${puuid}`)
        .reply(200, mockResponse);

      const response = await lolChampionMastery.masteries(region, puuid);

      expect(response.data).toEqual(mockResponse);
    });
  });

  describe('topMastery', () => {
    it('should call the correct service without count', async () => {
      const region = REGION.EUW;
      const puuid = 'test-puuid';
      const mockResponse = { message: 'OK' };

      const lolChampionMastery = new LOLChampionMastery(
        new RequestHandler(axios.create()),
        new EndpointParser()
      );
      nock('https://euw1.api.riotgames.com')
        .get(
          `/lol/champion-mastery/v4/champion-masteries/by-puuid/${puuid}/top`
        )
        .reply(200, mockResponse);

      const response = await lolChampionMastery.topMastery(region, puuid);

      expect(response.data).toEqual(mockResponse);
    });

    it('should call the correct service without count', async () => {
      const region = REGION.EUW;
      const puuid = 'test-puuid';
      const count = 5;
      const mockResponse = { message: 'OK' };

      const lolChampionMastery = new LOLChampionMastery(
        new RequestHandler(axios.create()),
        new EndpointParser()
      );
      nock('https://euw1.api.riotgames.com')
        .get(
          `/lol/champion-mastery/v4/champion-masteries/by-puuid/${puuid}/top?count=${count}`
        )
        .reply(200, mockResponse);

      const response = await lolChampionMastery.topMastery(
        region,
        puuid,
        count
      );

      expect(response.data).toEqual(mockResponse);
    });
  });

  describe('masteryByChampionId', () => {
    it('should call the correct service', async () => {
      const region = REGION.EUW;
      const puuid = 'test-puuid';
      const championId = 45;
      const mockResponse = { message: 'OK' };

      const lolChampionMastery = new LOLChampionMastery(
        new RequestHandler(axios.create()),
        new EndpointParser()
      );
      nock('https://euw1.api.riotgames.com')
        .get(
          `/lol/champion-mastery/v4/champion-masteries/by-puuid/${puuid}/by-champion/${championId}`
        )
        .reply(200, mockResponse);

      const response = await lolChampionMastery.masteryByChampionId(
        region,
        puuid,
        championId
      );

      expect(response.data).toEqual(mockResponse);
    });
  });

  describe('scores', () => {
    it('should call the correct service', async () => {
      const region = REGION.EUW;
      const puuid = 'test-puuid';
      const mockResponse = { message: 'OK' };

      const lolChampionMastery = new LOLChampionMastery(
        new RequestHandler(axios.create()),
        new EndpointParser()
      );
      nock('https://euw1.api.riotgames.com')
        .get(`/lol/champion-mastery/v4/scores/by-puuid/${puuid}`)
        .reply(200, mockResponse);

      const response = await lolChampionMastery.scores(region, puuid);

      expect(response.data).toEqual(mockResponse);
    });
  });
});
