import {useEffect, useState} from "react"
import useField from "./useField"

const useEditSprint = (updateSprint) => {
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
  return {
    title,
    description,
    handleSprint,
    onSubmit
  }
}
export default useEditSprint
