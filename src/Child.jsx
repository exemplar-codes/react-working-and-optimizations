import React from 'react';

function Child() {
  console.log("Child Ran");
  return "I am a child";
}

export default React.memo(Child);
