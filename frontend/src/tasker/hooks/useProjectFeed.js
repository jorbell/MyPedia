import {useCallback, useEffect, useState} from "react";
import useFetch from "./useFetch";
import {useNavigate} from "react-router-dom";
import projectService from '../services/project'

const useProjectFeed = () => {
  const [projects, setProjects] = useState();
  const initProjects = useFetch().getProjects();

  const navigate = useNavigate();
  const handleOnClick = useCallback((id) => 
    navigate(`/tasker/${id}`, {replace:false}), [navigate]
  )

  useEffect(() => {
    setProjects(initProjects)
  }, [initProjects, setProjects])

  const createProject = (title, description) => {
    let project = {title: title, description: description}
    projectService
      .create(project)
      .then(result => {
        setProjects([...projects, result])
      })
  }
  return {projects, handleOnClick, createProject}

}
export default useProjectFeed
