import {useState} from 'react';
import useTaskFeed from '../hooks/useTaskFeed';
import Task from './Task'

const TaskForm = ({createTask}) => {
  const submit = (event) => {
    event.preventDefault()
    let title = event.target.title.value
    let description = event.target.description.value
    createTask({title, description})
  }
  return (
    <div className="taskform">
      <form onSubmit={submit}>
        <h3> New task: </h3>
        Title: <input id="title" type="text" />
        Description: <input id="description" type="text" />
        <input type="submit" />
      </form>
    </div>
  )
}
const SprintForm = ({createSprint}) => {
  const submit = (event) => {
    event.preventDefault()
    let title = event.target.title.value
    let description = event.target.description.value
    createSprint({title, description})
  }
  return (
    <div className="taskform">
      <form onSubmit={submit}>
        <h3> Sprint form: </h3>
        Title: <input id="title" type="text" />
        Description: <input id="description" type="text" />
        <input type="submit" />
      </form>
    </div>
  )
}
const Sprint = ({sprint, updateTask}) => {
  const [isHidden, setIsHidden] = useState(false)
  return (
    <div className="sprint">
      <div className="sprintheader">
        <div className="sprintinfo">
          <h3> {sprint.title} </h3>
        </div>
        <div className="buttons">
          <button onClick={() => setIsHidden(!isHidden)}> {isHidden ? "Show" : "Hide"} </button>
        </div>
      </div>
      {!isHidden ?
        <div className="tasks">
          {sprint.tasks.map(t => 
            <Task key={t.id} task={t} updateTask={updateTask}/>
          )}
        </div>
        : null
      }
    </div>
  )
}
const Backlog = ({tasks, updateTask}) => {
  return (
    <div className="sprint">
      <h1> backlog </h1>
      {tasks.map(t => 
        <Task key={t.id} task={t} updateTask={updateTask} />
      )}
    </div>
  )
}
const TaskFeed = ({projectid}) => {
  const {sprints, backlog, updateTask, createTask, createSprint} = useTaskFeed(projectid)
  const [showForm, setShowForm] = useState(false)
    return (
      <>
        <button onClick={() => setShowForm(!showForm)}> {showForm ? "hide" : "show"} </button>
        {showForm ?
          <>
          <TaskForm createTask={createTask} />
          <SprintForm createSprint={createSprint} />
          </>
          : null
        }
        <div className="taskfeed" key={`project${projectid}`}>
          { sprints.map(sprint =>  
            <Sprint key={sprint.id} sprint={sprint} updateTask={updateTask} />
          )}
            <Backlog tasks={backlog} updateTask={updateTask}/>

        </div>
      </>
    )
}
export default TaskFeed
