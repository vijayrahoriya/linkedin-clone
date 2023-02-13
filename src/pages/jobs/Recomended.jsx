import React from 'react'
import './recomended.css';
import SavedIcon from '@mui/icons-material/Bookmark'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

function Recomended() {
  return (
    <div className='recommended'>
      <h4>Recommended for you</h4>
      <span className='info'>Based on your profile and search history</span>
      <div className="line">
        <div className="left">
            <div className="image">
            <img src="https://images.unsplash.com/photo-1626019240499-926f8bf154c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGF0YXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            </div>
            <div className="content">
                <h5>Web Development Intern</h5>
                <span>Blue Ocean Innovation pvt ltd.</span>
                <span className="country">India(Remote)</span>
                <span className="time"><span>1 hour ago</span> * <LinkedInIcon style={{color:'blue'}}/> Easy Apply</span>
            </div>
        </div>
        <div className="right">
            <SavedIcon/>
        </div>
      </div>
      <hr/>
      <div className="line">
        <div className="left">
            <div className="image">
            <img src="https://images.unsplash.com/photo-1626019240499-926f8bf154c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGF0YXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            </div>
            <div className="content">
                <h5>Web Development Intern</h5>
                <span>Blue Ocean Innovation pvt ltd.</span>
                <span className="country">India(Remote)</span>
                <span className="time"><span>1 hour ago</span> * <LinkedInIcon style={{color:'blue'}}/> Easy Apply</span>
            </div>
        </div>
        <div className="right">
            <SavedIcon/>
        </div>
      </div>
      <hr/>
      <div className="line">
        <div className="left">
            <div className="image">
            <img src="https://images.unsplash.com/photo-1626019240499-926f8bf154c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGF0YXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            </div>
            <div className="content">
                <h5>Web Development Intern</h5>
                <span>Blue Ocean Innovation pvt ltd.</span>
                <span className="country">India(Remote)</span>
                <span className="time"><span>1 hour ago</span> * <LinkedInIcon style={{color:'blue'}}/> Easy Apply</span>
            </div>
        </div>
        <div className="right">
            <SavedIcon/>
        </div>
      </div>
      <hr/>
    </div>
  )
}

export default Recomended
