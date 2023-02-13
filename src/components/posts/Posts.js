import React from 'react'
import './posts.css'
import GalleryIcon from '@mui/icons-material/Photo'
import VideoIcon from '@mui/icons-material/YouTube'
import CalendarIcon from '@mui/icons-material/CalendarMonth'
import ArticlIcon from '@mui/icons-material/Article'
import ArrowDropDown from '@mui/icons-material/ArrowDropDown'
import Post from '../post/Post'

function Posts() {
  return (
    <div className='posts'>
      <div className='start-post'>
        <header>
            <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            <input type="text" placeholder='Start a post' />
        </header>
        <div className="icons">
            <div className='choose'>
                <GalleryIcon style={{color:'skyblue'}}/>
                Photo
            </div>
            <div className='choose'>
                <VideoIcon style={{color:'green'}}/>
                Video
            </div>
            <div className='choose'>
                <CalendarIcon style={{color:'orange'}}/>
                Event
            </div>
            <div className='choose'>
                <ArticlIcon style={{color:'orangered'}}/>
                Write articles
            </div>
        </div>
      </div>
      <div className="line">
        <div className="hori">
            <hr />
        </div>
        <div className="text">
            Sort by: <strong>Top <ArrowDropDown/></strong>
        </div>
      </div>
      <Post
       friendImage="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
       friendName="aman kumar"
       userImage="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
       userName="Vijay prajapati"
       followers="1000"
       time="1w"
       desc="Hey! good morning guys"
       postImage="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
       comments="347"
       likes="22,245"
       posts="180"
      />
      <Post
       friendImage="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
       friendName="Pooja kumari"
       userImage="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
       userName="Sumit Dhawan"
       followers="500"
       time="2d"
       desc="sun goes down!"
       postImage="https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3Vuc2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
       comments="100"
       likes="10,000"
       posts="10"
      />
      <Post
       friendImage="https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3Vuc2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
       friendName="Kalu Ram"
       userImage="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
       userName="Aman Kumar"
       followers="100"
       time="1w"
       desc="Coding is very cool skill"
       postImage="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29kZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
       comments="400"
       likes="1300"
       posts="50"
      />
      <Post
       friendImage="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
       friendName="aman kumar"
       userImage="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
       userName="Kalu Ram"
       followers="200"
       time="1w"
       desc="Designers have a good thinking"
       postImage="https://images.unsplash.com/photo-1475669698648-2f144fcaaeb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZGVzaWdufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
       comments="1000"
       likes="44,440"
       posts="170"
      />
    </div>
  )
}

export default Posts
