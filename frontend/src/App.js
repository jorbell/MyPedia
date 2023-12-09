import { HashRouter as Router,Routes,BrowserRouter,Route} from 'react-router-dom'
import './index.css'
import React from 'react'
import NavigationBar from './components/NavigationBar'
import Library from './library/Library'
import Home from './home/Home'
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
          </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
