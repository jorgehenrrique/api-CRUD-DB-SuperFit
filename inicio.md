# NPM comandos para iniciar o projeto de API

Iniciar projeto:
`npm init`

Instalar o pacote node e as dependencias:
`npm i`

---

- Typescript
  `npm i typescript -D`

- Nodemon para rodar o servidor
  `npm i -D nodemon`

- ts-node para rodar o typescript sem compilar
  `npm i -D ts-node`

- Instalar o pacote express:
  `npm i express`
  Type express
  `npm i -D @types/express`

- Instalar o pacote do BD PostgreSQL:
  `npm i pg`
  TypeScript PostgreSQL
  `npm i -D @types/pg`

- Instalar dotenv para guardar cheves:
  `npm i dotenv`
  TypeScript dotenv
  `npm i -D @types/dotenv`

      Armazene chave/valor no arquivo .env
      `PASS=value`
      Utilize o codigo para extrair:

```js
import dotenv from 'dotenv';
dotenv.config();
const { PASS } = process.env;
```

---

- Instalar ESLint para informar erros, e auxiliar no desenvolvimento
  `npm i -D eslint`

- Instalar JWT para gerar os tokens:
  `npm i jsonwebtoken`
- Para typescript
  `npm i @types/jsonwebtoken -D`
