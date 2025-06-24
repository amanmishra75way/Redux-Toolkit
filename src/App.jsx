import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementByAmount, increment, decrement } from "./faetures/counterSlice";
const App = () => {
  const dispatch = useDispatch();

  const count = useSelector((state) => state.counter.value);
  const [amount, setAmount] = useState(false);
  return (
    <div style={{ display: "flex", flexDirection: "column", maxWidth: "20vw", gap: "20px" }}>
      <button onClick={() => dispatch(increment())}>+</button>
      Count is: {count}
      <button onClick={() => dispatch(decrement())}>-</button>
      <div>
        <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" />
        <button onClick={() => dispatch(incrementByAmount(Number(amount)))}>Add By amount</button>
      </div>
    </div>
  );
};

export default App;
