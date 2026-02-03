const express = require('express');
const UsuarioRotas = require('./rotas/UsuarioRotas');

const app = express();
const port = 3000;

// Middleware para o Express entenda JSON no corpo (body) das requisições
app.use(express.json());

// Rota de teste
app.get('/', (req, res) => {
    res.status(200).send('API Online! 🚀');
});

// Vinculando as rotas de usuário
app.use(UsuarioRotas);

app.listen(port, () => {
    // Usando localhost ou 0.0.0.0 para evitar problemas de IP fixo
    console.log(`Servidor rodando em http://localhost:${port}`);
});