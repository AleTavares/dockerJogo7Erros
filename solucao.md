erro na porta de expose do dockerfile 
usar a porta 3000 no expose

outra porta errada no docker compose, usar 3000:3000

ports: Removido: Não é necessário expor o MongoDB para o host
       - "27018:27017"


networks: ERRO CORRIGIDO: Conectando à rede personalizada
      - app-network


 environment: ERRO CORRIGIDO: Variáveis de ambiente para conexão e porta
      - MONGO_URI=mongodb://mongodb:27017/desafio
      - PORT=3000


# ERRO 1: Porta exposta incorreta (deveria ser 3000)
EXPOSE 3000


# ERRO 2: Comando de inicialização incorreto (deveria ser "npm start" ou "node index.js")
CMD ["npm", "start"]



Tais de Fatima Gomes da Silva 

6324004
