import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ename:string ='';
  users:string[] = ['Pavan', 'Kumar', 'Hari'];
  onSubmit(){
    this.users.push(this.ename);
    this.ename='';
  }
}
