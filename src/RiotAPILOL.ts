import { AxiosInstance, CreateAxiosDefaults, default as axios } from 'axios';

import { RequestHandler } from './RequestHandler';
import { EndpointParser } from './EndpointParser';

// Riot
import { RiotAccount } from './services/riot/RiotAccount';

// League of Legends
import { LOLSummoner } from './services/lol/LOLSummoner';
import { LOLLeague } from './services/lol/LOLLeague';
import { LOLMatch } from './services/lol/LOLMatch';

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
  }
}

const api = new RiotAPILOL({ apiKey: '1234151' });
