import React, { useEffect, useState } from 'react'
import LinkedinIcon from '@mui/icons-material/LinkedIn'
import SearchIcon from '@mui/icons-material/Search'
import HomeIcon from '@mui/icons-material/Home'
import UsersIcon from '@mui/icons-material/Group'
import JobIcon from '@mui/icons-material/BusinessCenter'
import MessageIcon from '@mui/icons-material/Message'
import NotificationIcon from '@mui/icons-material/Notifications'
import AppsIcon from '@mui/icons-material/Apps'
import UserImage from '@mui/icons-material/AccountCircle'
import DropdownIcon from '@mui/icons-material/ArrowDropDown'
import HoriIcon from '@mui/icons-material/MoreHoriz'
import './header.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import userPhoto from '../../assests/user.avif'

function Header() {
  let location = useLocation();
  const navigate = useNavigate();
  let loc = location.pathname
  const [profile, setProfile] = useState(false)
  let arr = loc.split('/')
  let path = arr.filter((path) => path !== '')
  path = path.join().slice(0, 1).toLocaleUpperCase() + path.join().slice(1)
  document.title = path + " | Linkedin Clone"
  const [menuLink, setMenuLinks] = useState(false)

  useEffect(()=>{
    location.pathname = '/'
    navigate(location.pathname)
  },[])

  const popupProfile = () => {
    setProfile(!profile)
  }

  const popupLinks = () => {
    setMenuLinks(!menuLink)
  }

  return (
    <div className='header container'>
      <div className="header-search">
        <Link to={'/'}><LinkedinIcon className='linkedinIcon' /></Link>
        <div className="field">
          <SearchIcon className='searchIcon' />
          <input type="text" placeholder='Search' />
        </div>
      </div>
      <div className="header-links">
        <ul>
          <li className={location.pathname === '/' ? `active` : ''}><Link to={"/"}>
            <HomeIcon />
            <span>Home</span></Link>
          </li>
          <li className={location.pathname === '/network' ? `active` : ''}><Link to={"/network"}>
            <UsersIcon />
            <span>My Network</span></Link>
          </li>
          <li className={location.pathname === '/jobs' ? `active` : ''}><Link to={"/jobs"}>
            <JobIcon />
            <span>Jobs</span></Link>
          </li>
          <li className={location.pathname === '/message' ? `active` : ''}><Link to={"/message"}>
            <MessageIcon />
            <span>Messages</span></Link>
          </li>
          <li className={location.pathname === '/notification' ? `active` : ''}><Link to={"/notification"}>
            <NotificationIcon />
            <span>Notifications</span></Link>
          </li>
          <li className="options-list" onClick={popupLinks}>
            <HoriIcon />
            <ul  id='option' className={`profile-box ${menuLink ? 'active' : ''}`}>
              <li style={{ cursor: 'pointer' }} onClick={popupProfile} className='dropdown'>
                <UserImage />
                <span>Me <DropdownIcon /></span>
              </li>
              <li className='dropdown'><Link to={"/"}>
                <AppsIcon />
                <span>Work <DropdownIcon /></span></Link>
              </li>
              <li className='lastLink' style={{ textDecoration: 'underline', color: '#000' }}><Link to={"/"}>Try Premium form<br></br> free</Link></li>
            </ul>
          </li>
          <li style={{ cursor: 'pointer' }} onClick={popupProfile} className='dropdown'>
            <UserImage />
            <span>Me <DropdownIcon /></span>
          </li>
          <li className='dropdown'><Link to={"/"}>
            <AppsIcon />
            <span>Work <DropdownIcon /></span></Link>
          </li>
          <li className='lastLink' style={{ textDecoration: 'underline', color: '#000' }}><Link to={"/"}>Try Premium form<br></br> free</Link></li>
        </ul>
        {/* <div className={`profile-box ${profile ? 'active' : ''}`}></div> */}
        <div id='profile' className={`profile-box ${profile ? 'active' : ''}`}>
          <Link to={'/profile'}>
            <div className="top" onClick={popupProfile}>
              <div className="image">
                <img src={userPhoto} alt="" />
              </div>
              <div className="content">
                <span className="name">Vijay Prajapati</span>
                <span className="bio">Student of University of Rajasthan, web developer</span>
              </div>
            </div>
          </Link>
          <button onClick={popupProfile}><Link to={'/profile'} style={{ color: 'skyblue' }}>View Profile</Link></button>

          <hr />

          <h4>Account</h4>
          <div className="line">
            <div></div>
            <span>Try Premium for free</span>
          </div>
          <div className="lists">
            <p>Settings & Privacy</p>
            <p>Help</p>
            <p>Language</p>
            <h3>Manage</h3>
            <p>Posts & Activity</p>
            <p>Job Posting Account</p>
            <p>Sign Out</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Header
