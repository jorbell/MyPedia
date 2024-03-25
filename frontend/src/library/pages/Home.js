import {mdiArrowUpThin} from '@mdi/js'
import Icon from '@mdi/react'
import '../styles/Home.css'

const TopLeft= () => {
  return (
    <div className='top-left ani-4'>
      <Icon path={mdiArrowUpThin} 
        className="arrow-up"
        size={1.5}
        />
      <h2>Choose a book from here. </h2>
    </div>
  )
}
const TopRight= () => {
  return (
    <div className='top-right ani-5'>
      <h2>Or create a new one.</h2>
      <Icon path={mdiArrowUpThin} 
        className="arrow-up"
        size={1.5}
        />
    </div>
  )
}
const Top = () => {
  return (
    <div className='top'>
      <TopLeft />
      <TopRight />
    </div>
  )
}
const Bottom = () => {
  return (
    <div className='bottom'>
      <h1 className='ani-1'> Welcome! </h1>
      <p className='ani-2'>
        This is my library.
      </p>
      <p className='ani-3'>
        Here I plan my projects and studies, write diaries and notes. 
      </p>
    </div>
  )
}
const Home = () => {
  return (
    <div className='library-home'>
      <Top />
      <Bottom />
    </div>
  )
}
export default Home
