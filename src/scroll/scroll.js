import React, { Fragment } from 'react';
import './scroll.css';
// import Images from '../Header/image';

const Scroll = () => {
  const Click = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  }
  return (
    <Fragment>
        <div className='scroll'>
            <button onClick={Click}>
             <i class='fas fa-angle-double-up'></i>
            </button>
        </div>
    </Fragment>
  )
}

export default Scroll;
