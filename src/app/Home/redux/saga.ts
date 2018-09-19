import { call, put } from 'redux-saga/effects';
import { AppHomeAction } from '../interfaces';
import { fetchData } from '../../../api';
import * as types from './types';

export function* fetchContacts(action: AppHomeAction) {
  try {
    const response: any = yield call(fetchData);
    console.log(response.data);
    yield put({
      type: types.FETCH_CONTACTS_SUCCESS,
      payload: response.data
    });
  } catch (error) {
    yield put({
      type: types.FETCH_CONTACTS_FAILURE,
      payload: error,
    });
  }
}