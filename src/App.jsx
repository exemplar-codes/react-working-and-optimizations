import { useState } from "react";
import Button from "./Button";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  const toggleParagraphHandler = () =>
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);

  return (
    <div>
      <h1>Hi there!</h1>
      {showParagraph && <p>This is new!</p>}
      <Button toggleParagraphHandler={toggleParagraphHandler} />
    </div>
  );
}

export default App;
