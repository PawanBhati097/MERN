import React from 'react'

const App = () => {

  const submitHandler=(el)=>{
    el.preventDefault()
    console.log("form submited");
  }

  return (
    <div>
      <form onSubmit={(el)=>{
        submitHandler(el)
        
      }}>
        <input type="text" placeholder='Enter Your Name' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App