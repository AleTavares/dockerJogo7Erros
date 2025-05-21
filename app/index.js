const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// Configuração do MongoDB
const mongoURI = 'mongodb://mongodb:27017/desafio';  // Certifique-se de usar o nome correto do serviço (mongodb)

// Conexão com o MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado ao MongoDB!'))
  .catch(err => {
    console.error('Erro ao conectar ao MongoDB:', err);
    process.exit(1);  // Encerra a aplicação se não conseguir conectar
  });

// Definição do modelo
const Item = mongoose.model('Item', {
  nome: String,
  descricao: String,
  criado_em: { type: Date, default: Date.now }
});

// Configuração do Express
app.use(express.json());

// Rota principal
app.get('/', (req, res) => {
  res.send('Aplicação do Desafio dos 7 Erros funcionando!');
});

// Rota para listar itens
app.get('/itens', async (req, res) => {
  try {
    const itens = await Item.find();  // Busca todos os itens no MongoDB
    res.json(itens);  // Retorna os itens como JSON
  } catch (error) {
    console.error('Erro ao buscar itens:', error);
    res.status(500).json({ erro: error.message });
  }
});

// Rota para criar um item
app.post('/itens', async (req, res) => {
  try {
    const novoItem = new Item(req.body);
    await novoItem.save();
    res.status(201).json(novoItem);  // Retorna o novo item com status 201
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

