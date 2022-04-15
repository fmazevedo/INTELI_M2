const http = require('http');
const hostname = '127.0.0.1';
const port = 3001;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<!DOCTYPE html> \n<meta charset="UTF-8">\n<head> \n\t<title>Etapa 0 - INSTALACAO</title>\n</head> \
              \n<body> \
                \n\t<div id="main"> \
                       \n\t\t<h1> Etapa 0 - INSTALAÇÃO - Servidor Node.js </h1> \
                       \n\t\t<h2> Meu servidor NODE.js funciona !  </h2> \n\t</div> \
              \n</body> \
           \n</html>');
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});