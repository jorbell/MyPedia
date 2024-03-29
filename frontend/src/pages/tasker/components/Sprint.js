import {useState} from "react"
import Task from "./Task"
import '../styles/Sprint.css'
import PopUp from "./ui/PopUp"

const Sprint = ({sprint, sprints, updateTask,states, popup}) => {
  const [isHidden, setIsHidden] = useState(false)

  return (
    <div className="sprint">
      <div className="header">
        <div className="info">
          <h3 style={{margin:0}}> {sprint.title} </h3>
        </div>
        <div className="buttons">
          <button onClick={() => popup.openSprintEdit(sprint)}> edit </button>
          <button onClick={() => setIsHidden(!isHidden)}> {isHidden ? "Show" : "Hide"} </button>
        </div>
      </div>
      {!isHidden ?
        <div className="tasks">
          {sprint.tasks.map(t => 
            <Task key={t.id} task={t} popup={popup} states={states} sprints={sprints} updateTask={updateTask}/>
          )}
        </div>
        : null
      }
    <PopUp {...popup} />
    </div>
  )
}
export default Sprint
