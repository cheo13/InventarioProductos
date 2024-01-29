import { Controller, Get, Post, Patch, Put, Delete, Param, Body, NotFoundException } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    const createdUser = await this.userService.createUser(createUserDto);
    return createdUser;
  }

  @Get()
  async getAllUsers() {
    const users = await this.userService.getAllUsers();
    return users;
  }

  @Get(':id')
  async getUserById(@Param('id') userId: string) {
    const parsedUserId = parseInt(userId, 10);

    if (isNaN(parsedUserId)) {
      throw new NotFoundException('Invalid user ID');
    }

    const user = await this.userService.getUserById(parsedUserId);
    return user;
  }

  @Put(':id')
  async updateUser(@Param('id') userId: string, @Body() updateUserDto: UpdateUserDto) {
    const parsedUserId = parseInt(userId, 10);

    if (isNaN(parsedUserId)) {
      throw new NotFoundException('Invalid user ID');
    }

    const updatedUser = await this.userService.updateUser(parsedUserId, updateUserDto);
    return updatedUser;
  }

  @Patch(':id')
  async patchUser(@Param('id') userId: string, @Body() updateUserDto: UpdateUserDto) {
    const parsedUserId = parseInt(userId, 10);

    if (isNaN(parsedUserId)) {
      throw new NotFoundException('Invalid user ID');
    }

    const patchedUser = await this.userService.patchUser(parsedUserId, updateUserDto);
    return patchedUser;
  }

  @Delete(':id')
  async deleteUser(@Param('id') userId: string) {
    const parsedUserId = parseInt(userId, 10);

    if (isNaN(parsedUserId)) {
      throw new NotFoundException('Invalid user ID');
    }

    const deletedUser = await this.userService.deleteUser(parsedUserId);
    return deletedUser;
  }
}
