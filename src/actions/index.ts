import {USER_CLIENT_ID, USER_ID, USER_TOKEN} from '../constants/navigationConstants';
import {api, ppnLoginUrl} from "../helper";

export * from './accountActions';
export * from './asyncActionCreator';
export * from './globalActions';
export * from './fetchRoleAssetDigest';
export * from './getSMAMOToken';

//TODO: differ between HC and PC
export const logout = (storageProfile = () => {}) => (dispatch: any, getState: any) => {
  const account = {
    clientId: window.localStorage.getItem(USER_CLIENT_ID),
    userId: window.localStorage.getItem(USER_ID)
  };
  return api.post(`/ss-usercenter/api/user/loginOut?clientId=${account.clientId}&userId=${account.userId}`)
    .then((res: any) => {
      if (res.code === '0') {
        localStorage.removeItem(USER_TOKEN);
        storageProfile();
        window.location.href = ppnLoginUrl;
      }
    });
};

