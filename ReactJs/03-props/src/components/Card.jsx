import React from 'react'

function Card(props) {
  console.log(props.user,props.age);
  return (
          <div className="card">
       <img src="/ridho-ibrahim-4KzwdaUQF3A-unsplash.jpg" alt="Profile" />
        <h1>{props.user}</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      <button>View Profile</button>
      </div>
  )
}

export default Card