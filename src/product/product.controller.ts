import { Controller, Get, Post, Patch, Put, Delete, Param, Body, NotFoundException } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async createProduct(@Body() createProductDto: CreateProductDto) {
    const createdProduct = await this.productService.createProduct(createProductDto);
    return createdProduct;
  }

  @Get()
  async getAllProducts() {
    const products = await this.productService.getAllProducts();
    return products;
  }

  @Get(':id')
  async getProductById(@Param('id') productId: string) {
    const parsedProductId = parseInt(productId, 10);

    if (isNaN(parsedProductId)) {
      throw new NotFoundException('Invalid product ID');
    }

    const product = await this.productService.getProductById(parsedProductId);
    return product;
  }

  @Put(':id')
  async updateProduct(@Param('id') productId: string, @Body() updateProductDto: UpdateProductDto) {
    const parsedProductId = parseInt(productId, 10);

    if (isNaN(parsedProductId)) {
      throw new NotFoundException('Invalid product ID');
    }

    const updatedProduct = await this.productService.updateProduct(parsedProductId, updateProductDto);
    return updatedProduct;
  }

  @Patch(':id')
  async patchProduct(@Param('id') productId: string, @Body() updateProductDto: UpdateProductDto) {
    const parsedProductId = parseInt(productId, 10);

    if (isNaN(parsedProductId)) {
      throw new NotFoundException('Invalid product ID');
    }

    const patchedProduct = await this.productService.patchProduct(parsedProductId, updateProductDto);
    return patchedProduct;
  }

  @Delete(':id')
  async deleteProduct(@Param('id') productId: string) {
    const parsedProductId = parseInt(productId, 10);

    if (isNaN(parsedProductId)) {
      throw new NotFoundException('Invalid product ID');
    }

    const deletedProduct = await this.productService.deleteProduct(parsedProductId);
    return deletedProduct;
  }
}
