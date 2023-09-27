import { Component, OnInit } from '@angular/core';
import {
  faClock,
  faTable,
  faTabletAlt,
  faWaveSquare,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
})
export class BoardsComponent implements OnInit {
  faTable = faTable;
  faTabletAlt = faTabletAlt;
  faWaveSquare = faWaveSquare;
  faClock = faClock;

  constructor() {}

  ngOnInit(): void {}
}
