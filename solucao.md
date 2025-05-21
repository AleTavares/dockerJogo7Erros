# erro 1
    no dokerfile a porta exposta incorreta
## solução
    deixar exposta a porta corretamente, porta 3000


# erro 2
    Comando de inicialização incorreto 
## solução
    corrigir o comando de inicialização, node index.js


# erro 3
    na imagem do mongodb estava a porta de conexão incorreta 
## solução
    corrigir a porta de conexão de 27018 para 27017


# erro 4
    na imagem de construção do app estava com as portas erradas
## solução 
    corrigir as portas de 8080 para 3000 


# erro 5
    string de conexão está escrita de forma errada 
## solução
    escrever a string da forma correta estava assim:
        const mongoURI = 'mongodb://mongo:27017/desafio';     
    o certo é:
        const mongoURI = 'mongodb://mongodb:27017/desafio';


# solução 6 
    o volume do mongo db está montado assim: /tmp/data:/data/db em sistemas linux o diretório tmp no linux é apagado altomaticamente a cada reinicialização assim apagando o banco de dados 
# solução 
    trocar o diretório que não é apagado 


# erro 7 
    faltou o volume do app para salvar os dados
## solução
    criar o volume e a pasta para salvar os dados