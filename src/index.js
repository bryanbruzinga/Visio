import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GeneralContent } from "./context/AppContext";

ReactDOM.render(
  <GeneralContent>
    <App />
  </GeneralContent>,
  document.getElementById("root")
);
