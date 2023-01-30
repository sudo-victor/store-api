# API Estoque

## User
- Id String
- Role String
- Name String
- Email String
- Password String

### Usease
- Criar
- Listar

## Auth
### Usecase
- Login

## Product
- Id String
- Name String
- Price String
- Amount String
### Usecase
- Criar
- Deletar
- Listar Todos
- Incrementar estoque
- Decrementar estoque

# Libs
- bcrypt
- jsonwebtoken
- typeorm
- sqlite
