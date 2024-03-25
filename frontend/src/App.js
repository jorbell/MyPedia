import './index.css'
import React from 'react'
import NavigationBar from './components/NavigationBar'
import Router from './components/ui/Router'

const App = () => {
  return (
    <div className="App">
      <NavigationBar />
      <Router />
    </div>
  );
}
export default App;
