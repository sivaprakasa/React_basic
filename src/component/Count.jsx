/* eslint-disable no-unused-vars */
import React from 'react'

const Count = () => {
  const task = 3
  const counttask = () => {
    return task;
  }
  return (
    <div>
        <h1>Task : {counttask()}</h1>
        <button>ADD TASK</button>
    </div>
  )
}

export default Count