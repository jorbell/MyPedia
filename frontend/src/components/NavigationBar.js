import { Link } from 'react-router-dom'
import PageLogo from './ui/PageLogo'

const NavigationBar = ({links, logo}) => {
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

