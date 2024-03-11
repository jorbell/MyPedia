import React, {useEffect, useState} from 'react'
import projectService from './services/project'
import taskService from './services/task'
import './style.css'
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
        <h3> {task.title} </h3>
        <p> {task.description } </p>
        <select onChange={updateState}>
          <option defaultValue={task.state}> {states[task.state].name} </option>
          <option value={0}>{"Not started"} </option>
          <option value={1}>{"Started"} </option>
          <option value={2}>{"Completed"} </option>
        </select>
    </div>
  )
}
const Project = ({project, filter, setProjects}) => {
  const [isHidden, setIsHidden] = useState(true)
  let shownTasks = project.tasks;
  if(filter === "notstarted") {
    shownTasks = project.tasks.filter(task => task.state === "0")
  }
  else if(filter === "started") {
    shownTasks = project.tasks.filter(task => task.state === "1")
  }
  else if(filter === "completed") {
    shownTasks = project.tasks.filter(task => task.state === "2")
  }
  //console.log(isHidden);
  return(
    <div>
      <div className="titlediv" onClick={() => setIsHidden(!isHidden)} >
        <h1>{project.title}</h1>
      </div>
      {isHidden ?
        <TaskList 
          tasks={shownTasks} 
          setProjects={setProjects}
        />
      : null}
    </div>
  )

}
const ProjectList = ({projects, filter, setProjects}) => {
  if (projects === undefined) return null;
  return (
    <>
      {projects.map(project => {
        return (
          <div className="projectlist" key={`project${project.id}`}>
            <Project 
              project={project} 
              filter={filter}
              setProjects={setProjects}
            />
          </div>
        )
      })}
    </>
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
const ProjectForm = ({createProject,setForm}) => {
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
const TaskForm = ({createTask, projects, setForm}) => {
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
            <option value={project.id}>{project.title}</option>
          )
        }
        </select>
        <input type="submit" />
      </form>
    </div>
  )
}
const Form = ({form, createTask, createProject, projects, setForm}) => {
  if (form === "task"){
    return (
      <TaskForm createTask={createTask} projects={projects} setForm={setForm}/>
    )
  }
  else if (form === "project"){
    return (
      <ProjectForm createProject={createProject} setForm={setForm}/>
    )
  }
  else return null;

}
const Settings = ({createProject, createTask, projects, setFilter}) => {
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
          createProject={createProject} 
          createTask={createTask} 
          projects={projects}
          setForm={setForm}
        />
      </div>
    </div>
  )

}
const Header = () => <h1> Tasker </h1>
const Tasker = () => {
  const [projects, setProjects] = useState([])
  const [filter, setFilter] = useState("showall")

  //Get a list of projects
  useEffect(() => {
    document.title = "Tasker"
    projectService
      .getAll()
      .then(result => {
        //console.log(result)
        setProjects(result);
      })
  }, [])

  const createProject = (title, description) => {
    let project = {title: title, description: description}
    projectService
      .create(project)
      .then(result => {
        setProjects(result)
        console.log(result)
      })
  }
  const createTask = (task) => {
    console.log(task)
    task = {
      ...task,
      state: 0
    }
    taskService
      .create(task)
      .then(result => {
        setProjects(result)
        //console.log(result)
      })
  }
  //console.log(filter);
  return (
    <div className="tasker">
        <Header />
        <Settings 
          createProject={createProject} 
          createTask={createTask} 
          projects={projects}
          setFilter={setFilter}
        />
        <ProjectList 
          projects={projects} 
          filter={filter}
          setProjects={setProjects}
        />
    </div>
  )
}
export default Tasker;
