import { useState } from 'react';

function App() {
  const [text, setText] = useState("");

  return (
    <div>
      <h1>Live Preview Example</h1>

      <input 
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Yahan type karo..."
      />

      <h2>Live Preview:</h2>
      <p>
        {text ? text : "Abhi kuch nahi likha hai..."}
      </p>

      <p>Characters: {text.length}</p>
    </div>
  );
}

export default App;