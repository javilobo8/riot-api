import { expect, it, describe } from 'vitest';

import * as RiotAPI from '../src';

import { RiotAPILOL } from '../src/RiotAPILOL';
import { DDragonAPI } from '../src/DDragonAPI';

describe('package', () => {
  it('should export classes', () => {
    expect(RiotAPI.RiotAPILOL).toEqual(RiotAPILOL);
    expect(RiotAPI.DDragonAPI).toEqual(DDragonAPI);
  });
});
