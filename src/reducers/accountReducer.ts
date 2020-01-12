import {
  UPDATE_ACCOUNT_SUCCESS,
  UPDATE_ACCOUNT_FAILURE,
} from '../constants';

import roles from '../constants/roles';

const initialState = {
  uid: '',
  role: '',
  firstName: '',
  lastName: '',
  outboundAuthorized: false,
};

export default (state: any = initialState, action: any) => {
  switch (action.type) {
    case UPDATE_ACCOUNT_SUCCESS: {
      return {
        ...state,
        // uid: action.data.uid,
        // role: action.data.role,
        // firstName: action.data.firstName,
        // lastName: action.data.lastName,
        // outboundAuthorized: action.data.outboundAuthorized
        ...action.data
      };
    }
    case UPDATE_ACCOUNT_FAILURE: {
      return {
        ...state,
        uid: '',
        role: roles.NOT_AUTHENTICATE,
        firstName: '',
        lastName: '',
        outboundAuthorized: false
      };
    }
    default: {
      return state;
    }
  }
};


