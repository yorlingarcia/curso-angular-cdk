import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
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
  faPlus,
  faInfo,
  faInfoCircle,
  faShare,
  faArrowRight,
  faBox,
  faBoxOpen,
  faCopy,
  faPaperclip,
  faDesktop,
  faSlidersH,
  faStopCircle,
} from '@fortawesome/free-solid-svg-icons';
import { ToDo } from 'src/app/models/todo.model';

interface Data {
  toDo: ToDo;
}

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
  faPlus = faPlus;
  faInfoCircle = faInfoCircle;
  faShare = faShare;
  faArrowRight = faArrowRight;
  faBox = faBox;
  faCopy = faCopy;
  faPaperClip = faPaperclip;
  faDesktop = faDesktop;
  faSlidersH = faSlidersH;

  checkedSeguir: boolean = false;
  checkedDescripcion: boolean = true;
  checkedActividad: boolean = true;

  toDo: ToDo;
  constructor(
    private dialogRef: DialogRef<Data>,
    @Inject(DIALOG_DATA) data: Data
  ) {
    this.toDo = data.toDo;
  }

  ngOnInit(): void {}
  close() {
    //this.dialog.closeAll();
    this.dialogRef.close();
  }

  toggleDescripcion() {
    this.checkedDescripcion = !this.checkedDescripcion;
  }
  toggleActividad() {
    this.checkedActividad = !this.checkedActividad;
  }
}
