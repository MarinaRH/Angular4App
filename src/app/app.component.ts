import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string;
  email:string;
  website:string;
  hobbies:string[];
  showHobbies:boolean;


  constructor(){
    this.name="Marina";
    this.email="ms@gmail.com";
    this.website="https://www.faztweb.com";
    this.hobbies=['run','single','read'];
    this.showHobbies=false;
  }

  toggleHobbies(){
    this.showHobbies=!this.showHobbies;
  }

  newHobbies(hobby) {
    this.hobbies.push(hobby.value);
    hobby.value='';

  }

}
