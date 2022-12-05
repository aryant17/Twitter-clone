import React, { useState, useEffect} from 'react'
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import { IconButton } from '@mui/material';
import './Feed.css'
import TweetBox from './TweetBox';
import Post from './Post';
import { db } from "../config/fireabase"
import { serverTimestamp, addDoc, collection , getDocs, orderBy, query } from 'firebase/firestore';
import { useAuthChange } from '../config/useCustomHook';
import ComposeBtn from './ComposeBtn';

const Feed = () => {

  let [tweetArr, setTweetArr] = useState([]);
  const userdata = useAuthChange();
  const [text, setText] = useState("");

  const GetData = async() => {

    const collectionRef = collection(db, 'userTweets');
    const queryRef = query(collectionRef, orderBy('createdAt', 'desc')); 

    await getDocs(queryRef)
    .then(async(querySnapshot) => {
      await setTweetArr(querySnapshot.docs.map(doc => doc.data()));
    }
    )
    .catch((err) => {
      console.log(err);
    })
  }

  const onSubmitHandle = async() => {

    if(text != ""){
    await addDoc(collection(db, 'userTweets'), {
      uid: userdata.uid,    
      name: userdata.displayName,
      email: userdata.email,
      phoneno: userdata.phoneNumber,
      photo: userdata.photo,
      tweets: text,
      createdAt: serverTimestamp(),
      })
    .then(() => {
      GetData();
     })
    .then(
      setText("")
    )
    .catch((error) => {
      const errCode = error.code;
      const errMsg = error.message;
      console.log(errCode + errMsg)
     })
    }
  }

  

  useEffect(() => {
    GetData();
    
  }, [])
  

  return (
    <div className='relative feed scrollbar-hide border-r border-l border-gray-800'>
        <div className='px-5 flex justify-between feed-header '>
            <h1 style={{fontSize: "27px"}} className="my-4 font-bold text-2xl">
                  Latest Tweets
            </h1>
            <IconButton>
              <AutoAwesomeOutlinedIcon sx={{fontSize:"45px", color: `var(--twitter-color)`, padding: "3px"}}/>
            </IconButton>
        </div>
      <TweetBox text={text} onTextChange={(e) => {setText(e.target.value)}} onSubmitHandle={onSubmitHandle} photo={userdata.photo}/>
      
      {tweetArr.map((post) => (
          <Post key={post.tweets} username={post.name.toLowerCase()} displayName={post.name} photo={post.photo || `http://www.oddscreenprinting.com.au/wp-content/uploads/person-dummy.jpg`} text={post.tweets} date={new Date(post.createdAt.toDate()).toLocaleString()}
          />
      ))}
    
      <ComposeBtn />
    </div>
  )
}

export default Feed;