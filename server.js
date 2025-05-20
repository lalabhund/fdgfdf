module.exports = (req, res) => {
  const path = req.url.slice(1); // Remove leading slash

  // If root, show message or redirect somewhere
  if (!path) {
    res.setHeader('Content-Type', 'text/html');
    res.status(200).end('<h1>Redirect Service</h1><p>Use /your-url to redirect.</p>');
    return;
  }

  // Redirect to the given path
  const targetUrl = `https://${path}`;
  res.writeHead(302, { Location: targetUrl });
  res.end();
};
