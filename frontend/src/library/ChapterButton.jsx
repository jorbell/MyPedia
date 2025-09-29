import '../styles/ChapterButton.css'

const ChapterButton = ({isActive, name, onClick}) => {
  return(
    <button 
      onClick={onClick}
      className={`chapter-button ${isActive} ? 'active' : ''}`}
    >
    
    {name}
    </button>
  )
}
export default ChapterButton
