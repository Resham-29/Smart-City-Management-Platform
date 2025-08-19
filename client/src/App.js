// client/src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    console.log('Attempting to fetch data from /api/test');

    // Use axios to get data from the backend
    axios.get('/api/test')
      .then(response => {
        // This runs if the request is successful
        console.log('Data received from server:', response.data);
        setMessage(response.data.message);
      })
      .catch(err => {
        // This runs if there is an error
        console.error('Error fetching data:', err);
        setError('Failed to fetch data from the server. Is it running?');
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Smart City Platform</h1>
        {/* Show the message, or an error if something went wrong */}
        {error ? <p style={{ color: 'red' }}>{error}</p> : <p>Message from server: <strong>{message}</strong></p>}
      </header>
    </div>
  );
}

export default App;