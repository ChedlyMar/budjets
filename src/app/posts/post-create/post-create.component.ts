import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IPost } from '../post.model'
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {

  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

  onAddPost(form:NgForm){
    if(form.valid){
      const post : IPost = {
        title:form.value.title,
        content:form.value.content
      }
      this.postService.addPost(post);
      form.resetForm();
    }
  }
}
