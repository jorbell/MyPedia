import './index.css'
import { HashRouter as Router,Routes,BrowserRouter,Route} from 'react-router-dom'
import React, {} from 'react'
import NavigationBar from './components/NavigationBar'
import BookView from './Books/BookView'
import Home from './Home/Home'
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
              exact path="/books"
              element={<BookView />}
            />
            <Route
              exact path="books/:book"
              element={<BookView />}
            />
          </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
