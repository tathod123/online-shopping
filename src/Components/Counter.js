import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../Redux/flipkart.slice";

function Counter() {
  //calling a reducers functions
  const dispatch = useDispatch();
  //we got initialState value throught useSelector
  const { value } = useSelector((state) => state.product);

  return (
    <div>
      <div>Counter :{value}</div>
      <div>
        <button onClick={() => dispatch(increment())}>Inc</button>
        <hr />
        <button onClick={() => dispatch(decrement())}>dec</button>
        <hr />
        <button onClick={() => dispatch(incrementByAmount(5))}>
          incByAmount
        </button>
      </div>
    </div>
  );
}

export default Counter;
