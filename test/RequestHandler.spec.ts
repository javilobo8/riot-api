import { expect, it, describe, afterEach } from 'vitest';
import axios from 'axios';
import nock from 'nock';

import { RequestHandler } from '../src/RequestHandler';
import { ResponseError } from '../src';

describe('RequestHandler', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should make an http with the client', async () => {
    const client = axios.create();
    const requestHandler = new RequestHandler(client);
    nock('http://example.com')
      .get('/somepath')
      .reply(200, { message: 'Hello' }, { 'Custom-Header': 'Some value' });

    const response = await requestHandler.request(
      'http://example.com/somepath'
    );

    expect(response.data).toEqual({ message: 'Hello' });
    expect(response.status).toEqual(200);
    expect(response.headers['custom-header']).toEqual('Some value');
  });

  it('should throw ResponseError with the error', async () => {
    const client = axios.create();
    const requestHandler = new RequestHandler(client);
    nock('http://example.com')
      .get('/somepath')
      .reply(500, { error: 'Some error' }, { 'Custom-Header': 'Some value' });

    try {
      await requestHandler.request('http://example.com/somepath');
      expect.fail('Should have thrown an error');
    } catch (error: any) {
      if (error instanceof ResponseError) {
        expect(error).toBeInstanceOf(ResponseError);
        expect(error.data).toEqual({ error: 'Some error' });
        expect(error.headers['custom-header']).toEqual('Some value');
      } else {
        expect.fail('Should have thrown a ResponseError');
      }
    }
  });
});
