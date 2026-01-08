import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';


interface User{
  name:string;
  Role: "Teacher" | "Parent" | "Student";
}
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})


export class AppComponent {
  title = 'UserManagementSystem';
  roles: Array<"Teacher" | "Parent" | "Student"> = ['Teacher', 'Parent', 'Student'];
  selectedRole: "Teacher" | "Parent" | "Student" = this.roles[0];
  message: string = '';

  user:User={
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
      this.users.push({...this.user});
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

  getUsersByRole(role: "Teacher" | "Parent" | "Student") {
  return this.users.filter(u => u.Role === role);
}


}
