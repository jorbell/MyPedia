import taskService from '../services/task'
import React, { useState } from 'react'

const Task = ({task, setProjects}) => {
  const updateState = (event) => {
    let newTask = {
      ...task,
      state: event.target.value
    }
    taskService
      .update(newTask)
      .then(result => {
        setProjects(result)
      })

  }
  let states = [
    {
      value: 0,
      name: "Not started"
    },
    {
      value: 1,
      name: "Started"
    },
    {
      value: 2,
      name: "Completed"
    },
  ]
  return (
    <div className="task">
      <div className="info"> 
        <h3> {task.title} </h3>
        <p>Description:  {task.description } </p>
      </div>
      <div className="buttons"> 
        State:
        <select onChange={updateState}>
          <option defaultValue={task.state}> {states[task.state].name} </option>
          <option value={0}>{"Not started"} </option>
          <option value={1}>{"Started"} </option>
          <option value={2}>{"Completed"} </option>
        </select>
      </div>
    </div>
  )
}
const TaskList = ({tasks,setProjects}) => {
  if (tasks === undefined) return null;
  return (
    <div className="tasklist">
      {tasks.map(task => {
        return (
          <Task 
            key={`task${task.id}`} 
            task={task} 
            setProjects={setProjects}
          />
        )
      })}
    </div>
  )
}
export default TaskList
