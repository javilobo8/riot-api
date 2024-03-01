import { AxiosError } from 'axios';

export class ResponseError extends Error {
  public data: any;
  public status: number;
  public statusText: string;
  public headers: Record<string, string>;

  constructor(error: AxiosError) {
    super(error.message);
    this.data = error.response?.data;
    this.status = error.response?.status ?? 500;
    this.statusText = error.response?.statusText ?? 'Internal Server Error';
    this.headers = (error.response?.headers ?? {}) as Record<string, string>;
  }
}
