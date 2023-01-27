import { HttpException, HttpStatus, NestMiddleware } from '@nestjs/common';
import * as JWT from 'jsonwebtoken';

export class EnsureAuthenticationMiddleware implements NestMiddleware {
  use(req: any, res: any, next: (error?: any) => void) {
    try {
      const { authorization } = req.headers;
      if (!authorization) {
        throw new HttpException('Key is missing', HttpStatus.UNAUTHORIZED);
      }

      const [, token] = authorization.split(' ');

      JWT.verify(token, 'kljdshfslkdfjkjdhf');
      const payload = JWT.decode(token);
      req.user = payload;

      next();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

// Client Faz Request Body/Params/ Query/Headers
// Aqui fica middleware
// Api Recebe e Retorna a Response
