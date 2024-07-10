import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { ProductAuditModule } from './product-audit/product-audit.module';

@Module({
  imports: [ProductModule, OrderModule, ProductAuditModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
