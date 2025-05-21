Solução do Desafio dos 7 Erros - Docker, Node.js e MongoDB
Nome: Alison Medeiros
RA: 6324005
Erros Encontrados e Correções
Erro 1: Porta exposta incorreta no Dockerfile

Problema: O Dockerfile expõe a porta 8080, mas a aplicação está configurada para usar a porta 3000.
Correção: EXPOSE 8080 para EXPOSE 3000 no Dockerfile.

Erro 2: Comando de inicialização incorreto no Dockerfile

Problema: O comando de inicialização no Dockerfile estava tentando executar app.js, mas o arquivo principal definido no package.json é index.js.
Correção: CMD ["node", "app.js"] para CMD ["node", "index.js"] no Dockerfile.

Erro 3: Mapeamento de portas incorreto no docker-compose.yml

Problema: O mapeamento de portas no docker-compose estava configurado como "8080:8080", incompatível com a porta 3000 usada pela aplicação.
Correção: Alterei o mapeamento de portas de "8080:8080" para "3000:3000" no docker-compose.yml.

Erro 4: Diretório de volumes incorreto para o MongoDB

Problema: O volume para o MongoDB estava configurado para usar /tmp/data, o que pode não persistir adequadamente os dados.
Correção: Substituí - /tmp/data:/data/db por - mongodb_data:/data/db e adicionei uma seção de volumes nomeados no docker-compose.yml.

Erro 5: String de conexão incorreta no código da aplicação

Problema: A string de conexão do MongoDB usava "mongo" como nome do host, mas o serviço no docker-compose está definido como "mongodb".
Correção: Alterei mongodb://mongo:27017/desafio para mongodb://mongodb:27017/desafio no arquivo da aplicação.

Erro 6: Inconsistência no nome do arquivo principal

Problema: O package.json define o arquivo principal como "index.js", mas o código estava em um arquivo com nome diferente.
Correção: Renomeei o arquivo contendo o código da aplicação para "index.js" para corresponder ao definido no package.json.

Erro 7: Falta de configuração para aguardar o MongoDB

Problema: A aplicação não aguardava que o MongoDB estivesse pronto antes de tentar se conectar.
Correção: Adicionei lógica de retry na conexão com o MongoDB no código da aplicação