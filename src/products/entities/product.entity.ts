import { HttpCode, HttpException, HttpStatus } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

export class Product {
  id: string;
  name: string;
  price: number;
  amount: number;
  createdAt: Date | string;
  updatedAt: Date | string;
  deletedAt: null | Date | string;

  constructor(name: string, price: number, amount: number) {
    this.id = uuid();
    this.name = name;
    this.price = price;
    this.amount = amount;
    this.createdAt = new Date();
    this.updatedAt = new Date();
    this.deletedAt = null;
  }

  delete() {
    this.deletedAt = new Date();
  }

  increment(value?: number) {
    if (!value) return;
    this.amount += value;
  }

  decrement(value?: number) {
    // verificar se value é maior que amount
    const doesAmountIsLessThanValue = this.amount < value;
    if (doesAmountIsLessThanValue) {
      throw new HttpException(
        'Stock quantity exceeded',
        HttpStatus.BAD_REQUEST,
      );
    }

    if (this.amount === 0) {
      this.amount = 0;
      return;
    }

    this.amount = value ? this.amount - value : this.amount - 1;
  }
}
