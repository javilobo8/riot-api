import { EndpointParser } from './../../EndpointParser';
import { RequestHandler } from '../../RequestHandler';
import { MasteryDTO } from '../../interfaces/mastery';
import { Response } from '../../shared';

export class LOLMastery {
  constructor(
    private readonly requestHandler: RequestHandler,
    private readonly endpointParser: EndpointParser
  ) {}

  /**
   * Get the masteries for the given puuid
   *
   * @param {string} region region
   * @param {string} puuid puuid
   * @returns
   */
  public async masteries(
    region: string,
    puuid: string
  ): Promise<Response<MasteryDTO[]>> {
    const host = this.endpointParser.region(region);
    const response = await this.requestHandler.request<MasteryDTO[]>(
      `${host}/lol/champion-mastery/v4/champion-masteries/by-puuid/${puuid}`
    );

    return response;
  }

  /**
   * Get the top masteries for the given puuid
   *
   * @param {string} region region
   * @param {string} puuid puuid
   * @param {number} count count of top champions
   * @returns {Promise<Response<MasteryDTO[]>>}
   */
  public async topMastery(
    region: string,
    puuid: string,
    count: number = 3
  ): Promise<Response<MasteryDTO[]>> {
    const host = this.endpointParser.region(region);
    const response = await this.requestHandler.request<MasteryDTO[]>(
      `${host}/lol/champion-mastery/v4/champion-masteries/by-puuid/${puuid}/top`,
      { count: count.toString() }
    );

    return response;
  }

  /**
   * Get the mastery of the championId for the given puuid.
   *
   * @param {string} region region
   * @param {string} puuid puuid
   * @param {number} championId number
   * @returns {Promise<Response<MasteryDTO>>}
   */
  public async masteryByChampionId(
    region: string,
    puuid: string,
    championId: number
  ): Promise<Response<MasteryDTO>> {
    const host = this.endpointParser.region(region);
    const response = await this.requestHandler.request<MasteryDTO>(
      `${host}/lol/champion-mastery/v4/champion-masteries/by-puuid/${puuid}/by-champion/${championId}`
    );

    return response;
  }

  /**
   * Get the mastery scores for the given puuid.
   *
   * @param {string} region region
   * @param {string} puuid puuid
   * @returns {Promise<Response<number>>}
   */
  public async scores(
    region: string,
    puuid: string
  ): Promise<Response<number>> {
    const host = this.endpointParser.region(region);
    const response = await this.requestHandler.request<number>(
      `${host}/lol/champion-mastery/v4/scores/by-puuid/${puuid}`
    );

    return response;
  }
}
