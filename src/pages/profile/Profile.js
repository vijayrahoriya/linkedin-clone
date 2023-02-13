import React from 'react'
import RightSidebar from '../../components/rightbar/RightSidebar'
import MainProfile from './MainProfile'
import './profile.css'

function Profile() {
  return (
    <div className='profile container'>
        <MainProfile/>
      <RightSidebar/>
    </div>
  )
}

export default Profile
