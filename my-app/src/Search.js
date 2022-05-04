import React, { useState } from 'react';

function Search({ name }) {
  const [query, setQuery] = useState(null);

  return (
    <>
      <h1>Hello {name}.</h1>
      <form onSubmit={e => {
        fetch(`http://localhost:3001/search?query=${query}`, {mode: "cors"})
          .then(res => res.text())
          .then(text => console.log(text))
        e.preventDefault();
      }}>
        <input onChange={e => setQuery(e.target.value)} />
        <input type="submit" value="Search" />
      </form>
    </>
  );
}

export default Search;
