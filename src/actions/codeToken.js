import {message} from 'antd';
import {api, queryObject} from "../helper";
import {USER_TOKEN, USER_CODE, CODE_TOLEN, USER_ID, USER_CLIENT_ID, FETCH_MENU_ASSET} from '../constants/navigationConstants';
import {fetchRoleAssetDigest, digestRoleAssetsData} from '.';
import {titleCase} from '../utils/common';
const local = window.localStorage;

const clientId = 'PC019802';
const userCode = local.getItem(USER_CODE);
let jsonStr = undefined;
export const getToken =()=> dispatch  => {
  const sessionCode = queryObject().code;

  const getter = function() {
    // TODO: S:smamo change
    api.get("/charging-service/permission/token/"+sessionCode).then(res => {
      const {code, data ,message:msg}=res;
      if(code==='0'){
        dispatch({
            type: CODE_TOLEN,
            payload: res
        });
        const {userId}=data;
        dispatch(fetchRoleAssetDigest({
          accountType:'PPN',
          clientId: clientId,
          userId
        }));
        local.setItem(USER_CODE, sessionCode);
        local.setItem(USER_TOKEN, titleCase(res.data.tokenType)+' '+res.data.accessToken);

        local.setItem(USER_ID, userId);
        local.setItem(USER_CLIENT_ID, clientId);
        return;
        // TODO: E:smamo change
      }
      message.error(msg);
    })
  };

  jsonStr = local.getItem(FETCH_MENU_ASSET);
  if (!!sessionCode) {
    if (userCode && (sessionCode === userCode) && jsonStr) {
      digestRoleAssetsData(undefined, dispatch, JSON.parse(jsonStr));
      return;
    } else {
      local.clear();
      window.sessionStorage.clear();
      getter();
    }
  } else {
    if (jsonStr === null) {
      return false;
    }
    digestRoleAssetsData(undefined, dispatch, JSON.parse(jsonStr));
  }
};
