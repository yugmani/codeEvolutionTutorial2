import React from "react";
import "./mystyle.css";

function Stylesheet(props) {
  //Conditional use of className
  let className = props.primary ? "primary" : "secondary";

  return (
    <div>
      <h1 className={`${className} font-xl`}>
        Conditional rendering with primary
      </h1>
      <h2>Conditional Rendering with Secondary</h2>
    </div>
  );
}

export default Stylesheet;
