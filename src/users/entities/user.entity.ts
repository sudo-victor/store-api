import { v4 as uuid } from 'uuid';
import { hashSync, compareSync } from 'bcrypt';

export class User {
  id: string;
  role: string;
  name: string;
  email: string;
  password: string;

  constructor(role: string, name: string, email: string, password: string) {
    this.id = uuid();
    this.role = role;
    this.name = name;
    this.email = email;
    this.password = this.encrypt(password);
  }

  private encrypt(password: string): string {
    const hash = hashSync(password, 8);
    return hash;
  }

  verifyPassword(password: string): boolean {
    const isCorrectPassValidation = compareSync(password, this.password);
    return isCorrectPassValidation;
  }
}
