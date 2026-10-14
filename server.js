import http from 'http'

  const server = http.createServer((req, res) => {
    if (req.url === '/') {
      res.end('Hello Vikas, backend shuru!');
    } else if (req.url === '/about') {
      res.end('About page');
    } else if (req.url === '/time') {
      const now = new Date()
      res.end(`Currunt Time:${now}`);
    } else {
      res.statusCode = 404;
      res.end('Not found');
    }
  });

  server.listen(3000, () => console.log('Server on http://localhost:3000'));
