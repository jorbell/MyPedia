const EditSprint = ({title, description, onSubmit, handleDelete}) => {
  return (
    <>
      <h1> Edit a task: </h1>
      <form onSubmit={onSubmit}>
        Title: <input {...title.field} />
        <br />
        Description: <input {...description.field} />
        <br />
        <button onClick={handleDelete}> Delete </button>
        <input type="submit" />
      </form>
    </>
  )
}
export default EditSprint
