import React from 'react'
import { Circles } from 'react-loader-spinner'

const ButtonLoader = () => {
  return (
    <Circles
    height="80"
    width="80"
    color="#f0c777"
    ariaLabel="circles-loading"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
    />

    )
}

export default ButtonLoader