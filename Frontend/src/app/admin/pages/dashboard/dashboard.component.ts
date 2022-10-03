import { Component, ElementRef, OnInit } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
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

  end: string = '';
  clicked: number = -1;

  isPhoneVisible: boolean = true;
  isCategoryVisible: boolean = true;
  isTypeVisible: boolean = true;
  isAmountVisible: boolean = true;
  shorten: boolean = true;
  shorten2: boolean = true;

  constructor(
    private render: Renderer2,
    private _eref: ElementRef,
    private breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe(['(max-width:1350px)'])
      .subscribe((result: BreakpointState) => {
        this.isPhoneVisible = result.matches ? false : true;
      });
    this.breakpointObserver
      .observe(['(max-width:1000px)'])
      .subscribe((result: BreakpointState) => {
        this.isCategoryVisible = result.matches ? false : true;
      });
    this.breakpointObserver
      .observe(['(max-width:850px)'])
      .subscribe((result: BreakpointState) => {
        this.shorten = result.matches ? true : false;
      });
    this.breakpointObserver
      .observe(['(max-width:545px)'])
      .subscribe((result: BreakpointState) => {
        this.isTypeVisible = result.matches ? false : true;
      });
    this.breakpointObserver
      .observe(['(max-width:415px)'])
      .subscribe((result: BreakpointState) => {
        this.isAmountVisible = result.matches ? false : true;
        this.shorten2 = result.matches ? true : false;
      });
  }

  prevParentEl: any;
  ngOnInit() {}
  onClick(event: any) {
    if (this.prevParentEl && !this._eref.nativeElement.contains(event.target)) {
      this.render.removeClass(this.prevParentEl, 'table-active');
      this.clicked = -1;
    }
  }

  onRowClick(event: any, i: number) {
    if (this.prevParentEl) {
      this.render.removeClass(this.prevParentEl, 'table-active');
    }
    this.render.addClass(event.target.parentElement, 'table-active');
    this.clicked = i;
    this.prevParentEl = event.target.parentElement;
  }
}
