// server/index.js
const express = require('express');
const cors = require('cors'); // Import cors
const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors()); // Enable CORS for all routes

app.get('/api/test', (req, res) => {
  res.json({ message: "Hello from the server! (CORS enabled)" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});