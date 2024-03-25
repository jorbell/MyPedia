import useField from "./useField"

const useForm = (text, className, submit) => {
  const title = useField('text')
  const description = useField('text')
  const onSubmit = (event) => {
    event.preventDefault()
    submit(title.field.value, description.field.value)
    title.clear()
    description.clear()
  }
  return {
    title: title.field,
    description: description.field,
    onSubmit,
    text,
    className
  }
}
export default useForm
