import React from 'react'
import './rightsidebar.css'
import InfoIcon from '@mui/icons-material/Info'
import ArrowDown from '@mui/icons-material/KeyboardArrowDown'
import DotsIcon from '@mui/icons-material/MoreHoriz'
import KeyIcon from '@mui/icons-material/Key'
import LinkedinIcon from '@mui/icons-material/LinkedIn'

function RightSidebar() {
    return (
        <div className='rightsidebar'>
            <div className="top">
                <header>
                    <span>LinkedIn News</span>
                    <InfoIcon />
                </header>
                <ul>
                    <li>
                        <div className='circle'>o</div>
                        <div className='info'><p>Making students future-ready</p>
                            <span>Top news * 1,066 readers</span>
                        </div>
                    </li>
                    <li>
                        <div className='circle' >o</div>
                        <div className='info'><p>It cos firm up background checks</p>
                            <span>2d ago * 21,066 readers</span>
                        </div>
                    </li>
                    <li>
                        <div className='circle' >o</div>
                        <div className='info'><p>India to grow at 6.1%: IMF</p>
                            <span>1d ago * 1,366 readers</span>
                        </div>
                    </li>
                </ul>
                <span className='show'>Show more <ArrowDown /></span>
            </div>
            <div className='data'>
            <div className="ad-box">
                <div className='ad'>Ad <DotsIcon/></div>
                <span>Vijay, unlock your full potential with linkedin<br></br> premium</span>
                <div className="content">
                    <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                    <KeyIcon className='key'/>
                </div>
                <p>See who's viewed your profile in the last<br/> 90 days</p>
                <button>Try for free</button>
            </div>
            <div className='footer'>
                <span>About</span>
                <span>Accessiblity</span>
                <span>Help Center</span>
                <span>Privacy & Terms</span>
                <span>Ad Choice</span>
                <span>Advertising</span>
                <span>Business Services</span>
                <span>More</span>
                <p><span>Linked <LinkedinIcon className='linkedin'/></span> Linkedin Corporation &copy; 2023</p>
            </div>
            </div>
        </div>
    )
}

export default RightSidebar
