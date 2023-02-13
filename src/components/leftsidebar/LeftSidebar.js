import React from 'react'
import './leftsidebar.css'
import SavedIcon from '@mui/icons-material/Bookmark'

function LeftSidebar() {
  return (
    <div className='leftsidebar'>
      <div className="leftsidebar-info">
        <header>
            <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        </header>
        <p className="name">Vijay Prajapati</p>
        <span className="info">Student of University of Rajasthan , Web Developer</span>

        <hr/>

        <div className="connection">
            <div className="left">
            <span>Connection</span>
            <p>Grow your Network</p>
            </div>
            <div className="right">
                <span>10</span>
            </div>
        </div>

        <hr/>

        <div className="tools">
            <span>Access exclusive tools & insights</span>
            <span><div></div>Try Premium for free</span>
        </div>

        <hr/>

        <div className="items">
            <SavedIcon/>
            My items
        </div>
      </div>
      <div className="bottom">
        <p>Groups</p>
        <p>Events <span>+</span></p>
        <p>Followed Hashtags</p>
        <hr/>
        <button>Discover more</button>
      </div>
    </div>
  )
}

export default LeftSidebar
