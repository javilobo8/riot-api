import https from 'https';
import { AxiosInstance, CreateAxiosDefaults, default as axios } from 'axios';

import { RequestHandler } from './RequestHandler';

import { DDragon } from './services/ddragon/DDragon';

interface DDragonAPIOptions {
  httpOptions?: CreateAxiosDefaults;
  insecure?: boolean;
}

export class DDragonAPI {
  private client: AxiosInstance;
  private requestHandler: RequestHandler;

  public ddragon: DDragon;

  constructor(private options: DDragonAPIOptions = {}) {
    this.client = axios.create({
      httpsAgent: new https.Agent({ rejectUnauthorized: !options.insecure }),
      ...options.httpOptions,
    });

    this.requestHandler = new RequestHandler(this.client);

    this.ddragon = new DDragon(this.requestHandler);
  }
}
