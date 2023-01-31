import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { SqliteUserRepository } from './_repositories/sqlite-user.repository';
import { UserRepository } from './_repositories/user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: UserRepository,
      useClass: SqliteUserRepository,
    },
  ],
  exports: [UserService],
})
export class UserModule {}
