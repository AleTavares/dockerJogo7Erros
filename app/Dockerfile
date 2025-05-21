FROM node:16

WORKDIR /app

# Copia os arquivos de dependências para dentro do container
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia todo o código da aplicação para dentro do container
COPY . .

# Expõe a porta 3000, que é onde a aplicação vai rodar
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["node", "index.js"]
