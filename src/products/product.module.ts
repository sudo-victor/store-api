import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { EnsureAuthenticationMiddleware } from 'src/auth/middlewares/ensureAuthentication.middleware';
import { UserModule } from 'src/users/user.module';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
  imports: [UserModule],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(EnsureAuthenticationMiddleware).forRoutes('products');
  }
}
