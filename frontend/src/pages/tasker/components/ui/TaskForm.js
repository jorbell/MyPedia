const TaskForm = ({text, classname, onSubmit, description, title}) => {
  return (
    <div className={classname}>
      <form onSubmit={onSubmit}>
        <h3> {text} </h3>
        Title: <input {...title}/>
        Description: <input {...description}/>
        <input type="submit" />
      </form>
    </div>
  )
}
export default TaskForm
