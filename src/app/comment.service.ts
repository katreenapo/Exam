import { Injectable } from '@angular/core';
import { Comment } from './form/form.model';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  constructor() { }

  comments: Comment [] = [];

  getComment() {
    return this.comments;
  }

  AddNewComment(com: any) {
    this.comments.push({
      name: com.name,
      email: com.email,
      comment: com.comment
    });
  }

  deleteComment(i: number) {
    this.comments.splice(i, 1);
  }
}
