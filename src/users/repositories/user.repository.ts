import { CreateUserDto } from '../dtos/create-user.dto';

export abstract class UserRepository {
  abstract create(user: CreateUserDto): any | Promise<any>;
  abstract findAll(): any | Promise<any>;
  abstract findByEmail(email: string): any | Promise<any>;
}
