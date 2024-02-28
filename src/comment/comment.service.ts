import { Injectable } from '@nestjs/common';

@Injectable()
export class CommentService {
  findUserComments(id: string) {
    return `All comments of ${id}`;
  }
}
