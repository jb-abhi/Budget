import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @Output() isDisplay: EventEmitter<boolean> = new EventEmitter();
  display: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.display = !this.display;
    this.isDisplay.emit(this.display);
  }
}
