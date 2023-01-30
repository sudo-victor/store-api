import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UserRepository } from './repositories/user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  create(createUserDto: CreateUserDto) {
    const user = this.userRepository.create(createUserDto);
    return user;
  }

  findAll() {
    return this.userRepository.findAll();
  }

  findByEmail(email: string) {
    return this.userRepository.findByEmail(email);
  }
}
