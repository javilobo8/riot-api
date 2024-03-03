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
   * Get a summoner by PUUID.
   *
   * @param {string} region region
   * @param {string} puuid account puuid
   * @returns {Promise<Response<SummonerDTO>>}
   */
  public async byPuuid(
    region: string,
    puuid: string
  ): Promise<Response<SummonerDTO>> {
    const host = this.endpointParser.region(region);
    const response = await this.requestHandler.request<SummonerDTO>(
      `${host}/lol/summoner/v4/summoners/by-puuid/${puuid}`
    );

    return response;
  }

  /**
   * Get a summoner by summoner ID
   *
   * @param {string} region region
   * @param {string} summonerId summoner ID
   * @returns {Promise<Response<SummonerDTO>>}
   */
  public async byId(
    region: string,
    summonerId: string
  ): Promise<Response<SummonerDTO>> {
    const host = this.endpointParser.region(region);
    const response = await this.requestHandler.request<SummonerDTO>(
      `${host}/lol/summoner/v4/summoners/${summonerId}`
    );

    return response;
  }
}
