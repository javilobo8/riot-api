import { RequestHandler } from '../../RequestHandler';
import { ChampionsData } from '../../interfaces/ddragon';
import { Response } from '../../shared';

export class DDragon {
  private readonly host = 'https://ddragon.leagueoflegends.com';

  private versionsResponse?: Response<string[]>;
  private versionsDate: Date = new Date(0);
  private readonly versionsExpire: number = 1000 * 60 * 60; // 1h

  private championsResponse?: Response<ChampionsData>;
  private championsDate: Date = new Date(0);
  private readonly championsExpire: number = 1000 * 60 * 60; // 1h

  constructor(private readonly requestHandler: RequestHandler) {}

  /**
   * Get current CDN version
   *
   * @returns {Promise<string>}
   */
  public async getCurrentVersion(): Promise<string> {
    await this.getVersions();

    return this.versionsResponse?.data[0] as string;
  }

  /**
   * Get current CDN versions
   *
   * @returns {Promise<string>}
   */
  public async getVersions(): Promise<Response<string[]>> {
    if (
      this.versionsResponse &&
      new Date().getTime() - this.versionsDate.getTime() < this.versionsExpire
    ) {
      return this.versionsResponse;
    }
    const response = await this.requestHandler.request<string[]>(
      `${this.host}/api/versions.json`
    );

    this.versionsResponse = response;
    this.versionsDate = new Date();

    return response;
  }

  /**
   * Get champions
   *
   * @returns {Promise<string>}
   */
  public async getChampions(
    locale = 'en_US'
  ): Promise<Response<ChampionsData>> {
    if (
      this.championsResponse &&
      new Date().getTime() - this.championsDate.getTime() < this.championsExpire
    ) {
      return this.championsResponse;
    }

    const cdnVersion = await this.getCurrentVersion();
    const response = await this.requestHandler.request<ChampionsData>(
      `${this.host}/cdn/${cdnVersion}/data/${locale}/champion.json`
    );

    this.championsResponse = response;
    this.championsDate = new Date();

    return this.championsResponse;
  }
}
