<h1 align="center">
    Foot commerce 2
</h1>

<p align="center">
  <a href="#resultado">Resultado</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-como-rodar">Como rodar</a>
</p>

## Resultado

<img src=".github/demo.gif" height="500">

## :rocket: Como rodar

```
$ git clone https://github.com/matheusf31/foot-commerce-2

$ cd foot-commerce-2/frontend

# Para instalar as dependências e rodar o frontend
$ yarn && yarn start

$ cd .. && cd backend

# Para instalar as dependências
$ yarn

# Para criar o container e a tabela do banco de dados
$ sudo docker run --name lett_postgres -e POSTGRES_PASSWORD=docker -e POSTGRES_DB=foot_commerce -p 5434:5432 -d postgres:12

# Para rodar as migrations e popular o banco de dados com alguns produtos
$ yarn typeorm migration:run

# Para rodar o server
$ yarn dev:server
```
