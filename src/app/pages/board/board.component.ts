import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { faTrello } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { ToDo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
})
export class BoardComponent implements OnInit {
  faTrello = faTrello;
  faUser = faUser;
  toDos: ToDo[] = [
    {
      id: '1',
      title: 'Task 1',
    },
    {
      id: '2',
      title: 'Task 2',
    },
    {
      id: '3',
      title: 'Task 3',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.toDos, event.previousIndex, event.currentIndex);
  }
}
