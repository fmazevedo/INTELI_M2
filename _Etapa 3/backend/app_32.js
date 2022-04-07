
const express = require('express'); 
const sqlite3 = require('sqlite3').verbose();
const app = express();

const hostname = '127.0.0.1';
const port = 3032;
app.use(express.static("../frontend/public"));

app.get('/users', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  var db = new sqlite3.Database('dbUser.db'); 
  var id = req.query.id;
  
  db.get("SELECT * FROM tbUser WHERE userId = (?)", [id],(err,row) => {
      if (err) {
          throw err;
      }
      res.write("<h1> Etapa 31 - Lendo o Banco de Dados </h1>") 
      res.write("<h2> Servidor de Banco de Dados SQLite3 </h2>") 
      res.write("<h3> Campo Title: "+ row.title +" </h3>"); 
      res.end(); 
    });
  db.close(); // Fecha o banco
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});