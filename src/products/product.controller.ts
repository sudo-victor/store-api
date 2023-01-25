import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateProductDto } from './dtos/create-product.dto';
import { DecrementProductDto } from './dtos/decrement-product.dto';
import { IncrementProductDto } from './dtos/increment-product.dto';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Body() product: CreateProductDto) {
    return this.productService.create(product);
  }

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Delete(':product_id')
  delete(@Param('product_id') id: string) {
    return this.productService.delete(id);
  }

  @Patch(':product_id/increment')
  increment(
    @Param('product_id') id: string,
    @Body() data: IncrementProductDto,
  ) {
    return this.productService.incrementStock(id, data.amount);
  }

  @Patch(':product_id/decrement')
  decrement(
    @Param('product_id') id: string,
    @Body() data: DecrementProductDto,
  ) {
    return this.productService.decrementStock(id, data.amount);
  }
}
