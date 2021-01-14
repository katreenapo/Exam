import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  constructor() { }

  comments: Comment [] = [];

  getCom() {
    return this.comments;
  }

  AddNewComment(comment: any) {
    this.comments.push({
      name: comment.name,
      email: comment.email,
      comment: comment.comment
    });
  }

  deleteComment(i: number) {
    this.comments.splice(i, 1);
  }
}
