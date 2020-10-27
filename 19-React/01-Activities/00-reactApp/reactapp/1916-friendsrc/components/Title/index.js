import React from "react";
import "./style.css";

function Title(props) {
  console.log("title props")
  console.log(props)
  return <h1 className="title">{props.children}</h1>;
}

export default Title;
