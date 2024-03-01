export const products = [
  {
    id: 1,
    name: 'Шаровые краны',
    price: '940',
    unit: 'шт',
    image: '../../../public/image/product/image-1.jpeg',
    hasDiscount: true,
    isNew: true,
    bestseller: false,
    quantity: 1,
    parentCategoryID: null,
    categoryID: null,
    subCategoryID: null,
  },
  {
    id: 2,
    name: 'Смесители для ванн',
    price: '45480',
    unit: 'шт',
    image: '../../../public/image/product/image-2.jpeg',
    hasDiscount: false,
    isNew: true,
    bestseller: true,
    quantity: 1,
    parentCategoryID: 10,
    categoryID: 24,
    subCategoryID: 1,
  },
  {
    id: 3,
    name: 'Шуруповерты',
    price: '48100',
    unit: 'шт',
    image: '../../../public/image/product/image-3.jpeg',
    hasDiscount: true,
    isNew: true,
    bestseller: true,
    quantity: 1,
    parentCategoryID: null,
    categoryID: null,
    subCategoryID: null,
  },
  {
    id: 4,
    name: 'Перфораторы',
    price: '64123',
    unit: 'шт',
    image: '../../../public/image/product/image-4.jpeg',
    hasDiscount: false,
    isNew: true,
    bestseller: true,
    quantity: 1,
    parentCategoryID: null,
    categoryID: null,
    subCategoryID: null,
  },
  {
    id: 5,
    name: 'Фильтра для воды',
    price: '72999',
    unit: 'шт',
    image: '../../../public/image/product/image-5.jpeg',
    hasDiscount: false,
    isNew: true,
    bestseller: false,
    quantity: 1,
    parentCategoryID: 12,
    categoryID: null,
    subCategoryID: null,
  },
  {
    id: 6,
    name: 'Газовый ключ',
    price: '10000',
    unit: 'шт',
    image: '../../../public/image/product/image-6.jpeg',
    hasDiscount: true,
    isNew: true,
    bestseller: false,
    quantity: 1,
    parentCategoryID: null,
    categoryID: null,
    subCategoryID: null,
  },
  {
    id: 7,
    name: 'Трап',
    price: '15000',
    unit: 'шт',
    image: '../../../public/image/product/image-7.jpeg',
    hasDiscount: false,
    isNew: false,
    bestseller: true,
    quantity: 1,
    parentCategoryID: 6,
    categoryID: 14,
    subCategoryID: null,
  },
  {
    id: 8,
    name: 'Трап 2',
    price: '17000',
    unit: 'шт',
    image: '../../../public/image/product/image-7.jpeg',
    hasDiscount: false,
    isNew: false,
    bestseller: true,
    quantity: 1,
    parentCategoryID: 6,
    categoryID: 14,
    subCategoryID: null,
  },
  {
    id: 9,
    name: 'Алюминиевые радиаторы',
    price: '45400',
    unit: 'шт',
    image: '../../../public/image/product/image-8.jpeg',
    hasDiscount: true,
    isNew: false,
    bestseller: true,
    quantity: 1,
    parentCategoryID: 4,
    categoryID: 8,
    subCategoryID: null,
  },
  {
    id: 10,
    name: 'Резьбовые фитинги',
    price: '500',
    unit: 'шт',
    image: '../../../public/image/product/image-9.jpeg',
    hasDiscount: true,
    isNew: false,
    bestseller: true,
    quantity: 1,
    parentCategoryID: 5,
    categoryID: 11,
    subCategoryID: null,
  },
];


export const parentCategory = [
  {
    id: 1,
    name: 'Котлы гозовые'
  },
  {
    id: 2,
    name: 'Котельное оборудование'
  },
  {
    id: 3,
    name: 'Теплый пол'
  },
  {
    id: 4,
    name: 'Радиаторы'
  },
  {
    id: 5,
    name: 'ППР труба и фитинги'
  },
  {
    id: 6,
    name: 'Канализационные трубы и фитинги'
  },
  {
    id: 7,
    name: 'Счетчики для воды'
  },
  {
    id: 8,
    name: 'Водонагреватели'
  },
  {
    id: 9,
    name: 'Насосное оборудование'
  },
  {
    id: 10,
    name: 'Сантехника'
  },
  {
    id: 11,
    name: 'Полотенцесушители'
  },
  {
    id: 12,
    name: 'Фильтры для очистки воды'
  },
  {
    id: 13,
    name: 'Стабилизаторы'
  }
]


export const category = [
  {
    id: 1,
    name: 'Напольные',
    parentID: 1
  },
  {
    id: 2,
    name: 'Настенные',
    parentID: 1
  },
  {
    id: 3,
    name: 'Бак расширительный',
    parentID: 2
  },
  {
    id: 4,
    name: 'Группа безовасности',
    parentID: 2
  },
  {
    id: 5,
    name: 'Гидрострелки и коллекторы',
    parentID: 2
  },
  {
    id: 6,
    name: 'Трубы для теплого пола',
    parentID: 3
  },
  {
    id: 7,
    name: 'Коллекторы для теплого пола',
    parentID: 3
  },
  {
    id: 8,
    name: 'Алюминиевые',
    parentID: 4
  },
  {
    id: 9,
    name: 'Биметаллические',
    parentID: 4
  },
  {
    id: 10,
    name: 'Трубы',
    parentID: 5
  },
  {
    id: 11,
    name: 'ППР фитинги',
    parentID: 5
  },
  {
    id: 12,
    name: 'Канализационные трубы',
    parentID: 6
  },
  {
    id: 13,
    name: 'Канализационные фитинги',
    parentID: 6
  },
  {
    id: 14,
    name: 'Трапы',
    parentID: 6
  },
  {
    id: 15,
    name: 'Жироуловители',
    parentID: 6
  },
  {
    id: 16,
    name: 'Электрические',
    parentID: 8
  },
  {
    id: 17,
    name: 'Косвенные',
    parentID: 8
  },
  {
    id: 18,
    name: 'Насосное оборудование',
    parentID: 9
  },
  {
    id: 19,
    name: 'Насосные станции',
    parentID: 9
  },
  {
    id: 20,
    name: 'Насосные станции многоступенчатые',
    parentID: 9
  },
  {
    id: 21,
    name: 'Погружные насосы',
    parentID: 9
  },
  {
    id: 22,
    name: 'Скважинные насосы',
    parentID: 9
  },
  {
    id: 23,
    name: 'Комплектующие и аксессуары для насосного оборудования',
    parentID: 9
  },
  {
    id: 24,
    name: 'Смесители',
    parentID: 10
  },
  {
    id: 25,
    name: 'Сифоны',
    parentID: null
  },
  {
    id: 26,
    name: 'Гибкая подводка',
    parentID: null
  },
  {
    id: 27,
    name: 'Шланги',
    parentID: null
  },
  {
    id: 28,
    name: 'Арматура для унитаза',
    parentID: null
  },
]


export const subCategory = [
  {
    id: 1,
    name: 'Для ванны',
    categoryID: 24
  },
  {
    id: 2,
    name: 'Для раковины',
    categoryID: 24
  },
  {
    id: 3,
    name: 'Для душа',
    categoryID: 24
  },
  {
    id: 4,
    name: 'Стойки для душа',
    categoryID: 24
  },
  {
    id: 5,
    name: 'Сливые',
    categoryID: 27
  },
  {
    id: 6,
    name: 'Наливные',
    categoryID: 27
  },
  {
    id: 7,
    name: 'поливочные',
    categoryID: 27
  },
]


export const citiesData = new Map([
  ['Алматы', '+77717312848'],
  ['Астана', '+77013005414'],
  ['Орал', '+77717888891'],
  ['Атырау', '+77715655335'],
  ['Актау', '+77010818618'],
  ['Кандыагаш', '+77010818615'],
])