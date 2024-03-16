import { AxiosError, AxiosInstance } from 'axios';
import { Response } from './interfaces/shared';
import { ResponseError } from './errors';
import { createDebug } from './utils/debug';

const debug = createDebug('RequestHandler');
const debugHeaders = createDebug('RequestHandler:headers');

export class RequestHandler {
  constructor(private client: AxiosInstance) {}

  public async request<T>(
    url: string,
    params?: Record<string, string>
  ): Promise<Response<T>> {
    try {
      debug('Requesting %s %o', url, params);
      const response = await this.client.get<T>(url, { params });
      debug('Response %s %s %s', url, response.status, response.data);
      debugHeaders(
        'Response headers %s %s',
        url,
        JSON.stringify(response.headers)
      );
      return {
        data: response.data,
        status: response.status,
        statusText: response.statusText,
        headers: response.headers as Record<string, string>,
      };
    } catch (error) {
      if (error instanceof AxiosError) {
        debugHeaders(
          'Response headers %s %s',
          url,
          JSON.stringify(error?.response?.headers)
        );
        throw new ResponseError(error);
      }
      throw error;
    }
  }
}
