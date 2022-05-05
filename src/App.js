import React, { useState } from 'react';
import { Outlet } from "react-router-dom";
import './App.css';
import Search from "./Search";
import NameForm from "./NameForm";
import { Routes, Route } from "react-router-dom";


function App() {
  const [name, setName] = useState(null);

  return (
    <main className="container">
      <Routes>
        <Route path="/" element={<NameForm setNameHandler={name => setName(name)} />} />
        <Route path="search" element={<Search name={name} />} />
      </Routes>
    </main>
  );
}

export default App;
