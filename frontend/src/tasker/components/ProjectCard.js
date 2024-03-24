import '../styles/ProjectCard.css'
const ProjectCard = ({project, handleOnClick}) => {
  return(
    <div className="projectcard" onClick={() => handleOnClick(project.id)}>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
    </div>
  )
}
export default ProjectCard
