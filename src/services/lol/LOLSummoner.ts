import { EndpointParser } from '../../EndpointParser';
import { RequestHandler } from '../../RequestHandler';
import { Region } from '../../constants';
import { SummonerDTO } from '../../interfaces/summoner';
import { Response } from '../../shared';

export class LOLSummoner {
  constructor(
    private readonly requestHandler: RequestHandler,
    private readonly endpointParser: EndpointParser
  ) {}

  /**
   * Get summoner by Account ID
   *
   * @param {Region} region region
   * @param {string} accountId Account ID
   * @returns {Promise<Response<SummonerDTO>>}
   */
  public async byAccount(
    region: Region,
    accountId: string
  ): Promise<Response<SummonerDTO>> {
    const host = this.endpointParser.region(region);
    const response = await this.requestHandler.request<SummonerDTO>(
      `${host}/lol/summoner/v4/summoners/by-account/${accountId}`
    );

    return response;
  }

  /**
   * Get summoner by puuid
   *
   * @param {Region} region region
   * @param {string} puuid account puuid
   * @returns {Promise<Response<SummonerDTO>>}
   */
  public async byPuuid(
    region: Region,
    puuid: string
  ): Promise<Response<SummonerDTO>> {
    const host = this.endpointParser.region(region);
    const response = await this.requestHandler.request<SummonerDTO>(
      `${host}/lol/summoner/v4/summoners/by-puuid/${puuid}`
    );

    return response;
  }
}
