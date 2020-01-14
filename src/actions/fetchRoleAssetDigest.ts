import {MENU_ASSET_NAME, GET_ROLE_ASSET_DIGEST, FETCH_MENU_ASSET, PATH_ALL} from '../constants/navigationConstants';
import {getPath, getMenu} from '../utils/common';
import {api} from "../helper";

export const digestRoleAssetsData = (origin: any, dispatch: any, after?: any) => {
  let data = !!after ? after : origin.map((item: any)=>{
    return Object.assign({},{
      assetCode: item.clientInfo.clientCode,
      assetName: item.clientInfo.clientName,
      routePath: item.clientInfo.entryUrl,
      redirectBlankFlag: item.clientInfo.redirectBlankFlag,
      redirectTokenFlag: item.clientInfo.redirectTokenFlag,
      children: item.assetList
    });
  });
  dispatch({
    type: GET_ROLE_ASSET_DIGEST,
    payload: data
  });
  window.localStorage.setItem(PATH_ALL,JSON.stringify(getPath(data)));
  window.localStorage.setItem(FETCH_MENU_ASSET,JSON.stringify(data));
  window.localStorage.setItem(MENU_ASSET_NAME,JSON.stringify(getMenu(data)));
};

export const fetchRoleAssetDigest = (params: any) => (dispatch: any) => {
  return api.get('/ss-usercenter/api/user/roleAsset/group/digest',params).then((res: any) => {
    if(res.code==='0'){
      digestRoleAssetsData(res.data, dispatch);
    }
  });
};
