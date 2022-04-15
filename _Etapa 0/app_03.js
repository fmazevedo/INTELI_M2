/************************************************************************************************
 SITE WEB - SETUP - ETAPA 4 - BACKEND 
************************************************************************************************/

// Recursos
var express = require('express'); // Recurso para Express - para instalar o Express: npm install express --save

// Definições da URL do endpoint
var hostname = '127.0.0.1';
var port = 3003;

// Cria o servidor
var app = express();

app.get('/', (req, res) => {
	req.query.nome
	res.write('<!DOCTYPE html> \n<meta charset="UTF-8">\n<head> \n\t<title>Etapa 0 - INSTALACAO</title>\n</head> \
	\n<body> \
	  \n\t<div id="main"> \
			 \n\t\t<h1> Setup - Uso do GET  </h1>');
	res.write('\n\t\t<h2> Olá ' + req.query.nome + ', você tem ' + req.query.idade + ' anos </h2>	 \n\t</div>'); 
	res.write('\n</body> \n</html>');
	res.end();
});

// Inicia o servidor
app.listen(port, hostname, () => {
	console.log('Servidor rodando em http://' + hostname + ':' + port);
})




