import useTask from '../hooks/useTask'

const SprintSelect = ({onChange, thisSprint, sprints}) => {
  return (
    <select onChange={onChange}>
      {thisSprint !== undefined ?
       <option defaultValue={thisSprint.id}>{thisSprint.title} </option>
        : <option defaultValue={0}>Backlog</option>
      }
      <option defaultValue={0}>Backlog</option>
      {sprints.map((sprint) => 
        <option key={sprint.id} value={sprint.id}>{sprint.title} </option>
      )}
    </select>
  )
}
const StateSelect = ({onChange, task, states }) => {
  return (
    <select onChange={onChange}>
      <option defaultValue={task.state}> {states[task.state].name} </option>
      {states.map(s => 
        <option key={s.value} value={s.value}> {s.name} </option>
      )}
    </select>
  )
}
const Info = ({task}) => {
  return (
    <div className="info"> 
      <p><b><u>{task.title}</u></b> - {task.description } </p>
    </div>
  )
}
const Task = ({task, updateTask}) => {
  const {states, sprints, thisSprint } = useTask(task)
  const updateState = (event) => {
    let newTask = {...task,
      state: event.target.value
    }
    updateTask(newTask)
  }
  const updateSprint = (event) => {
    let newTask = {...task,
      sprintid: parseInt(event.target.value)
    }
    updateTask(newTask)
  }
  return (
    <div className="task">
      <Info task={task} />
      <div className="buttons"> 
        <SprintSelect onChange={updateSprint} thisSprint={thisSprint} sprints={sprints}/>
        <StateSelect onChange={updateState} task={task} states={states} />
        <br />
      </div>
    </div>
  )
}
export default Task
