/* eslint-disable no-unused-vars */
import React, {useState} from 'react';

const Count1 = () => {
  let task = 0;
  const countArr = useState(0);
  const count = countArr[0];
  const setCount = countArr[1];

  const handleclick = () => {
    task++
    setCount(count + 1);
    console.log("Add Task", task);
  };
  return (
    <div>
        <h1>Task : {count}</h1>
        <button onClick = {handleclick}>Add Click</button>
    </div>
  )
}

export default Count1