import { Link } from 'react-router-dom'
import PageLogo from './PageLogo'
import useNavigationBar from '../hooks/useNavigationBar'

const NavigationBar = () => {
  const {links, logo} = useNavigationBar()
  const style = {
    display: "flex",
    height: 48
  }
  return (
    <div style={style}>
    <PageLogo {...logo}/>
    {links.map(link => <Link {...link} />)}
    </div>
  )
}
export default NavigationBar

