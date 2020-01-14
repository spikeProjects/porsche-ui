import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
  getSMAMOToken,
  fetchAccount,
  asyncActionCreator,
  fetchRoleAssetDigest,
} from './actions'
import {PorMenu} from './kits';
import {
  queryObject,
  toQueryParam,
  api
} from './helper';

import {
  Account,
  PageBackdrop,
  Header,
  Navigation
} from './components';

class Welcome extends Component {
  render() {
    return <div>
      <h2>Welcome to Porsche UI react</h2>
    </div>
  }
}
ReactDOM.render(
  <Welcome />
  , document.getElementById('root')
);

export default {
  // actions
  getSMAMOToken,
  fetchAccount,

  // actions
  getSMAMOToken,
  fetchAccount,

  //kits
  PorMenu,
  // components
  Account,
  PageBackdrop,
  Header,
  Navigation,
  // helpers
  asyncActionCreator,
  fetchRoleAssetDigest,
  queryObject,
  toQueryParam,
  api,

  asyncActionCreator,
  fetchRoleAssetDigest,
  PorMenu,
  queryObject,
  toQueryParam,
  api
};

export {
  Account,
  PageBackdrop,
  Header,
  Navigation,
}
