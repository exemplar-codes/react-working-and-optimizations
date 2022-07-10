import React from "react";

const Child = React.memo((props) => {
  console.log("Button Ran");
  return <button onClick={props.onClick}>{props.children}</button>;
});

export default Child;
