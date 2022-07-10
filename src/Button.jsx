import React from "react";

const Child = React.memo((props) => {
  console.log("Button Ran");
  return <button onClick={props.toggleParagraphHandler}>Toggle</button>;
});

export default Child;
