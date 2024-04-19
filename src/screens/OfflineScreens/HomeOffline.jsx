import React from 'react'
import { Outlet } from 'react-router-dom'
import { apiImage } from '../../constants/apiConstant'

const HomeOffline = () => {
  return (
    <>
    <div className='bg-green' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
      <img src={`${apiImage}/logo.png`} alt="Logo Kigo"  width="200" height="200" />
    </div>
    <Outlet/>
    </>
  )
}

export default HomeOffline