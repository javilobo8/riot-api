import { expect, it, describe, afterEach, vi } from 'vitest';
import axios from 'axios';
import nock from 'nock';

import { DDragon } from '../../../src/services/ddragon/DDragon';
import { RequestHandler } from '../../../src/RequestHandler';

describe('DDragon', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should export all services', () => {
    const ddragon = new DDragon(new RequestHandler(axios.create()));

    expect(ddragon.getCurrentVersion).toBeDefined();
    expect(ddragon.getVersions).toBeDefined();
  });

  describe('getCurrentVersion', () => {
    it('should return the current version', async () => {
      const ddragon = new DDragon(new RequestHandler(axios.create()));
      const versionsSpy = vi.spyOn(ddragon, 'getVersions');
      nock(ddragon['host'])
        .get('/api/versions.json')
        .reply(200, ['11.1.1', '11.1.0']);

      const version = await ddragon.getCurrentVersion();

      expect(version).toBe('11.1.1');
      expect(versionsSpy).toHaveBeenCalledOnce();
    });
  });

  describe('getVersions', () => {
    it('should return the current versions', async () => {
      const ddragon = new DDragon(new RequestHandler(axios.create()));
      nock(ddragon['host'])
        .get('/api/versions.json')
        .reply(200, ['11.1.1', '11.1.0']);

      const versionsResponse = await ddragon.getVersions();

      expect(versionsResponse.data).toEqual(['11.1.1', '11.1.0']);
    });

    it('should not call the endpoint twice', async () => {
      let calls = 0;
      const ddragon = new DDragon(new RequestHandler(axios.create()));
      nock(ddragon['host'])
        .get('/api/versions.json')
        .reply(200, () => {
          calls++;
          return ['11.1.1', '11.1.0'];
        });

      await ddragon.getVersions();
      const versionsResponse = await ddragon.getVersions();

      expect(versionsResponse.data).toEqual(['11.1.1', '11.1.0']);
      expect(calls).toBe(1);
    });
  });
});
