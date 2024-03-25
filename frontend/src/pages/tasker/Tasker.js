import {useParams} from 'react-router-dom'
import Project from './pages/Project'
import ProjectFeed from './pages/ProjectFeed'
import useProjectFeed from './hooks/useProjectFeed'
import './styles/Tasker.css'
import {useEffect, useState} from 'react'

const Tasker = () => {
  const projectFeed = useProjectFeed()
  const [params, setParams] = useState({})
  const initParams = useParams()

  useEffect(() => {
    setParams(initParams)
  },[initParams])

  return (
    <div className="tasker">
      {params.project === undefined ? 
        <ProjectFeed {...projectFeed}/> :
        <Project id={params.project}/>
      }
    </div>
  )
}
export default Tasker;
