const express = require('express');
const app = express();

// Redirect based on path
app.get('/:target', (req, res) => {
  const target = req.params.target;
  let redirectUrl = '';

  // Define redirects based on path
  if (target === 'google.com') {
    redirectUrl = 'https://www.google.com';
  } else if (target === 'github.com') {
    redirectUrl = 'https://github.com';
  } else {
    redirectUrl = `https://${target}`;
  }

  // Redirect to the desired URL
  res.redirect(301, redirectUrl);
});

// Serve index.html for root requests
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Start server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
