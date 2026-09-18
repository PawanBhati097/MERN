import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/card'
const App = () => {

  const [userData, setuserData] = useState([])
  const [index, setIndex] = useState(1)

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
    setuserData(response.data)

    console.log(response.data);

  }
  useEffect(function () {
    getData()
  }, [index])

  let printUserData = <h3 className='text-gray-400 top-1/2 left-1/2 translate-x-1/2 translate-y-1/2 text-xs'>Loading...</h3>

  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return <div key={idx}>
       <Card elem={elem}/>
      </div>
    })
  }

  return (
    <div className='bg-black h-screen overflow-auto text-white'>
      <div className='flex h-{82%} flex-wrap gap-4 p-2'>
        {printUserData}
      </div>
      <div className='flex justify-center gap-6 items-center p-4'>
        <button
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1)
              setuserData([])
            }
          }}
          className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold'>Prev</button>
        <h4>Page:{index}</h4>
        <button
          onClick={() => {
            setIndex(index + 1)
            setuserData([])

          }}
          className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold'>Next</button>
      </div>
    </div>
  )
}

export default App