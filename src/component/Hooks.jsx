/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Hooks() {
    const [Color, Setcolor] = useState("red");
    return(
        <div>
            <h1>My Favoriate color is {Color}!</h1>

            <button type='button' onClick={() => Setcolor("blue")}>blue</button>
            <button type='button' onClick={() => Setcolor("orange")}>orange</button>
        </div>
    );
}

export default Hooks