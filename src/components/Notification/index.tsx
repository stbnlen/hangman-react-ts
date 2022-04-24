import React from 'react';

interface Props {
  showNotification: boolean;
}

const Notification: React.FC<Props> = ({ showNotification }) => {
  return (
    <div className={`notification-container ${showNotification ? 'show' : ''}`}>
      <p>You have already entered this letter</p>
    </div>
  );
};

export default Notification;
