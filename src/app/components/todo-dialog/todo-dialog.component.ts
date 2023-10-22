import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import {
  faBars,
  faUser,
  faTag,
  faCheckSquare,
  faClock,
  faDoorOpen,
  faPager,
  faEye,
  faCheck,
  faList,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todo-dialog',
  templateUrl: './todo-dialog.component.html',
})
export class TodoDialogComponent implements OnInit {
  faClose = faDoorOpen;
  faPager = faPager;
  faBars = faBars;
  faUser = faUser;
  faTag = faTag;
  faCheckSquare = faCheckSquare;
  faClock = faClock;
  faEye = faEye;
  faCheck = faCheck;
  faList = faList;

  checkedSeguir: boolean = false;
  checkedDescripcion: boolean = true;
  constructor(private dialog: Dialog, private dialogRef: DialogRef) {}

  ngOnInit(): void {}
  close() {
    //this.dialog.closeAll();
    this.dialogRef.close();
  }

  toggleDescripcion() {
    this.checkedDescripcion = !this.checkedDescripcion;
  }
}
