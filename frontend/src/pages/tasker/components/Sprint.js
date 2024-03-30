import {useState} from "react"
import Task from "./Task"
import '../styles/Sprint.css'
import PopUp from "./ui/PopUp"

const Sprint = ({sprint, sprints, updateTask,states, popup}) => {
  const [isHidden, setIsHidden] = useState(false)

  const buttonStyle = {
    backgroundColor:'#FFFFFF88',
    borderStyle:'none',
    margin:5,
    marginRight:4,
  }
  return (
    <div className="sprint">
      <div className="header">
        <div className="info" style={{width:'100%'}}>
          <h3 style={{margin:0, marginLeft:5}}> {sprint.title} </h3>
        </div>
        <button style={buttonStyle} onClick={() => popup.openSprintEdit(sprint)}> Edit </button>
        <button style={buttonStyle} onClick={() => setIsHidden(!isHidden)}> {isHidden ? "Show" : "Hide"} </button>
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
