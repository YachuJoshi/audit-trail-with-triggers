import { Module } from '@nestjs/common';

import { ProductAuditService } from './product-audit.service';
import { ProductAuditController } from './product-audit.controller';
import { PrismaService } from '@/prisma/prisma.service';

@Module({
  controllers: [ProductAuditController],
  providers: [ProductAuditService, PrismaService],
})
export class ProductAuditModule {}
