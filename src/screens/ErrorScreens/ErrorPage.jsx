import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import { BiErrorCircle } from "react-icons/bi";

const ErrorPage = () => {
  const error = useRouteError();


  return (
    <div className='flex flex-col items-center justify-center h-screen bg-orangeo text-whitel'>
    <BiErrorCircle className='text-9xl text-orange' />
    <h1>Oops!</h1>
    <p>desolé, mais une erreur s'est produite</p>
    <p>
    <i>{error.statusText || error.message}</i>
    </p>
    <Link to='/' className='text-whitel' >Revenir en lieu sûr</Link>
    </div>
  )
}

export default ErrorPage