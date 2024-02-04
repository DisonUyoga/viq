import React from "react";
import { Container } from "reactstrap";

const Helmet = (props) => {
  console.log("hello");
  document.title = "Comfort -" + props.title;
  return <>{props.children}</>;
};

export default Helmet;
