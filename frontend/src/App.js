import { HashRouter as Router,Routes,BrowserRouter,Route} from 'react-router-dom'
import './index.css'
import React, {useEffect} from 'react'
import NavigationBar from './components/NavigationBar'
import Library from './library/Library'
import Helmet from './helmet/helmet'
import Home from './home/Home'
import YouTuber from './youtuber/YouTuber'
import Tasker from './tasker/Tasker'
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
          <Routes>
            <Route
              key="/"
              exact path=""
              element={<Home />}
            />
            <Route
              key="/"
              exact path="/home"
              element={<Home />}
            />
            <Route
              key="/"
              exact path="/library"
              element={<Library />}
            />
            <Route
              exact path="/library/:book"
              element={<Library />}
            />
            <Route
              exact path="/helmet"
              element={<Helmet />}
            />
            <Route
              exact path="/youtuber"
              element={<YouTuber />}
            />
            <Route
              exact path="/tasker"
              element={<Tasker />}
            />
          </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
