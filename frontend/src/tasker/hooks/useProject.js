import {useEffect, useState} from 'react';
import projectService from '../services/project'

const useProject = (id) => {
  const [project, setProject] = useState(undefined)

  useEffect(() => {
    document.title = "Tasker"
    projectService
      .getAll()
      .then(result => {
        let cp = result.find(project => 
          parseInt(project.id) === parseInt(id)
        )
        setProject(cp);
      })
  }, [id, setProject])

  return {project}
}
export default useProject;
