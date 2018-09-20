import * as types from './types';
import { AppContactAction } from '../interfaces';

export const toggleContact = (id: number): AppContactAction => ({
  type: types.TOGGLE_CONTACT_PHONES,
  payload: id,
});

export const deleteContact = (id: number): AppContactAction => ({
  type: types.DELETE_CONTACT,
  payload: id,
});