import { Component } from '@angular/core';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  parentName: User = {
    id: 1, name: "Thiratham",
    age: 0
  };

  //parentName = new User(1, "Thiratham");

  onResponse(event: User) {
    console.log("On response in parent");
    console.table(event);
  }


  // name = '';
  // names = [];

  // datas = [
  //   { id: 1, name: "chai" },
  //   { id: 2, name: "thiratham" }
  // ];

  // doSth(newName: string) {
  //   console.log(newName);
  //   this.name = newName;
  // }

}