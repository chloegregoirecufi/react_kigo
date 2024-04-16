import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import {useNavigate } from 'react-router-dom'
import { useAuthContext } from './contexts/AuthContext.jsx'
import { USER_INFOS } from './constants/appConstant'
import { checkUser } from './services/userService'

const App = () => {

  //on recupère les données d'utilisateur depuis le localstorage
  const userInfo = JSON.parse(localStorage.getItem(USER_INFOS));
  
  const fetchUser = async () => {
    const user = await checkUser(userInfo);
    if(user){
      return;
    }else{
      signOut();
      navigate('/')
    }
  }

  const { signOut } = useAuthContext(); 
  //on recupère le hook de nav
  const navigate = useNavigate();

 
  useEffect(() => {
    fetchUser();
  }, [userInfo])



  return (
    <div className='relative flex'>
      <Navbar />
      <div className='flex-1 flex flex-col bg-gradient-to-b from-black to-[rgba(18,18,18,1)]'>
            <div className='flex-1 h-fit pb-40 text-black'>
              <Outlet />
            </div>
      </div>
    </div>
    )
}

export default App;