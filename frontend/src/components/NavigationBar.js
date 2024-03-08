import './navigationBar.css'
import { Link } from 'react-router-dom'
const NavigationBar = () => {
    return (
      <div className="topnav">
        <Link className="pagelogo" to="" >MyPedia</Link>
          <div className="topnavLinks">
              <Link to="helmet"
                key="helmet"
                className="inactive"
                  > 
                Helmet
              </Link>
              <Link to="library"
                key="library"
                className="inactive"
                  > 
                Library
              </Link>
              <Link to="tasker"
                key="tasker"
                className="inactive"
                  > 
                Tasker
              </Link>
              <Link to="youtuber"
                key="youtuber"
                className="inactive"
                  > 
                YouTuber
              </Link>
          </div>
      </div>
    )
}
export default NavigationBar

