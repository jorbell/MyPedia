import { Link } from 'react-router-dom'
import useLink from "../hooks/useLink"

const style = {
  color: 'white',
  backgroundColor: '#141414',
  textAlign: 'left',
  padding: '11px 16px',
  fontSize: 24,
}
const PageLogo = (link) => {
  return (
    <Link {...link} style={style} />
  )
}
const NavigationBar = () => {
  const logo = useLink("", "MyPedia");
  const style = {
    display: "flex",
    height: 48
  }
  return (
    <div style={style}>
      <PageLogo {...logo}/>
    </div>
  )
}
export default NavigationBar

