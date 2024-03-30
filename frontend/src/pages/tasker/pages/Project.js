import TaskFeed from '../components/TaskFeed'
import useProject from '../hooks/useProject'
import PopUp from '../components/ui/PopUp';

const Header = ({project, popup}) => {
  const style = {
    textAlign:"center",
    marginBottom: '20px',
  }
  const buttonStyle = {
    margin:'10px',
    backgroundColor:'#FFFFFFEE'
  }
  return (
    <div style={style}>
      <h1> {project.title }</h1>
      <p> {project.description }</p>
      <div>
        <button style={buttonStyle} onClick={() => popup.openSprintForm()}> Create a sprint</button>
        <button style={buttonStyle} onClick={() => popup.openTaskForm()}> Create a Task </button>
        <button style={buttonStyle} onClick={() => popup.openEditProject()}> Edit project</button>
      </div>
    </div>
  )
}
const Project = ({id}) => {
  const {project, taskfeed, popup } = useProject(id);
  const style = {
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    width:'80%',
  }
  if(project !== undefined) {
    return ( 
      <div style={style}>
        <Header project={project} popup={popup} />
        <TaskFeed {...taskfeed} />
        <PopUp {...popup}/>
      </div>
    )
  }
}
export default Project;
