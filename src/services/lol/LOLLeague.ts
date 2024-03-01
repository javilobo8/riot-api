import { EndpointParser } from '../../EndpointParser';
import { RequestHandler } from '../../RequestHandler';
import { Region } from '../../constants';
import { LeagueDTO, LeagueEntryDTO } from '../../interfaces/league';
import { Response } from '../../shared';

export class LOLLeague {
  constructor(
    private readonly requestHandler: RequestHandler,
    private readonly endpointParser: EndpointParser
  ) {}

  /**
   * Get the challenger league for given queue.
   *
   * @param {Region} region region
   * @param {string} queue queue
   * @returns {Promise<Response<LeagueDTO>>}
   */
  public async challengerLeaguesByQueue(
    region: Region,
    queue: string
  ): Promise<Response<LeagueDTO>> {
    const host = this.endpointParser.region(region);
    const response = await this.requestHandler.request<LeagueDTO>(
      `${host}/lol/league/v4/challengerleagues/by-queue/${queue}`
    );

    return response;
  }

  /**
   * Get the grandmaster league for given queue.
   *
   * @param {Region} region region
   * @param {string} queue queue
   * @returns {Promise<Response<LeagueDTO>>}
   */
  public async grandmasterLeaguesByQueue(
    region: Region,
    queue: string
  ): Promise<Response<LeagueDTO>> {
    const host = this.endpointParser.region(region);
    const response = await this.requestHandler.request<LeagueDTO>(
      `${host}/lol/league/v4/grandmasterleagues/by-queue/${queue}`
    );

    return response;
  }

  /**
   * Get the master league for given queue.
   *
   * @param {Region} region region
   * @param {string} queue queue
   * @returns {Promise<Response<LeagueDTO>>}
   */
  public async masterLeaguesByQueue(
    region: Region,
    queue: string
  ): Promise<Response<LeagueDTO>> {
    const host = this.endpointParser.region(region);
    const response = await this.requestHandler.request<LeagueDTO>(
      `${host}/lol/league/v4/masterleagues/by-queue/${queue}`
    );

    return response;
  }

  /**
   * Get league entries in all queues for a given summoner ID.
   *
   * @param {Region} region region
   * @param {string} encryptedSummonerId encryptedSummonerId
   * @returns {Promise<Response<LeagueEntryDTO[]>>}
   */
  public async entriesBySummoner(
    region: Region,
    encryptedSummonerId: string
  ): Promise<Response<LeagueEntryDTO[]>> {
    const host = this.endpointParser.region(region);
    const response = await this.requestHandler.request<LeagueEntryDTO[]>(
      `${host}/lol/league/v4/entries/by-queue/${encryptedSummonerId}`
    );

    return response;
  }

  /**
   * Get all the league entries.
   *
   * @param {Region} region region
   * @param {string} queue queue
   * @param {string} tier tier
   * @param {string} division division
   * @returns {Promise<Response<LeagueEntryDTO[]>>}
   */
  public async entries(
    region: Region,
    queue: string,
    tier: string,
    division: string
  ): Promise<Response<LeagueEntryDTO[]>> {
    const host = this.endpointParser.region(region);
    const response = await this.requestHandler.request<LeagueEntryDTO[]>(
      `${host}/lol/league/v4/entries/${queue}/${tier}/${division}`
    );

    return response;
  }

  /**
   * Get league with given ID, including inactive entries.
   *
   * @param {Region} region region
   * @param {string} league league
   * @returns {Promise<Response<LeagueDTO>>}
   */
  public async leagues(
    region: Region,
    league: string
  ): Promise<Response<LeagueDTO>> {
    const host = this.endpointParser.region(region);
    const response = await this.requestHandler.request<LeagueDTO>(
      `${host}/lol/league/v4/leagues/${league}`
    );

    return response;
  }
}
