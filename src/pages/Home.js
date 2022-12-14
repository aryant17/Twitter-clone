/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react'
import SideBar from '../components/SideBar';
import Feed from '../components/Feed';
import Explore from '../components/Explore';
import '../App.css'
import { useNavigate } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import "./Home.css";

const Home = (props) => {
  
  const navigate = useNavigate();

  const auth = getAuth();

  const authChange = () => {
    onAuthStateChanged(auth, (user) => {
    if (!user) {
      navigate("/home")
      }
    });
  }
  
  useEffect(() => {
    authChange();
  }, [])


  return (
    <div style={{backgroundColor: "black"}} className="">
     <div className='app'>
       <SideBar />
       <Feed />
     </div>
    </div>
  )
}

export default Home