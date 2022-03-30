import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <p>{counter} count</p>
      <h1>Hello World</h1>
      <button onClick={() => setCounter(counter + 1)}>increment</button>
      <button onClick={() => setCounter(counter - 1)}>decrement</button>
    </div>
  );
}

export default App;
