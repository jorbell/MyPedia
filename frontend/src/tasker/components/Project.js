import TaskFeed from './TaskFeed'
import useProject from '../hooks/useProject'

const Project = ({id}) => {
  const {project, setProject} = useProject(id);
  if(project !== undefined) {
    return ( 
      <>
        <h1> {project.title }</h1>
        <p> {project.description }</p>
        <TaskFeed projectid={id} 
        />
      </>
    )
  }
}
export default Project;
