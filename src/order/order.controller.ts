import {
  Put,
  Post,
  Param,
  Controller,
  ParseIntPipe,
  Delete,
} from '@nestjs/common';

import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  create() {
    return this.orderService.create();
  }

  @Put('status/all')
  updateStatus() {
    return this.orderService.updateStatus();
  }

  @Put('all')
  updateAll() {
    return this.orderService.updateAll();
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number) {
    return this.orderService.update(id);
  }

  @Delete('all')
  deleteAll() {
    return this.orderService.deleteAll();
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.orderService.delete(id);
  }
}
