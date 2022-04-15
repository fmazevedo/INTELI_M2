const http    = require('http');
const sqlite3 = require('sqlite3').verbose(); 
const hostname = '127.0.0.1';
const port = 3002;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  var db = new sqlite3.Database('dbUser.db');
  db.get('SELECT * \
          FROM tbUser \
          WHERE userId = 1', [], (err, row) => {
        res.write('<!DOCTYPE html> \n<meta charset="UTF-8">\n<head> \n\t<title>Etapa 0 - INSTALACAO</title>\n</head> \
            \n<body> \
              \n\t<div id="main"> \
                     \n\t\t<h1> Setup - Conexão com o SQLite </h1>');
        res.write('\n\t\t<h2> Olá ' + row.title + '</h2> \n\t</div>'); 
        res.write('\n</body> \n</html>');
	      res.end(); 
   });
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});