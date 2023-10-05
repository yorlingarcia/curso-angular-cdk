import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
})
export class BoardComponent implements OnInit {
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

  drop($event: CdkDragDrop<any[]>) {
    console.log($event);
    // moveItemInArray();
  }
}
