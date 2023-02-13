import React from 'react'
import './post.css';
import DotsIcon from '@mui/icons-material/MoreHoriz'
import GlobeIcon from '@mui/icons-material/Public'
import LikeIcon from '@mui/icons-material/ThumbUpOffAlt'
import HeartIcon from '@mui/icons-material/FavoriteBorder'
import CommentIcon from '@mui/icons-material/Comment'
import RepostIcon from '@mui/icons-material/Loop'
import SendIcon from '@mui/icons-material/Send'

function Post({ friendImage, friendName,userImage,userName,postImage,followers,time,desc,comments,posts,likes }) {
    return (
        <div className='post'>
            <header>
                <div className="left">
                    <img src={friendImage} alt="" />
                    <span className="name">{friendName}</span>
                    <span className='like'> like this</span>
                </div>
                <div className="right">
                    <DotsIcon />
                </div>
            </header>

            <hr />

            <div className="post-details">
                <div className="top">
                    <div className="left">
                        <div className="image">
                            <img src={userImage} alt="" />
                        </div>
                        <div className="info">
                            <span className="username">{userName}</span><br></br>
                            <span className="followers">{followers} followers</span><br></br>
                            <span className="time">{time} * <GlobeIcon className='globeicon'/></span>
                        </div>
                    </div>
                    <div className="right">
                        <button>+ Follow</button>
                    </div>
                </div>
                    <p className="desc">{desc}</p>
                    <img className='postImage' src={postImage} alt="" />

                <div className="likes-box">
                    <div className="left"><LikeIcon className='icon'/><HeartIcon className='icon'/>{likes}</div>
                    <div className="right">{comments} comments * {posts} posts</div>
                </div>

                <hr/>

                <div className='bottom'>
                    <div className="box"><LikeIcon/> Like</div>
                    <div className="box"><CommentIcon/> Comment</div>
                    <div className="box"><RepostIcon/> Repost</div>
                    <div className="box"><SendIcon/> Send</div>
                </div>
            </div>

        </div>
    )
}

export default Post
