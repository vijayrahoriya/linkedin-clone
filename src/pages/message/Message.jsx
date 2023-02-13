import React from 'react'
import RightSidebar from '../../components/rightbar/RightSidebar'
import './message.css'
import MessageInfo from './MessageInfo'

function Message() {
  return (
    <div className='message container'>
        <MessageInfo/>
      <RightSidebar/>
    </div>
  )
}

export default Message
