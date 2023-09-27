import { Component, OnInit } from '@angular/core';
import {
  faBell,
  faInfoCircle,
  faDoorClosed,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  isOpen = false; // variable de estado para el boton
  isOpenBody = false; // variable de estado para el boton dentro del cuerpo

  faBell = faBell;
  faInfoCircle = faInfoCircle;
  faClose = faDoorClosed;

  constructor() {}

  ngOnInit(): void {}
}
