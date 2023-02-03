/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.entity';

@Injectable()
export class UsersRepository {
  constructor(@InjectRepository(User) private usersModel: Repository<User>) {}

  async userCreate(createUserDto: CreateUserDto): Promise<User> {
    return this.usersModel.save(createUserDto);
  }

  async findAll(): Promise<User[]> {
    return this.usersModel.find();
  }

  async findOne(id: number): Promise<User> {
    return this.usersModel.findOne({ where: { id: id } });
  }

  async updateUser(id: number, updateUserDto: UpdateUserDto) {
    return this.usersModel.update(id, updateUserDto);
  }

  async delete(id: number) {
    return this.usersModel.delete(id);
  }

  async getUserByUsername(username: string, password: string) {
    return this.usersModel.findOne({
      where: { username: username, password: password },
    });
  }
}
