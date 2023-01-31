import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UserEntity } from '../entities/user';
import { UserRepository } from './user.repository';

@Injectable()
export class SqliteUserRepository implements UserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userModel: Repository<UserEntity>,
  ) {}

  async create(data: CreateUserDto) {
    const user = this.userModel.create(data);
    return await this.userModel.save(user);
  }
  async findAll() {
    const users = await this.userModel.find();
    return users;
  }
  findByEmail(email: string) {
    throw new Error('Method not implemented.');
  }
}
