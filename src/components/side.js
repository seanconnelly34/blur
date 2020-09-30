import React, { useState } from "react";
import cn from "classnames";

const Side = (props) => {
  //   const classes = cn("ui", "sidebar", "overlay", "left", "menu", "animating", {
  //     visible: props.toggleMenu,
  //   });

  const [toggle, setToggle] = useState("");
  const classes = cn("ui", "sidebar", "overlay", "left", "menu", "animating", {
    toggle,
  });
  return (
    <div
      className="wide"
      onMouseEnter={() => {
        if (toggle.length < 0) console.log("fucl");
      }}
      onMouseLeave={() => {
        if (toggle.length > 0) console.log("fucl");
      }}
    >
      <ul>
        <li className="item link">Item 1</li>
        <li className="item link">Item 2</li>
        <li className="item link">Item 3</li>
        <li className="item link">Item 4</li>
      </ul>
    </div>
  );
};

export default Side;
