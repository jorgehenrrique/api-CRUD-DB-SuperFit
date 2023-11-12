# Projeto SuperFit

**Descrição**
O projeto SuperFit é um servidor de API para gerenciamento de uma academia. Ele fornece endpoints para realizar operações CRUD (Create, Read, Update, Delete) em diferentes entidades, como pessoas, modalidades, planos, matrículas e horários de aulas.

E também gera um relatório que apresente o total de alunos por plano, o valor total recebido o total de alunos inadimplente e adimplentes.
As rotas exigem um token de login, adquirido ao fazer login com email e cgc de um instrutor.

## Tecnologias utilizadas

- JSON Web Tokens (JWT)
- TypeScript
- Node.js
- Express.js
- PostgreSQL
- dotenv

### Funcionalidades

O servidor oferece as seguintes funcionalidades:

- Autenticação de usuários através do endpoint /login.
- Geração de relatorio através do endpoint /relatorio
- Operações CRUD para a entidade "Pessoas" nos endpoints /pessoas.
- Operações CRUD para a entidade "Modalidades" nos endpoints /modalidades.
- Operações CRUD para a entidade "Planos" nos endpoints /planos.
- Operações CRUD para a entidade "Matrículas" nos endpoints /matriculas.
- Operações CRUD para a entidade "Horários de Aulas" nos endpoints /horarioaulas.
- Operações CRUD para a entidade "Modalidades Planos" nos endpoints /modalidadesplanos.

### Como utilizar

1. Clone o repositório do projeto:

   ```
   git clone https://github.com/seu-usuario/projeto-xyz.git
   ```

2. Instale as dependências do projeto:

   ```
   cd projeto-xyz
   npm install
   ```

3. Crie um arquivo .env na raiz do projeto e defina as seguintes variáveis de ambiente:

   ```
    TOKEN_SECRET=secretToken
    HOST_PORT=3000

    DB_USER=postgres
    DB_HOST=localhost
    DB_NAME=DBName
    DB_PASS=yourPass
    DB_PORT=5432
   ```

4. Inicie o servidor:

   ```
      npm run dev
   ```

5. O servidor estará disponível em http://localhost:3000.

### Resposta padrão

Caso uma requisição seja feita para um endpoint inexistente, o servidor retornará uma resposta com status 404 e uma mensagem informando que o link é inexistente.

### Considerações finais

O projeto SuperFit é uma API completa para gerenciamento de diferentes entidades. Utilize os endpoints disponíveis para realizar operações CRUD nas respectivas entidades.

### Consumo dos Endpoints disponíveis

A seguir estão listados os endpoints disponíveis no servidor e como utilizar:

- /login: Endpoint para autenticação de usuários.
- /relatorio: Endpoint para geração de relatórios.
- /pessoas: Endpoint para operações CRUD na entidade "Pessoas".
- /modalidades: Endpoint para operações CRUD na entidade "Modalidades".
- /planos: Endpoint para operações CRUD na entidade "Planos".
- /matriculas: Endpoint para operações CRUD na entidade "Matrículas".
- /horarioaulas: Endpoint para operações CRUD na entidade "Horários de Aulas".
- /modalidadesplanos: Endpoint para operações CRUD na entidade "Modalidades Planos".

## Consumo das rotas

### Login

**URL:** `/login`

**Método:** `POST`

**Corpo da requisição:**

```json
{
  "cgc": "65748907123",
  "email": "carla@email"
}
```

**Resposta:**

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNiIsIm5hbWUiOiJKb2FvIn0sImlhdCI6MTY0ODgzNjkzM30.FwioGSfHby1QII5zZ-Hxf-DUpCtT2I7DWchNiA9PFOs"
}
```

Salvar o token recebido para incluir nos headers das demais requisições.

### Relatorio

**URL:** `/relatorio`

**Método:** `GET`

**Headers:**
`Authorization API Key`

### Pessoas listar

**URL:** `/pessoas`

**Método:** `GET`

**Headers:**
`Authorization API Key`

### Pessoas listar id

**URL:** `/pessoas/:id`

**Método:** `GET`

**Headers:**
`Authorization API Key`

### Pessoas criar

**URL:** `/pessoas`

**Método:** `POST`

**Headers:**
`Authorization API Key`

**Corpo da requisição:**

```json
{
  "nome": "Henrique II",
  "cgc": "000009000999",
  "tipo_pessoa": "F",
  "email": "novoE@email.com",
  "tipo_cadastro": "A",
  "ativo": "S"
}
```

**Resposta:**

`json`

### Pessoas atualizar

**URL:** `/pessoas/:id`

**Método:** `PUT`

**Headers:**
`Authorization API Key`

**Corpo da requisição:**

```json
{
  "nome": "",
  "cgc": "",
  "tipo_pessoa": "",
  "email": "",
  "tipo_cadastro": "",
  "ativo": ""
}
```

**Resposta:**

`json`

### Pessoas deletar

**URL:** `/pessoas/:id`

**Método:** `DELETE`

**Headers:**
`Authorization API Key`

**Resposta:**

`json`

### Modalidades listar

**URL:** `/modalidades`

**Método:** `GET`

**Headers:**
`Authorization API Key`

**Resposta:**

`json`

### Modalidades listar id

**URL:** `/modalidades/:id`

**Método:** `GET`

**Headers:**
`Authorization API Key`

**Resposta:**

`json`

### Modalidade criar

**URL:** `/modalidades`

**Método:** `POST`

**Headers:**
`Authorization API Key`

**Corpo da requisição:**

```json
{
  "nome": "NOME"
}
```

**Resposta:**

`json`

### Modalidade atualizar

**URL:** `/modalidades/:id`

**Método:** `PUT`

**Headers:**
`Authorization API Key`

**Corpo da requisição:**

```json
{
  "nome": "NOME"
}
```

**Resposta:**

`json`

### modalidade deletar

**URL:** `/modalidades/:id`

**Método:** `DELETE`

**Headers:**
`Authorization API Key`

**Resposta:**

`json`
