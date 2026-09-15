import React from 'react'

const App = () => {
const submitHandler=(e)=>{
  e.preventDefault();
  console.log("Form submited")
}

  return (
    <div className='h-screen lg:flex bg-black text-white '>
      <form onSubmit={(e)=>{
        submitHandler(e);
      }}
      className='flex lg:w-1/2 items-start flex-col gap-4 p-10'>
        <img className='h-52 rotate-y-180 ' src="/image copy.png" alt="Notes" />

          <input
            type="text"
            placeholder='Enter Notes Heading'
            className='px-5 w-full font-medium py-2 border-2 outline-none rounded '
          />
          <textarea
            type="text"
            className='px-5 w-full font-medium h-32 py-2 flex items-start flex-row border-2 outline-none rounded '
            placeholder='Enter Details'
          />
          <button className='bg-white font-medium w-full text-black outline-none px-5 py-2 rounded '>Add Notes</button>
      </form>
      
      <div className='flex lg:w-1/2 gap-5 bg-gray-900 flex-wrap p-10'>
      <h1 className='text-xl font-bold'>
        Your Notes
      </h1>
        <div className='h-52 w-42 rounded-2xl bg-white'></div>
        <div className='h-52 w-42 rounded-2xl bg-white'></div>
      </div>
    </div>
  )
}

export default App