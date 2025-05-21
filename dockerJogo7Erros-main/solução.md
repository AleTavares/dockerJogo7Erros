# Nome: Pedro Kommers Medke  
# RA: 6324623


# Erro 1

# Local: Dockerfile
# Erro: EXPOSE 8080
# Correção: EXPOSE 3000

# Erro 2

# Local: dockerfile
# Erro: CMD ["node", "app.js"]
# Correção: CMD ["node", "index.js"]

# Erro 3

# Local: dockerfile
# Erro: COPY package*.json ./
# Correção: COPY package.json ./

# Erro 4

# Local: docker-compose.yml
# Erro: ports: "8080:8080"
# Correção: ports: "3000:3000"

# Erro 5

# Local: docker-compose.yml
# Erro: versão 
# Correção: retirar versão

# Erro 6

# Local: docker-compose.yml
# Erro: Volume mapeado diretamente para /tmp/data
# Correção: - mongodb_data:/data/db

# Erro 7

# Local: index.js
# Erro: 'mongodb://mongo:27017/desafio'
# Correção: const mongoURI = process.env.MONGO_URI || 'mongodb://mongo:27017/desafio';
