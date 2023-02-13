import React from 'react'
import RightSidebar from '../../components/rightbar/RightSidebar'
import NetwrokSidebar from '../network/NetwrokSidebar'
import './jobs.css'
import MainJobs from './MainJobs'

function Jobs() {
  return (
    <div className='jobs container'>
      <NetwrokSidebar/>
      <MainJobs/>
      <RightSidebar/>
    </div>
  )
}

export default Jobs
