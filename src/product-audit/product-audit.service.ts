import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductAuditService {
  constructor(private readonly prisma: PrismaService) {}

  async getByProductId(productId: number, page: number, offset: number) {
    const skip = (page - 1) * offset;
    const take = offset;

    const [productVersions, totalCount] = await Promise.all([
      this.prisma.withExtensions().productVersion.findMany({
        where: { versionProductId: productId },
        take,
        skip,
        orderBy: { versionTimestamp: 'desc' },
      }),
      this.prisma.withExtensions().productVersion.count({
        where: { versionProductId: productId },
      }),
    ]);

    return {
      productVersions,
      totalCount,
      page,
      offset,
      totalPages: Math.ceil(totalCount / offset),
    };
  }
}
