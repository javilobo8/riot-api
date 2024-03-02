import { expect, it, describe } from 'vitest';

import { DDragonAPI } from '../src/DDragonAPI';
import { DDragon } from '../src/services/ddragon/DDragon';

describe('DDragonAPI', () => {
  it('should export all services', () => {
    const ddragonApi = new DDragonAPI();

    expect(ddragonApi.ddragon).toBeInstanceOf(DDragon);
  });
});
