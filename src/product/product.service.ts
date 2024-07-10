import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { faker } from '@faker-js/faker';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  getById(id: number) {
    return this.prisma.withExtensions().product.findUnique({
      where: { id },
    });
  }

  async update(id: number) {
    return this.prisma.withExtensions().product.update({
      where: { id },
      data: { name: faker.commerce.productName() },
    });
  }

  async updateAll() {
    return this.prisma.withExtensions().product.updateMany({
      data: { price: Math.floor(Math.random() * 100 + 1) },
    });
  }

  async verifyAll() {
    return this.prisma.withExtensions().product.updateMany({
      where: { verified: false },
      data: { verified: true },
    });
  }

  async delete(id: number) {
    return this.prisma.withExtensions().product.delete({
      where: { id },
    });
  }

  async deleteAll() {
    return this.prisma.withExtensions().product.deleteMany({
      where: { id: { in: [2, 3, 4] } },
    });
  }
}
