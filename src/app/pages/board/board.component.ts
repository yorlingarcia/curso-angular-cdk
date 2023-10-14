import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { faTrello } from '@fortawesome/free-brands-svg-icons';
import {
  faAngleDown,
  faAngleLeft,
  faAngleRight,
  faCalendarDay,
  faCog,
  faPlus,
  faTable,
  faUser,
  faEllipsisH,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { ToDo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent {
  faTrello = faTrello;
  faUser = faUser;
  faGear = faCog;
  faAngleDown = faAngleDown;
  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;
  faPlus = faPlus;
  faTable = faTable;
  faCalendar = faCalendarDay;
  faEllipsis = faEllipsisH;
  faStar = faStar;

  titleCard: string = 'Mi tablero Trello';
  editMode: boolean | null = false;
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

  @ViewChild('miInput') miInput!: ElementRef;
  mostrar = false;

  valorInicial = 'Texto inicial';

  constructor(private renderer: Renderer2) {}

  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.toDos, event.previousIndex, event.currentIndex);
  }

  enableEditMode(): void {
    this.editMode = true;
    const inputElement = this.renderer.selectRootElement(
      this.miInput.nativeElement
    );
    setTimeout(() => {
      inputElement.focus();
      inputElement.select();
    });
  }

  disableEditMode(): void {
    this.editMode = null;
  }

  modificacionTitleCard(event: any) {
    this.titleCard = event.target.value;
    this.disableEditMode();
  }
}
