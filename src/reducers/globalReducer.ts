import {combineReducers} from 'redux';
import loading from './loading';
import account from './accountReducer';
import error from './errorReducer';
import menu from './menu';
import token from './token';

export default combineReducers({
  loading,
  error,
  account,
  menu,
  token
});
