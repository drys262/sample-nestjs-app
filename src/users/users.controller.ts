import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './dto/user';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get(':id')
  getUsers(@Param('id') id: string): string {
    return `id here: ${id}`;
  }

  @Get()
  async findAll() {
    return this.userService.findAll();
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    this.userService.create(createUserDto);
    return true;
  }
}
