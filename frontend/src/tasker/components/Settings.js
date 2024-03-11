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
const TaskForm = ({projects, setForm}) => {
  const {createTask} = useContext(projectContext);
  const submit = (event) => {
    event.preventDefault()
    setForm("")
    let title = event.target.title.value
    let description = event.target.description.value
    let projectid = event.target.project.value
    let task = {
      projectid: projectid,
      title: title,
      description: description
    }
    createTask(task)
  }

  return (
    <div className="taskform">
      <h3> New task </h3>
      <form onSubmit={submit}>
      Title: <input id="title" type="text" />
      Description: <input id="description" type="text"/>
      Project: 
      <select name="project" id="projects">
        {projects.map(project => 
            <option key={project.id} value={project.id}>{project.title}</option>
          )
        }
        </select>
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
const Settings = ({projects, setFilter}) => {
  const [form, setForm] = useState("")
  const handleFormChange = (set) => {
    if (form === set) setForm("");
    else setForm(set);
  }
  return (
    <div className="settings">
      <div className="buttons">
        <button onClick={() => handleFormChange("task")}>
          New task
        </button>
        <button onClick={() => handleFormChange("project")}>
          New Project
        </button>
        <button onClick={() => setFilter("notstarted")}>
          Not started
        </button>
        <button onClick={() => setFilter("started")}>
          Started
        </button>
        <button onClick={() => setFilter("completed")}>
          Complete
        </button>
        <button onClick={() => setFilter("")}>
          All
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
