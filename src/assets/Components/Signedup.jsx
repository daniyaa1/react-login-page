import React from 'react'
import {useState} from 'react'
import {useLocation} from 'react-router-dom'

const signedup = () => {

  const location = useLocation();
  const name = location.state.name;

  return (
    <div className='flex p-40 m-10'>
      <h1 className='text-green-800 font-bold text-5xl'>Welcome <span className='text-purple-900 font-semibold'>{name}!</span></h1>
    </div>
  )
}

export default signedup
