import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {get} from 'lodash';

import {history} from '../helper';
import {getSMAMOToken}from '../actions/getSMAMOToken';
import PorMenu from '../kits/porMenu';
import Account from './account';
import {USER_TOKEN, CODE_TOLEN, MENU_ASSET_ITEM, MENU_ASSET_NAME, FETCH_MENU_ASSET} from '../constants/navigationConstants';

export interface NavigationProps {
  menu:any,
  prePath?: any,
  getToken?:any,
  token?:any,
  dispatch: any,
  tokenCallback: any,
}

const LStorage = window.localStorage;
const SStorage = window.sessionStorage;
class Navigation extends React.Component<NavigationProps, object> {
  static propTypes: NavigationProps;
  state: any;
  constructor(props:any) {
    super(props);
    this.handleMenuClick=this.handleMenuClick.bind(this);
    this.state = {
      account: {},
      checkedMenuCode:null,
      scroll:false,
    }
  };

  componentDidMount() {
    const {tokenCallback} = this.props;
    this.props.getToken((profile: object) => {
      this.setState({
        account: profile
      });
      tokenCallback(profile);
    });

    history.listen((route: any)=>{
      let menuItem=window.localStorage.getItem(MENU_ASSET_ITEM);
      if(menuItem !== null){
        let path=menuItem?JSON.parse(menuItem).routePath:null;
        if(route.pathname.indexOf(path)!==0){
          let menuData=window.localStorage.getItem(MENU_ASSET_NAME);
          if(menuData !== null){
            let currentData=JSON.parse(menuData);
            let currentDataItem=currentData.find((item:any)=>route.pathname.indexOf(`/pc${item.routePath}`)===0);
            if(currentDataItem){
              let [first, ...rest]=currentDataItem.currentMenu;
              let pathAll=window.localStorage.getItem(FETCH_MENU_ASSET);
              if(pathAll !== null){
                JSON.parse(pathAll).forEach((item:any)=>{
                  if(item.assetName === first){
                    this.setState({
                      checkedMenuCode:item.assetCode
                    });
                  }
                })
              }
              window.localStorage.setItem(MENU_ASSET_ITEM, JSON.stringify({
                routePath:currentDataItem.routePath,
                currentMenu:rest
              }));
            }
          }
        }
      }
    });
  }

  renderMenu(item:any) {
    if(item.children.length===0) {
      return <PorMenu.Item
        key={item.assetCode}
        routePath={item.routePath}
        blank={item.redirectBlankFlag}
        isToken={item.redirectTokenFlag}
      >
        {item.assetName}
      </PorMenu.Item>;
    }
    return (
      <PorMenu.SubMenu
        key={item.assetCode}
        routePath={item.routePath}
        title={item.assetName}
        blank={item.redirectBlankFlag}
        isToken={item.redirectTokenFlag}
      >
        {
          item.children.map((child:any)=>this.renderMenu(child))
        }
      </PorMenu.SubMenu>
    );
  }

  handleMenuClick(item:any, currentMenu:any, checkedMenuCode: any){
    let token=JSON.stringify(window.localStorage.getItem(USER_TOKEN)).split(' ');
    let accessToken=token[1].split('"');
    if(item.props.blank===1){
      window.open(`${item.props.routePath}?access_token=${accessToken[0]}`,"_blank");
    }else {
      this.setState({
        checkedMenuCode
      });
      LStorage.setItem(MENU_ASSET_ITEM,JSON.stringify({
        routePath:item.props.routePath,
        currentMenu:currentMenu.splice(1)
      }));
    }
  }

  render() {
    const {menu, dispatch}=this.props;
    const {account} = this.state;
    return (
      <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
        {
          menu.length > 0 && (
            <PorMenu onClick={this.handleMenuClick}>
              {
                menu.map((item:any)=>{
                  return this.renderMenu(item)
                })
              }
            </PorMenu>
          )
        }
        <Account
          firstName={account.firstName}
          lastName={account.lastName}
          role={account.role}
          dispatch={dispatch}
        />
      </div>
    );
  }
}

Navigation.propTypes = {
  menu:PropTypes.any.isRequired,
  getToken: PropTypes.func.isRequired,
  prePath: PropTypes.string,
  dispatch: PropTypes.func,
  tokenCallback: PropTypes.func
};

const mapStateToProps = (state: any) => {
  return {
    prePath: get(state, 'error.prePath'),
    menu:get(state, 'menu.menu'),
    token:get(state, 'token')
  };
};

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return ({
    getToken: (argu: any)=>(dispatch(getSMAMOToken(argu))),
    dispatch: dispatch,
    tokenCallback: ownProps.tokenCallback
  })
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);
