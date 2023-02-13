import React from 'react'
import './mainjob.css'
import DownArrwo from '@mui/icons-material/KeyboardArrowDown'
import Recomended from './Recomended'

function MainJobs() {
  return (
    <div className='mainjobs'>
      <div className="recent-jobs">
        <div className="top">
            <span>Recent job searches</span>
            <span>Clear</span>
        </div>
        <div className="job-info">
            <p>Web Designer * <span>46 New</span></p>
            <span className='address'>Alert On 3020004,Jaipur,Rajasthan,India * On-site * Remote and 1 more</span>
        </div>
        <hr/>
        <div className="job-info">
            <p>Web Designer * <span>46 New</span></p>
            <span className='address'>Alert On 3020004,Jaipur,Rajasthan,India * On-site * Remote and 1 more</span>
        </div>
        <hr/>
        <div className="job-info">
            <p>Frontend Developer * <span>62 New</span></p>
            <span className='address'>Alert On 3020004,Jaipur,Rajasthan,India * On-site * Remote and 1 more</span>
        </div>
        <hr/>
        <div className="but"><button>Show more <DownArrwo/></button></div>
      </div>
      <Recomended/>
      <Recomended/>
      <Recomended/>
      <Recomended/>
      <Recomended/>
    </div>
  )
}

export default MainJobs
