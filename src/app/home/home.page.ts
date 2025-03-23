import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})


export class HomePage {
  toDoList = [
    { title: 'Task 1', edit: false },
    { title: 'Task 2', edit: false },
    { title: 'Task 3', edit: false }
  ]

  newTask = {
    title: '',
    edit: true
  }

  error = '';

  constructor() {}

  onNewItem() {
    if (this.canAddNewItem()) {
      if (this.newTask.title != '') {
        this.newTask.edit = false;
        this.toDoList.push(this.newTask)
        this.newTask = {title: '', edit: true};
        this.error = '';
      }
      else {
        this.error = 'La tarea neesita un nombre';
      }
    }
    else {
      this.error = 'Esta tarea ya existe';
    }
  }

  onCompleteItem(i: any) {
    this.toDoList.splice(i, 1);
  }

  canAddNewItem() {
    for (let item of this.toDoList) {
      if (item.title === this.newTask.title) return false;
    }
    return true;
  }
}
