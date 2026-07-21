import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
// const App = () => {

//    const btClicked = () => {
//     let a=7;
//     let b= 8;
//     let c = a+b;
//     console.log(c);
//   }

//   function mouseEnter(){
//     console.log("mouse entered");
//   }

//   function inputChanging(){
//     console.log("input is changing");

//   }


  
//   return (
//     <div>
//       <h1>hello guyz</h1>
//       <button onMouseEnter={mouseEnter} onClick={btClicked}> change user</button>
//       <button onMouseEnter={mouseEnter}> explore this</button>   
//       <button onClick ={() =>{
//         console.log("button clicked");
//       }}> click me</button>

//       <input onChange= {function(){
//         console.log('elem')
//       }}type ="text placeholder =Enter Name"/>
   
//       </div>

    

//   )
// }




//the most common way of function call in react
// function App(){
//   function handleClick(){
//     console.log("button clicked")
//   }

//   return(
//   <button onClick = {handleClick}>click me</button>
//   );

// }

//or we can also write it as 
// function App() {
//   return (
//     <button onClick={() => console.log("Button clicked!")}>
//       Click Me
//     </button>
//   );
// }




//direct function call
// function getGreeting(name) {
//   return `Hello ${name}, kaise ho?`;
// }

// function App() {
//   return (
//     <h1>{getGreeting("Dhruv")}</h1>   // Function call JSX mein
//   );
// }







// function getGreeting(name) {
//   return `Hello ${name}, kaise ho?`;
// }

// function App() {
//   const userName = "Dhruv";        // Yeh variable bana diya

//   return (
//     <div>
//       <h1>{getGreeting(userName)}</h1>     {/* Dynamic naam pass kiya */}
//     </div>
//   );
// }




//apna naam daalo aur user input hoga


// function App() {
//   function getGreeting(name) {
//   return `Hello ${name}, kaise ho?`;
// }
//   const [name, setName] = useState("Dhruv");   // Default value

//   return (
//     <div>
//       <h1>{getGreeting(name)}</h1>
      
//       <input 
//         type="text" 
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         placeholder="Apna naam daalo"
//       />
//     </div>
//   );
// }








//  const handle = () => {
//   console.log("hello world")
//  }
//  function App(){
//   return (
//     <button onClick = {handle}>button dabao</button>
//   )
//  }


//use effect in function calling
// function App() {

//   useEffect(() => {
//     fetchData();        // function call
//   }, []);

//   function fetchData() {
//     console.log("Data fetching...");
//   }

//   return <div>...</div>;
// }







function App() {
  const [name, setName] = useState("Dhruv");        // Current naam
  const [displayName, setDisplayName] = useState("Dhruv");  // Jo dikh raha hai

  const handleSubmit = () => {
    setDisplayName(name);     // Button dabane pe update ho jayega
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl mb-6">Name Updater</h1>

      {/* Input Field */}
      <input 
        type="text" 
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Apna naam daalo"
        className="border p-3 rounded-lg text-lg w-80"
      />

      <button 
        onClick={handleSubmit}
        className="ml-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        Update Name
      </button>

      {/* Display Text */}
      <p className="mt-10 text-xl">
        Hi my name is <span className="font-bold text-orange-600">{displayName}</span>, 
        how may I help you?
      </p>
    </div>
  );
}


  export default App