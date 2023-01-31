import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dtos/create-user.dto';
import { User } from '../entities/user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class ArrayUserRepository implements UserRepository {
  users: User[] = [];

  create(data: CreateUserDto) {
    const user = new User(data.role, data.name, data.email, data.password);

    this.users.push(user);
    return user;
  }

  findAll() {
    return this.users;
  }

  findByEmail(email: string) {
    return this.findAll().find((user) => user.email === email);
  }
}
