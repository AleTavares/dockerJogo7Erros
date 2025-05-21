Luiz Felipe Siqueira de Souza
6324548

Erros: 

(Arquivo: "Dockerfile")
1: Porta exposta incorreta (deveria ser 3000);

2: Comando de inicialização incorreto (deveria ser "npm start" ou "node index.js");

(Arquivo: "docker-compose.yml")
3: A porta mapeada está como 8080:8080, mas o correto é 3000:3000;

4: O serviço do mongo expõe a porta "27018:27017", mas o certo é "27017:27017";

5: Correção do mongo por conta na aplicação estar "const mongoURI = 'mongodb://mongo:27017/desafio'"
com container_name: mongo

6: Alteração no : Volume para /mongodb_data:/data/db

7: Alteração no depends_on para: - mongo







