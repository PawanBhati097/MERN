import React from 'react'

const App = () => {

  const user={
    username:'pawan',
    age:22,
    city:'faridabad'
  }
  localStorage.setItem('user',JSON.stringify(user))
  return (
    <div>App</div>
  )
}

export default App