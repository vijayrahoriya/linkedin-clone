import React from 'react'
import './messageinfo.css'
import DotsIcon from '@mui/icons-material/MoreHoriz'
import EditIcon from '@mui/icons-material/Edit'
import SearchIcon from '@mui/icons-material/Search'
import FilterIcon from '@mui/icons-material/FilterList'


function MessageInfo() {
  return (
    <div className='messageinfo'>
      <div className="top">
        <span>Messaging</span>
        <span><DotsIcon/> <EditIcon/></span>
      </div>
      <hr></hr>
      <div className="field">
        <SearchIcon className='iconCursor'/>
        <input type="text" placeholder='Search message' />
        <FilterIcon className='iconCursor'/>
      </div>
      <h4>No Message</h4>
      <textarea placeholder='Write Message here...'></textarea>
    </div>
  )
}

export default MessageInfo
