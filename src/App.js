import React, { useState } from "react";
import { render } from "react-dom";
import "semantic-ui-css/semantic.min.css";

import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import "./App.css";
import cx from "classnames";
import Side from "./components/side";
function App() {
  const [toggle, setToggle] = useState(false);

  const classes = cx("pusher");

  return (
    <div>
      <Header />

      <div className="ui attached pushable" style={{ height: "100vh" }}>
        <Sidebar />
        {/* <Side /> */}
        <div className={classes}>
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;
