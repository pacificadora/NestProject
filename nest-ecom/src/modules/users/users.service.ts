/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.entity';
import { UsersRepository } from './users.repository';

import dataSource from 'db/data-source';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UsersRepository) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    return this.userRepository.userCreate(createUserDto);
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  async findOne(id: number) {
    return this.userRepository.findOne(id);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.updateUser(id, updateUserDto);
  }

  async remove(id: number) {
    return this.userRepository.delete(id);
  }

  async getUserByUsername(username: string, password: string): Promise<User> {
    return this.userRepository.getUserByUsername(username, password);
  }

  // async updateUser(userId: number){
  //   const user = await this.createQueryBuilder(Alias.userTokens)
  //     .where(`${Alias.userTokens}.type = :type`, { type })
  //     .innerJoinAndSelect(`${Alias.userTokens}.user`, Alias.users)
  //     .andWhere(`${Alias.userTokens}.token = :token`, { token })
  //     .addSelect(
  //       `${Alias.userTokens}.createdAt at time zone 'utc'`,
  //       'createdAtUTC',
  //     )
  //     .getRawAndEntities();
     
  // }
  async userUpdate(userId: number){
    this.userRepository.userUpdate(userId);
  }
}
