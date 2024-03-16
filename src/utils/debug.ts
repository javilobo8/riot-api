import debug from 'debug';

export const createDebug = (namespace: string) =>
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
  debug(`riot-api:${namespace}`);
