import { Component, OnInit, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommentService } from '../comment.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  newComments: Comment[];
  allComm = [];
  
  formExam: FormGroup;
  constructor(
    private fb: FormBuilder,
    private commentService: CommentService
    


  ) { }

  ngOnInit(): void {
    this.formExam = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      comment: ['', [Validators.required, Validators.maxLength(150)]],

    });

    
    this.newComments = this.commentService.getComment();
  }

  get f() {
    return this.formExam.controls;
  }

  AddNewComment() {
    console.log(this.formExam.value);
    this.commentService.AddNewComment(this.formExam.value);
    this.formExam.reset({
      name: '',
      email: '',
      comment: ''
    })
  }

  deleteComment(i: number) {
    this.commentService.deleteComment(i);
  }
}

