import useChapterButton from "../hooks/useChapterButton"
const ChapterButton = ({isActive, name, onClick}) => {
  const btn = useChapterButton(name, onClick, isActive)
  return(<button {...btn} />)
}
export default ChapterButton
