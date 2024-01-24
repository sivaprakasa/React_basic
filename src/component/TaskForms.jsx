/* eslint-disable no-unused-vars */
import React from 'react'
import './TaskForms.css'

const TaskForms = () => {
  return (
    <header className='app_header'>
        <form>
            <input type='text' className='task_input'
            placeholder='Enter a task'/>

            <div className='task_form_bottom_line'>
                <div>
                <button className='tag'>HTML</button>
                <button className='tag'>CSS</button>
                <button className='tag'>JavaScript</button>
                <button className='tag'>React</button>
                </div>

                <div>
                <select className='task_status'>
                    <option value="todo">TO Do</option>
                    <option value="doing">Doing</option>
                    <option value="done">Done</option>
                </select>
                <button type='submit' className='task_submit'>+ Add Task</button>
                </div>
            </div>
        </form>
    </header>
  )
}

export default TaskForms