import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dtos/create-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  products: Product[] = [];

  create(createProductDto: CreateProductDto) {
    const product = new Product(
      createProductDto.name,
      createProductDto.price,
      createProductDto.amount,
    );
    this.products.push(product);
    return true;
  }

  findAll() {
    return this.products.filter((product) => !product.deletedAt);
  }

  delete(id: string) {
    // Verificar se existe
    const productAlreadyExists = this.findAll().find(
      (product) => product.id === id,
    );
    if (!productAlreadyExists) {
      throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
    }
    // Atualizar

    productAlreadyExists.delete();

    return productAlreadyExists;
  }

  //  incrementStock() {}

  //  decrementStock() {}
}
