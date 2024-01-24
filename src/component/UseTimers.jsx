/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

function UseTimers() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let Timer = setTimeout(() => {
            setCount((count) => count + 1)
        }, 1000)
        return () => clearTimeout(Timer)
    }, [])
    return (
        <h4>i have time is {count}</h4>
    )
}
export default UseTimers