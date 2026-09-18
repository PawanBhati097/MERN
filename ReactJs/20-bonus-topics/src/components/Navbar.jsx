import React from 'react'

const Navbar = (props) => {

    function changeTheme(){
            props.setTheme('Dark')
        }
  return (
    <div>
        <button
        onClick={changeTheme}
        onDoubleClick={()=>{
            props.setTheme('Light')
        }}
        >Change Theme</button>
    </div>
  )
}

export default Navbar