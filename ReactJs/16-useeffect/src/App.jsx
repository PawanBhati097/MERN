import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {

  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  function aChnaging() {
    console.log(" a ki vlaue chnage ho gyi")
  }
  function bChnaging() {
    console.log(" b ki vlaue chnage ho gyi")

  }
  useEffect(function(){
    aChnaging()
    console.log('use effect is running');
    
  },[a])

  return (
    <div>
      <h1>A is {a}</h1>
      <h1>B is {b}</h1>
      <button onClick={()=>{
        setA(a+1)
      }}>Change A</button>

      <button onClick={()=>{
        setB(b-1)
      }}>Change B</button>
    </div>
  )
}

export default App




// const App = () => {
//   const [num, setNum] = useState(0)
//   const [num2, setNum2] = useState(100)
//   useEffect(function () {
//     console.log("use effect running");

//   },[num])
//   return (
//     <div>
//       <h1>Value of num is: {num}</h1>
//       <h1>Value of num2 is: {num2}</h1>
//       <button onClick={()=>{
//           setNum(num+1);
//       }}
//       onDoubleClick={()=>{
//         setNum2(num2+10)
//       }}>Click</button>
//     </div>
//   )
// }

// export default App