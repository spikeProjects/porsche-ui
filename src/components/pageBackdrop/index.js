import React from 'react';

import './index.scss'

const PageBackdrop = (props) => {
  let className='page-backdrop';
  if(props.type==='gray')className='page-backdrop-gray';
  if(props.type==='dark')className='page-backdrop-dark';
  if(props.type==='search')className='page-backdrop-search';
  return (
    <div className={className}>
      <div className={props.type==='normal'?'page-backdrop-normal':'page-backdrop-content'}>
        {props.children}
      </div>
    </div>
  );
};
export default PageBackdrop;
