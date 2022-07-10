import { useState } from "react";

let firstTime = true;

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  const toggleParagraphHandler = () =>
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);

  if (firstTime) {
    console.log("First run");
    firstTime = false;
  } else console.log("Run on update");

  return (
    <div>
      <h1>Hi there!</h1>
      {showParagraph && <p>This is new!</p>}
      <button onClick={toggleParagraphHandler}>Toggle</button>
    </div>
  );
}

export default App;
