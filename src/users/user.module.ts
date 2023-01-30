import { Module } from '@nestjs/common';
import { UserArrayRepository } from './repositories/user.array-repository';
import { UserRepository } from './repositories/user.repository';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: UserRepository,
      useClass: UserArrayRepository,
    },
  ],
  exports: [UserService],
})
export class UserModule {}
