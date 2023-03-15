import { DesignItem } from "../types"

const list: DesignItem[] = [
  {
    id: 1,
    number: 104,
    name: 'Flora',
    url: 'https://design###.horoshop.ua/',
    images: [
      { path: '/flora.png' },
    ],
    isPublished: true,
  },
  {
    id: 2,
    number: 105,
    name: 'Ostrov',
    url: 'https://design###.horoshop.ua/',
    images: [
      { path: '/ostrov.png' },
    ],
    isPublished: true,
  },
  {
    id: 3,
    number: 108,
    name: 'Sun-Wear',
    url: 'https://design###.horoshop.ua/',
    images: [
      { path: '/sun-wear.png' },
    ],
    isPublished: true,
  },
  {
    id: 4,
    number: 104,
    name: 'Flora',
    url: 'https://design###.horoshop.ua/',
    images: [
      { path: '/flora.png' },
    ],
    isPublished: true,
  },
  {
    id: 5,
    number: 107,
    name: 'Ostrov',
    url: 'https://design###.horoshop.ua/',
    images: [
      { path: '/ostrov.png' },
    ],
    isPublished: true,
  },
  {
    id: 6,
    number: 111,
    name: 'Sun-Wear',
    url: 'https://design###.horoshop.ua/',
    images: [
      { path: '/sun-wear.png' },
    ],
    isPublished: true,
  },
  {
    id: 7,
    number: 104,
    name: 'Flora',
    url: 'https://design###.horoshop.ua/',
    images: [
      { path: '/flora.png' },
    ],
    isPublished: true,
  },
  {
    id: 8,
    number: 102,
    name: 'Ostrov',
    url: 'https://design###.horoshop.ua/',
    images: [
      { path: '/ostrov.png' },
    ],
    isPublished: true,
  },
]


const getList = (): Promise<DesignItem[]> => {
  return new Promise((reslove) => {
    setTimeout(() => {
      reslove(list)
    }, 1500)
  })
}

export default {
  getList
}