import {asyncActionCreator} from './asyncActionCreator';
import {resetError} from './globalActions';

const {
  updateAccountSuccess,
  // updateAccountFailure
} = asyncActionCreator('UPDATE_ACCOUNT');

export const fetchAccount = () => {
  return (dispatch) => {
    // return api.get('/api/account')
    //   .then((data: any) => {
    //     let params: any = queryObject();
    //     const role = params.role;
    //     // (cookie as any).save('uid', params.uid);
    //     // (cookie as any).save('token', '*********');

    //     data.uid = params.uid || data.uid;
    //     data.role = role;
    //     dispatch(updateAccountSuccess(data));
    //     dispatch(resetError());
    //   }).catch(error => {
    //     dispatch(updateAccountFailure(error.data));
    //   });
    const data = {'firstName':'USER','lastName':'DEALER','outboundAuthorized':'true','role':'ROLE_PCS_AGENT','uid':'zhengfang'};

    return Promise.resolve(data).then((res) => {
      dispatch(updateAccountSuccess(res));
      dispatch(resetError());
    });
  };
};

