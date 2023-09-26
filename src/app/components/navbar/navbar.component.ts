import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  isOpen = false; // variable de estado para el boton

  constructor() {}

  ngOnInit(): void {}
}
