import { useEffect } from 'react';
import '../styles/Notification.css';

const Notification = ({notification}) => {
  console.log(notification);
  if(notification.isHidden) return <></>;
  return (
    <div className={`notification ${notification.isFading ? 'visible' : 'fading'}`}>
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
