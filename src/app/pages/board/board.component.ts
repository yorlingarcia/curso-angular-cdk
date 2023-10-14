import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
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
  faUserFriends,
  faStarHalf,
  faStarOfLife,
  faStarOfDavid,
  faChalkboard,
  faRocket,
  faBolt,
  faFilter,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import { ToDo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent {
  @ViewChild('miInput') miInput!: ElementRef;

  // Iconos usados de Fontawesome
  faTrello = faTrello;
  faUser = faUser;
  faGear = faCog;
  faAngleDown = faAngleDown;
  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;
  faPlus = faPlus;
  faTable = faTable;
  faCalendar = faCalendarDay;
  faEllipsisH = faEllipsisH;
  faStar = faStar;
  faStarOfDavid = faStarOfDavid;
  faUserFriends = faUserFriends;
  faChalkBoard = faChalkboard;
  faRocket = faRocket;
  faBolt = faBolt;
  faFilter = faFilter;
  faUserPlus = faUserPlus;

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

  doing: ToDo[] = [{ id: '3', title: 'completar fidelidad de disenio' }];
  done: ToDo[] = [{ id: '4', title: 'fidelidad del navbar del board' }];

  constructor(private renderer: Renderer2) {}

  drop(event: CdkDragDrop<ToDo[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
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
