import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import PermIdentityRoundedIcon from '@mui/icons-material/PermIdentityRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import ListAltRoundedIcon from '@mui/icons-material/ListAltRounded';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import Menu from './Menu';
import { Button } from '@mui/material';
import './SideBar.css'
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import {  useNavigate } from 'react-router-dom';

const SideBar = (props) => {

  const navigate = useNavigate();

  const signout = () => {
  const auth = getAuth();
    signOut(auth).then(() => {
     navigate("/")
  }).catch((error) => {
     console.log(error);
  });
  };

  return (
    <div style={{borderRight: "1px solid #F1F1F1"}} className='sidebar font-bold text-xl'>
      <div className="twitterLogo">
         <TwitterIcon sx={{color: `var(--twitter-color)`,
          fontSize: "50px", marginTop: "20px", marginLeft: "23px"}} 
          />
      </div>

      <div className='' style={{margin: "13px"}}>
        <div style={{marginBottom: "13px"}} className="sidebar-menu">    
        <Menu name="Home" Icon={HomeOutlinedIcon} />
        </div>

        <div style={{marginBottom: "13px"}} className="sidebar-menu">
        <Menu name="Explore" Icon={SearchRoundedIcon} />
        </div>
        
        <div style={{marginBottom: "13px"}} className="sidebar-menu">
        <Menu name="Notifications" Icon={NotificationsNoneRoundedIcon} />
        </div>

        <div style={{marginBottom: "13px"}} className="sidebar-menu">
        <Menu name="Bookmark" Icon={BookmarkBorderRoundedIcon} />
        </div>

        <div style={{marginBottom: "13px"}} className="sidebar-menu">
        <Menu name="Messages" Icon={MailOutlineRoundedIcon} />
        </div>

        <div style={{marginBottom: "13px"}} className="sidebar-menu">
        <Menu name="List" Icon={ListAltRoundedIcon} />
        </div>

        <div style={{marginBottom: "13px"}} className="sidebar-menu">
        <Menu name="Profile" Icon={PermIdentityRoundedIcon} />
        </div>

        <div onClick={signout} style={{marginBottom: "13px"}} className="sidebar-menu">
        <Menu name="List" Icon={ListAltRoundedIcon} />
        </div>  
      </div>

      <div style={{margin: "20px"}} className="">
            <Button variant='outlined' className='sidebar-tweet-btn w-full'>
              Tweet
            </Button>
      </div>
      
    </div>
  )
}

export default SideBar