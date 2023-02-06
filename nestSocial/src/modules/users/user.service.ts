import { Injectable, NotAcceptableException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './user.entity';
import { UserRepository } from './user.repository';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  //created
  async create(createUserDto: CreateUserDto) {
    const user: UserEntity = await this.userRepository.checkUserByEmail(
      createUserDto.email,
    );
    if (user == undefined) {
      return await this.userRepository.createUser(createUserDto);
    } else {
      throw new NotAcceptableException('user already exists');
    }
  }

  //read
  //for read operation - function is written in user.repository.ts
  async find(): Promise<UserEntity[]> {
    return await this.userRepository.findAll();
  }

  async findByOneId(id): Promise<UserEntity> {
    return await this.userRepository.findById(id);
  }

  //update
  async update(id: number, updateUserDto: UpdateUserDto) {
    //check if user is present with given id or not
    const user: UserEntity = await this.userRepository.findById(id);
    if (user != undefined) {
      await this.userRepository.updateUser(id, updateUserDto);
    } else {
      throw new NotAcceptableException('no user with related id');
    }
  }

  //delete
  async remove(id: number) {
    const user: UserEntity = await this.userRepository.findById(id);
    if (user) {
      this.userRepository.removingUser(id);
    } else {
      throw new NotAcceptableException('user does not exist');
    }
  }

  //function for authentication through passport-local strategy
  async getUserByUsername(
    username: string,
    password: string,
  ): Promise<UserEntity> {
    return this.userRepository.getUserByUsername(username, password);
  }
}
