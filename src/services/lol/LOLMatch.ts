import { EndpointParser } from '../../EndpointParser';
import { RequestHandler } from '../../RequestHandler';
import { MatchDTO } from '../../interfaces/match';
import { Response } from '../../shared';

interface MatchesByPuuidParams {
  startTime?: number; // Epoch timestamp in seconds. The matchlist started storing timestamps on June 16th, 2021. Any matches played before June 16th, 2021 won't be included in the results if the startTime filter is set.
  endTime?: number; // Epoch timestamp in seconds.
  queue?: number; // Filter the list of match ids by a specific queue id. This filter is mutually inclusive of the type filter meaning any match ids returned must match both the queue and type filters.
  type?: string; // Filter the list of match ids by the type of match. This filter is mutually inclusive of the queue filter meaning any match ids returned must match both the queue and type filters.
  start?: number; // Defaults to 0. Start index.
  count?: number; // Defaults to 100. Valid values: 0 to 100. Number of match ids to return.
}

export class LOLMatch {
  constructor(
    private readonly requestHandler: RequestHandler,
    private readonly endpointParser: EndpointParser
  ) {}

  /**
   * Get a list of match ids by puuid
   *
   * @param {string} region region
   * @param {string} puuid puuid
   * @returns {Promise<Response<string[]>>}
   */
  public async matchesList(
    region: string,
    puuid: string,
    params: MatchesByPuuidParams
  ): Promise<Response<string[]>> {
    const host = this.endpointParser.regionToCluster(region);
    const response = await this.requestHandler.request<string[]>(
      `${host}/lol/match/v5/matches/by-puuid/${puuid}/ids`,
      params as Record<string, string>
    );

    return response;
  }

  /**
   * Get a match by match id
   *
   * @param {string} region region
   * @param {string} matchId matchId
   * @returns {Promise<Response<MatchDTO>>}
   */
  public async match(
    region: string,
    matchId: string
  ): Promise<Response<MatchDTO>> {
    const host = this.endpointParser.regionToCluster(region);
    const response = await this.requestHandler.request<MatchDTO>(
      `${host}/lol/match/v5/matches/${matchId}`
    );

    return response;
  }

  /**
   * Get a match by match id
   *
   * @param {string} region region
   * @param {string} matchId matchId
   * @returns {Promise<Response<void>>}
   */
  public async matchTimeline(
    region: string,
    matchId: string
  ): Promise<Response<void>> {
    const host = this.endpointParser.regionToCluster(region);
    const response = await this.requestHandler.request<void>(
      `${host}/lol/match/v5/matches/${matchId}`
    );

    return response;
  }
}
