import { expect, it, describe, afterEach, vi, beforeEach } from 'vitest';
import axios from 'axios';
import nock from 'nock';

import { LOLLeague } from '../../../src/services/lol/LOLLeague';
import { RequestHandler } from '../../../src/RequestHandler';
import { EndpointParser } from '../../../src/EndpointParser';
import { REGION } from '../../../src';

describe('LOLLeague', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should export all services', () => {
    const lolLeague = new LOLLeague(
      new RequestHandler(axios.create()),
      new EndpointParser()
    );
    expect(lolLeague.challengerLeaguesByQueue).toBeDefined();
    expect(lolLeague.grandmasterLeaguesByQueue).toBeDefined();
    expect(lolLeague.masterLeaguesByQueue).toBeDefined();
    expect(lolLeague.entriesBySummoner).toBeDefined();
    expect(lolLeague.entries).toBeDefined();
    expect(lolLeague.leagues).toBeDefined();
  });

  describe('challengerLeaguesByQueue', () => {
    it('should call the correct service', async () => {
      const region = REGION.EUW;
      const queue = 'test-queue';
      const mockResponse = { message: 'OK' };

      const lolLeague = new LOLLeague(
        new RequestHandler(axios.create()),
        new EndpointParser()
      );
      nock('https://euw1.api.riotgames.com')
        .get(`/lol/league/v4/challengerleagues/by-queue/${queue}`)
        .reply(200, mockResponse);

      const response = await lolLeague.challengerLeaguesByQueue(region, queue);

      expect(response.data).toEqual(mockResponse);
    });
  });

  describe('grandmasterLeaguesByQueue', () => {
    it('should call the correct service', async () => {
      const region = REGION.EUW;
      const queue = 'test-queue';
      const mockResponse = { message: 'OK' };

      const lolLeague = new LOLLeague(
        new RequestHandler(axios.create()),
        new EndpointParser()
      );
      nock('https://euw1.api.riotgames.com')
        .get(`/lol/league/v4/grandmasterleagues/by-queue/${queue}`)
        .reply(200, mockResponse);

      const response = await lolLeague.grandmasterLeaguesByQueue(region, queue);

      expect(response.data).toEqual(mockResponse);
    });
  });

  describe('masterLeaguesByQueue', () => {
    it('should call the correct service', async () => {
      const region = REGION.EUW;
      const queue = 'test-queue';
      const mockResponse = { message: 'OK' };

      const lolLeague = new LOLLeague(
        new RequestHandler(axios.create()),
        new EndpointParser()
      );
      nock('https://euw1.api.riotgames.com')
        .get(`/lol/league/v4/masterleagues/by-queue/${queue}`)
        .reply(200, mockResponse);

      const response = await lolLeague.masterLeaguesByQueue(region, queue);

      expect(response.data).toEqual(mockResponse);
    });
  });

  describe('entriesBySummoner', () => {
    it('should call the correct service', async () => {
      const region = REGION.EUW;
      const summonerId = 'test-summonerId';
      const mockResponse = { message: 'OK' };

      const lolLeague = new LOLLeague(
        new RequestHandler(axios.create()),
        new EndpointParser()
      );
      nock('https://euw1.api.riotgames.com')
        .get(`/lol/league/v4/entries/by-summoner/${summonerId}`)
        .reply(200, mockResponse);

      const response = await lolLeague.entriesBySummoner(region, summonerId);

      expect(response.data).toEqual(mockResponse);
    });
  });

  describe('entries', () => {
    it('should call the correct service', async () => {
      const region = REGION.EUW;
      const queue = 'test-queue';
      const tier = 'test-tier';
      const division = 'test-division';
      const mockResponse = { message: 'OK' };

      const lolLeague = new LOLLeague(
        new RequestHandler(axios.create()),
        new EndpointParser()
      );
      nock('https://euw1.api.riotgames.com')
        .get(`/lol/league/v4/entries/${queue}/${tier}/${division}`)
        .reply(200, mockResponse);

      const response = await lolLeague.entries(region, queue, tier, division);

      expect(response.data).toEqual(mockResponse);
    });
  });

  describe('leagues', () => {
    it('should call the correct service', async () => {
      const region = REGION.EUW;
      const league = 'test-league';
      const mockResponse = { message: 'OK' };

      const lolLeague = new LOLLeague(
        new RequestHandler(axios.create()),
        new EndpointParser()
      );
      nock('https://euw1.api.riotgames.com')
        .get(`/lol/league/v4/leagues/${league}`)
        .reply(200, mockResponse);

      const response = await lolLeague.leagues(region, league);

      expect(response.data).toEqual(mockResponse);
    });
  });
});
