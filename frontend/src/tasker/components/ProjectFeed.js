import useProjectFeed from '../hooks/useProjectFeed';

const ProjectForm = ({createProject}) => {
  const submit = (event) => {
    event.preventDefault()
    let title = event.target.title.value
    let description = event.target.description.value
    createProject(title, description)
  }
  return (
    <div className="projectform">
      <form onSubmit={submit}>
        <h3> New Project </h3>
        Title: <input id="title" type="text" />
        Description: <input id="description" type="text" />
        <input type="submit" />
      </form>
    </div>
  )
}
const ProjectCard = ({project, handleOnClick}) => {

  return(
    <div className="projectcard" onClick={() => handleOnClick(project.id)}>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
    </div>
  )
}
const ProjectFeed = () => {
  const {projects, handleOnClick, createProject} = useProjectFeed()
  return (
    <>
      <ProjectForm createProject={createProject} />
      {projects !== undefined ?
        <div className="projectfeed" >
        {projects.map(project => {
          return ( <ProjectCard key={project.id} project={project} handleOnClick = {handleOnClick}/>)
        })}
        </div>
        : null
      }
    </>
  )
}
export default ProjectFeed
