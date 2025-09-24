import { Link } from 'react-router-dom'
import useBookLink from '../hooks/useBookLink'
const BookLink = ({ name }) => {
  const link = useBookLink(`../${name}`, name)
  return (
    <Link {...link} />
  )
}
export default BookLink
