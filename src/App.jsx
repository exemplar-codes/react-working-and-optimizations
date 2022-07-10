import React, { useState, useCallback } from "react";
import Button from "./Button";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle)
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  }, [allowToggle]);

  const allowToggleHandler = () => setAllowToggle((prev) => !prev);

  return (
    <div>
      <h1>Hi there!</h1>
      <Button onClick={allowToggleHandler}>
        {allowToggle ? "Disallow" : "Allow"} Toggle
      </Button>
      {showParagraph && <p>This is new!</p>}
      <Button onClick={toggleParagraphHandler}>Toggle</Button>
    </div>
  );
}

export default App;
