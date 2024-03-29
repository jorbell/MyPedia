import TaskFeed from '../components/TaskFeed'
import useProject from '../hooks/useProject'
import PopUp from '../components/ui/PopUp';

const Project = ({id}) => {
  const {project, taskfeed, popup } = useProject(id);

  if(project !== undefined) {
    return ( 
      <>
        <h1> {project.title }</h1>
        <p> {project.description }</p>
        <div>
          <button onClick={() => popup.openSprintForm()}> Create a sprint</button>
          <button onClick={() => popup.openTaskForm()}> Create a Task </button>
        </div>
        <TaskFeed {...taskfeed} />
        <PopUp {...popup}/>
      </>
    )
  }
}
export default Project;
