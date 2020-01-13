import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {USER_PROFILE, USER_TOKEN} from '../constants/navigationConstants';
import {getRoleName} from '../constants/roles';
import {logout} from '../actions'

export interface propTypes {}
class Account extends Component<propTypes, any> {
  static propTypes = {};

  render() {
    const uerProfileStr = window.localStorage.getItem(USER_PROFILE);
    const userProfile = JSON.parse(uerProfileStr) || {};
    const {firstName, lastName, role} = userProfile;
    return (
      <div className='account-info'>
        <span className="name-text">
          {getRoleName(role)}
        </span>
        <span className="name-text">
          {lastName} {firstName}
        </span>
        <span className="role-text">
          <button
            className="logout-link"
            onClick={() => {
              this.props.dispatch(logout());
            }}
          >
            注销
          </button>
        </span>
      </div>
    );
  }
}

Account.propTypes = {
  lastName: PropTypes.string,
  firstName: PropTypes.string,
  role: PropTypes.string
};

export default withRouter(Account);
