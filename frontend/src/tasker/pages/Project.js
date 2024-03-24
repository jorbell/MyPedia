import TaskFeed from '../components/TaskFeed'
import CreateForm from '../components/CreateForm';
import useProject from '../hooks/useProject'

const Project = ({id}) => {
  const {project, taskfeed, sprintForm, taskForm}= useProject(id);
  if(project !== undefined) {
    return ( 
      <>
        <h1> {project.title }</h1>
        <p> {project.description }</p>
        <TaskFeed {...taskfeed} />
        <CreateForm {...sprintForm}/>
        <CreateForm {...taskForm}/>
      </>
    )
  }
}
export default Project;
