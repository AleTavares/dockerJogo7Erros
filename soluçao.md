# Solução do Desafio dos 7 Erros

*Nome:* Kauã augusto de souza barbosa
*RA:* 6324505

## Erros Corrigidos:

1. *Erro de Conexão com o MongoDB*
   - *Problema:* URL incorreta no arquivo index.js.
   - *Correção:* Atualizei a URL para mongodb://mongo:27017/nomedobanco.

2. *Falta de Dependência no package.json*
   - *Problema:* Dependência express não listada.
   - *Correção:* Adicionei "express": "^4.17.1" em dependencies.

3. *Erro no Dockerfile*
   - *Problema:* Comando COPY incorreto.
   - *Correção:* Corrigi para COPY . ..

4. *Porta Não Exposta no Dockerfile*
   - *Problema:* Porta 3000 não exposta.
   - *Correção:* Adicionei EXPOSE 3000.

5. *Erro no docker-compose.yml*
   - *Problema:* Serviço mongo não configurado corretamente.
   - *Correção:* Ajustei a configuração do serviço mongo.

6. *Falta de Variável de Ambiente no Docker Compose*
   - *Problema:* Variável MONGO_URL não definida.
   - *Correção:* Adicionei MONGO_URL=mongodb://mongo:27017/nomedobanco.

7. *Erro na Rota POST /itens*
   - *Problema:* Falta de tratamento de erros.
   - *Correção:* Adicionei bloco try-catch para capturar exceções.