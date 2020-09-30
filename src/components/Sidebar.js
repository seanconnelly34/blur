import React, { useState } from "react";
import cn from "classnames";

function Sidebar(props) {
  //   const classes = cn("ui", "sidebar", "overlay", "left", "menu", "animating", {
  //     visible: props.toggleMenu,
  //   });

  const [toggle, setToggle] = useState(false);
  const classes = cn("ui", "sidebar", "overlay", "left", "menu", "animating", {
    visible: toggle,
  });
  return (
    <div
      className={classes}
      onMouseEnter={() => {
        if (!toggle) setToggle(true);
      }}
      onMouseLeave={() => {
        if (toggle) setToggle(false);
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
}

export default Sidebar;
