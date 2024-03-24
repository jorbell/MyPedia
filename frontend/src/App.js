import { Routes,Route} from 'react-router-dom'
import './index.css'
import React from 'react'
import NavigationBar from './components/NavigationBar'
import Library from './library/Library'
import Home from './home/Home'
import YouTuber from './youtuber/YouTuber'
import Tasker from './tasker/Tasker'
import useApp from './hooks/useApp'
import useRoute from './hooks/useRoute'

const App = () => {
  const {nav} = useApp()
  const home = useRoute("/", <Home />)
  const library = useRoute("/library", <Library />)
  const book = useRoute("/library/:book", <Library />)
  const youtuber = useRoute("/youtuber", <YouTuber />)
  const tasker = useRoute("/tasker", <Tasker />)
  const project = useRoute("/tasker/:project", <Tasker />)

  const routes = [home, library, book, youtuber, tasker, project]
  return (
    <div className="App">
      <NavigationBar {...nav}/>
      <Routes>
        {routes.map(route => <Route {...route} /> )}
      </Routes>
    </div>
  );
}
export default App;
