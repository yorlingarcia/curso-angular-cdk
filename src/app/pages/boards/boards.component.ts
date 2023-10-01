import { Component, OnInit } from '@angular/core';
import { faTrello } from '@fortawesome/free-brands-svg-icons';
import {
  faAngleDown,
  faAngleUp,
  faBorderAll,
  faClock,
  faCog,
  faHeart,
  faTable,
  faTabletAlt,
  faUsers,
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
  faAngleUp = faAngleUp;
  faAngleDown = faAngleDown;
  faTrello = faTrello;
  faHeart = faHeart;
  faBorderAll = faBorderAll;
  faUsers = faUsers;
  faGear = faCog;

  items = [
    {
      label: 'item 1',
      items: [
        {
          label: 'items 1.1',
          items: [
            {
              label: 'items 1.1.1',
            },
          ],
        },
        {
          label: 'items 1.2',
        },
      ],
    },
    {
      label: 'items 2',
      items: [
        {
          label: 'items 2.1',
          items: [
            {
              label: 'items 2.1.1',
            },
          ],
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
