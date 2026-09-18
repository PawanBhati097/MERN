import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=' flex w-full items-center px-8 bg-cyan-800 justify-between py-4'>
      <h2 className='text-2xl fonr-bold'>Bhati</h2>
      <div className='flex gap-10'>
        <Link className='flex gap-8 text-lg font-medium' to='/'>Home</Link>
        <Link className='flex gap-8 text-lg font-medium' to='/about'>About</Link>
        <Link className='flex gap-8 text-lg font-medium' to='/courses'>Courses</Link>
        <Link className='flex gap-8 text-lg font-medium' to='/product'>Product</Link>
          
      </div>
    </div>
  )
}

export default Navbar