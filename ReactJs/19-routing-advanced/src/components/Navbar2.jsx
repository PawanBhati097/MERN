import React from 'react'
import { useNavigate } from 'react-router-dom'
const Navbar2 = () => {

    const navigate = useNavigate()
  return (
    <div className='py-3 px-5 bg-gray-800' >
              <button onClick={()=>{
          navigate('/')
      } }
        className='font-medium bg-amber-500 px-5 py-2 rounded m-2 cursor-pointer active:scale-95'>
        Return to Home Page
      </button>

      <button
        onClick={()=>{
          navigate(-1)
        } }
        className='font-medium bg-amber-500 px-5 py-2 rounded m-2 cursor-pointer active:scale-95'>
        Back
      </button>
       <button
        onClick={()=>{
          navigate(+1)
        } }
        className='font-medium bg-amber-500 px-5 py-2 rounded m-2 cursor-pointer active:scale-95'>
        Next
      </button>
    </div>
  )
}

export default Navbar2