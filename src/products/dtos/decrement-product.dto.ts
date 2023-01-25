import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class DecrementProductDto {
  @ApiProperty()
  @IsNumber()
  amount: number;
}
