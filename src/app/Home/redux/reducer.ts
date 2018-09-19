import { AppHomeAction, AppHomeState } from '../interfaces';
import * as types from './types';

const INITIAL_STATE: AppHomeState = {
  isLoading: false,
  error: null,
  contacts: [],
};

export default function homeReducer(state: AppHomeState = INITIAL_STATE, action: AppHomeAction) {
  switch (action.type) {
    case types.FETCH_CONTACTS_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.FETCH_CONTACTS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        contacts: action.payload,
      };
    }
    case types.FETCH_CONTACTS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}