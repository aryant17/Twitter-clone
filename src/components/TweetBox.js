import React from 'react';

const TweetBox = ({onSubmitHandle, text, photo, onTextChange}) => {

  return (
    <div className='tweetInput border-b my-5'>
      <div className='flex mx-5'>
        <img alt="ProfilePic" style={{width : "70px", height: "70px"}} className='rounded-full' src=
        {photo} />
        <input
        className="w-full p-4 mx-5 tweetInput"
        placeholder='Whats Happening?'
        style={{fontSize: "20px"}}
        value={text}
        onChange={onTextChange}
        />
      </div>
      <div className='tweet-submit flex justify-between'>
        <div className="flex">
        </div>
        <div 
        onClick={onSubmitHandle}
        className="m-5">
          <button className="px-4 py-1 mx-5 text-xl bg-blue-400 text-white rounded-3xl">
            Tweet
          </button>
      </div>
    </div>
</div>
  )
 }

export default TweetBox