import './navigationBar.css'
import { Link } from 'react-router-dom'
const NavigationBar = () => {
    return (
      <div className="topnav">
        <Link className="pagelogo" to="" >MyPedia</Link>
          <div className="topnavLinks">
              <Link to="home"
                key="home"
                className="inactive"
                  > 
                Home
              </Link>
              <Link to="library"
                key="library"
                className="inactive"
                  > 
                Library
              </Link>
          </div>
      </div>
    )
}
export default NavigationBar

