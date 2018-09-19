import { AppContact } from '../../Contact/interfaces';

export interface AppHomeAction {
  type: string;
  payload?: object[];
}

export interface AppHomeState {
  isLoading: boolean;
  error: null | object;
  contacts: AppContact[];
}

export interface AppHomeProps {
  isLoading: boolean;
  contacts: AppContact[];
  error: null | object;
}
