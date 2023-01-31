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







- Typeorm - Sqlite3
- Inversao de Controle
- Repository Pattern - Camada que conversa com o DB


interface IUserRepository {
  create: (data: CreateUserDto) => void | Promise<void>
}

class UserMongoRepository implements IUserRepository {
  constructor(private userModel: Model<User>) {}

  create(data: CreateUserDto) {
    this.userModel.create(data)
    return;
  }
}

class UserMysqlRepository implements IUserRepository {
  constructor(private userModel: MysqlModel<User>) {}

  create(data: CreateUserDto) {
    this.userModel.save(data)
    return;
  }
}

class UserService {
  constructor(
    private userRepository: IUserRepository
  ) {}
}

const userService = new UserService(new UserMongoRepository())

@Module({
  providers: [UserService, {
    provide: IUserRepository,
    useClass: UserMysqlRepository
  }]
})



user.select().where()...
ORM

TypeORM

user.find({
  where: {
    name: 'Robson'
  }
})


npm i typeorm @nestjs/typeorm sqlite3
