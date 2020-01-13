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

class Welcome extends Component {
  render() {
    return <div>
      <h2>Welcome to Porsche UI react
        <img className="what" src={require('./assets/svg/add.svg')} />
        <img className="here" src={require("./assets/images/porscheIcon.png")} />
      </h2>
    </div>
  }
}

export default {
  // actions
  getSMAMOToken,
  fetchAccount,

  asyncActionCreator,
  fetchRoleAssetDigest,
  PorMenu,
  queryObject,
  toQueryParam,
  api
};

ReactDOM.render(
  <Welcome />
, document.getElementById('root'));
