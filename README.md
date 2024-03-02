# @javilobo8/riot-api

Another Riot API wrapper for Node.js.

## Features

* Fully typed
* Promise-based
* Constants
* Axios based requests

## TODO

* Add DDRAGON Support
* Add replacement for CDN host
* Add champions endpoint

## Installation

```bash
npm install @javilobo8/riot-api
```

## Usage

```ts
import { RiotAPILOL } from '@javilobo8/riot-api';

const riotApi = new RiotAPI({
  apiKey: 'RGAPI-XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX',
});

const account = await riotApi.account.byRiotId('EUW', 'javilobo8', 'zoso');
```

Base package: [typescript-npm-package-template](https://github.com/ryansonshine/typescript-npm-package-template)