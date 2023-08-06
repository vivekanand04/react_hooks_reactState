//METHOD 1 NO ANY  USE IN OTHER FILE
// import React from "react";
// import ReactDOM from "react-dom";
// var count=0;
// function increase(){
//   count++;
// //for print further ReactDom ko daalo yaha par
// ReactDOM.render(
//   <div className="container">
//     <h1>{count}</h1>
//     <button onClick={increase}>+</button>
//   </div>,
//   document.getElementById("root")
// );

// }
// ReactDOM.render(
//   <div className="container">
//     <h1>{count}</h1>
//     <button onClick={increase}>+</button>
//   </div>,
//   document.getElementById("root")
// );
//ETHOD 2   ek App file banana padega
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
ReactDOM.render(<App />, document.getElementById("root"));
