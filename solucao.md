1- Porta incorreta no DockerFile
    ° No dockerfile a porta no expose estava como 8080 e a aplicação na 3000

2- Arquivo de inicialização com nome errado
    ° No cmd do dockerfile estava como app.js o arquivo de inicialização (server) mas era index.js

3- Porta do serviço no docker compose incorreta
    ° porta do service do mongo estava 27018:27017, o certo é 27017:27017

4- Porta do serviço no docker compose incorreta
    ° porta do service do dockerfile do nome estava 8080:8080, o certo é 3000:3000 como no expose do dockerfile

5- String de conexão do banco estava errada
    ° Na string de conexão estava usando hostname como mongo, porem no service estava declarada como mongodb

6- O volume do mongodb esta com incosistencia
    ° O volume esta com /temp para salvar os dados, que no linux todas pastas /tempp são excluidas automaticamente ao reiniciar servidor, fazendo com que os dados não persistam

7- Falta o volume do app
    ° Faltou no docker compose o volume do app, fazendo que não salve dados 