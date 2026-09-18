import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div className='flex justify-center gap-10 py-4'>
        <Link className='text-xl font-semibold' to='/product/men' >Mens</Link>
        <Link className='text-xl font-semibold' to='/product/women' >Women</Link>
        <Link className='text-xl font-semibold' to='/product/kids' >kids</Link>
        
        <Outlet/>
    </div>
  )
}

export default Product