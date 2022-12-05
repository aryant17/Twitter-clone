import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

export const useAuthChange = () => {

      const auth = getAuth();
      const [userdata, setUserdata] = useState([])
      let userInfo;
 
      const authhook = () => {
      onAuthStateChanged(auth, (user) => {
      if (user) {
      userInfo = {
        uid: user.uid,
        displayName : user.displayName,
        email: user.email,
        photo: user.photoURL,
        phoneNumber: user.phoneNumber
      }
        setUserdata(userInfo);
        }})
      }
      
      useEffect(() => {
        authhook();
      }, [])
      
      return userdata;

}