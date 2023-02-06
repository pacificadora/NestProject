import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository, UpdateResult } from 'typeorm';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { Constants } from 'src/utils/constants';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(UserEntity) private usersModel: Repository<UserEntity>,
  ) {}

  //check if user is already present
  async checkUserByEmail(email: any): Promise<UserEntity> {
    return this.usersModel.findOne({ where: { email: email } });
  }

  async createUser(userData: CreateUserDto): Promise<UserEntity> {
    userData.role = Constants.ROLES.NORMAL_ROLE;
    return await this.usersModel.save(userData);
  }

  async findAll(): Promise<UserEntity[]> {
    return await this.usersModel.find();
  }

  async findById(id: any): Promise<UserEntity> {
    return await this.usersModel.findOne({ where: { id } });
  }

  async updateUser(id: any, userData: UpdateUserDto): Promise<UpdateResult> {
    return await this.usersModel.update(id, userData);
  }

  async removingUser(id) {
    return this.usersModel.delete(id);
  }

  // for authentication purpose
  // async getUserByName(username): Promise<UserEntity[]> {
  //   return await this.usersModel.find({ where: { username: username } });
  // }

  // async getUserByEmail(userEmail, password): Promise<UserEntity> {
  //   return await this.usersModel.findOne({
  //     where: {
  //       username: userEmail,
  //       password: password
  //     },
  //   });
  // }

  async getUserByUsername(
    userName: string,
    password: string,
  ): Promise<UserEntity> {
    return this.usersModel.findOne({
      where: {
        username: userName,
        password: password,
      },
    });
  }
}
