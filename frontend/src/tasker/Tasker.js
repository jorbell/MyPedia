import ProjectFeed from './components/ProjectFeed'
import Project from './components/Project'
import './style.css'
import {useParams} from 'react-router-dom'

const Header = () => <h1> Tasker </h1>
const Tasker = () => {
  const params = useParams()
  return (
    <div className="tasker">
      {params.project === undefined ? 
        <>
          <Header />
          <ProjectFeed />
        </>
      :
        <Project id={params.project}/>
    }
    </div>
  )
}
export default Tasker;
