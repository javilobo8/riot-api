import { EndpointParser } from '../../EndpointParser';
import { RequestHandler } from '../../RequestHandler';
import { CurrentGameInfo } from '../../interfaces/spectator';
import { Response } from '../../interfaces/shared';

export class LOLSpectator {
  constructor(
    private readonly requestHandler: RequestHandler,
    private readonly endpointParser: EndpointParser
  ) {}

  /**
   * Get current game information for the given summoner ID
   *
   * @deprecated Use byPuuid instead
   * @param {string} region region
   * @param {string} summonerId summoner ID
   * @returns {Promise<Response<CurrentGameInfo>>}
   */
  public async bySummoner(
    region: string,
    summonerId: string
  ): Promise<Response<CurrentGameInfo>> {
    const host = this.endpointParser.region(region);
    const response = await this.requestHandler.request<CurrentGameInfo>(
      `${host}/lol/spectator/v4/active-games/by-summoner/${summonerId}`
    );

    return response;
  }

  /**
   * Get current game information for the given puuid
   *
   * @param {string} region region
   * @param {string} puuid puuid
   * @returns {Promise<Response<CurrentGameInfo>>}
   */
  public async byPuuid(
    region: string,
    puuid: string
  ): Promise<Response<CurrentGameInfo>> {
    const host = this.endpointParser.region(region);
    const response = await this.requestHandler.request<CurrentGameInfo>(
      `${host}/lol/spectator/v5/active-games/by-summoner/${puuid}`
    );

    return response;
  }
}
