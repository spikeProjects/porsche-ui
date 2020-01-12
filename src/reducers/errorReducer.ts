import {API_ERROR_RESET, API_ERROR} from '../constants';

export default (state: any = {
  isError: false,
  code: null,
  message: null,
  prePath: '/'
}, action: any) => {
  switch (action.type) {
  case API_ERROR:
    return {
      ...state,
      isError: true,
      code: action.code,
      message: action.message,
      prePath: action.prePath
    };

  case API_ERROR_RESET:
    return {
      ...state,
      isError: false,
      code: null,
      message: null
    };

  default:
    return state;
  }
};
