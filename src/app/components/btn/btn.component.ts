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
      'text-white':
        this.color === 'succes' ||
        this.color === 'primary' ||
        this.color === 'red',
      'text-gray-700': this.color === 'gray-light',
      'hover:bg-green-600': this.color === 'green',
      'bg-green-700': this.color === 'green',
      'focus:ring-green-300': this.color === 'green',
      'hover:bg-primary-600': this.color === 'primary',
      'bg-primary-700': this.color === 'primary',
      'focus:ring-primary-300': this.color === 'primary',
      'hover:bg-red-600': this.color === 'red',
      'bg-red-700': this.color === 'red',
      'focus:ring-red-300': this.color === 'red',
      'hover:bg-sky-600': this.color === 'sky',
      'bg-sky-700': this.color === 'sky',
      'focus:ring-sky-300': this.color === 'sky',
      'hover:bg-gray-500': this.color === 'gray-light',
      'bg-gray-200': this.color === 'gray-light',
      'focus:ring-gray-50': this.color === 'gray-light',
    };
  }
}
