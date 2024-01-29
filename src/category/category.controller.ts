import { Controller, Get, Post, Patch, Put, Delete, Param, Body, NotFoundException } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  async createCategory(@Body() createCategoryDto: CreateCategoryDto) {
    const createdCategory = await this.categoryService.createCategory(createCategoryDto);
    return createdCategory;
  }

  @Get()
  async getAllCategories() {
    const categories = await this.categoryService.getAllCategories();
    return categories;
  }

  @Get(':id')
  async getCategoryById(@Param('id') categoryId: string) {
    const parsedCategoryId = parseInt(categoryId, 10);

    if (isNaN(parsedCategoryId)) {
      throw new NotFoundException('Invalid category ID');
    }

    const category = await this.categoryService.getCategoryById(parsedCategoryId);
    return category;
  }

  @Put(':id')
  async updateCategory(@Param('id') categoryId: string, @Body() updateCategoryDto: UpdateCategoryDto) {
    const parsedCategoryId = parseInt(categoryId, 10);

    if (isNaN(parsedCategoryId)) {
      throw new NotFoundException('Invalid category ID');
    }

    const updatedCategory = await this.categoryService.updateCategory(parsedCategoryId, updateCategoryDto);
    return updatedCategory;
  }

  @Patch(':id')
  async patchCategory(@Param('id') categoryId: string, @Body() updateCategoryDto: UpdateCategoryDto) {
    const parsedCategoryId = parseInt(categoryId, 10);

    if (isNaN(parsedCategoryId)) {
      throw new NotFoundException('Invalid category ID');
    }

    const patchedCategory = await this.categoryService.patchCategory(parsedCategoryId, updateCategoryDto);
    return patchedCategory;
  }

  @Delete(':id')
  async deleteCategory(@Param('id') categoryId: string) {
    const parsedCategoryId = parseInt(categoryId, 10);

    if (isNaN(parsedCategoryId)) {
      throw new NotFoundException('Invalid category ID');
    }

    const deletedCategory = await this.categoryService.deleteCategory(parsedCategoryId);
    return deletedCategory;
  }
}
