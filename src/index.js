import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
  getToken,
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
        <img className="what" src={require('./assets/svg/react.svg')} />
        <img className="here" src={require("./assets/images/image.jpg")} />
      </h2>
    </div>
  }
}

export default {
  getToken,
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
