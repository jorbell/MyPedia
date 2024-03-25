import { Routes,Route} from 'react-router-dom'
import Home from '../../home/Home'
import Tasker from '../../tasker/Tasker'
import useRoute from '../../hooks/useRoute'
import YouTuber from '../../youtuber/YouTuber'
import Library from '../../library/Library'

const Router = () => {
  const home = useRoute("/", <Home />)
  const library = useRoute("/library", <Library />)
  const book = useRoute("/library/:book", <Library />)
  const youtuber = useRoute("/youtuber", <YouTuber />)
  const tasker = useRoute("/tasker", <Tasker />)
  const project = useRoute("/tasker/:project", <Tasker />)

  const routes = [home, library, book, youtuber, tasker, project]
  return (
    <Routes>
      {routes.map(route => <Route {...route} /> )}
    </Routes>
  )

}
export default Router
