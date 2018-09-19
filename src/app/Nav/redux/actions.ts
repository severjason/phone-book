import { AppNavAction } from './interfaces';
import { FINISHED, STARTED } from './types';

export const startSearch = (input: string): AppNavAction => ({
  type: STARTED,
  payload: input,
});

export const finishSearch = (): AppNavAction => ({
  type: FINISHED,
});
