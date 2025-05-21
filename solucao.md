GABRIEL SANTIAGO DE ANDRADE
RA6324647

ERRO 1 - A porta 8080 esta incorreta (o certo seria 3000)

ERRO 2 - Comando de inicializao esta incorreto (o certo "npm start")

ERRO 3 - O nome do serviço da aplicação esta incorreta app (alterei para index)

ERRO 4 - A porta do servido esta incorreto "27018:27017" (o correto seria os dois campo da porta ser o mesmo "27017:27017")

ERRO 5 - No docker-compose no serviço do mongo estava como mongodb(O correto seria mongo)

ERRO 6 - Docker- compose index esta errado no depends_on esta como mondodb( O correto seria mongo)

ERRO 7 - No docker-compose services no volumes esta commo /tmp/data:/data/db( o certo seria tirar tpm, correto /data:/data/db )
