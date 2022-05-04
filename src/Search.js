import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function Search({ name }) {
  const [query, setQuery] = useState(null)
  const [results, setResults] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    if (!name) {
      navigate("/");
    }
  })

  if (!name) {
    return;
  }

  return (
    <>
      <h1>Hello, <b style={{color: "red"}}>{name}</b></h1>
      <form onSubmit={e => {
        fetch(`http://localhost:3001/search?query=${query}`, {mode: "cors"})
          .then(res => res.json())
          .then(json => {console.log(json); setResults(json.photos)})
        e.preventDefault();
      }}>
        <input className="input" placeholder="Search for a image" onChange={e => setQuery(e.target.value)} />
        <input className="button" type="submit" value="Search" />
      </form>
      <ol className="ol">
      {results.map((res, idx) => <li className="li" key={idx}>
        <img className="img" src={res.src.tiny} />
      </li>)}
      </ol>
    </>
  );
}

export default Search;
