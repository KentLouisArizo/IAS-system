import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/functions';

const UserMessage = () => {
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleMessageSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send the message to the admin's email address
      const adminEmail = 'admin@example.com'; // Replace with the actual admin email
      // Use Firebase Cloud Functions or a third-party email service to send the email
      await firebase.functions().sendMail(adminEmail, 'User Message', message);
      setIsSent(true);
      setMessage('');
      alert('Message sent successfully');
    } catch (error) {
      console.error('Message sending error:', error);
      alert('Failed to send message');
    }
  };

  return (
    <div>
      <h2>User Message</h2>
      {isSent ? (
        <p>Message sent successfully!</p>
      ) : (
        <form onSubmit={handleMessageSubmit}>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message for account creation or password change"
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      )}
    </div>
  );
};

export default UserMessage;