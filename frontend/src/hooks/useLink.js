import {useState} from "react"
import {useLocation} from "react-router-dom"
const useLink = (to, children) => {
  const loc = useLocation()
  console.log(loc.pathname.includes(to))

  const [hover, setHover] = useState(false);

  const style = {
    color: 'black',
    padding: "14px 16px"

  }
  if (loc.pathname.includes(to)){
    style.color = 'white'
    style.backgroundColor = '#666'
  }
  else {
    style.color = 'black'
  }
  if (hover) {
    style.color = 'white'
    style.backgroundColor = 'gray'
  }
  const onMouseEnter = () => {
    setHover(true)
  }
  const onMouseLeave = () => {
    setHover(false)
  }


  return {key:to, to, children, style, onMouseEnter, onMouseLeave}
}
export default useLink
