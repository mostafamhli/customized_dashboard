import { Component, Input } from '@angular/core';
import { INavbarData, fadeInOut } from './helper';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sublevel-menu',
  templateUrl: './sublevel-menu.component.html',
  styleUrl: './sidenav.component.scss',
  animations: [
    fadeInOut,
    trigger('submenu', [
      state(
        'hidden',
        style({
          height: '0',
          overflow: 'hidden',
        })
      ),
      state(
        'visible',
        style({
          height: '*',
        })
      ),
      transition('visible <=> hidden', [
        style({ overflow: 'hidden' }),
        animate('{{transitionParams}}'),
      ]),
      transition('void => *', animate(0)),
    ]),
  ],
})
export class SublevelMenuComponent {
  @Input() data: INavbarData = {
    routerLink: '',
    icon: '',
    label: '',
    items: [],
  };
  @Input() collapsed = false;
  @Input() animated: boolean | undefined;
  @Input() expanded: boolean | undefined;
  @Input() multiple = false;
  constructor(private router: Router) {}
  handleClick(item: any) {
    if (!this.multiple) {
      if (this.data.items && this.data.items.length > 0) {
        for (let modelItem of this.data.items) {
          if (item !== modelItem && modelItem.expanded) {
            modelItem.expanded = false;
          }
        }
      }
    }
    item.expanded = !item.expanded;
  }
  getActiveClass(item: INavbarData) {
    return item.expanded && this.router.url.includes(item.routerLink)
      ? 'active-sublevel'
      : '';
  }
}
