import { Link, useLocation } from 'react-router-dom';
import '../styles/BookLink.css';

const BookLink = ({ name }) => {
  const location = useLocation();
  const isActive = location.pathname.includes(name);


  return (
    <Link
      to={`../${name}`}
      className={`book-link ${isActive ? 'active' : ''}`}
    >
      {name}
    </Link>
  );
}
export default BookLink
