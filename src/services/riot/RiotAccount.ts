import { EndpointParser } from '../../EndpointParser';
import { RequestHandler } from '../../RequestHandler';
import { AccountDTO } from '../../interfaces/account';
import { Response } from '../../interfaces/shared';

export class RiotAccount {
  constructor(
    private readonly requestHandler: RequestHandler,
    private readonly endpointParser: EndpointParser
  ) {}

  /**
   * Get account by PUUID
   *
   * @param {string} region region
   * @param {string} puuid PUUID of the account
   * @returns {Promise<Response<AccountDTO>>}
   */
  public async byPuuid(
    region: string,
    puuid: string
  ): Promise<Response<AccountDTO>> {
    const host = this.endpointParser.regionToCluster(region);
    const response = await this.requestHandler.request<AccountDTO>(
      `${host}/riot/account/v1/accounts/by-puuid/${puuid}`
    );

    return response;
  }

  /**
   * Get account by gameName and tagLine
   *
   * @param {string} region region
   * @param {string} gameName Game name of the account
   * @param {string} tagLine Tag line of the account
   * @returns {Promise<Response<AccountDTO>>}
   */
  public async byRiotId(
    region: string,
    gameName: string,
    tagLine: string
  ): Promise<Response<AccountDTO>> {
    const host = this.endpointParser.regionToCluster(region);
    const response = await this.requestHandler.request<AccountDTO>(
      `${host}/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}`
    );

    return response;
  }
}
