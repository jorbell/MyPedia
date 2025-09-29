import { Routes,Route} from 'react-router-dom'
import Library from './library/Library'

const Router = () => {
  return (
    <Routes>
      <Route key="/" path="/" element={<Library />}/>
      <Route key="/:book" path="/:book" element={<Library />}/>
    </Routes>
  )

}
export default Router
