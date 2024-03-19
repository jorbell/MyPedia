import React, { useContext, useState } from 'react'
import { projectContext } from '../Context'

const ProjectForm = ({setForm}) => {
  const {createProject} = useContext(projectContext);
  const submit = (event) => {
    event.preventDefault()
    setForm("")
    let title = event.target.title.value
    let description = event.target.description.value
    createProject(title, description)
  }
  return (
    <div className="projectform">
      <form onSubmit={submit}>
        <h3> New Project </h3>
        Title: <input id="title" type="text" />
        Description: <input id="description" type="text" />
        <input type="submit" />
      </form>
    </div>
  )
}
const TaskForm = ({setForm}) => {
  const {createTask, currentProject} = useContext(projectContext);
  const defaultsprint = currentProject.sprints.find(s => s.title === "Default")
  const submit = (event) => {
    event.preventDefault()
    setForm("")
    let title = event.target.title.value
    let description = event.target.description.value
    let task = {
      title: title,
      description: description,
      sprintid: defaultsprint.id,
      projectid: currentProject.id
    }
    createTask(task)
  }

  return (
    <div className="taskform">
      <h3> New task </h3>
      <form onSubmit={submit}>
      Title: <input id="title" type="text" />
      Description: <input id="description" type="text"/>
        <input type="submit" />
      </form>
    </div>
  )
}
const Form = ({form, projects, setForm}) => {
  if (form === "task"){
    return (
      <TaskForm projects={projects} setForm={setForm}/>
    )
  }
  else if (form === "project"){
    return (
      <ProjectForm setForm={setForm}/>
    )
  }
  else return null;
}
const Settings = ({projects}) => {
  const [form, setForm] = useState("")
  const {setCurrentProject} = useContext(projectContext);
  const handleFormChange = (set) => {
    if (form === set) setForm("");
    else setForm(set);
  }
  return (
    <div className="settings">
      <div className="buttons">
        <button onClick={() => setCurrentProject(undefined)}>
          Back to ProjectsFeed
        </button>
        <button onClick={() => handleFormChange("task")}>
          New task
        </button>
        <button onClick={() => handleFormChange("project")}>
          New Project
        </button>
      </div>
      <div> 
        <Form 
          form={form} 
          projects={projects}
          setForm={setForm}
        />
      </div>
    </div>
  )
}
export default Settings
