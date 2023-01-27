import { createParamDecorator, ExecutionContext } from '@nestjs/common';

function myDecorator(data: any, ctx: ExecutionContext) {
  const request = ctx.switchToHttp().getRequest();
  return request.user;
}

export const User = createParamDecorator(myDecorator);
