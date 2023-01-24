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
}
