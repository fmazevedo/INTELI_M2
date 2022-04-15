
const express = require('express'); 
const app = express();

const hostname = '127.0.0.1';
const port = 3021;
//todas as páginas estáticas ficam neste diretório
app.use(express.static("../frontend/public"));

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});