/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

function Timers() {
    const [Count, setCount] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            setCount((Count)=> Count + 1);
        },1000);
    });
    return (
        <h1>I have rendered {Count} times!</h1>
    )
}

export default Timers