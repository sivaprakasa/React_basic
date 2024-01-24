/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ReactDOM from "react-dom";

function Usestates() {
    const [brand, setbrand] = useState("pulser");
    const [model, setmodel] = useState("ns 200");
    const [year, setyear] = useState("2019");
    const [color, setcolor] = useState("white")
    return (
        <div>
            <h1>My bike {brand}</h1>
            <p>It is {model} {year} from {color}</p>
        </div>
    );
}
export default Usestates