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
    name: 'Котлы газовые',
    image: "https://avatars.mds.yandex.net/i?id=8657e27406d8e85f6e201358af3bf28ddc30c94c-5177089-images-thumbs&n=13"
  },
  {
    id: 2,
    name: 'Котельное оборудование',
    image: "https://avatars.mds.yandex.net/i?id=152d900e5e2b3dedc7e409bd75e529ffccbd3253-5219738-images-thumbs&n=13"
  },
  {
    id: 3,
    name: 'Теплый пол',
    image: "https://avatars.mds.yandex.net/i?id=3eb4246bccf05665abcc50eee95dc0c522a237ca-4778614-images-thumbs&n=13"

  },
  {
    id: 4,
    name: 'Радиаторы',
    image: "https://avatars.mds.yandex.net/i?id=c6af1f9c62f68e69ca9f86de333d916c87ea63f4-12319660-images-thumbs&n=13"

  },
  {
    id: 5,
    name: 'ППР труба и фитинги',
    image: "https://avatars.mds.yandex.net/i?id=b2ea81236decda6ba1d9191c3a8b2bd25ba8ddeb-5859076-images-thumbs&n=13"

  },
  {
    id: 6,
    name: 'Канализационные трубы и фитинги',
    image: "https://avatars.mds.yandex.net/i?id=960249963733dadcc917bfb440a0946764fc113e-9056327-images-thumbs&n=13"

  },
  {
    id: 7,
    name: 'Счетчики для воды',
    image: "https://avatars.mds.yandex.net/i?id=d407806ebdccd8682e9f631ed28f2cc74eeb3061-10859624-images-thumbs&n=13"

  },
  {
    id: 8,
    name: 'Водонагреватели',
    image: "https://avatars.mds.yandex.net/i?id=6b90ef4601692e4104b79ebbe589cf1c65112896-10216894-images-thumbs&n=13"

  },
  {
    id: 9,
    name: 'Насосное оборудование',
    image: "https://avatars.mds.yandex.net/i?id=c99ce02098d85bbdc5dad9fccd80415c5c180dec-10369171-images-thumbs&n=13"

  },
  {
    id: 10,
    name: 'Сантехника',
    image: "https://avatars.mds.yandex.net/i?id=08f374b93d490925f2946c87f98cf9734c06fd6d-12486332-images-thumbs&n=13"

  },
  {
    id: 11,
    name: 'Полотенцесушители',
    image: "https://avatars.mds.yandex.net/i?id=c7b64a1962d3612d179facd4dba14b43dca6a74f-4952143-images-thumbs&n=13"

  },
  {
    id: 12,
    name: 'Фильтры для очистки воды',
    image: "https://avatars.mds.yandex.net/i?id=f5fb7cb4eb39b3fa3af32a39b076c6628754b433-10686310-images-thumbs&n=13"

  },
  {
    id: 13,
    name: 'Стабилизаторы',
    image: "https://avatars.mds.yandex.net/i?id=027ddfd8fc491543ab60017102590da3748d68f6-8343339-images-thumbs&n=13"

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