const express = require('express');
const app = express();
const port = 3000;

// Define uma rota para a página principal
app.get('/', (req, res) => {
    res.send('Bem-vindo ao painel simples em Node.js!');
});

// Inicia o servidor na porta especificada
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
