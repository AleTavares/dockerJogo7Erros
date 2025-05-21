1º erro – Dockerfile:
Porta exposta incorretamente. O correto seria EXPOSE 3000, mas estava EXPOSE 8080.

2º erro – Dockerfile:
Comando de inicialização incorreto. O correto seria CMD ["npm", "start"] ou CMD ["node", "index.js"], mas estava CMD ["node", "app.js"].

3º erro – docker-compose.yml (serviço app):
Configuração incorreta da porta. O correto seria "3000:3000", mas estava "8080:8080".

4º erro – docker-compose.yml (serviço mongodb):
Porta configurada incorretamente. O correto é "27017:27017", mas estava "27018:27017".

5º erro – docker-compose.yml (serviço mongodb):
Volume incorretamente definido. O correto seria ./data:/data/db, mas estava /tmp/data:/data/db.

6º erro – docker-compose.yml (serviço mongo):
Nome da imagem incorreto. O correto seria mongo:latest, mas estava mongodb:latest.

7º erro – docker-compose.yml (serviço app):
Dependência incorreta. O correto seria depends_on: - mongo, mas estava depends_on: - mongodb.



Nome: Bruno Rocha Rojadas de Jesus 
RA: 6324038