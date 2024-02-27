import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';

@Injectable()
export class UserService {
  findOne(id: string) {
    return {
      id,
    };
  }

  create(createUserDto: CreateUserDto) {
    return {
      message: 'this user is created',
      data: createUserDto,
    };
  }
}
