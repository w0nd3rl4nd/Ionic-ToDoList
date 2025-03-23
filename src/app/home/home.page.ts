import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  toDoList = ['Item 1', 'Item 2', 'Item 3'];
  newItem = ''

  constructor() {}

  onNewItem() {
    this.toDoList.push(this.newItem);
    this.newItem = '';
  }

  onCompleteItem(i: any) {
    this.toDoList.splice(i, 1);
  }

}