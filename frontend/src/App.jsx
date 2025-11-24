import NavigationBar from './components/NavigationBar'
import { Routes, Route } from 'react-router-dom'
import Library from './library/Library'

const App = () => {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route key="/" path="/" element={<Library />} />
        <Route key="/:book" path="/:book" element={<Library />} />
      </Routes>
    </div>
  )
}
export default App
