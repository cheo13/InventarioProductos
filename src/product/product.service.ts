import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  async createProduct(createProductDto: CreateProductDto) {
    const createdProduct = await this.prisma.product.create({
      data: createProductDto,
    });
    return createdProduct;
  }

  async getAllProducts() {
    const products = await this.prisma.product.findMany();
    return products;
  }

  async getProductById(productId: number) {
    const product = await this.prisma.product.findUnique({
      where: { id: productId },
      include: { category: true },
    });

    if (!product) {
      throw new NotFoundException(`Product with ID ${productId} not found`);
    }

    return product;
  }

  async updateProduct(productId: number, updateProductDto: UpdateProductDto) {
    const updatedProduct = await this.prisma.product.update({
      where: { id: productId },
      data: updateProductDto,
    });

    if (!updatedProduct) {
      throw new NotFoundException(`Product with ID ${productId} not found`);
    }

    return updatedProduct;
  }

  async patchProduct(productId: number, updateProductDto: UpdateProductDto) {
    const patchedProduct = await this.prisma.product.update({
      where: { id: productId },
      data: updateProductDto,
    });

    if (!patchedProduct) {
      throw new NotFoundException(`Product with ID ${productId} not found`);
    }

    return patchedProduct;
  }

  async deleteProduct(productId: number) {
    const deletedProduct = await this.prisma.product.delete({
      where: { id: productId },
    });

    if (!deletedProduct) {
      throw new NotFoundException(`Product with ID ${productId} not found`);
    }

    return deletedProduct;
  }
}
