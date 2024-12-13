import { useState } from "react";

const CounterButton = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>Current Count: {count}</div>
      <button onClick={() => setCount(prevState => prevState - 1)}>-</button>
      <button onClick={() => setCount(prevState => prevState + 1)}>+</button>
    </div>
  );
}

export default CounterButton;
