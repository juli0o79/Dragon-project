import { Component } from '@angular/core';
import {LoginComponent} from './componente/login/login.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dragon';
  constructor(public logged: LoginComponent){}
  value:any = this.logged;
  ngOnInit(){
    console.log(this.value.logged)
    this.logged.logged= true;

  }
  async end(){
    this.value.logged = true;
    await console.log(this.value.logged)
    await this.logged.logOut();
  }
}
