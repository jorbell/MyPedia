import { Routes,Route} from 'react-router-dom'
import Home from '../pages/home/Home'
import Tasker from '../pages/tasker/Tasker'
import YouTuber from '../pages/youtuber/YouTuber'
import Library from '../pages/library/Library'
import useRoute from '../hooks/useRoute'

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
