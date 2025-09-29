import { Link } from 'react-router-dom';
import '../styles/NavigationBar.css';

const PageLogo = () => {
  return (
    <Link 
      key="/"
      to="/"
      children="Library"
      className='page-logo' />
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

