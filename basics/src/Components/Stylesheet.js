import React from "react";
import "./mystyle.css";

function Stylesheet(props) {
  //Conditional use of className
  let className = props.primary ? "primary" : "";

  return (
    <div>
      <h1 className={`${className} font-xl`}>
        Conditional rendering of Style.
      </h1>
    </div>
  );
}

export default Stylesheet;
