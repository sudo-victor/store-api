import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class IncrementProductDto {
  @ApiProperty()
  @IsNumber()
  amount: number;
}
