// import { useState } from 'react';

// function App() {
//   const [first, setFirst] = useState("");
//   const [last, setLast] = useState("");
//   const [fullName, setFullName] = useState("");   

//   const btnClicked = () => {
//     const completeName = `${first} ${last}`.trim();
//     setFullName(completeName || "Please enter both names");
//   };

//   return (
//     <div>
//       <h1>Full Name Generator</h1>

//       <div>
//         <label>First Name: </label>
//         <input 
//           type="text" 
//           value={first}
//           onChange={(e) => setFirst(e.target.value)} 
//           placeholder="First Name" 
//         />
//       </div>

//       <div>
//         <label>Last Name: </label>
//         <input 
//           type="text" 
//           value={last}
//           onChange={(e) => setLast(e.target.value)} 
//           placeholder="Last Name" 
//         />
//       </div>

//       <button onClick={btnClicked}>Submit</button>

//       {fullName && <h2>Full Name: {fullName}</h2>}
//     </div>
//   );
// }

// export default App;






// a button where we can enter the age and on clicking it shows you are eligible for voting

import { useState } from 'react';

function App() {
  const [age, setAge] = useState("");
  const [message, setMessage] = useState("");

  const checkEligibility = () => {
    const userAge = Number(age);   // string ko number mein convert kiya

    if (!userAge || userAge <= 0) {
      setMessage("Please enter a valid age");
    } else if (userAge >= 18) {
      setMessage("You are eligible for voting");
    } else {
      setMessage("Not eligible");
    }
  };

  return (
    <div>
      <h1>Voting Eligibility Checker</h1>

      <div>
        <label>Enter your age: </label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Age"
        />
      </div>

      <button onClick={checkEligibility}>
        Check Eligibility
      </button>

      {message && <h2>{message}</h2>}
    </div>
  );
}

export default App;