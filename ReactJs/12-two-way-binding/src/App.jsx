import React, { useState } from 'react'

const App = () => {

    const [title, setTitle] = useState("")
  const submitHandler=(el)=>{
    el.preventDefault()
    console.log("form submited by",title);
    setTitle('')
  }

  return (
    <div>
      <form onSubmit={(el)=>{
        submitHandler(el)
        
      }}>
        <input type="text" placeholder='Enter Your Name' 
        value={title}
        onChange={(e)=>{                        //two-way binding
          setTitle(e.target.value);
          
        }}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App