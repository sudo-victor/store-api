import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserService } from 'src/users/user.service';
import { LoginDto } from './dtos/login.dto';
import * as JWT from 'jsonwebtoken';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  login(loginDto: LoginDto) {
    // achar o usuário
    const userExists = this.userService.findByEmail(loginDto.email);
    console.log(userExists);
    if (!userExists) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    // validar a senha
    const passwordIsValid = userExists.verifyPassword(loginDto.password);
    if (!passwordIsValid) {
      throw new HttpException('Password is invalid', HttpStatus.BAD_REQUEST);
    }

    // gerar token
    const payload = {
      user_id: userExists.id,
    };
    const token = JWT.sign(payload, 'kljdshfslkdfjkjdhf', {
      expiresIn: '30m',
    });

    return token;
  }
}
