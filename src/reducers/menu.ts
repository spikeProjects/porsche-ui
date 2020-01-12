import {
  GET_ROLE_ASSET_DIGEST
} from '../constants';

export default (state = {
  menu: <any> []
}, action: any) => {
  switch (action.type) {
    case GET_ROLE_ASSET_DIGEST: {
      return {
        ...state,
        menu: action.payload
      };
    }
    default: {
      return state;
    }
  }
};


