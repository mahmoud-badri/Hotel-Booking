import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ActivationPage = () => {
  const { token } = useParams();
const [confirm,setConfirm]= useState('')
  useEffect(() => {
    // Send a request to your backend API to activate the account
    // Pass the token as a parameter to the activation API endpoint

    // Example using fetch:
    fetch(`/api/activate/${token}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        if (response.ok) {
          // Account activation successful
          setConfirm(response.message)
          // You can redirect the user to a success page or display a success message
        } else {
          // Account activation failed
          // You can redirect the user to a failure page or display an error message
        }
      })
      .catch(error => {
        // Handle any errors that occurred during the activation process
      });
  }, [token]);

  return (
    <div>
      <h1>Activating your account...</h1>
      {/* You can display a loading spinner or a message indicating that the account is being activated */}
   {confirm}
    </div>
  );
};
export default ActivationPage