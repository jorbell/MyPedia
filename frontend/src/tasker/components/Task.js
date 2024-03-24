import '../styles/Task.css'
import useTask from '../hooks/useTask'
import Select from './ui/Select'

const Info = ({task}) => {
  return (
    <div className="info"> 
      <p><b><u>{task.title}</u></b> - {task.description } </p>
    </div>
  )
}
const Task = ({task, sprints,updateTask, states}) => {
  const {stateSelect, sprintSelect} = useTask(task, sprints, updateTask, states)
  return (
    <div className="task">
      <Info task={task} />
      <div className="buttons"> 
        <Select {...stateSelect} />
        <Select {...sprintSelect} />
      </div>
    </div>
  )
}
export default Task
