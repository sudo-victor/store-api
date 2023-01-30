import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dtos/create-user.dto';
import { User } from '../entities/user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserArrayRepository implements UserRepository {
  users: User[] = [];

  create(createUserDto: CreateUserDto) {
    const user = new User(
      createUserDto.role,
      createUserDto.name,
      createUserDto.email,
      createUserDto.password,
    );

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
