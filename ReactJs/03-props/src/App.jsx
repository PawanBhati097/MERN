import React from 'react'
import Card from './components/Card'
const App = () => {
  return (
    <div className="parent">
      <Card user='Aman' age={18}/>
      <Card user='Sarthak' age={21}/>
    </div>
  )
}

export default App