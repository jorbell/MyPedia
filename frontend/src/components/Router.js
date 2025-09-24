import { Routes,Route} from 'react-router-dom'
import Library from '../pages/Library'
import useRoute from '../hooks/useRoute'

const Router = () => {
  const library = useRoute("/", <Library />)
  const book = useRoute("/:book", <Library />)
  const routes = [library, book]
  return (
    <Routes>
      {routes.map(route => <Route key={route.key} {...route} /> )}
    </Routes>
  )

}
export default Router
