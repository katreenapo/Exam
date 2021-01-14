import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  constructor() { }

  newComments: Comment [] = [];

  getComment() {
    return this.newComments;
  }

  AddNewComment(com: any) {
    this.newComments.push({
      name: com.name,
      email: com.email,
      comment: com.comment
    });
  }

  deleteComment(i: number) {
    this.newComments.splice(i, 1);
  }
}
