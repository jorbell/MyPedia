
import React, {useEffect} from 'react'
const Helmet = () => {
  useEffect(() => {
    document.title = 'Helmet Haku';
  }, []);
  return <h1> Helmeeeet </h1>
}
export default Helmet
