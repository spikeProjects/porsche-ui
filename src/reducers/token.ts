import {
  CODE_TOLEN
} from '../constants';

const initialState = {
  token:<any>[]
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case CODE_TOLEN: {
      return {
        ...state,
        token: action.payload
      };
    }
    default: {
      return state;
    }
  }
};


