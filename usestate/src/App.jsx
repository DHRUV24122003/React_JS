import React from 'react'
import { useState } from 'react'

//const App = () => {
//  const [a,setA] = useState(20);
//  const [num,setNum] = useState('naman');
//  const changeNum = () =>{
//   setNum(30)
//  }
  
  
//   return ( 
//     <div>
//       <h1>value of num is {num}</h1>
//       <button onClick={changeNum}>click here</button>
//     </div>
//   )
// }



//let's make a simple counter

// const App = () => {
//   const [num,setNum] = useState(10);

//   function increaseNum(){
//     setNum(num+5);
//   }
//   function decreaseNum(){
//     setNum(num-5);
//   }



// return (
//   <div>
//     <h1>{num}</h1>
//     <button onClick = {increaseNum}>increase</button>
//     <button onClick={decreaseNum}>decrease</button>
    
//     </div>
// )
// }






//some advance things
const App = () => {
  const[num,setNum] = useState(10)
  //const [num,setNum] = useState({user:'Dhruv',age:20});
   //so here we can make anything like array , object ar any ds
  
    const btnClicked = () =>{
      // console.log(num.user);
      // console.log(num.age)
      
      // const newNum = {...num};
      // newNum.age = 29;//it will update the age as well
      // console.log(newNum)

      
        //setNum(prev => ({ ...prev,age:60}))

        setNum(prev => (prev+1))
        setNum(prev => (prev+1))
        setNum(prev => (prev+1))
      
    }
  
  
  return (
    <div>
      <h1>{num}</h1>
      {/* <h1>{num.user},{num.age}</h1> */}
      <button onClick={btnClicked}>CLICK</button>
    </div>
  )

}



export default App;
