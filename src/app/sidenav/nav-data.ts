import { INavbarData } from './helper';

export const NavbarData: INavbarData[] = [
  {
    routerLink: 'dashboard',
    icon: 'bx bxs-home',
    label: 'Dashboard',
  },
  {
    routerLink: 'products',
    icon: 'bx bxs-box',
    label: 'Products',
    items: [
      {
        routerLink: 'products/level1.1',
        label: 'Level 1.1',
        items: [
          {
            routerLink: 'products/level2.1',
            label: 'Level 2.1',
          },
          {
            routerLink: 'products/level2.2',
            label: 'Level 2.2',
            items: [
              {
                routerLink: 'products/level3.1',
                label: 'Level 3.1',
              },
            ],
          },
        ],
      },
      {
        routerLink: 'products/level1.2',
        label: 'Level 1.2',
      },
    ],
  },
  {
    routerLink: 'statistics',
    icon: 'bx bx-bar-chart',
    label: 'Statistics',
  },
  {
    routerLink: 'coupens',
    icon: 'bx bxs-tag',
    label: 'Coupens',
    items: [
      {
        routerLink: 'coupens/list',
        label: 'List Coupens',
      },
      {
        routerLink: 'coupens/create',
        label: 'Create Coupens',
      },
    ],
  },
  {
    routerLink: 'pages',
    icon: 'bx bxs-file',
    label: 'Pages',
  },
  {
    routerLink: 'media',
    icon: 'bx bxs-camera',
    label: 'Media',
  },
  {
    routerLink: 'settings',
    icon: 'bx bxs-cog',
    label: 'Settings',
    expanded: true,
    items: [
      {
        routerLink: 'settings/profile',
        label: 'Profile',
      },
      {
        routerLink: 'settings/customize',
        label: 'Customize',
      },
    ],
  },
];
