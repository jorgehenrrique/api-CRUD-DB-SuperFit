Com base no banco de dados criado para a academia SuperFit ao longo da disciplina, você deverá:

- Criar uma API contendo um CRUD (Create, Read, Update e Delete) para cada uma das tabelas. São elas: (pessoas, planos, modalidades, matriculas, horarios_aulas e modalidades_planos);

- Para acessar as rotas, será necessário o uso de token JWT;

- Criar uma rota que valida se o cliente está adimplente e pode fazer o uso da academia;

- Criar um relatório gerencial que apresente o total de alunos por plano, o valor total recebido e o total inadimplente. Os filtros do relatório são: Um range de planos e um range de datas.

Dica: Analise a necessidade de criação de novas tabelas e/ou campos para adequar a base de dados e resolver os problemas propostos.

O trabalho pode ser executado em duplas e não será necessário a entrega de um front-end.

# Documentação de consumo da API REST que faz consultas a um BD.

Essa API faz CRUD as tabelas do banco de dados PostgreSQL, são as tabelas:
(pessoas, planos, modalidades, matriculas, horarios_aulas e modalidades_planos);

- As rotas exigem uso de, token JWT;

## Tecnologias utilizadas

- JSON Web Tokens (JWT)
- TypeScript
- Express
- dotenv
- sql

## Login para acesso as requesições

- Login utiliza json web token

######

# Projeto SuperFit

O projeto SuperFit é um servidor de API desenvolvido em Node.js utilizando o framework Express. Ele fornece endpoints para realizar operações CRUD (Create, Read, Update, Delete) em diferentes entidades, como pessoas, modalidades, planos, matrículas e horários de aulas.

### Funcionalidades

O servidor oferece as seguintes funcionalidades:

- Autenticação de usuários através do endpoint /login.
- Operações CRUD para a entidade "Pessoas" nos endpoints /pessoas.
- Operações CRUD para a entidade "Modalidades" nos endpoints /modalidades.
- Operações CRUD para a entidade "Planos" nos endpoints /planos.
- Operações CRUD para a entidade "Matrículas" nos endpoints /matriculas.
- Operações CRUD para a entidade "Horários de Aulas" nos endpoints /horarioaulas.
- Operações CRUD para a entidade "Modalidades Planos" nos endpoints /modalidadesplanos.

### Como utilizar

1. Clone o repositório do projeto:
   git

   ```
   git clone https://github.com/seu-usuario/projeto-xyz.git
   ```

2. Instale as dependências do projeto:
   install

   ```
   cd projeto-xyz
   npm install
   ```

3. Crie um arquivo .env na raiz do projeto e defina as seguintes variáveis de ambiente:
   3000

   ```
      HOST_PORT=3000
   ```

4. Inicie o servidor:
   start

   ```
      npm start
   ```

5. O servidor estará disponível em http://localhost:3000.

### Endpoints disponíveis

A seguir estão listados os endpoints disponíveis no servidor:

- /login: Endpoint para autenticação de usuários.
- /pessoas: Endpoint para operações CRUD na entidade "Pessoas".
- /modalidades: Endpoint para operações CRUD na entidade "Modalidades".
- /planos: Endpoint para operações CRUD na entidade "Planos".
- /matriculas: Endpoint para operações CRUD na entidade "Matrículas".
- /horarioaulas: Endpoint para operações CRUD na entidade "Horários de Aulas".
- /modalidadesplanos: Endpoint para operações CRUD na entidade "Modalidades Planos".

### Resposta padrão

Caso uma requisição seja feita para um endpoint inexistente, o servidor retornará uma resposta com status 404 e uma mensagem informando que o link é inexistente.

### Considerações finais

O projeto SuperFit é uma API completa para gerenciamento de diferentes entidades. Utilize os endpoints disponíveis para realizar operações CRUD nas respectivas entidades.
