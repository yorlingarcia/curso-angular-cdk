import { Component, OnInit } from '@angular/core';
import {
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

  constructor() {}

  ngOnInit(): void {}
}
