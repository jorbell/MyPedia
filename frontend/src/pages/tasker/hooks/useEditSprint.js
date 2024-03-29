import {useEffect, useState} from "react"
import useField from "./useField"

const useEditSprint = (updateSprint, deleteSprint) => {
  const title = useField('text')
  const description = useField('textarea')
  const [sprint, setSprint] = useState()

  const handleSprint = (sprint) => {
    setSprint(sprint)
    title.changevalue(sprint.title)
    description.changevalue(sprint.description)
  }
  const onSubmit = (event) => {
    event.preventDefault()
    updateSprint({
      ...sprint,
      title: title.field.value,
      description: description.field.value,
    })
    title.clear()
    description.clear()
  }
  const handleDelete = (event) => {
    event.preventDefault()
    deleteSprint(sprint)
  }
  return {
    title,
    description,
    handleSprint,
    onSubmit,
    handleDelete
  }
}
export default useEditSprint
