import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto/createUser.dto';
import { UserService } from './user.service';
import { CommentService } from '../comment/comment.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly commentsService: CommentService,
  ) {}

  @Get(':id')
  findAll(@Param('id') id: number) {
    return this.userService.findOne(id);
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get(':id/comments')
  getUserComments(@Param('id') id: string) {
    return this.commentsService.findUserComments(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }
}
