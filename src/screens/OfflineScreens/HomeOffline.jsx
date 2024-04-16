import React from 'react'
import { Outlet } from 'react-router-dom'
import { apiImage } from '../../constants/apiConstant'

const HomeOffline = () => {
  return (
    <>
    <div className='w-screen bg-black'>
      <img src={`${apiImage}/logo.png`} alt="Logo Spotify" className='w-full h-28 object-contain py-2' />
    </div>
    <Outlet/>
    </>
  )
}

export default HomeOffline