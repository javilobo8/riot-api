# @javilobo8/riot-api

[![npm package][npm-img]][npm-url]
[![Build Status][build-img]][build-url]
[![Downloads][downloads-img]][downloads-url]
[![Issues][issues-img]][issues-url]
[![Code Coverage][codecov-img]][codecov-url]

Another Riot API wrapper for Node.js.

## Features

* Fully typed
* Promise-based
* Constants
* Axios based requests

## TODO

* Add replacement for DDragon CDN host
* Add Redis cache
* Parse response and error Rate Limit headers

## Installation

```bash
npm install @javilobo8/riot-api
```

## Usage

```ts
import { RiotAPILOL, DDragonAPI } from '@javilobo8/riot-api';

// RiotAPILOL
const riotApi = new RiotAPILOL({
  apiKey: 'RGAPI-XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX',
});

const accountResponse = await riotApi.account.byRiotId('EUW', 'javilobo8', 'zoso');
/*
{
  data: {
    puuid: 'XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX',
    gameName: 'javilobo8',
    tagLine: 'zoso',
  },
  status: 200,
  statusText: 'OK',
  headers: {
    'x-app-rate-limit': 'XX:XX,XX:XX',
    'x-method-rate-limit': 'XX:XX,XX:XX',
    'x-app-rate-limit-count': 'XX:XX,XX:XX',
    'x-method-rate-limit-count': 'XX:XX,XX:XX',
    ...
  },
}
*/

// DDragonAPI
const ddragonApi = new DDragonAPI();

const versionResponse = await ddragonApi.ddragon.getCurrentVersion();
/*
{
  data: '11.16.1', // Current patch version
  status: 200,
  statusText: 'OK',
  headers: {
    ...
  },
}
*/
```

Base package: [@javilobo8/riot-api](https://github.com/javilobo8/riot-api)

[build-img]:https://github.com/javilobo8/riot-api/actions/workflows/release.yml/badge.svg
[build-url]:https://github.com/javilobo8/riot-api/actions/workflows/release.yml
[downloads-img]:https://img.shields.io/npm/dt/@javilobo8/riot-api
[downloads-url]:https://www.npmtrends.com/@javilobo8/riot-api
[npm-img]:https://img.shields.io/npm/v/@javilobo8/riot-api
[npm-url]:https://www.npmjs.com/package/@javilobo8/riot-api
[issues-img]:https://img.shields.io/github/issues/javilobo8/riot-api
[issues-url]:https://github.com/javilobo8/riot-api/issues
[codecov-img]:https://codecov.io/gh/javilobo8/riot-api/branch/main/graph/badge.svg
[codecov-url]:https://codecov.io/gh/javilobo8/riot-api