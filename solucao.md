
## RA 6324649
## Diego Alves da Silva

### dockerfile 2 erros

```sh
EXPOSE 3000

CMD ["npm start"]
```

### docker-compose 3?

```sh
mongodb:
    ports:
        - "27017:27017"

    volumes:
        - /data:/data/db

app:
    ports:
        - "3000:3000"
```