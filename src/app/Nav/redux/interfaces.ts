import { AppContact } from '../../Contact/interfaces';
import { AppHomeAction } from '../../Home/interfaces';

export interface AppNavState {
  inputValue: string;
}

export interface AppSearchProps {
  isLoading: boolean;
  contacts: AppContact[];
  searchInput?: string;
}

export interface AppNavProps {
  inputValue: string;
}

export interface AppNavAction {
  type: string;
  payload?: string;
}

export interface AppSearchActions {
  startSearch: (input: string) => AppNavAction;
  finishSearch: () => AppNavAction;
  fetchContacts: () => AppHomeAction;
}