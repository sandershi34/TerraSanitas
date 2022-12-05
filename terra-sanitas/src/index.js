import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
//import RegisterButton from "./components/registerbutton";
//import DeregisterButton from "./components/DeregisterButton";

const root = ReactDOM.createRoot(document.getElementById("root"));
//const root1 = ReactDOM.createRoot(document.getElementById('root1'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
/*root1.render(
  <React.StrictMode>
    <DeregisterButton />
  </React.StrictMode>
);*/

