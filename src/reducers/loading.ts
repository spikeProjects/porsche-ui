import {
  IS_LOADING
} from '../constants';

const initialState = {
  isLoading:false
};

export default (state: any = initialState, action: any) => {
  switch (action.type) {
    case IS_LOADING: {
      return {
        ...state,
        isLoading: action.payload
      };
    }
    default: {
      return state;
    }
  }
};


