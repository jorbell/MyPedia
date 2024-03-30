const EditTask = ({title, description, onSubmit, handleDelete}) => {
  return (
    <>
      <h3> Edit a task: </h3>
      <button onClick={handleDelete}> Delete </button>
      <br />
      <br />
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
