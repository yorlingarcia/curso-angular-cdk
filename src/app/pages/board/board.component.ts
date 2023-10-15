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
  faPager,
} from '@fortawesome/free-solid-svg-icons';
import { Column, ToDo } from 'src/app/models/todo.model';

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
  faPager = faPager;

  titleCard: string = 'Mi tablero Trello';
  editMode: boolean | null = false;
  addMode: boolean = false;
  currentIndex: number | null = null;
  aniadirList: boolean = false;
  inputValueList: string = '';

  toDos: ToDo[] = [];
  doing: ToDo[] = [];
  done: ToDo[] = [];

  columns: Column[] = [
    {
      title: 'Lista de Tareas',
      todos: [
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
      ],
    },
    {
      title: 'En proceso',
      todos: [{ id: '3', title: 'completar fidelidad de disenio' }],
    },
    {
      title: 'Hecho',
      todos: [{ id: '4', title: 'fidelidad del navbar del board' }],
    },
  ];

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

  changeModAdd(index: number) {
    this.currentIndex = index;
  }

  closeChangeModAdd() {
    this.currentIndex = null;
  }

  toggleList() {
    this.aniadirList = !this.aniadirList;
  }

  addColumnList() {
    if (this.inputValueList.trim() !== '') {
      this.columns.push({
        title: this.inputValueList,
        todos: [],
      });

      // Puedes realizar otras acciones aquí, como enviar el contenido a un servicio.
    }

    // Limpiar el campo de entrada después de guardar.
    this.inputValueList = '';
  }
}
