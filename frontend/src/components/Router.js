import { Routes,Route} from 'react-router-dom'
import Home from '../components/Home'
import Library from '../Library'
import useRoute from '../hooks/useRoute'

const Router = () => {
  const home = useRoute("/", <Home />)
  const library = useRoute("/library", <Library />)
  const book = useRoute("/library/:book", <Library />)
  const routes = [home, library, book]
  return (
    <Routes>
      {routes.map(route => <Route {...route} /> )}
    </Routes>
  )

}
export default Router
