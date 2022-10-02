import { Component, ElementRef, OnInit } from '@angular/core';
import { Renderer2 } from '@angular/core';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  host: {
    '(document:click)': 'onClick($event)',
  },
})
export class DashboardComponent implements OnInit {
  names: string[] = [
    'Monicca James',
    'Samantha',
    'Catherine',
    'Monica James',
    'Ileana Sam',
  ];

  headings: string[] = [
    'USERID/NAME',
    'PHONE NUMBER',
    'TRANSACTION CATEGORY',
    'TRANSACTION AMOUNT',
    'ACCOUNT TYPE',
    'BALANCE AMOUNT',
    '',
  ];

  constructor(private render: Renderer2, private _eref: ElementRef) {}
  prevParentEl: any;
  ngOnInit(): void {}

  onClick(event: any) {
    if (this.prevParentEl && !this._eref.nativeElement.contains(event.target)) {
      this.render.removeClass(this.prevParentEl, 'table-active');
    }
  }

  onRowClick(event: any, name: any, i: number) {
    if (this.prevParentEl) {
      this.render.removeClass(this.prevParentEl, 'table-active');
    }
    this.render.addClass(event.target.parentElement, 'table-active');
    console.log(event.target.parentElement);
    console.log(name, i);
    this.prevParentEl = event.target.parentElement;
  }
}
