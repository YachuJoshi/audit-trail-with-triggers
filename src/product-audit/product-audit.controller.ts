import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { ProductAuditService } from './product-audit.service';

@Controller('product-audit')
export class ProductAuditController {
  constructor(private readonly productAuditService: ProductAuditService) {}

  @Get(':productId')
  getByProductId(
    @Param('productId', ParseIntPipe) productId: number,
    @Query('page', ParseIntPipe) page: number,
    @Query('offset', ParseIntPipe) offset: number,
  ) {
    return this.productAuditService.getByProductId(productId, page, offset);
  }
}
