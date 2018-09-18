import * as types from './types';
import { AppHomeActions } from '../interfaces';

export const fetchContacts = (): AppHomeActions => ({
  type: types.FETCH_CONTACTS_REQUEST
});
