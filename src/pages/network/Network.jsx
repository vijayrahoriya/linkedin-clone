import React from 'react'
import MainPage from './MainPage';
import './network.css';
import NetwrokSidebar from './NetwrokSidebar';

function Network() {
  return (
    <div className='network container'>
      <NetwrokSidebar/>
      <MainPage/>
    </div>
  )
}

export default Network
