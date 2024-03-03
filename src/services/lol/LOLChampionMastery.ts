import { EndpointParser } from '../../EndpointParser';
import { RequestHandler } from '../../RequestHandler';
import { ChampionMasteryDTO } from '../../interfaces/championMastery';
import { Response } from '../../interfaces/shared';

export class LOLChampionMastery {
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
  ): Promise<Response<ChampionMasteryDTO[]>> {
    const host = this.endpointParser.region(region);
    const response = await this.requestHandler.request<ChampionMasteryDTO[]>(
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
    count = 3
  ): Promise<Response<ChampionMasteryDTO[]>> {
    const host = this.endpointParser.region(region);
    const response = await this.requestHandler.request<ChampionMasteryDTO[]>(
      `${host}/lol/champion-mastery/v4/champion-masteries/by-puuid/${puuid}/top`,
      count === 3 ? undefined : { count: count.toString() }
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
  ): Promise<Response<ChampionMasteryDTO>> {
    const host = this.endpointParser.region(region);
    const response = await this.requestHandler.request<ChampionMasteryDTO>(
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
