import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
    var user = localStorage.getItem("user")
    user = JSON.parse(user)

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage('');
    setErrorMessage('');

    try {
      await axios.post('http://127.0.0.1:8000/api/contactus/', {
        name,
        email,
        message,
      });
      setSuccessMessage('Email sent successfully.');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      setErrorMessage('Failed to send email. Please try again later.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button type="submit">Submit</button>
      {successMessage && <p>{successMessage}</p>}
      {errorMessage && <p>{errorMessage}</p>}
    </form>
  );
};

export default ContactForm;