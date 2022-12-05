import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import '../index.css'
import '../App.css'
import { Google } from '@mui/icons-material';
import { provider } from '../config/fireabase'
import { getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export const Register = () => {

  const navigate = useNavigate();
  const signin = () => {

    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        GoogleAuthProvider.credentialFromResult(result);
        const user = result.user;

        let userInfo = {
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
          phoneno: user.phoneNumber
        }
        console.log(userInfo.name)
        navigate("/home");
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
        // ...
      });
  }

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log(uid);
    navigate("/home")
    }
  });

  return (
    <div className="grid place-content-center">
       <div style={{marginTop: "20vh"}} className=''>
            <TwitterIcon style={{fontSize: "75px", color: `var(--twitter-color)`}}/>

            <div className='my-5'>
                  <h1 className='font-bold text-5xl'>
                      Happening Now
                  </h1>

                  <h1 className='mt-8 font-semibold text-2xl'>
                      Join Twitter Today
                  </h1>

                  <button
                  onClick={signin}
                  className='my-5 p-4 bg-blue-400 rounded-full flex text-white'>
                    <Google/>
                    <h2 className='mx-3'>Signin with Google</h2> 
                  </button>
            </div>
       </div>
    </div>
  )
}
