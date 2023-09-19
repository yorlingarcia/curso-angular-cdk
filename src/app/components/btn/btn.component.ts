import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss'],
})
export class BtnComponent implements OnInit {
  @Input() typeBtn: 'button' | 'submit' | 'reset' = 'button';
  @Input() color = 'primary';

  constructor() {}

  ngOnInit(): void {}

  get colors() {
    return {
      'hover:bg-green-600': this.color === 'green',
      'bg-green-700': this.color === 'green',
      'focus:ring-green-300': this.color === 'green',
      'hover:bg-primary-600': this.color === 'primary',
      'bg-primary-700': this.color === 'primary',
      'focus:ring-primary-300': this.color === 'primary',
      'hover:bg-red-600': this.color === 'red',
      'bg-red-700': this.color === 'red',
      'focus:ring-red-300': this.color === 'red',
    };
  }
}
