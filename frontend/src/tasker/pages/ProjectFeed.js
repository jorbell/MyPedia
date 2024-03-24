import CreateForm from '../components/CreateForm';
import ProjectCard from '../components/ProjectCard';
import '../styles/ProjectFeed.css'

const ProjectFeed = ({projects, handleOnClick,projectForm}) => {
  return (
    <>
      <CreateForm {...projectForm}/>
      {projects !== undefined ?
        <div className="projectfeed" >
        {projects.map(project => {
          return ( <ProjectCard key={project.id} project={project} handleOnClick={handleOnClick}/>)
        })}
        </div>
        : null
      }
    </>
  )
}
export default ProjectFeed
