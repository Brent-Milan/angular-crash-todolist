import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: String = 'angular-crash-todolist';
  userName: String = 'Salutations, Brent';

  constructor() {
    this.changeName('High Overlord');
  }

  changeName(userName:string):void {
    this.userName = 'Salutations, ' + userName;
  }
}
