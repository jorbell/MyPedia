const EditTask = ({title, description, onSubmit}) => {
  return (
    <>
      <h1> Edit a task: </h1>
      <form onSubmit={onSubmit}>
        Title: <input {...title.field} />
        <br />
        Description: <input {...description.field} />
        <br />
        <input type="submit" />
      </form>
    </>
  )
}
export default EditTask
