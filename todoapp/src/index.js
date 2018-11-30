import React from "react";

import ReactDOM from "react-dom";

import Dashboard from "./Dashboard";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Dashboard />, document.getElementById("root"));

serviceWorker.register();
