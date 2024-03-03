import { AxiosInstance, CreateAxiosDefaults, default as axios } from 'axios';

import { RequestHandler } from './RequestHandler';
import { EndpointParser } from './EndpointParser';

// Riot
import { RiotAccount } from './services/riot/RiotAccount';

// League of Legends
import { LOLSummoner } from './services/lol/LOLSummoner';
import { LOLLeague } from './services/lol/LOLLeague';
import { LOLMatch } from './services/lol/LOLMatch';
import { LOLSpectator } from './services/lol/LOLSpectator';
import { LOLChampionMastery } from './services/lol/LOLChampionMastery';

// Teamfight Tactics

interface RiotAPILOLOptions {
  apiKey: string;
  httpOptions?: CreateAxiosDefaults;
}

export class RiotAPILOL {
  private client: AxiosInstance;
  private requestHandler: RequestHandler;
  private endpointParser: EndpointParser;

  public account: RiotAccount;
  public summoner: LOLSummoner;
  public league: LOLLeague;
  public match: LOLMatch;
  public spectator: LOLSpectator;
  public championMastery: LOLChampionMastery;

  constructor(private options: RiotAPILOLOptions) {
    if (!options.apiKey) {
      throw new Error('API key is required');
    }

    this.client = axios.create({
      headers: {
        'X-Riot-Token': options.apiKey,
      },
    });

    this.requestHandler = new RequestHandler(this.client);
    this.endpointParser = new EndpointParser();

    this.account = new RiotAccount(this.requestHandler, this.endpointParser);
    this.summoner = new LOLSummoner(this.requestHandler, this.endpointParser);
    this.league = new LOLLeague(this.requestHandler, this.endpointParser);
    this.match = new LOLMatch(this.requestHandler, this.endpointParser);
    this.spectator = new LOLSpectator(this.requestHandler, this.endpointParser);
    this.championMastery = new LOLChampionMastery(
      this.requestHandler,
      this.endpointParser
    );
  }
}
