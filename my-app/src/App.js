import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [name, setName] = useState(null);

  return (
    <div className="App">
      <div className="container">
        <form onSubmit={e => {
          console.log("sumbit");
          e.preventDefault();
        }}>
          <input onChange={e => setName(e.target.value)} placeholder="Enter your name" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default App;
