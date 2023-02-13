import React from 'react'
import './networksidebar.css'
import '../../components/rightbar/rightsidebar.css'
import ConnetionIcon from '@mui/icons-material/Group'
import ContactIcon from '@mui/icons-material/ContactPage'
import FollowingIcon from '@mui/icons-material/Person'
import EventIcon from '@mui/icons-material/Event'
import PagesIcon from '@mui/icons-material/Pages'
import NewsletterIcon from '@mui/icons-material/Newspaper'
import HashIcon from '@mui/icons-material/Tag'
import ShowIcon from '@mui/icons-material/KeyboardArrowUp'

function NetwrokSidebar() {
  return (
    <div className='networksidebar'>
      <h4>Manage my network</h4>
      <div className="line"><ConnetionIcon className='icon'/> Connection</div>
      <div className="line"><ContactIcon className='icon'/> Contacts</div>
      <div className="line"><FollowingIcon className='icon'/> Following & follwers</div>
      <div className="line"><EventIcon className='icon'/> Events</div>
      <div className="line"><PagesIcon className='icon'/> Pages</div>
      <div className="line"><NewsletterIcon className='icon'/> Newsletter</div>
      <div className="line"><HashIcon className='icon'/> Hashtag</div>
      <div className="line">Show less <ShowIcon className='icon'/></div>
      
    </div>
  )
}

export default NetwrokSidebar
