# Desafio dos 7 Erros - Docker, Node.js e MongoDB

    Maria Fernanda Trega Pinto
    RA: 6324656

## Erro 01

    Porta exposta incorreta no Dockerfile era EXPOSE 8080, mas o correto é EXPOSE 3000

## Erro 02

    Comando de inicialização incorreto era CMD ["node", "app.js"], mas como o arquivo "app.js" não existe então não pode ser usado. O correto seria CMD ["npm", "start"]

## Erro 03

    Inclusão da rede personalizada aula-erros-network

## Erro 04

    Definição do volume mongodb-data:/data/db

## Erro 05

    Exposição removida 
    ports:
     - "27018:27017"

## Erro 06

    Variáveis de ambiente pra conexão do mongo
      - MONGO_URI=mongodb://mongodb:27017/desafio
      - PORT=3000

## Erro 07

    Mudança para a porta correta
    ports:
      - "3000:3000" 

