import React from "react";
import { render } from "react-dom";
import Router from "./components/Router";
import reportWebVitals from "./reportWebVitals";

render(<Router />, document.querySelector("#root"));

reportWebVitals();
