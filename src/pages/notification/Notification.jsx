import React from 'react'
import RightSidebar from '../../components/rightbar/RightSidebar';
import Left from './Left';
import Main from './Main';
import './notification.css';

function Notification() {
  return (
    <div className='notification container'>
      <Left/>
      <Main/>
      <RightSidebar/>
    </div>
  )
}

export default Notification
