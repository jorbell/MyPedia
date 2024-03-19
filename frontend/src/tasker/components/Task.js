import taskService from '../services/task'
import React, { useState, useContext } from 'react'
import { projectContext } from '../Context'

const Task = ({task}) => {

  const {currentProject, setCurrentProject, setProjects} = useContext(projectContext);

  const updateState = (event) => {
    let newTask = {
      ...task,
      state: event.target.value
    }
    taskService
      .update(newTask)
      .then(result => {
        setProjects(result)
        setCurrentProject(result.find(project => project.id === parseInt(task.projectid)))
      })
  }
  const updateSprint = (event) => {
    console.log(task)
    let newTask = {
      ...task,
      sprintId: event.target.value
    }
    console.log(newTask)
    taskService
      .update(newTask)
      .then(result => {
        setProjects(result)
        console.log(result)
        setCurrentProject(result.find(project => project.id === parseInt(task.projectid)))
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
        <p><b>Description:</b>  {task.description } </p>
      </div>
      <div className="buttons"> 
        State:
        <select onChange={updateState}>
          <option defaultValue={task.state}> {states[task.state].name} </option>
          <option value={0}>{"Not started"} </option>
          <option value={1}>{"Started"} </option>
          <option value={2}>{"Completed"} </option>
        </select>
        <br />
        Sprint:
        <select onChange={updateSprint}>
          <option defaultValue={task.sprintid}> {currentProject.sprints.find(sprint => sprint.id === task.sprintid).title} </option>
          { currentProject.sprints.map(sprint => 
            <option key={sprint.id} value={sprint.id}>{sprint.title} </option>
          ) }
        </select>
      </div>
    </div>
  )
}
export default Task
