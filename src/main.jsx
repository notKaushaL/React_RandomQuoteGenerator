// import React from "react";
// import ReactDOM from "react-dom";
import App from "./App";
import { createRoot } from 'react-dom/client';


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App />);