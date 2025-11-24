import { Link } from 'react-router-dom'
import '../styles/NavigationBar.css'

const PageLogo = () => {
  return (
    <Link key="/" to="/" className="page-logo">
      Library
    </Link>
  )
}
const NavigationBar = () => {
  return (
    <div className="navigation-bar">
      <PageLogo />
    </div>
  )
}
export default NavigationBar
