import { Component } from '@angular/core';
import { SideNavToggle } from './sidenav/sideNavToggle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'animated-responsive-sidenav';

  isSideNavCollapsed: boolean = false;
  screenWidth: number = 0;
  onToggleSideNav(data: SideNavToggle) {
    this.isSideNavCollapsed = data.collapsed;
    this.screenWidth = data.screenWidth;
  }
}
