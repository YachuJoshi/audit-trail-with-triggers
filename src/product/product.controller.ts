import {
  Get,
  Put,
  Param,
  Delete,
  Controller,
  ParseIntPipe,
} from '@nestjs/common';

import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get(':id')
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.productService.getById(id);
  }

  @Put('all')
  updateAll() {
    return this.productService.updateAll();
  }

  @Put('verify/all')
  verifyAll() {
    return this.productService.verifyAll();
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number) {
    return this.productService.update(id);
  }

  @Delete('all')
  deleteAll() {
    return this.productService.deleteAll();
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.productService.delete(id);
  }
}
