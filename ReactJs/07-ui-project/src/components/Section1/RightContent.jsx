import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id="right" className='h-full flex rounded-4xl overflow-x-auto flex-nowrap gap-2 p-6 w-2/3 '> 
    {props.users.map(function(elem,idx){
      
      return <RightCard key={idx} color={elem.color} idx={idx} img={elem.img} tag={elem.tag}/>
    })}
    
    </div>
  )
}

export default RightContent