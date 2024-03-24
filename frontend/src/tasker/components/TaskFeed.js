import '../styles/TaskFeed.css'
import Sprint from './Sprint';

const divStyle = {
  display: "flex",
  flexDirection:"column",
  width: "80%"
}

const TaskFeed = ({projectid, sprints, updateTask, states}) => (
  <div style={divStyle} key={`project${projectid}`}>
    {sprints.map(sprint =>  
      <Sprint key={sprint.id} sprint={sprint} states={states} sprints={sprints} updateTask={updateTask} />
    )}
  </div>
)
export default TaskFeed
