import { Link } from 'react-router-dom'
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
export default PageLogo
