<h1 align="center">
    Foot commerce 2
</h1>

<p align="center">
  <a href="#sparkles-resultado">Resultado</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#crystal_ball-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-como-rodar">Como rodar</a>
</p>

## :sparkles: Resultado

<img src=".github/demo.gif" height="500">

## :crystal_ball: Tecnologias

Em ambos eu utilizei Typescript, e para organização e padronização de código utilizei o Prettier e o Eslint

### Frontend

- ReactJS
- React Router Dom
- Styled Components

### Backend

- NodeJS
- Express
- Typeorm

## :rocket: Como rodar

```
$ git clone https://github.com/matheusf31/foot-commerce-2

$ cd foot-commerce-2/frontend

# Para instalar as dependências e rodar o frontend
$ yarn && yarn start

$ cd .. && cd backend

# Para instalar as dependências do backend
$ yarn

# Para criar o container e a tabela do banco de dados
$ sudo docker run --name lett_postgres -e POSTGRES_PASSWORD=docker -e POSTGRES_DB=foot_commerce -p 5434:5432 -d postgres:12

# Para rodar as migrations
$ yarn typeorm migration:run

# Para popular o banco de dados com produtos
## Vá até o arquivo de migration: src/database/seeds/1595715099747-SeedProduct.ts e remova os comentários
## Após remover os comentários rode novamente o seguinte comando
$ yarn typeorm migration:run

# Para rodar o server
$ yarn dev:server

---

# Para parar o container
$ sudo docker kill lett_postgres

# Para deletar o container
$ sudo docker rm lett_postgres

```
