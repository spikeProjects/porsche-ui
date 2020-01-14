import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div className='header'>
        <div className='intermediate-baseline'>
          <div className='hr-line'></div>
          <div className='logo-wrapper'>
            <img src={require('../assets/images/logo-140@4x.png')} className='logo-image' alt='stylesheet' />
          </div>
          <div className='hr-line'></div>
        </div>
      </div>
    );
  }
}
