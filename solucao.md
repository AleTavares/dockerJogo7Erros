# ERRO 1: Porta exposta incorreta

# CORREÇÃO (deveria ser 3000)

# ERRO 2: Comando de inicialização incorreto

# CORREÇÃO (deveria ser "npm start" ou "node index.js")

# ERRO 3: Serviço com nome incorreto no docker-compose.

# CORREÇÃO O arquivo está como index.js e o docker-compose está procurando o serviço com o nome de app

# ERRO 4: Portas do serviço do mongodb definida como 27018:27017, quando o correto é 27017:27017

# CORREÇÃO Correto é 27017:27017

# ERRO 5: Serviço do mongodb com nome errado

# CORREÇÃO Nome correto do serviço é "mongo" ao invés de "mongodb" no docker-compose

# ERRO 6: Depends_on com nome errado

# CORREÇÃO Alterar de "mongodb" para "mongo"

# ERRO 7: volumes usando uma pasta que não está criada

# CORREÇÃO solução apagar o /tmp/ presente no comando, assim permitindo que a pasta data seja criada
