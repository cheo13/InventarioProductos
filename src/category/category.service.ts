import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoryService {
  constructor(private readonly prisma: PrismaService) {}

  async createCategory(createCategoryDto: CreateCategoryDto) {
    const createdCategory = await this.prisma.category.create({
      data: createCategoryDto,
    });
    return createdCategory;
  }

  async getAllCategories() {
    const categories = await this.prisma.category.findMany();
    return categories;
  }

  async getCategoryById(categoryId: number) {
    const category = await this.prisma.category.findUnique({
      where: { id: categoryId },
    });

    if (!category) {
      throw new NotFoundException(`Category with ID ${categoryId} not found`);
    }

    return category;
  }

  async updateCategory(categoryId: number, updateCategoryDto: UpdateCategoryDto) {
    const updatedCategory = await this.prisma.category.update({
      where: { id: categoryId },
      data: updateCategoryDto,
    });

    if (!updatedCategory) {
      throw new NotFoundException(`Category with ID ${categoryId} not found`);
    }

    return updatedCategory;
  }

  async patchCategory(categoryId: number, updateCategoryDto: UpdateCategoryDto) {
    const patchedCategory = await this.prisma.category.update({
      where: { id: categoryId },
      data: updateCategoryDto,
    });

    if (!patchedCategory) {
      throw new NotFoundException(`Category with ID ${categoryId} not found`);
    }

    return patchedCategory;
  }

  async deleteCategory(categoryId: number) {
    const deletedCategory = await this.prisma.category.delete({
      where: { id: categoryId },
    });

    if (!deletedCategory) {
      throw new NotFoundException(`Category with ID ${categoryId} not found`);
    }

    return deletedCategory;
  }
}
