import CreateForm from "../CreateForm"
import EditSprint from "./EditSprint"
import EditTask from "./EditTask"
const PopUp = ({ isShown, setIsShown, type, taskForm, sprintForm, taskEditor, sprintEditor}) => {
  const parentStyle = {
    position: 'fixed',
    top: 48,
    left: 0,
    width: '100vw',
    height: 'calc(100vh - 48px)',
    backgroundColor: '#00000022',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
  const childStyle = {
    borderRadius: 25,
    color: 'black',
    backgroundColor: 'white',
    padding: 25,
    display: 'grid',
  }
  const buttonStyle = {
    display: 'flex',
    justifyContent: 'right',

  }
  if (isShown)
    return (
      <div style={parentStyle}>
        <div style={childStyle}>
          <div style={buttonStyle}>
            <button onClick={() => setIsShown(!isShown)}> X </button>
          </div>
          <div>
          {(type === "taskform") ?
            <CreateForm {...taskForm}/>
          : (type === "sprintform") ?
            <CreateForm {...sprintForm}/>
          : (type === "task") ?
            <EditTask {...taskEditor}/>
          : (type === "sprint") ?
            <EditSprint {...sprintEditor}/>
          : null
          }
          </div>
        </div>
      </div>
    )

}
export default PopUp
