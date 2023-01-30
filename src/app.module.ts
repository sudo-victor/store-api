import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './products/product.module';
import { UserModule } from './users/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      driver: 'sqlite',
      database: 'meubanco.sqlite',
    }),
    ProductModule,
    UserModule,
    AuthModule,
  ],
})
export class AppModule {}
