import '../styles/TaskFeed.css'
import Sprint from './Sprint';


const Header = ({filter}) => {
  const divStyle = {
    display: "flex",
    flexDirection:"row",
    justifyContent:"right"
  }
  return (
    <div style={divStyle}>
      Not started:
      <input {...filter.notStarted}/>
      Started:
      <input {...filter.started}/>
      Completed:
      <input {...filter.completed}/>
    </div>
  )
}
const TaskFeed = ({sprints, updateTask, states, popup, filter}) => {
  const divStyle = {
    display: "flex",
    flexDirection:"column",
    width: "80%"
  }
  return (
    <div style={divStyle}>
      <Header filter={filter}/>
      {sprints.map(sprint =>  
        <Sprint 
          key={sprint.id} 
          sprint={sprint} 
          states={states} 
          sprints={sprints} 
          popup={popup}
          updateTask={updateTask} />
      )}
    </div>
  )
}
export default TaskFeed
