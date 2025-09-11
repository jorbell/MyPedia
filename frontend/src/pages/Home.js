import '../styles/home.css'
import React, {useEffect} from 'react'
const Home = () => {
  useEffect(() => { document.title = 'MyPedia'; }, []);
  return (
    <div className="home">
      <div className="homeContent">
        <h1> Welcome to MyPedia. </h1>
        <p>
          Choose a book from the top and start writing!
        </p>
      </div>
    </div>
  )
}
export default Home
