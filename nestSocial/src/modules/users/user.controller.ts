import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { Constants } from 'src/utils/constants';
import { CustomRoleGuard } from '../auth/role.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/signup')
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.userService.create(createUserDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string | number) {
    return this.userService.findByOneId(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Get()
  @UseGuards(new CustomRoleGuard(Constants.ROLES.ADMIN_ROLE))
  findAll() {
    return this.userService.find();
  }

  @Delete(':id')
  @UseGuards(new CustomRoleGuard(Constants.ROLES.ADMIN_ROLE))
  async remove(@Param('id') id: number) {
    return await this.userService.remove(id);
  }
}
