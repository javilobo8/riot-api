import { AxiosError, AxiosInstance } from 'axios';
import { Response } from './shared';
import { ResponseError } from './errors';

export class RequestHandler {
  constructor(private client: AxiosInstance) {}

  public async request<T>(
    uri: string,
    params?: Record<string, string>
  ): Promise<Response<T>> {
    try {
      const response = await this.client.get<T>(uri, { params });
      return {
        data: response.data,
        status: response.status,
        statusText: response.statusText,
        headers: response.headers as Record<string, string>,
      };
    } catch (error) {
      throw new ResponseError(error as AxiosError);
    }
  }
}
