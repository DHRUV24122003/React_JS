import React from 'react'

const App = () => {

   const btClicked = () => {
    let a=7;
    let b= 8;
    let c = a+b;
    console.log(c);
  }

  function mouseEnter(){
    console.log("mouse entered");
  }


  
  return (
    <div>
      <h1>hello guyz</h1>
      <button onMouseEnter={mouseEnter} onClick={btClicked}> change user</button>
      <button onMouseEnter={mouseEnter}> explore this</button>   
      <button onClick ={() =>{
        console.log("button clicked");
      }}> click me</button>
      
    </div>

  )
}


export default App
