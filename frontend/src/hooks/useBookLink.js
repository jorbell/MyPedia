import {useState} from "react"
import {useLocation} from "react-router-dom"
const useBookLink = (to, children) => {
  const loc = useLocation()
  const [hover, setHover] = useState(false);

  const style = {
    color: 'white',
    padding: "14px 16px"
  }
  //Set background-color if the book is selected
  if (to.includes(loc.pathname) && loc.pathname !== "/library") {
    style.backgroundColor = '#666'
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
export default useBookLink
