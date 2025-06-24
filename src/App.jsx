import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementByAmount, increment, decrement } from "./faetures/counterSlice";
const App = () => {
  const dispatch = useDispatch();

  const count = useSelector((state) => state.counter.value);
  return (
    <div>
      <button onClick={() => dispatch(increment())}>+</button>
      Count is: {count}
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default App;
