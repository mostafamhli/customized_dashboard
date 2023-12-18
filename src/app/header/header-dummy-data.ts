export interface LanguagesType {
  language: string;
  flag: string;
}

export interface NotificationsType {
  icon: string;
  subject: string;
  description: string;
}

export interface userItemsType {
  icon: string;
  label: string;
}
export const languages: LanguagesType[] = [
  {
    language: 'English',
    flag: 'USA',
  },
  {
    language: 'France',
    flag: 'france',
  },
  {
    language: 'Germany',
    flag: 'germany',
  },
  {
    language: 'Italy',
    flag: 'italy',
  },
];

export const notifications: NotificationsType[] = [
  {
    icon: 'bx bxs-download',
    subject: 'Download Complete',
    description: 'lorem ipusm dolor sit amet, desc',
  },
  {
    icon: 'bx bxs-cloud-upload',
    subject: 'Upload Complete',
    description: 'lorem ipusm dolor sit amet, desc',
  },
  {
    icon: 'bx bxs-trash',
    subject: '350 MB trash Files',
    description: 'lorem ipusm dolor sit amet, desc',
  },
];

export const userItem: userItemsType[] = [
  {
    icon: 'bx bxs-user',
    label: 'Profile',
  },
  {
    icon: 'bx bxs-cog',
    label: 'Settings',
  },
  {
    icon: 'bx bxs-lock-open-alt',
    label: 'Lock Screen',
  },
  {
    icon: 'bx bx-log-out',
    label: 'Logout',
  },
];
