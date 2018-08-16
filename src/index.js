import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import registerServiceWorker from "./registerServiceWorker";
import "antd/dist/antd.css";

ReactDOM.render(<Main />, document.getElementById("root"));

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept("./Main.js", () => {
    const NextApp = require("./Main").default;
    ReactDOM.render(<NextApp />, document.getElementById("root"));
  });
}
registerServiceWorker();
