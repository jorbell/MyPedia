import '../styles/Task.css'
import useTask from '../hooks/useTask'
import Select from './ui/Select'

const Task = ({task, sprints,updateTask, states}) => {
  const {stateSelect, sprintSelect} = useTask(task, sprints, updateTask, states)

  let style = {

  }
  //Not started
  if (task.state === '0'){ style={ backgroundColor:'#ecc' }}
  //Started
  else if (task.state === '1'){ style={ backgroundColor:'#eea' }}
  //Complete
  else if (task.state === '2'){ style={ backgroundColor:'#8b7' }}
  return (
    <div className="task" style={style}>
      <div style={{width:'100%'}}> 
        <p><b><u>{task.title}</u></b> - {task.description } </p>
      </div>
      <Select {...stateSelect} />
      <Select {...sprintSelect} />
    </div>
  )
}
export default Task
