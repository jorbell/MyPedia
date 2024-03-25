import {useState} from "react";

const useChapterButton = (chapterName, onClick, isActive) => {
  const [hover, setHover] = useState(false);

  const style = {
    color: 'black',
    //padding: "14px 16px"
  }
  //if (loc.pathname.includes(to)){
  if (isActive) {
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

  return {name:chapterName, onClick, style, children:chapterName, onMouseEnter, onMouseLeave}
}
export default useChapterButton
