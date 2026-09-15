import React from 'react';

const App = () => {

  const scrolling=()=>{
    console.log("scrolling");
    
  }
  return (
    <div onWheel={scrolling}>
      
      <div style={{backgroundColor:'red',height:200,width:200}} className="page1"></div>
      <div style={{backgroundColor:'green',height:800,width:200}} className="page2"></div>
      <div style={{backgroundColor:'pink',height:900,width:200}} className="page3"></div>
    </div>
  );
};

export default App;