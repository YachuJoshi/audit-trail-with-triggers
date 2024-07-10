import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class OrderService {
  constructor(private readonly prisma: PrismaService) {}

  create() {
    return this.prisma.withExtensions().order.create({
      data: { userId: 1, productId: 1, quantity: 10 },
    });
  }

  async update(id: number) {
    return this.prisma.withExtensions().order.update({
      where: { id },
      data: { quantity: 20 },
    });
  }

  async updateAll() {
    return this.prisma.withExtensions().order.updateMany({
      where: { id: { in: [1, 2, 3] } },
      data: { quantity: Math.floor(Math.random() * 100 + 1) },
    });
  }

  async updateStatus() {
    return this.prisma.withExtensions().order.updateMany({
      where: { id: { in: [1, 2, 3] } },
      data: { status: 'COMPLETED' },
    });
  }

  async delete(id: number) {
    return this.prisma.withExtensions().order.delete({
      where: { id },
    });
  }

  async deleteAll() {
    return this.prisma.withExtensions().order.deleteMany({
      where: { id: { in: [1, 2, 3] } },
    });
  }
}
