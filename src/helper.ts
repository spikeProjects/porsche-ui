import axios from 'axios';
import {includes} from 'lodash';
import {createBrowserHistory, createHashHistory} from 'history';
import {message} from 'antd';

import {PPN_LOGIN} from './constants/globalConstants';
import {USER_TOKEN} from './constants/navigationConstants';
import baseUrl from './utils/baseUrl';
import {titleCase} from './utils/common';

export const history = createBrowserHistory();
export const hashHistory = createHashHistory();

export const ppnLoginUrl = process.env.NODE_ENV==='development' ? 'https://ppnlite.porsche.com/ppnmda/login.do': 'https://ppn.porsche.com/ppnmda/login.do';

// the authorize algorithm goes here
export const authorized = (allowed: any, currentRole: any) => includes(allowed, currentRole);

export const queryObject = () => {
  let codeData: any = {};
  window.location.search.replace(/([^?&=]+)=([^&]+)/g, (_, k, v) => codeData[k] = v);
  return codeData;
};

const axiosInstance: any = axios.create({
  baseURL: baseUrl,
  timeout: 5000,
  withCredentials: true,
  responseType: 'json',
  // proxy: {
    // host: ,
    // port: 8888
  // }
});

axiosInstance.interceptors.request.use(function (config: any) {
  // 在发送请求之前做些什么
  let headers=Object.assign({},config.headers,{
    Authorization: window.localStorage.getItem(USER_TOKEN)  // token
  });
  if(config.url.indexOf("/ss-utilitycenter/v1/file")>-1){
    config.baseURL='';
  }
  return Object.assign({},config,{headers});
}, function (error: any) {
  return Promise.reject(error);
});

axiosInstance.interceptors.response.use(function (response: any) {
  // 对响应数据做点什么
  let refreshToken=response.headers["x-access-token"];
  let tokenType=response.headers["x-token-type"];
  let token=window.localStorage.getItem(USER_TOKEN);
  if(refreshToken && refreshToken!==token){
    window.localStorage.setItem(USER_TOKEN ,`${titleCase(tokenType)} ${refreshToken}`);
  }
  return response;
}, function (error: any) {
  return Promise.reject(error);
});

export const toQueryParam = (queryParams: any) => {
  const params = new URLSearchParams();
  Object.keys(queryParams).forEach(key => {
    if (queryParams[key]) {
      params.append(key, queryParams[key]);
    }
  });
  return params;
};

export const api = {
  /**
   * @param: url
   * @param: method: get | post | put | delete | head | options | patch
   * @param: headers
   * @param: queryParams
   * ...: responseType/
   */
  request: (argu: any) => {
    let config: any = {};
    const {url, method, queryParams, data, ...rest}=argu;
    if (!argu.url) {
      throw new Error('No request url');
    } else {
      config.url = url
    }
    if (argu.method) {
      config.method = method;
    }
    if (queryParams) {
      config.params = toQueryParam(queryParams);
    }
    if (data) {
      config.data = data;
    }
    config = Object.assign({},config,{...rest});

    return axiosInstance.request(config)
      .then((res: any) => {
        return Promise.resolve(res.data);
      })
      .catch((err: any) => {
        if (err.response) {
          if (err.response.data && err.response.data.code) {
            if(err.response.data.code === 401 ){
              window.localStorage.clear();
              window.sessionStorage.clear();
              // TODO: redirect to login, to get the url of PPN login
              message.error("token失效，请重新登录");//先暂时做个提示，方便清楚token已失效
              history.push(PPN_LOGIN);
              // window.location.href = PPN_LOGIN;
            }else {
              message.error(err.response.data.message);  // TBD
            }
          }else {
            message.error(err.response.statusText);
          }
        } else {
          message.error("请求超时，请稍后再试");
        }
        return Promise.reject(err);
      });
  },

  get: (url: string, queryParams = {}, config?: any) => {
    return api.request({
      url: url,
      queryParams: queryParams,
      ...config
    });
  },

  post: (url: string, data?: any, config?: any, queryParams = {}) => {
    return api.request({
      url: url,
      method: 'post',
      queryParams: queryParams,
      data: data,
      ...config
    });
  },

  put: (url: string, data: any, config?: any) => {
    return api.request({
      url: url,
      method: 'put',
      data: data,
      ...config
    });
  },

  del: (url: string, data: any, config?: any) => {
    return api.request({
      url: url,
      method: 'delete',
      data: data,
      ...config
    });
  },

  // Be careful to use this function
  changeGlobalAxiosInstance: (params: any) => {
    Object.keys(params).forEach(element => {
      axiosInstance.defaults[element] = params[element];
    });
  }
};
