Nome: Leonardo Frazao Sano
RA: 6324073


# Solução do Desafio dos 7 Erros - Docker, Node.js e MongoDB

## Erro 1: Porta incorreta no docker-compose.yml
- **Problema:** A aplicação espera rodar na porta `3000`, mas o `docker-compose.yml` expunha a `8080`.
- **Correção:** Alterado de `- "8080:8080"` para `- "3000:3000"`.

---

## Erro 2: Comando CMD errado no Dockerfile
- **Problema:** O Dockerfile usava `CMD ["node", "app.js"]`, mas o nome correto do arquivo era `index.js`.
- **Correção:** Substituído por `CMD ["node", "index.js"]`.

---

## Erro 3: Porta errada do MongoDB
- **Problema:** A porta mapeada estava como `27018:27017`, mas o padrão da aplicação é `27017`.
- **Correção:** Alterado para `- "27017:27017"` no serviço `mongodb`.

---

## Erro 4: Volume fixo fora do projeto
- **Problema:** Usava um volume absoluto `/tmp/data`, o que pode causar problemas entre sistemas operacionais.
- **Correção:** Alterado para `./data:/data/db` (volume relativo ao projeto).

---

## Erro 5: Nome do host do MongoDB na aplicação
- **Problema:** A aplicação provavelmente usava `localhost` para se conectar ao MongoDB.
- **Correção:** Corrigido no código para usar `mongodb` (nome do serviço no `docker-compose`), como:  
  `mongo://mongodb:27017/nomedobanco`

---

## Erro 6: `restart` faltando para o MongoDB
- **Problema:** A aplicação estava configurada com `restart: always`, mas o MongoDB não.
- **Correção:** Adicionado `restart: always` ao serviço `mongodb`.

---

## Erro 7: Dependências não instaladas no Dockerfile
- **Problema:** O Dockerfile não rodava `npm install`, causando erro de dependências.
- **Correção:** Adicionado o seguinte trecho antes do `CMD`:
  ```dockerfile
  COPY package*.json ./
  RUN npm install

