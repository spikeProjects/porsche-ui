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
    console.log(PorMenu);

    return <div>
      <h2>Welcome to Porsche UI react</h2>
    </div>
  }
}

// TODO: remove before releasex
// ReactDOM.render(
//   <Welcome />
//   , document.getElementById('box')
// );

// helpers
export default {
  asyncActionCreator,
  fetchRoleAssetDigest,
  queryObject,
  toQueryParam,
  api,
};

// actions
export {
  getSMAMOToken,
  fetchAccount,
}

//kits
export {
  PorMenu,
}

// components
export {
  Account,
  PageBackdrop,
  Header,
  Navigation,
}
