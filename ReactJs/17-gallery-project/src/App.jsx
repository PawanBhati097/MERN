import React, { useEffect, useState } from 'react'
import axios from 'axios'
const App = () => {

  const [userData, setuserData] = useState([])
  const [index, setIndex] = useState(1)

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
    setuserData(response.data)

    console.log(response.data);

  }
  useEffect(function(){
    getData()
  },[index])

  let printUserData = <h3 className='text-gray-400 text-xs'></h3>

  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return <div key={idx}>
        <a href={elem.url}>
          <div className='h-40 w-44 overflow-hidden bg-white rounded-xl'>
            <img className='h-full w-full object-cover' src={elem.download_url} alt="" />
          </div>
          <h2 className='font-bold text-xl'>{elem.author}</h2>
        </a>
      </div>
    })
  }

  return (
    <div className='bg-black h-screen overflow-auto text-white'>
      <h1 className='fixed text-6xl'>{index}</h1>
      <div className='flex flex-wrap gap-4 p-2'>
        {printUserData}
      </div>
      <div className='flex justify-center gap-6 items-center p-4'>
        <button 
        onClick={()=>{
          if(index>1){
            setIndex(index-1)
          }
        }}
        className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold'>Prev</button>
        <button
        onClick={()=>{
          setIndex(index+1)
        }}
        className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold'>Next</button>
      </div>
    </div>
  )
}

export default App