import { combineReducers } from 'redux';
import homeReducer from '../app/Home/redux/reducer';
import searchReducer from '../app/Nav/redux/reducer';

const rootReducer = combineReducers<any>({
  contactsState: homeReducer,
  searchState: searchReducer,
});

export default rootReducer;
