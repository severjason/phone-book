import { combineReducers } from 'redux';
import homeReducer from '../app/Home/redux/reducer';

const rootReducer = combineReducers<any>({
  contactsState: homeReducer,
});

export default rootReducer;
