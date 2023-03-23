export interface NavigationItem {
  text: string
  icon: string
  url: string
  children: NavigationItem[]
}

export const items: NavigationItem[] = [
  {
    text: 'Home',
    icon: 'fa-solid fa-house',
    url: '/',
    children: [],
  },
  {
    text: 'Product',
    icon: 'fa-solid fa-cube',
    url: '/product',
    children: [],
  },
  {
    text: 'Warehouse',
    icon: 'fa-solid fa-warehouse',
    url: '/warehouse',
    children: [
      {
        text: 'Register',
        icon: 'fa-solid fa-plus',
        url: '/warehouse/registration',
        children: [],
      },
    ],
  },
  {
    text: 'Master Data',
    icon: 'fa-solid fa-database',
    url: '/master',
    children: [
      {
        text: 'Company',
        icon: 'fa-solid fa-building-flag',
        url: '/master/company',
        children: [],
      },
      {
        text: 'Currency',
        icon: 'fa-solid fa-coins',
        url: '/master/currency',
        children: [],
      },
    ],
  },
]
