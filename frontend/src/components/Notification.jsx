import { useEffect } from 'react';
import '../styles/Notification.css';

const Notification = ({notification}) => {
  return (
    <div className={`notification ${notification.isVisible ? 'visible' : 'notvisible'}`}>
      <h4 className='notification-header'>
        {notification.title}
      </h4>
      <p className='notification-text'> 
        {notification.text}
      </p>
    </div>
  )
}
export default Notification
