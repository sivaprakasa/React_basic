/* eslint-disable no-unused-vars */
import React from 'react';
import "./App.css"
import TaskForms from './component/TaskForms';

const App = () => {
  return (
    <div className='app'>
      <TaskForms />
      <main className='app_main'>
        <section className='task_column'>Section 1</section>
        <section className='task_column'>Section 2</section>
        <section className='task_column'>Section 3</section>
      </main>
    </div>
  )
}

export default App