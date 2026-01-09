import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CommonModule, NgClass, NgStyle } from '@angular/common';
import { HoverHighlightDirective } from './hover-highlight.directive';
import { IfAdminDirective } from './app-if-admin.directive';


interface User{
  id: number;
  name:string;
  Role: "Admin" | "User" | "Guest" ;
}
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule, NgClass, NgStyle,  HoverHighlightDirective,IfAdminDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})


export class AppComponent {
  title = 'UserManagementSystem';
  roles: Array<"Admin" | "User" | "Guest" > = ['Admin', 'User', 'Guest' ];
  selectedRole: "Admin" | "User" | "Guest"  = this.roles[0];
  message: string = '';
  private nextId = 1;
  adminOnly= {color:'green',marginLeft:'10px'};

  user:User={
    id:0,
    name:'',
    Role: this.selectedRole
  }

 get isNameEmpty(): boolean{
  return this.user.name.trim()==='';
 }

  users: User[] = [];

  addUser(){
    if(this.user.name.trim()){
      try{
      this.users.push({
        id: this.nextId++,
        name: this.user.name.toUpperCase(),
        Role: this.user.Role
      });
      this.message=`User Name : "${this.user.name}" & Role : "${this.user.Role}" - added successfully`;
            setTimeout(() => {
        this.message = '';
      },5000);

      }catch(e){
        console.log(Error);
        this.message =  ` Cannot able to add User Name : ${this.user.name} & Role : ${this.user.Role} `;
              setTimeout(() => {
        this.message = '';
      }, 5000);

      }
      this.user.name = '';
      // this.user.Role = this.selectedRole;
      
    }
    

  }

  getUsersByRole(role: "Admin" | "User" | "Guest" ) {
  return this.users.filter(u => u.Role === role);
  }

  removeUser(id: number) {
    try{
    const removedUser = this.users.find(u=> u.id === id);
    this.users = this.users.filter(u => u.id !== id);
    
    this.message = `User Removed : Name : ${removedUser?.name} with Role : ${ removedUser?.Role}`;
    setTimeout(() => {
        this.message = '';
    }, 5000);
    }catch(e){console.log(e);}
  }



}
