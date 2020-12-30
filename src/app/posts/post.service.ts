import { Injectable } from "@angular/core";
import { IPost } from "./post.model";

@Injectable({
  providedIn: 'root'
})

export class PostService{
  private posts:IPost[] = [] ;

  getPost(){
    return this.posts;
  }

  addPost(newPost){
    this.posts.push(newPost);
  }
}
