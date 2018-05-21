import { Component } from '@angular/core';
import { PostService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[PostService]
})

export class AppComponent {
  name:string;
  email:string;
  website:string;
  hobbies:string[];
  showHobbies:boolean;
  posts:IPost[];


  constructor(private postService:PostService){
    this.name="Marina";
    this.email="ms@gmail.com";
    this.website="https://www.faztweb.com";
    this.hobbies=['run','single','read'];
    this.showHobbies=false;
    this.postService.getPosts().subscribe(posts=>{
      this.posts=posts;
      
    });
  }

  toggleHobbies(){
    this.showHobbies=!this.showHobbies;
  }

  newHobbies(hobby) {
    this.hobbies.push(hobby.value);
    hobby.value='';
    return false;

  }

}


interface IPost {
  id:string;
  title:string;
  body:string;
}

