// client-new/src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Call the full URL directly
    axios.get('http://localhost:5001/api/test')
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(err => {
        console.error('Error fetching data:', err);
        setError('Failed to fetch data from the server. Is it running?');
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Smart City Platform</h1>
        {error ? <p style={{ color: 'red' }}>{error}</p> : <p>Message from server: <strong>{message}</strong></p>}
      </header>
    </div>
  );
}

export default App;