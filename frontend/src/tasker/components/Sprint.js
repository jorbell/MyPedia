import {useState} from "react"
import Task from "./Task"
import '../styles/Sprint.css'

const Sprint = ({sprint, sprints, updateTask,states}) => {
  const [isHidden, setIsHidden] = useState(false)

  return (
    <div className="sprint">
      <div className="header">
        <div className="info">
          <h3> {sprint.title} </h3>
        </div>
        <div className="buttons">
          <button onClick={() => setIsHidden(!isHidden)}> {isHidden ? "Show" : "Hide"} </button>
        </div>
      </div>
      {!isHidden ?
        <div className="tasks">
          {sprint.tasks.map(t => 
            <Task key={t.id} task={t} states={states} sprints={sprints} updateTask={updateTask}/>
          )}
        </div>
        : null
      }
    </div>
  )
}
export default Sprint
