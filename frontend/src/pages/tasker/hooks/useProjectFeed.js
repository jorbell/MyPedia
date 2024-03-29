import {useCallback, useEffect, useState} from "react";
import useFetch from "./useFetch";
import {useNavigate} from "react-router-dom";
import projectService from '../services/project'
import useForm from "./useForm";

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

  const createProject = (project) => {
    projectService
      .create(project)
      .then(result => {
        setProjects([...projects, result])
      })
  }
  const projectForm = useForm("Create project:", "projectform", createProject)
  return {projects, handleOnClick, createProject, projectForm}

}
export default useProjectFeed
