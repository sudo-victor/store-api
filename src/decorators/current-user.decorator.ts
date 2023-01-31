import { createParamDecorator, ExecutionContext } from '@nestjs/common';

function handleCurrentUser(data: any, ctx: ExecutionContext) {
  const request = ctx.switchToHttp().getRequest();
  return request.user;
}

export const CurrentUser = createParamDecorator(handleCurrentUser);
