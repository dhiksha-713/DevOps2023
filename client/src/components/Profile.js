import React,{useContext} from 'react';
import { LoginContext } from './ContextProvider/Context';


function Profile() {
  const { logindata, setLoginData } = useContext(LoginContext);
  return (
    <div>
      
    </div>
  )
}

export default Profile
