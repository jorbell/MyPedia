import '../styles/TaskFeed.css'
import Sprint from './Sprint';

const divStyle = {
  display: "flex",
  flexDirection:"column",
  width: "80%"
}

const TaskFeed = ({sprints, updateTask, states, popup}) => (
  <div style={divStyle}>
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
export default TaskFeed
