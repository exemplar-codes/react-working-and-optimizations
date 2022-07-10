import React from "react";

const Child = React.memo(() => {
  console.log("Child Ran");
  return "I am a child";
});

export default Child;
