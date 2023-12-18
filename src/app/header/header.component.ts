import { Component, HostListener, Input, ViewChild } from '@angular/core';
import {
  LanguagesType,
  NotificationsType,
  languages,
  notifications,
  userItem,
  userItemsType,
} from './header-dummy-data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() collapsed = false;
  @Input() screenWidth = 0;

  canShowSearchAsOverlay: boolean = false;
  selectedLanguage: LanguagesType | undefined;
  languages: LanguagesType[] = languages;
  notifications: NotificationsType[] = notifications;
  userItems: userItemsType[] = userItem;
  constructor() {}

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkCanShowSearchAsOverlay(window.innerWidth);
  }

  ngOnInit() {
    this.checkCanShowSearchAsOverlay(window.innerWidth);
    this.selectedLanguage = this.languages[0];
  }

  getHeadClass(): string {
    let styleClass = '';
    if (this.collapsed && this.screenWidth > 768) {
      styleClass = 'head-trimmed';
    } else {
      styleClass = 'head-md-screen';
    }
    return styleClass;
  }

  checkCanShowSearchAsOverlay(innerWidth: number) {
    if (innerWidth < 845) {
      this.canShowSearchAsOverlay = true;
    } else {
      this.canShowSearchAsOverlay = false;
    }
  }
  stopPropagation(event: any) {
    event.stopPropagation();
  }
  changeLanguage(lang: LanguagesType) {
    this.selectedLanguage = lang;
  }

  @ViewChild('menuTrigger') trigger: any;
  search(){
    this.trigger.closeMenu()
  }
}
