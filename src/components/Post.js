import { IconButton } from '@mui/material'
import React from 'react'
import './Post.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { AiOutlineRetweet } from 'react-icons/ai'
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';

const Post = ( {
      displayName,
      username,
      text,
      photo,
      likes,
      retweets,
      addLike,
      date      
} ) => {
  return (
    <div className='mt-5 post border-b border-slate-800'>
      <div className='flex m-1 p-1'>
            <div className='mx-3' style={{minWidth: "60px"}}>
                  <img className="rounded-full" alt={username} src={photo} style={{ width: "55px", height: "55px"}} />
            </div>
            <div className=''>
              <div className='flex items-center'>
                <h1 className='mx-2 font-bold text-xl'>
                  {displayName}
                </h1>
                <h1
                style={{color: "grey"}}
                className='text-lg'>
                  @{username}
                </h1>
              </div>
              <div style={{color: "grey"}} className='text-lg'>
                {date}
              </div>
              <div style={{paddingRight: "20px"}} className='m-1 text-xl'>
                {text}
              </div>
            </div>
      </div>

      <div className='m-3'>
            <div className='flex justify-around'>
                <div className='flex items-center'>
                  <IconButton onClick={addLike}>
                  <FavoriteBorderIcon sx={{fontSize:"20px", color: "gray"}}/>
                  </IconButton>
                  <h1 className='mx-1'>
                    {likes}0
                  </h1>
                </div>  

                <div className='flex items-center'>
                  <IconButton>
                  <ChatBubbleOutlineIcon sx={{fontSize:"19px", color: "gray"}}/>
                  </IconButton>
                  <h1 className='mx-1'>
                    {likes}0
                  </h1>
                </div>

                <div className='flex items-center'> 
                  <IconButton>               
                  <AiOutlineRetweet size={20} color="gray"/>
                  </IconButton>
                  <h1 className='mx-1'>
                    {retweets}0
                  </h1>  
                </div>
                 
                <div className='flex items-center'>
                  <IconButton>
                  <IosShareOutlinedIcon sx={{fontSize:"20px", color: "gray"}}/>
                  </IconButton>
                  <h1 className='mx-1'>
                    0
                  </h1>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Post