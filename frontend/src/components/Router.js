import { Routes,Route} from 'react-router-dom'
import Home from '../pages/Home'
import Library from '../pages/Library'
import useRoute from '../hooks/useRoute'

const Router = () => {
  const home = useRoute("/", <Home />)
  const library = useRoute("/library", <Library />)
  const book = useRoute("/library/:book", <Library />)
  const routes = [home, library, book]
  return (
    <Routes>
      {routes.map(route => <Route key={route.key} {...route} /> )}
    </Routes>
  )

}
export default Router
