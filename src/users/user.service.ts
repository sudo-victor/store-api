import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  users: User[] = [];

  create(createUserDto: CreateUserDto) {
    const user = new User(
      createUserDto.role,
      createUserDto.email,
      createUserDto.name,
      createUserDto.password,
    );

    this.users.push(user);
    return;
  }
  // findAll() {}
  // findByEmail() {}
}
