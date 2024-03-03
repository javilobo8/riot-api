export interface Response<T> {
  data: T;
  status: number;
  statusText: string;
  headers: Record<string, string>;
}
