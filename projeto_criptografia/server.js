const express = require('express');
const { criptografarMensagem, descriptografarMensagem } = require('./script').default;

const app = express();
app.use(express.json());

// Endpoint para criptografar
app.post('/criptografar', (req, res) => {
  const { mensagem } = req.body;
  const mensagemCriptografada = criptografarMensagem(mensagem);
  res.json({ mensagemCriptografada });
});

// Endpoint para descriptografar
app.post('/descriptografar', (req, res) => {
  const { mensagemCriptografada } = req.body;
  const mensagemOriginal = descriptografarMensagem(mensagemCriptografada);
  res.json({ mensagemOriginal });
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});