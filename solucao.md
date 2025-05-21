1. A porta exposta estava incorreta (deveria ser 3000) 
2. Comando de inicialização incorreto, eu coloquei ("npm", "start")
3. O serviço do docker-compose estava errado, estava "mongodb" e deveria ser "mongo"
4. A porta exposta estava 27018 e deveria ser 27017
5. O volumes no docker-compose estava errado, estava "/tmp/data:/data/db", e deveria ser "./data:/data/db"
6. A porta exposta estava 8080 e deveria ser 3000
7. A depends_on estava errada, estava "mongodb", e deveria ser "mongo"
