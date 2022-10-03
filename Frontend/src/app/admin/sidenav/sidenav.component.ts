import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  public isMobileLayout = false;
  isDisplay = true;
  clicked = false;
  above785 = true;
  constructor(private breakpointObserver: BreakpointObserver) {}
  ngOnInit(): void {
    this.breakpointObserver
      .observe(['(max-width:785px)'])
      .subscribe((result: BreakpointState) => {
        this.above785 = result.matches ? false : true;
        console.log(this.above785);
      });
  }

  onClick(val: boolean) {
    console.log('clicked');
    this.clicked = val;
  }
}
