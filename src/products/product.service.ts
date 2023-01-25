import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dtos/create-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  products: Product[] = [];

  create(createProductDto: CreateProductDto) {
    // Verificar Se Produto Existe
    const productAlreadyExists = this.findByName(createProductDto.name);

    // Se existir ele incrementa
    if (productAlreadyExists) {
      productAlreadyExists.increment(createProductDto.amount);
      return;
    }

    // Se nao existir, ele cria e adiciona
    const product = new Product(
      createProductDto.name,
      createProductDto.price,
      createProductDto.amount,
    );

    this.products.push(product);
    return;
  }

  findByName(name: string) {
    return this.findAll().find((product) => product.name === name);
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

  incrementStock(id: string, value?: number) {
    const currentProduct = this.findAll().find((product) => product.id === id);
    if (!currentProduct) {
      throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
    }

    currentProduct.increment(value);

    return;
  }

  decrementStock(id: string, value?: number) {
    const currentProduct = this.findAll().find((product) => product.id === id);
    if (!currentProduct) {
      throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
    }

    currentProduct.decrement(value);

    return;
  }
}
