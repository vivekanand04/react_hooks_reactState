import React, { useState } from "react";

function App() {
  ///here count is a array whose first element is 123
  const [count, addCount] = useState(123); //agar upper import me {useState} nahi likhoge to yaha pe react.useState() likhna padega

  function increase() {
    addCount(count + 1);
  }
  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default App;
