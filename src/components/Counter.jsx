// return a counter react component
import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {increment} from "../slices/counterSlice";

const Counter = () => {
    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();

    const onIncrement = () => {
        dispatch(increment());
    };

    return (
        <div>
            <h1>Counter</h1>
            <p>This is a simple counter</p>
            <p>Current count: <strong>{count}</strong></p>
            <button onClick={onIncrement}>Increment</button>
        </div>
    );
}

export default Counter;
