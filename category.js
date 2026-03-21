// Единая база товаров для всех категорий RADO BAGS
const products = [
  {
    id: 1,
    name: "RADO Женская модель 001",
    price: 510,
    category: "women",
    image: "Images/products/women/w1.jpg",
    isNew: false,
    onSale: false,
    color: "бежевый",
    size: "M",
    material: "эко-кожа",
    description: "Минималистичная модель RADO BAGS: чистые линии, продуманная форма и качественные материалы.",
    emoji: "👜",
    media: [
      { type: "video", src: "Images/products/women/nm301.mp4", poster: "Images/products/women/top1.jpg" },
      { type: "image", src: "Images/products/women/top1.jpg" },
      { type: "image", src: "Images/products/women/top1-1.jpg" },
      { type: "image", src: "Images/products/women/top1-2.jpg" },
      { type: "image", src: "Images/products/women/top1-3.jpg" }
    ],
    specifications: [
        { name: 'Категория', value: 'Женские сумки' },
        { name: 'Материал', value: 'Эко-кожа' },
        { name: 'Цвет', value: 'Бежевый' },
        { name: 'Размер', value: 'M (32 x 25 x 10 см)' },
        { name: 'Вес', value: '0.7 кг' },
        { name: 'Внутренние карманы', value: '1' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 2,
    name: "RADO Женская модель 002",
    price: 525,
    category: "women",
    image: "Images/products/women/w2.jpg",
    isNew: false,
    onSale: false,
    color: "коричневый",
    size: "L",
    material: "нейлон",
    description: "Минималистичная модель RADO BAGS: чистые линии, продуманная форма и качественные материалы.",
    emoji: "👜",
    specifications: [
        { name: 'Категория', value: 'Женские сумки' },
        { name: 'Материал', value: 'Нейлон' },
        { name: 'Цвет', value: 'Коричневый' },
        { name: 'Размер', value: 'L (35 x 28 x 12 см)' },
        { name: 'Вес', value: '0.9 кг' },
        { name: 'Внутренние карманы', value: '2' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 3,
    name: "RADO Женская модель 003",
    price: 540,
    category: "women",
    image: "Images/products/women/w3.jpg",
    isNew: false,
    onSale: false,
    color: "серый",
    size: "S",
    material: "текстиль",
    description: "Минималистичная модель RADO BAGS: чистые линии, продуманная форма и качественные материалы.",
    emoji: "👜",
    specifications: [
        { name: 'Категория', value: 'Женские сумки' },
        { name: 'Материал', value: 'Текстиль' },
        { name: 'Цвет', value: 'Серый' },
        { name: 'Размер', value: 'S (30 x 20 x 8 см)' },
        { name: 'Вес', value: '0.6 кг' },
        { name: 'Внутренние карманы', value: '1' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 4,
    name: "RADO Женская модель 004",
    price: 555,
    category: "women",
    image: "Images/products/women/w4.jpg",
    isNew: false,
    onSale: false,
    color: "оливковый",
    size: "M",
    material: "кожа",
    description: "Минималистичная модель RADO BAGS: чистые линии, продуманная форма и качественные материалы.",
    emoji: "👜",
    specifications: [
        { name: 'Категория', value: 'Женские сумки' },
        { name: 'Материал', value: 'Кожа' },
        { name: 'Цвет', value: 'Оливковый' },
        { name: 'Размер', value: 'M (32 x 25 x 10 см)' },
        { name: 'Вес', value: '0.7 кг' },
        { name: 'Внутренние карманы', value: '2' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 5,
    name: "RADO Женская модель 005",
    price: 570,
    category: "women",
    image: "Images/products/women/w5.jpg",
    isNew: false,
    onSale: false,
    color: "черный",
    size: "L",
    material: "эко-кожа",
    description: "Минималистичная модель RADO BAGS: чистые линии, продуманная форма и качественные материалы.",
    emoji: "👜",
    specifications: [
        { name: 'Категория', value: 'Женские сумки' },
        { name: 'Материал', value: 'Эко-кожа' },
        { name: 'Цвет', value: 'Черный' },
        { name: 'Размер', value: 'L (35 x 28 x 12 см)' },
        { name: 'Вес', value: '0.9 кг' },
        { name: 'Внутренние карманы', value: '1' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 6,
    name: "RADO Женская модель 006",
    price: 585,
    category: "women",
    image: "Images/products/women/w6.jpg",
    isNew: false,
    onSale: false,
    color: "бежевый",
    size: "S",
    material: "нейлон",
    description: "Минималистичная модель RADO BAGS: чистые линии, продуманная форма и качественные материалы.",
    emoji: "👜",
    specifications: [
        { name: 'Категория', value: 'Женские сумки' },
        { name: 'Материал', value: 'Нейлон' },
        { name: 'Цвет', value: 'Бежевый' },
        { name: 'Размер', value: 'S (30 x 20 x 8 см)' },
        { name: 'Вес', value: '0.6 кг' },
        { name: 'Внутренние карманы', value: '2' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 7,
    name: "RADO Женская модель 007",
    price: 495,
    category: "women",
    image: "Images/products/women/w7.jpg",
    isNew: false,
    onSale: false,
    color: "коричневый",
    size: "M",
    material: "текстиль",
    description: "Минималистичная модель RADO BAGS: чистые линии, продуманная форма и качественные материалы.",
    emoji: "👜",
    specifications: [
        { name: 'Категория', value: 'Женские сумки' },
        { name: 'Материал', value: 'Текстиль' },
        { name: 'Цвет', value: 'Коричневый' },
        { name: 'Размер', value: 'M (32 x 25 x 10 см)' },
        { name: 'Вес', value: '0.7 кг' },
        { name: 'Внутренние карманы', value: '1' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 8,
    name: "RADO Женская модель 008",
    price: 510,
    category: "women",
    image: "Images/products/women/w8.jpg",
    isNew: false,
    onSale: false,
    color: "серый",
    size: "L",
    material: "кожа",
    description: "Минималистичная модель RADO BAGS: чистые линии, продуманная форма и качественные материалы.",
    emoji: "👜",
    specifications: [
        { name: 'Категория', value: 'Женские сумки' },
        { name: 'Материал', value: 'Кожа' },
        { name: 'Цвет', value: 'Серый' },
        { name: 'Размер', value: 'L (35 x 28 x 12 см)' },
        { name: 'Вес', value: '0.9 кг' },
        { name: 'Внутренние карманы', value: '2' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 9,
    name: "RADO Женская модель 009",
    price: 525,
    category: "women",
    image: "Images/products/women/w9.jpg",
    isNew: false,
    onSale: false,
    color: "оливковый",
    size: "S",
    material: "эко-кожа",
    description: "Минималистичная модель RADO BAGS: чистые линии, продуманная форма и качественные материалы.",
    emoji: "👜",
    specifications: [
        { name: 'Категория', value: 'Женские сумки' },
        { name: 'Материал', value: 'Эко-кожа' },
        { name: 'Цвет', value: 'Оливковый' },
        { name: 'Размер', value: 'S (30 x 20 x 8 см)' },
        { name: 'Вес', value: '0.6 кг' },
        { name: 'Внутренние карманы', value: '1' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 10,
    name: "RADO Женская модель 010",
    price: 540,
    category: "women",
    image: "Images/products/women/w10.jpg",
    isNew: false,
    onSale: false,
    color: "черный",
    size: "M",
    material: "нейлон",
    description: "Минималистичная модель RADO BAGS: чистые линии, продуманная форма и качественные материалы.",
    emoji: "👜",
    specifications: [
        { name: 'Категория', value: 'Женские сумки' },
        { name: 'Материал', value: 'Нейлон' },
        { name: 'Цвет', value: 'Черный' },
        { name: 'Размер', value: 'M (32 x 25 x 10 см)' },
        { name: 'Вес', value: '0.7 кг' },
        { name: 'Внутренние карманы', value: '2' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 11,
    name: "RADO Женская модель 011",
    price: 555,
    category: "women",
    image: "Images/products/women/w11.jpg",
    isNew: false,
    onSale: false,
    color: "бежевый",
    size: "L",
    material: "текстиль",
    description: "Минималистичная модель RADO BAGS: чистые линии, продуманная форма и качественные материалы.",
    emoji: "👜",
    specifications: [
        { name: 'Категория', value: 'Женские сумки' },
        { name: 'Материал', value: 'Текстиль' },
        { name: 'Цвет', value: 'Бежевый' },
        { name: 'Размер', value: 'L (35 x 28 x 12 см)' },
        { name: 'Вес', value: '0.9 кг' },
        { name: 'Внутренние карманы', value: '1' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 12,
    name: "RADO Женская модель 012",
    price: 570,
    category: "women",
    image: "Images/products/women/w12.jpg",
    isNew: false,
    onSale: false,
    color: "коричневый",
    size: "S",
    material: "кожа",
    description: "Минималистичная модель RADO BAGS: чистые линии, продуманная форма и качественные материалы.",
    emoji: "👜",
    specifications: [
        { name: 'Категория', value: 'Женские сумки' },
        { name: 'Материал', value: 'Кожа' },
        { name: 'Цвет', value: 'Коричневый' },
        { name: 'Размер', value: 'S (30 x 20 x 8 см)' },
        { name: 'Вес', value: '0.6 кг' },
        { name: 'Внутренние карманы', value: '2' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 13,
    name: "RADO Женская модель 013",
    price: 585,
    category: "women",
    image: "Images/products/women/w13.jpg",
    isNew: false,
    onSale: false,
    color: "серый",
    size: "M",
    material: "эко-кожа",
    description: "Минималистичная модель RADO BAGS: чистые линии, продуманная форма и качественные материалы.",
    emoji: "👜",
    specifications: [
        { name: 'Категория', value: 'Женские сумки' },
        { name: 'Материал', value: 'Эко-кожа' },
        { name: 'Цвет', value: 'Серый' },
        { name: 'Размер', value: 'M (32 x 25 x 10 см)' },
        { name: 'Вес', value: '0.7 кг' },
        { name: 'Внутренние карманы', value: '1' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 14,
    name: "RADO Женская модель 014",
    price: 495,
    category: "women",
    image: "Images/products/women/w14.jpg",
    isNew: false,
    onSale: false,
    color: "оливковый",
    size: "L",
    material: "нейлон",
    description: "Минималистичная модель RADO BAGS: чистые линии, продуманная форма и качественные материалы.",
    emoji: "👜",
    specifications: [
        { name: 'Категория', value: 'Женские сумки' },
        { name: 'Материал', value: 'Нейлон' },
        { name: 'Цвет', value: 'Оливковый' },
        { name: 'Размер', value: 'L (35 x 28 x 12 см)' },
        { name: 'Вес', value: '0.9 кг' },
        { name: 'Внутренние карманы', value: '2' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 15,
    name: "RADO Женская модель 015",
    price: 510,
    category: "women",
    image: "Images/products/women/w15.jpg",
    isNew: false,
    onSale: false,
    color: "черный",
    size: "S",
    material: "текстиль",
    description: "Минималистичная модель RADO BAGS: чистые линии, продуманная форма и качественные материалы.",
    emoji: "👜",
    specifications: [
        { name: 'Категория', value: 'Женские сумки' },
        { name: 'Материал', value: 'Текстиль' },
        { name: 'Цвет', value: 'Черный' },
        { name: 'Размер', value: 'S (30 x 20 x 8 см)' },
        { name: 'Вес', value: '0.6 кг' },
        { name: 'Внутренние карманы', value: '1' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 16,
    name: "RADO Женская модель 016",
    price: 525,
    category: "women",
    image: "Images/products/women/w16.jpg",
    isNew: false,
    onSale: false,
    color: "бежевый",
    size: "M",
    material: "кожа",
    description: "Минималистичная модель RADO BAGS: чистые линии, продуманная форма и качественные материалы.",
    emoji: "👜",
    specifications: [
        { name: 'Категория', value: 'Женские сумки' },
        { name: 'Материал', value: 'Кожа' },
        { name: 'Цвет', value: 'Бежевый' },
        { name: 'Размер', value: 'M (32 x 25 x 10 см)' },
        { name: 'Вес', value: '0.7 кг' },
        { name: 'Внутренние карманы', value: '2' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 17,
    name: "RADO Женская модель 017",
    price: 540,
    category: "women",
    image: "Images/products/women/w17.jpg",
    isNew: false,
    onSale: false,
    color: "коричневый",
    size: "L",
    material: "эко-кожа",
    description: "Минималистичная модель RADO BAGS: чистые линии, продуманная форма и качественные материалы.",
    emoji: "👜",
    specifications: [
        { name: 'Категория', value: 'Женские сумки' },
        { name: 'Материал', value: 'Эко-кожа' },
        { name: 'Цвет', value: 'Коричневый' },
        { name: 'Размер', value: 'L (35 x 28 x 12 см)' },
        { name: 'Вес', value: '0.9 кг' },
        { name: 'Внутренние карманы', value: '1' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 18,
    name: "RADO Женская модель 018",
    price: 555,
    category: "women",
    image: "Images/products/women/w18.jpg",
    isNew: false,
    onSale: false,
    color: "серый",
    size: "S",
    material: "нейлон",
    description: "Минималистичная модель RADO BAGS: чистые линии, продуманная форма и качественные материалы.",
    emoji: "👜",
    specifications: [
        { name: 'Категория', value: 'Женские сумки' },
        { name: 'Материал', value: 'Нейлон' },
        { name: 'Цвет', value: 'Серый' },
        { name: 'Размер', value: 'S (30 x 20 x 8 см)' },
        { name: 'Вес', value: '0.6 кг' },
        { name: 'Внутренние карманы', value: '2' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 19,
    name: "RADO Женская модель 019",
    price: 570,
    category: "women",
    image: "Images/products/women/w19.jpg",
    isNew: false,
    onSale: false,
    color: "оливковый",
    size: "M",
    material: "текстиль",
    description: "Минималистичная модель RADO BAGS: чистые линии, продуманная форма и качественные материалы.",
    emoji: "👜",
    specifications: [
        { name: 'Категория', value: 'Женские сумки' },
        { name: 'Материал', value: 'Текстиль' },
        { name: 'Цвет', value: 'Оливковый' },
        { name: 'Размер', value: 'M (32 x 25 x 10 см)' },
        { name: 'Вес', value: '0.7 кг' },
        { name: 'Внутренние карманы', value: '1' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 20,
    name: "RADO Женская модель 020",
    price: 585,
    category: "women",
    image: "Images/products/women/w20.jpg",
    isNew: false,
    onSale: false,
    color: "черный",
    size: "L",
    material: "кожа",
    description: "Минималистичная модель RADO BAGS: чистые линии, продуманная форма и качественные материалы.",
    emoji: "👜",
    specifications: [
        { name: 'Категория', value: 'Женские сумки' },
        { name: 'Материал', value: 'Кожа' },
        { name: 'Цвет', value: 'Черный' },
        { name: 'Размер', value: 'L (35 x 28 x 12 см)' },
        { name: 'Вес', value: '0.9 кг' },
        { name: 'Внутренние карманы', value: '2' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 21,
    name: "RADO Женская модель 021",
    price: 495,
    category: "women",
    image: "Images/products/women/w21.jpg",
    isNew: false,
    onSale: false,
    color: "бежевый",
    size: "S",
    material: "эко-кожа",
    description: "Минималистичная модель RADO BAGS: чистые линии, продуманная форма и качественные материалы.",
    emoji: "👜",
    specifications: [
        { name: 'Категория', value: 'Женские сумки' },
        { name: 'Материал', value: 'Эко-кожа' },
        { name: 'Цвет', value: 'Бежевый' },
        { name: 'Размер', value: 'S (30 x 20 x 8 см)' },
        { name: 'Вес', value: '0.6 кг' },
        { name: 'Внутренние карманы', value: '1' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 22,
    name: "RADO Женская модель 022",
    price: 510,
    category: "women",
    image: "Images/products/women/w22.jpg",
    isNew: false,
    onSale: false,
    color: "коричневый",
    size: "M",
    material: "нейлон",
    description: "Минималистичная модель RADO BAGS: чистые линии, продуманная форма и качественные материалы.",
    emoji: "👜",
    specifications: [
        { name: 'Категория', value: 'Женские сумки' },
        { name: 'Материал', value: 'Нейлон' },
        { name: 'Цвет', value: 'Коричневый' },
        { name: 'Размер', value: 'M (32 x 25 x 10 см)' },
        { name: 'Вес', value: '0.7 кг' },
        { name: 'Внутренние карманы', value: '2' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 23,
    name: "RADO Женская модель 023",
    price: 525,
    category: "women",
    image: "Images/products/women/w23.jpg",
    isNew: false,
    onSale: false,
    color: "серый",
    size: "L",
    material: "текстиль",
    description: "Минималистичная модель RADO BAGS: чистые линии, продуманная форма и качественные материалы.",
    emoji: "👜",
    specifications: [
        { name: 'Категория', value: 'Женские сумки' },
        { name: 'Материал', value: 'Текстиль' },
        { name: 'Цвет', value: 'Серый' },
        { name: 'Размер', value: 'L (35 x 28 x 12 см)' },
        { name: 'Вес', value: '0.9 кг' },
        { name: 'Внутренние карманы', value: '1' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 24,
    name: "RADO Женская модель 024",
    price: 540,
    category: "women",
    image: "Images/products/women/w24.jpg",
    isNew: false,
    onSale: false,
    color: "оливковый",
    size: "S",
    material: "кожа",
    description: "Минималистичная модель RADO BAGS: чистые линии, продуманная форма и качественные материалы.",
    emoji: "👜",
    specifications: [
        { name: 'Категория', value: 'Женские сумки' },
        { name: 'Материал', value: 'Кожа' },
        { name: 'Цвет', value: 'Оливковый' },
        { name: 'Размер', value: 'S (30 x 20 x 8 см)' },
        { name: 'Вес', value: '0.6 кг' },
        { name: 'Внутренние карманы', value: '2' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 25,
    name: "RADO Женская модель 025",
    price: 555,
    category: "women",
    image: "Images/products/women/w25.jpg",
    isNew: false,
    onSale: false,
    color: "черный",
    size: "M",
    material: "эко-кожа",
    description: "Минималистичная модель RADO BAGS: чистые линии, продуманная форма и качественные материалы.",
    emoji: "👜",
    specifications: [
        { name: 'Категория', value: 'Женские сумки' },
        { name: 'Материал', value: 'Эко-кожа' },
        { name: 'Цвет', value: 'Черный' },
        { name: 'Размер', value: 'M (32 x 25 x 10 см)' },
        { name: 'Вес', value: '0.7 кг' },
        { name: 'Внутренние карманы', value: '1' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 26,
    name: "RADO Женская модель 026",
    price: 570,
    category: "women",
    image: "Images/products/women/w26.jpg",
    isNew: false,
    onSale: false,
    color: "бежевый",
    size: "L",
    material: "нейлон",
    description: "Минималистичная модель RADO BAGS: чистые линии, продуманная форма и качественные материалы.",
    emoji: "👜",
    specifications: [
        { name: 'Категория', value: 'Женские сумки' },
        { name: 'Материал', value: 'Нейлон' },
        { name: 'Цвет', value: 'Бежевый' },
        { name: 'Размер', value: 'L (35 x 28 x 12 см)' },
        { name: 'Вес', value: '0.9 кг' },
        { name: 'Внутренние карманы', value: '2' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 27,
    name: "RADO Женская модель 027",
    price: 585,
    category: "women",
    image: "Images/products/women/w27.jpg",
    isNew: false,
    onSale: false,
    color: "коричневый",
    size: "S",
    material: "текстиль",
    description: "Минималистичная модель RADO BAGS: чистые линии, продуманная форма и качественные материалы.",
    emoji: "👜",
    specifications: [
        { name: 'Категория', value: 'Женские сумки' },
        { name: 'Материал', value: 'Текстиль' },
        { name: 'Цвет', value: 'Коричневый' },
        { name: 'Размер', value: 'S (30 x 20 x 8 см)' },
        { name: 'Вес', value: '0.6 кг' },
        { name: 'Внутренние карманы', value: '1' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 28,
    name: "RADO Женская модель 028",
    price: 495,
    category: "women",
    image: "Images/products/women/w28.jpg",
    isNew: false,
    onSale: false,
    color: "серый",
    size: "M",
    material: "кожа",
    description: "Минималистичная модель RADO BAGS: чистые линии, продуманная форма и качественные материалы.",
    emoji: "👜",
    specifications: [
        { name: 'Категория', value: 'Женские сумки' },
        { name: 'Материал', value: 'Кожа' },
        { name: 'Цвет', value: 'Серый' },
        { name: 'Размер', value: 'M (32 x 25 x 10 см)' },
        { name: 'Вес', value: '0.7 кг' },
        { name: 'Внутренние карманы', value: '2' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 29,
    name: "RADO Женская модель 029",
    price: 510,
    category: "women",
    image: "Images/products/women/w29.jpg",
    isNew: false,
    onSale: false,
    color: "оливковый",
    size: "L",
    material: "эко-кожа",
    description: "Минималистичная модель RADO BAGS: чистые линии, продуманная форма и качественные материалы.",
    emoji: "👜",
    specifications: [
        { name: 'Категория', value: 'Женские сумки' },
        { name: 'Материал', value: 'Эко-кожа' },
        { name: 'Цвет', value: 'Оливковый' },
        { name: 'Размер', value: 'L (35 x 28 x 12 см)' },
        { name: 'Вес', value: '0.9 кг' },
        { name: 'Внутренние карманы', value: '1' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 30,
    name: "RADO Женская модель 030",
    price: 525,
    category: "women",
    image: "Images/products/women/w30.jpg",
    isNew: false,
    onSale: false,
    color: "черный",
    size: "S",
    material: "нейлон",
    description: "Минималистичная модель RADO BAGS: чистые линии, продуманная форма и качественные материалы.",
    emoji: "👜",
    specifications: [
        { name: 'Категория', value: 'Женские сумки' },
        { name: 'Материал', value: 'Нейлон' },
        { name: 'Цвет', value: 'Черный' },
        { name: 'Размер', value: 'S (30 x 20 x 8 см)' },
        { name: 'Вес', value: '0.6 кг' },
        { name: 'Внутренние карманы', value: '2' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 31,
    name: "RADO Женская модель 031",
    price: 540,
    category: "women",
    image: "Images/products/women/w31.jpg",
    isNew: false,
    onSale: false,
    color: "бежевый",
    size: "M",
    material: "текстиль",
    description: "Минималистичная модель RADO BAGS: чистые линии, продуманная форма и качественные материалы.",
    emoji: "👜",
    specifications: [
        { name: 'Категория', value: 'Женские сумки' },
        { name: 'Материал', value: 'Текстиль' },
        { name: 'Цвет', value: 'Бежевый' },
        { name: 'Размер', value: 'M (32 x 25 x 10 см)' },
        { name: 'Вес', value: '0.7 кг' },
        { name: 'Внутренние карманы', value: '1' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 32,
    name: "RADO Женская модель 032",
    price: 555,
    category: "women",
    image: "Images/products/women/w32.jpg",
    isNew: false,
    onSale: false,
    color: "коричневый",
    size: "L",
    material: "кожа",
    description: "Минималистичная модель RADO BAGS: чистые линии, продуманная форма и качественные материалы.",
    emoji: "👜",
    specifications: [
        { name: 'Категория', value: 'Женские сумки' },
        { name: 'Материал', value: 'Кожа' },
        { name: 'Цвет', value: 'Коричневый' },
        { name: 'Размер', value: 'L (35 x 28 x 12 см)' },
        { name: 'Вес', value: '0.9 кг' },
        { name: 'Внутренние карманы', value: '2' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 33,
    name: "RADO Женская модель 033",
    price: 570,
    category: "women",
    image: "Images/products/women/w33.jpg",
    isNew: false,
    onSale: false,
    color: "серый",
    size: "S",
    material: "эко-кожа",
    description: "Минималистичная модель RADO BAGS: чистые линии, продуманная форма и качественные материалы.",
    emoji: "👜",
    specifications: [
        { name: 'Категория', value: 'Женские сумки' },
        { name: 'Материал', value: 'Эко-кожа' },
        { name: 'Цвет', value: 'Серый' },
        { name: 'Размер', value: 'S (30 x 20 x 8 см)' },
        { name: 'Вес', value: '0.6 кг' },
        { name: 'Внутренние карманы', value: '1' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 34,
    name: "RADO Женская модель 034",
    price: 585,
    category: "women",
    image: "Images/products/women/w34.jpg",
    isNew: false,
    onSale: false,
    color: "оливковый",
    size: "M",
    material: "нейлон",
    description: "Минималистичная модель RADO BAGS: чистые линии, продуманная форма и качественные материалы.",
    emoji: "👜",
    specifications: [
        { name: 'Категория', value: 'Женские сумки' },
        { name: 'Материал', value: 'Нейлон' },
        { name: 'Цвет', value: 'Оливковый' },
        { name: 'Размер', value: 'M (32 x 25 x 10 см)' },
        { name: 'Вес', value: '0.7 кг' },
        { name: 'Внутренние карманы', value: '2' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 35,
    name: "RADO Женская модель 035",
    price: 495,
    category: "women",
    image: "Images/products/women/w35.jpg",
    isNew: false,
    onSale: false,
    color: "черный",
    size: "L",
    material: "текстиль",
    description: "Минималистичная модель RADO BAGS: чистые линии, продуманная форма и качественные материалы.",
    emoji: "👜",
    specifications: [
        { name: 'Категория', value: 'Женские сумки' },
        { name: 'Материал', value: 'Текстиль' },
        { name: 'Цвет', value: 'Черный' },
        { name: 'Размер', value: 'L (35 x 28 x 12 см)' },
        { name: 'Вес', value: '0.9 кг' },
        { name: 'Внутренние карманы', value: '1' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 36,
    name: "RADO Женская модель 036",
    price: 510,
    category: "women",
    image: "Images/products/women/w36.jpg",
    isNew: false,
    onSale: false,
    color: "бежевый",
    size: "S",
    material: "кожа",
    description: "Минималистичная модель RADO BAGS: чистые линии, продуманная форма и качественные материалы.",
    emoji: "👜",
    specifications: [
        { name: 'Категория', value: 'Женские сумки' },
        { name: 'Материал', value: 'Кожа' },
        { name: 'Цвет', value: 'Бежевый' },
        { name: 'Размер', value: 'S (30 x 20 x 8 см)' },
        { name: 'Вес', value: '0.6 кг' },
        { name: 'Внутренние карманы', value: '2' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 37,
    name: "RADO Женская модель 037",
    price: 525,
    category: "women",
    image: "Images/products/women/w37.jpg",
    isNew: false,
    onSale: false,
    color: "коричневый",
    size: "M",
    material: "эко-кожа",
    description: "Минималистичная модель RADO BAGS: чистые линии, продуманная форма и качественные материалы.",
    emoji: "👜",
    specifications: [
        { name: 'Категория', value: 'Женские сумки' },
        { name: 'Материал', value: 'Эко-кожа' },
        { name: 'Цвет', value: 'Коричневый' },
        { name: 'Размер', value: 'M (32 x 25 x 10 см)' },
        { name: 'Вес', value: '0.7 кг' },
        { name: 'Внутренние карманы', value: '1' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 38,
    name: "RADO Женская модель 038",
    price: 540,
    category: "women",
    image: "Images/products/women/w38.jpg",
    isNew: false,
    onSale: false,
    color: "серый",
    size: "L",
    material: "нейлон",
    description: "Минималистичная модель RADO BAGS: чистые линии, продуманная форма и качественные материалы.",
    emoji: "👜",
    specifications: [
        { name: 'Категория', value: 'Женские сумки' },
        { name: 'Материал', value: 'Нейлон' },
        { name: 'Цвет', value: 'Серый' },
        { name: 'Размер', value: 'L (35 x 28 x 12 см)' },
        { name: 'Вес', value: '0.9 кг' },
        { name: 'Внутренние карманы', value: '2' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 39,
    name: "RADO Женская модель 039",
    price: 555,
    category: "women",
    image: "Images/products/women/w39.jpg",
    isNew: false,
    onSale: false,
    color: "оливковый",
    size: "S",
    material: "текстиль",
    description: "Минималистичная модель RADO BAGS: чистые линии, продуманная форма и качественные материалы.",
    emoji: "👜",
    specifications: [
        { name: 'Категория', value: 'Женские сумки' },
        { name: 'Материал', value: 'Текстиль' },
        { name: 'Цвет', value: 'Оливковый' },
        { name: 'Размер', value: 'S (30 x 20 x 8 см)' },
        { name: 'Вес', value: '0.6 кг' },
        { name: 'Внутренние карманы', value: '1' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 40,
    name: "RADO Женская модель 040",
    price: 570,
    category: "women",
    image: "Images/products/women/w40.jpg",
    isNew: false,
    onSale: false,
    color: "черный",
    size: "M",
    material: "кожа",
    description: "Минималистичная модель RADO BAGS: чистые линии, продуманная форма и качественные материалы.",
    emoji: "👜",
    specifications: [
        { name: 'Категория', value: 'Женские сумки' },
        { name: 'Материал', value: 'Кожа' },
        { name: 'Цвет', value: 'Черный' },
        { name: 'Размер', value: 'M (32 x 25 x 10 см)' },
        { name: 'Вес', value: '0.7 кг' },
        { name: 'Внутренние карманы', value: '2' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 41,
    name: "RADO Женская модель 041",
    price: 585,
    category: "women",
    image: "Images/products/women/w41.jpg",
    isNew: false,
    onSale: false,
    color: "бежевый",
    size: "L",
    material: "эко-кожа",
    description: "Минималистичная модель RADO BAGS: чистые линии, продуманная форма и качественные материалы.",
    emoji: "👜",
    specifications: [
        { name: 'Категория', value: 'Женские сумки' },
        { name: 'Материал', value: 'Эко-кожа' },
        { name: 'Цвет', value: 'Бежевый' },
        { name: 'Размер', value: 'L (35 x 28 x 12 см)' },
        { name: 'Вес', value: '0.9 кг' },
        { name: 'Внутренние карманы', value: '1' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 42,
    name: "RADO Женская модель 042",
    price: 495,
    category: "women",
    image: "Images/products/women/w42.jpg",
    isNew: false,
    onSale: false,
    color: "коричневый",
    size: "S",
    material: "нейлон",
    description: "Минималистичная модель RADO BAGS: чистые линии, продуманная форма и качественные материалы.",
    emoji: "👜",
    specifications: [
        { name: 'Категория', value: 'Женские сумки' },
        { name: 'Материал', value: 'Нейлон' },
        { name: 'Цвет', value: 'Коричневый' },
        { name: 'Размер', value: 'S (30 x 20 x 8 см)' },
        { name: 'Вес', value: '0.6 кг' },
        { name: 'Внутренние карманы', value: '2' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 43,
    name: "RADO Женская модель 043",
    price: 510,
    category: "women",
    image: "Images/products/women/w43.jpg",
    isNew: false,
    onSale: false,
    color: "серый",
    size: "M",
    material: "текстиль",
    description: "Минималистичная модель RADO BAGS: чистые линии, продуманная форма и качественные материалы.",
    emoji: "👜",
    specifications: [
        { name: 'Категория', value: 'Женские сумки' },
        { name: 'Материал', value: 'Текстиль' },
        { name: 'Цвет', value: 'Серый' },
        { name: 'Размер', value: 'M (32 x 25 x 10 см)' },
        { name: 'Вес', value: '0.7 кг' },
        { name: 'Внутренние карманы', value: '1' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 44,
    name: "RADO Женская модель 044",
    price: 525,
    category: "women",
    image: "Images/products/women/w44.jpg",
    isNew: false,
    onSale: false,
    color: "оливковый",
    size: "L",
    material: "кожа",
    description: "Минималистичная модель RADO BAGS: чистые линии, продуманная форма и качественные материалы.",
    emoji: "👜",
    specifications: [
        { name: 'Категория', value: 'Женские сумки' },
        { name: 'Материал', value: 'Кожа' },
        { name: 'Цвет', value: 'Оливковый' },
        { name: 'Размер', value: 'L (35 x 28 x 12 см)' },
        { name: 'Вес', value: '0.9 кг' },
        { name: 'Внутренние карманы', value: '2' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 45,
    name: "RADO Женская модель 045",
    price: 540,
    category: "women",
    image: "Images/products/women/w45.jpg",
    isNew: false,
    onSale: false,
    color: "черный",
    size: "S",
    material: "эко-кожа",
    description: "Минималистичная модель RADO BAGS: чистые линии, продуманная форма и качественные материалы.",
    emoji: "👜",
    specifications: [
        { name: 'Категория', value: 'Женские сумки' },
        { name: 'Материал', value: 'Эко-кожа' },
        { name: 'Цвет', value: 'Черный' },
        { name: 'Размер', value: 'S (30 x 20 x 8 см)' },
        { name: 'Вес', value: '0.6 кг' },
        { name: 'Внутренние карманы', value: '1' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 131,
    name: "Suede Tassel Bucket Bag",
    price: 0,
    category: "women",
    image: "Images/products/women/suede_tassel_bucket/1.jpg",
    isNew: false,
    onSale: false,
    color: "Camel",
    size: "M",
    material: "экокожа и замша",
    description: "Стильная женская сумка-мешок с мягким силуэтом, сочетающая фактуру экокожи и замши. Модель выполнена в современном минималистичном стиле и дополнена декоративными кисточками, которые придают сумке элегантный и модный акцент.\n\nБлагодаря сочетанию материалов сумка выглядит выразительно и дорого, оставаясь универсальной для повседневных образов. Удобная верхняя ручка и съёмный регулируемый ремень позволяют носить её как в руке, так и через плечо.\n\nОсновное отделение достаточно вместительное для всех необходимых вещей — телефона, кошелька, косметики и аксессуаров. Мягкая форма делает сумку комфортной в использовании и добавляет образу лёгкую небрежную элегантность.",
    emoji: "👜",
    media: [
      { type: "image", src: "Images/products/women/suede_tassel_bucket/1.jpg" },
      { type: "image", src: "Images/products/women/suede_tassel_bucket/2.jpg" },
      { type: "image", src: "Images/products/women/suede_tassel_bucket/3.jpg" },
      { type: "image", src: "Images/products/women/suede_tassel_bucket/4.jpg" },
      { type: "image", src: "Images/products/women/suede_tassel_bucket/5.jpg" },
      { type: "image", src: "Images/products/women/suede_tassel_bucket/6.jpg" }
    ],
    specifications: [
      { name: 'Название', value: 'Suede Tassel Bucket Bag' },
      { name: 'Категория', value: 'Женские сумки' },
      { name: 'Материал', value: 'Экокожа и замша' },
      { name: 'Доступные цвета', value: 'Black, Burgundy, Chocolate, Camel, Olive, Taupe' },
      { name: 'Особенности', value: 'сочетание экокожи и замши, мягкая форма bucket, декоративные кисточки, золотая фурнитура, верхняя ручка, регулируемый плечевой ремень, вместительное отделение' },
      { name: 'Бренд', value: 'RADO BAGS' },
      { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 76,
    name: "Luna Suede Crossbody Bag",
    price: 635,
    category: "women",
    image: "Images/products/women/luna_suede/1.jpg",
    isNew: false,
    onSale: false,
    color: "camel",
    size: "M",
    material: "натуральная замша",
    description: "Элегантная сумка из мягкой натуральной замши в изысканном карамельном оттенке. Модель выполнена в стильной полукруглой форме, которая придаёт образу современный и утончённый вид. Минималистичный клапан с аккуратной застёжкой подчёркивает лаконичный дизайн, а регулируемый ремень позволяет носить сумку на плече или через плечо.\n\nЭта сумка идеально подходит для повседневных образов и легко сочетается как с классическим стилем, так и с более расслабленными городскими луками.",
    emoji: "👜",
    media: [
      { type: "image", src: "Images/products/women/luna_suede/1.jpg" },
      { type: "image", src: "Images/products/women/luna_suede/2.jpg" },
      { type: "image", src: "Images/products/women/luna_suede/3.jpg" },
      { type: "image", src: "Images/products/women/luna_suede/4.jpg" }
    ],
    specifications: [
        { name: 'Название', value: 'Luna Suede Crossbody Bag' },
        { name: 'Категория', value: 'Женские сумки' },
        { name: 'Материал', value: 'Натуральная замша' },
        { name: 'Цвет', value: 'Cognac / Caramel Brown' },
        { name: 'Стиль', value: 'Minimal / Casual / Everyday' },
        { name: 'Особенности', value: 'натуральная замша, современная полукруглая форма, удобный регулируемый ремень, компактная и вместительная, металлическая фурнитура золотого цвета, подходит для повседневного использования' },
        { name: 'Идеально подходит для', value: 'Городских прогулок, встреч, путешествий и повседневных образов' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 77,
    name: "Mini Belle Top Handle Bag",
    price: 545,
    category: "women",
    image: "Images/products/women/mini_belle/1.jpg",
    isNew: true,
    onSale: false,
    color: "beige",
    size: "L",
    material: "мягкая замша",
    description: "Элегантная мини-сумка из мягкой замши в утончённом бежевом оттенке. Компактная модель с верхней ручкой и стильной металлической застёжкой придаёт образу изысканность и современный характер. Структурированная форма сохраняет аккуратный силуэт, а съёмный плечевой ремень позволяет носить сумку как в руке, так и через плечо.\n\nНесмотря на компактный размер, сумка легко вмещает необходимые вещи — телефон, ключи, карту и помаду. Идеальный аксессуар для городских прогулок, встреч и вечерних выходов.",
    emoji: "👜",
    media: [
      { type: "image", src: "Images/products/women/mini_belle/1.jpg" },
      { type: "image", src: "Images/products/women/mini_belle/2.jpg" },
      { type: "image", src: "Images/products/women/mini_belle/3.jpg" },
      { type: "image", src: "Images/products/women/mini_belle/4.jpg" },
      { type: "image", src: "Images/products/women/mini_belle/5.jpg" }
    ],
    specifications: [
        { name: 'Название', value: 'Mini Belle Top Handle Bag' },
        { name: 'Категория', value: 'Женские сумки' },
        { name: 'Материал', value: 'Мягкая замша' },
        { name: 'Цвет', value: 'Soft Beige / Sand' },
        { name: 'Стиль', value: 'Minimal / Elegant / Everyday Chic' },
        { name: 'Особенности', value: 'мягкая замша, элегантная верхняя ручка (top handle), стильная металлическая застёжка, съёмный плечевой ремень, компактный и структурированный дизайн, золотистая фурнитура' },
        { name: 'Идеально подходит для', value: 'Повседневных образов, прогулок по городу, встреч и вечерних мероприятий' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 78,
    name: "Heritage Leather Backpack",
    price: 560,
    category: "women",
    image: "Images/products/women/heritage_leather/1.jpg",
    isNew: true,
    onSale: false,
    color: "dark brown",
    size: "XL",
    material: "натуральная кожа",
    description: "Классический рюкзак из гладкой натуральной кожи в насыщенном тёмно-коричневом оттенке. Модель сочетает в себе винтажный стиль и современную практичность. Просторное основное отделение закрывается на прочную молнию, а внешний карман с ремешками и металлическими пряжками добавляет характерный ретро-акцент и обеспечивает быстрый доступ к необходимым вещам.\n\nРюкзак идеально подходит для повседневного использования, работы, путешествий и городских прогулок. Удобные регулируемые лямки и прочная ручка позволяют носить его максимально комфортно.",
    emoji: "👜",
    media: [
      { type: "image", src: "Images/products/women/heritage_leather/1.jpg" },
      { type: "image", src: "Images/products/women/heritage_leather/2.jpg" },
      { type: "image", src: "Images/products/women/heritage_leather/3.jpg" },
      { type: "image", src: "Images/products/women/heritage_leather/4.jpg" }
    ],
    specifications: [
        { name: 'Название', value: 'Heritage Leather Backpack' },
        { name: 'Категория', value: 'Женские сумки' },
        { name: 'Материал', value: 'Натуральная кожа высокого качества' },
        { name: 'Цвет', value: 'Dark Brown / Chocolate Brown' },
        { name: 'Стиль', value: 'Vintage / Casual / Urban' },
        { name: 'Особенности', value: 'натуральная кожа высокого качества, просторное основное отделение на молнии, внешний карман с ремешками и пряжками, регулируемые плечевые ремни, прочная верхняя ручка, стильная винтажная фурнитура' },
        { name: 'Идеально подходит для', value: 'Работы, учёбы, путешествий и ежедневного использования' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 79,
    name: "Elegance Leather Tote Bag",
    price: 575,
    category: "women",
    image: "Images/products/women/elegance_tote/1.jpg",
    isNew: false,
    onSale: true,
    color: "black",
    size: "M",
    material: "натуральная кожа",
    description: "Минималистичная сумка-тоут из гладкой натуральной кожи в классическом чёрном цвете. Чистые линии и лаконичный дизайн делают эту модель универсальным аксессуаром для повседневной жизни, работы и деловых встреч. Длинные удобные ручки позволяют комфортно носить сумку на плече, а аккуратная металлическая застёжка добавляет элегантный акцент.\n\nСумка достаточно вместительная, чтобы легко разместить все необходимые вещи — телефон, кошелёк, косметику и документы. Идеальный выбор для тех, кто ценит стиль, практичность и современную минималистичную эстетику.",
    emoji: "👜",
    media: [
      { type: "image", src: "Images/products/women/elegance_tote/1.jpg" },
      { type: "image", src: "Images/products/women/elegance_tote/2.jpg" },
      { type: "image", src: "Images/products/women/elegance_tote/3.jpg" },
      { type: "image", src: "Images/products/women/elegance_tote/4.jpg" },
      { type: "image", src: "Images/products/women/elegance_tote/5.jpg" }
    ],
    specifications: [
        { name: 'Название', value: 'Elegance Leather Tote Bag' },
        { name: 'Категория', value: 'Женские сумки' },
        { name: 'Материал', value: 'Гладкая натуральная кожа' },
        { name: 'Цвет', value: 'Classic Black' },
        { name: 'Стиль', value: 'Minimal / Elegant / Everyday' },
        { name: 'Особенности', value: 'гладкая натуральная кожа, минималистичный современный дизайн, удобные длинные ручки для ношения на плече, вместительное основное отделение, металлическая застёжка, прочная фурнитура' },
        { name: 'Идеально подходит для', value: 'Работы, повседневных образов, встреч и городских прогулок' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 80,
    name: "RADO Новинка 080",
    price: 590,
    category: "women",
    image: "Images/products/women/w80.jpg",
    isNew: true,
    onSale: false,
    color: "черный",
    size: "L",
    material: "кожа",
    description: "Минималистичная модель RADO BAGS: чистые линии, продуманная форма и качественные материалы.",
    emoji: "👜",
    specifications: [
        { name: 'Категория', value: 'Женские сумки' },
        { name: 'Материал', value: 'Кожа' },
        { name: 'Цвет', value: 'Черный' },
        { name: 'Размер', value: 'L (35 x 28 x 12 см)' },
        { name: 'Вес', value: '0.9 кг' },
        { name: 'Внутренние карманы', value: '2' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 81,
    name: "RADO Новинка 081",
    price: 605,
    category: "women",
    image: "Images/products/women/w81.jpg",
    isNew: true,
    onSale: false,
    color: "бежевый",
    size: "S",
    material: "эко-кожа",
    description: "Минималистичная модель RADO BAGS: чистые линии, продуманная форма и качественные материалы.",
    emoji: "👜",
    specifications: [
        { name: 'Категория', value: 'Женские сумки' },
        { name: 'Материал', value: 'Эко-кожа' },
        { name: 'Цвет', value: 'Бежевый' },
        { name: 'Размер', value: 'S (30 x 20 x 8 см)' },
        { name: 'Вес', value: '0.6 кг' },
        { name: 'Внутренние карманы', value: '1' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 82,
    name: "RADO Новинка 082",
    price: 620,
    category: "women",
    image: "Images/products/women/w82.jpg",
    isNew: true,
    onSale: false,
    color: "коричневый",
    size: "M",
    material: "нейлон",
    description: "Минималистичная модель RADO BAGS: чистые линии, продуманная форма и качественные материалы.",
    emoji: "👜",
    specifications: [
        { name: 'Категория', value: 'Женские сумки' },
        { name: 'Материал', value: 'Нейлон' },
        { name: 'Цвет', value: 'Коричневый' },
        { name: 'Размер', value: 'M (32 x 25 x 10 см)' },
        { name: 'Вес', value: '0.7 кг' },
        { name: 'Внутренние карманы', value: '2' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 83,
    name: "RADO Новинка 083",
    price: 635,
    category: "women",
    image: "Images/products/women/w83.jpg",
    isNew: true,
    onSale: false,
    color: "серый",
    size: "L",
    material: "текстиль",
    description: "Минималистичная модель RADO BAGS: чистые линии, продуманная форма и качественные материалы.",
    emoji: "👜",
    specifications: [
        { name: 'Категория', value: 'Женские сумки' },
        { name: 'Материал', value: 'Текстиль' },
        { name: 'Цвет', value: 'Серый' },
        { name: 'Размер', value: 'L (35 x 28 x 12 см)' },
        { name: 'Вес', value: '0.9 кг' },
        { name: 'Внутренние карманы', value: '1' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 84,
    name: "RADO Новинка 084",
    price: 545,
    category: "women",
    image: "Images/products/women/w84.jpg",
    isNew: true,
    onSale: false,
    color: "оливковый",
    size: "S",
    material: "кожа",
    description: "Минималистичная модель RADO BAGS: чистые линии, продуманная форма и качественные материалы.",
    emoji: "👜",
    specifications: [
        { name: 'Категория', value: 'Женские сумки' },
        { name: 'Материал', value: 'Кожа' },
        { name: 'Цвет', value: 'Оливковый' },
        { name: 'Размер', value: 'S (30 x 20 x 8 см)' },
        { name: 'Вес', value: '0.6 кг' },
        { name: 'Внутренние карманы', value: '2' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 85,
    name: "RADO Новинка 085",
    price: 560,
    category: "women",
    image: "Images/products/women/w85.jpg",
    isNew: true,
    onSale: false,
    color: "черный",
    size: "M",
    material: "эко-кожа",
    description: "Минималистичная модель RADO BAGS: чистые линии, продуманная форма и качественные материалы.",
    emoji: "👜",
    specifications: [
        { name: 'Категория', value: 'Женские сумки' },
        { name: 'Материал', value: 'Эко-кожа' },
        { name: 'Цвет', value: 'Черный' },
        { name: 'Размер', value: 'M (32 x 25 x 10 см)' },
        { name: 'Вес', value: '0.7 кг' },
        { name: 'Внутренние карманы', value: '1' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 86,
    name: "RADO Новинка 086",
    price: 575,
    category: "women",
    image: "Images/products/women/w86.jpg",
    isNew: true,
    onSale: false,
    color: "бежевый",
    size: "L",
    material: "нейлон",
    description: "Минималистичная модель RADO BAGS: чистые линии, продуманная форма и качественные материалы.",
    emoji: "👜",
    specifications: [
        { name: 'Категория', value: 'Женские сумки' },
        { name: 'Материал', value: 'Нейлон' },
        { name: 'Цвет', value: 'Бежевый' },
        { name: 'Размер', value: 'L (35 x 28 x 12 см)' },
        { name: 'Вес', value: '0.9 кг' },
        { name: 'Внутренние карманы', value: '2' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 87,
    name: "RADO Новинка 087",
    price: 590,
    category: "women",
    image: "Images/products/women/w87.jpg",
    isNew: true,
    onSale: false,
    color: "коричневый",
    size: "S",
    material: "текстиль",
    description: "Минималистичная модель RADO BAGS: чистые линии, продуманная форма и качественные материалы.",
    emoji: "👜",
    specifications: [
        { name: 'Категория', value: 'Женские сумки' },
        { name: 'Материал', value: 'Текстиль' },
        { name: 'Цвет', value: 'Коричневый' },
        { name: 'Размер', value: 'S (30 x 20 x 8 см)' },
        { name: 'Вес', value: '0.6 кг' },
        { name: 'Внутренние карманы', value: '1' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 88,
    name: "RADO Новинка 088",
    price: 605,
    category: "women",
    image: "Images/products/women/w88.jpg",
    isNew: true,
    onSale: false,
    color: "серый",
    size: "M",
    material: "кожа",
    description: "Минималистичная модель RADO BAGS: чистые линии, продуманная форма и качественные материалы.",
    emoji: "👜",
    specifications: [
        { name: 'Категория', value: 'Женские сумки' },
        { name: 'Материал', value: 'Кожа' },
        { name: 'Цвет', value: 'Серый' },
        { name: 'Размер', value: 'M (32 x 25 x 10 см)' },
        { name: 'Вес', value: '0.7 кг' },
        { name: 'Внутренние карманы', value: '2' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 89,
    name: "RADO Новинка 089",
    price: 620,
    category: "women",
    image: "Images/products/women/w89.jpg",
    isNew: true,
    onSale: false,
    color: "оливковый",
    size: "L",
    material: "эко-кожа",
    description: "Минималистичная модель RADO BAGS: чистые линии, продуманная форма и качественные материалы.",
    emoji: "👜",
    specifications: [
        { name: 'Категория', value: 'Женские сумки' },
        { name: 'Материал', value: 'Эко-кожа' },
        { name: 'Цвет', value: 'Оливковый' },
        { name: 'Размер', value: 'L (35 x 28 x 12 см)' },
        { name: 'Вес', value: '0.9 кг' },
        { name: 'Внутренние карманы', value: '1' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 90,
    name: "RADO Новинка 090",
    price: 635,
    category: "women",
    image: "Images/products/women/w90.jpg",
    isNew: true,
    onSale: false,
    color: "черный",
    size: "S",
    material: "нейлон",
    description: "Минималистичная модель RADO BAGS: чистые линии, продуманная форма и качественные материалы.",
    emoji: "👜",
    specifications: [
        { name: 'Категория', value: 'Женские сумки' },
        { name: 'Материал', value: 'Нейлон' },
        { name: 'Цвет', value: 'Черный' },
        { name: 'Размер', value: 'S (30 x 20 x 8 см)' },
        { name: 'Вес', value: '0.6 кг' },
        { name: 'Внутренние карманы', value: '2' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 91,
    name: "RADO Новинка 091",
    price: 545,
    category: "women",
    image: "Images/products/women/w91.jpg",
    isNew: true,
    onSale: false,
    color: "бежевый",
    size: "M",
    material: "текстиль",
    description: "Минималистичная модель RADO BAGS: чистые линии, продуманная форма и качественные материалы.",
    emoji: "👜",
    specifications: [
        { name: 'Категория', value: 'Женские сумки' },
        { name: 'Материал', value: 'Текстиль' },
        { name: 'Цвет', value: 'Бежевый' },
        { name: 'Размер', value: 'M (32 x 25 x 10 см)' },
        { name: 'Вес', value: '0.7 кг' },
        { name: 'Внутренние карманы', value: '1' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 92,
    name: "RADO Новинка 092",
    price: 560,
    category: "women",
    image: "Images/products/women/w92.jpg",
    isNew: true,
    onSale: false,
    color: "коричневый",
    size: "L",
    material: "кожа",
    description: "Минималистичная модель RADO BAGS: чистые линии, продуманная форма и качественные материалы.",
    emoji: "👜",
    specifications: [
        { name: 'Категория', value: 'Женские сумки' },
        { name: 'Материал', value: 'Кожа' },
        { name: 'Цвет', value: 'Коричневый' },
        { name: 'Размер', value: 'L (35 x 28 x 12 см)' },
        { name: 'Вес', value: '0.9 кг' },
        { name: 'Внутренние карманы', value: '2' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 93,
    name: "RADO Новинка 093",
    price: 575,
    category: "women",
    image: "Images/products/women/w93.jpg",
    isNew: true,
    onSale: false,
    color: "серый",
    size: "S",
    material: "эко-кожа",
    description: "Минималистичная модель RADO BAGS: чистые линии, продуманная форма и качественные материалы.",
    emoji: "👜",
    specifications: [
        { name: 'Категория', value: 'Женские сумки' },
        { name: 'Материал', value: 'Эко-кожа' },
        { name: 'Цвет', value: 'Серый' },
        { name: 'Размер', value: 'S (30 x 20 x 8 см)' },
        { name: 'Вес', value: '0.6 кг' },
        { name: 'Внутренние карманы', value: '1' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 94,
    name: "RADO Новинка 094",
    price: 590,
    category: "women",
    image: "Images/products/women/w94.jpg",
    isNew: true,
    onSale: false,
    color: "оливковый",
    size: "M",
    material: "нейлон",
    description: "Минималистичная модель RADO BAGS: чистые линии, продуманная форма и качественные материалы.",
    emoji: "👜",
    specifications: [
        { name: 'Категория', value: 'Женские сумки' },
        { name: 'Материал', value: 'Нейлон' },
        { name: 'Цвет', value: 'Оливковый' },
        { name: 'Размер', value: 'M (32 x 25 x 10 см)' },
        { name: 'Вес', value: '0.7 кг' },
        { name: 'Внутренние карманы', value: '2' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 95,
    name: "RADO Новинка 095",
    price: 605,
    category: "women",
    image: "Images/products/women/w95.jpg",
    isNew: true,
    onSale: false,
    color: "черный",
    size: "L",
    material: "текстиль",
    description: "Минималистичная модель RADO BAGS: чистые линии, продуманная форма и качественные материалы.",
    emoji: "👜",
    specifications: [
        { name: 'Категория', value: 'Женские сумки' },
        { name: 'Материал', value: 'Текстиль' },
        { name: 'Цвет', value: 'Черный' },
        { name: 'Размер', value: 'L (35 x 28 x 12 см)' },
        { name: 'Вес', value: '0.9 кг' },
        { name: 'Внутренние карманы', value: '1' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 96,
    name: "RADO Новинка 096",
    price: 620,
    category: "women",
    image: "Images/products/women/w96.jpg",
    isNew: true,
    onSale: false,
    color: "бежевый",
    size: "S",
    material: "кожа",
    description: "Минималистичная модель RADO BAGS: чистые линии, продуманная форма и качественные материалы.",
    emoji: "👜",
    specifications: [
        { name: 'Категория', value: 'Женские сумки' },
        { name: 'Материал', value: 'Кожа' },
        { name: 'Цвет', value: 'Бежевый' },
        { name: 'Размер', value: 'S (30 x 20 x 8 см)' },
        { name: 'Вес', value: '0.6 кг' },
        { name: 'Внутренние карманы', value: '2' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 97,
    name: "RADO Новинка 097",
    price: 635,
    category: "women",
    image: "Images/products/women/w97.jpg",
    isNew: true,
    onSale: false,
    color: "коричневый",
    size: "M",
    material: "эко-кожа",
    description: "Минималистичная модель RADO BAGS: чистые линии, продуманная форма и качественные материалы.",
    emoji: "👜",
    specifications: [
        { name: 'Категория', value: 'Женские сумки' },
        { name: 'Материал', value: 'Эко-кожа' },
        { name: 'Цвет', value: 'Коричневый' },
        { name: 'Размер', value: 'M (32 x 25 x 10 см)' },
        { name: 'Вес', value: '0.7 кг' },
        { name: 'Внутренние карманы', value: '1' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 98,
    name: "RADO Новинка 098",
    price: 545,
    category: "women",
    image: "Images/products/women/w98.jpg",
    isNew: true,
    onSale: false,
    color: "серый",
    size: "L",
    material: "нейлон",
    description: "Минималистичная модель RADO BAGS: чистые линии, продуманная форма и качественные материалы.",
    emoji: "👜",
    specifications: [
        { name: 'Категория', value: 'Женские сумки' },
        { name: 'Материал', value: 'Нейлон' },
        { name: 'Цвет', value: 'Серый' },
        { name: 'Размер', value: 'L (35 x 28 x 12 см)' },
        { name: 'Вес', value: '0.9 кг' },
        { name: 'Внутренние карманы', value: '2' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 99,
    name: "RADO Новинка 099",
    price: 560,
    category: "women",
    image: "Images/products/women/w99.jpg",
    isNew: true,
    onSale: false,
    color: "оливковый",
    size: "S",
    material: "текстиль",
    description: "Минималистичная модель RADO BAGS: чистые линии, продуманная форма и качественные материалы.",
    emoji: "👜",
    specifications: [
        { name: 'Категория', value: 'Женские сумки' },
        { name: 'Материал', value: 'Текстиль' },
        { name: 'Цвет', value: 'Оливковый' },
        { name: 'Размер', value: 'S (30 x 20 x 8 см)' },
        { name: 'Вес', value: '0.6 кг' },
        { name: 'Внутренние карманы', value: '1' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 100,
    name: "RADO Новинка 100",
    price: 575,
    category: "women",
    image: "Images/products/women/w100.jpg",
    isNew: true,
    onSale: false,
    color: "черный",
    size: "M",
    material: "кожа",
    description: "Минималистичная модель RADO BAGS: чистые линии, продуманная форма и качественные материалы.",
    emoji: "👜",
    specifications: [
        { name: 'Категория', value: 'Женские сумки' },
        { name: 'Материал', value: 'Кожа' },
        { name: 'Цвет', value: 'Черный' },
        { name: 'Размер', value: 'M (32 x 25 x 10 см)' },
        { name: 'Вес', value: '0.7 кг' },
        { name: 'Внутренние карманы', value: '2' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 101,
    name: "RADO Sale 101",
    price: 500,
    oldPrice: 620,
    category: "women",
    image: "Images/products/women/w101.jpg",
    isNew: false,
    onSale: true,
    color: "бежевый",
    size: "L",
    material: "эко-кожа",
    description: "Минималистичная модель RADO BAGS: чистые линии, продуманная форма и качественные материалы.",
    emoji: "👜",
    specifications: [
        { name: 'Категория', value: 'Женские сумки' },
        { name: 'Материал', value: 'Эко-кожа' },
        { name: 'Цвет', value: 'Бежевый' },
        { name: 'Размер', value: 'L (35 x 28 x 12 см)' },
        { name: 'Вес', value: '0.9 кг' },
        { name: 'Внутренние карманы', value: '1' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 102,
    name: "RADO Sale 102 — Портфель деловой из натуральной кожи",
    price: 515,
    oldPrice: 635,
    category: "women",
    image: "Images/products/women/sale102-2.png",
    isNew: false,
    onSale: true,
    color: "черный",
    colors: ["черный"],
    size: "M",
    material: "натуральная кожа",
    description: "Деловой портфель RADO BAGS из натуральной кожи с мелкой зернистой текстурой. Два верхних отделения на молнии, передний горизонтальный карман. Удобные ручки и съёмный плечевой ремень с серебристой фурнитурой. Вместительный кожаный портфель для документов и ноутбука — лаконичный дизайн для работы и повседневной носки.",
    emoji: "👜",
    media: [
      { type: "image", src: "Images/products/women/sale102-2.png" },
      { type: "image", src: "Images/products/women/sale102-1.png" },
      { type: "image", src: "Images/products/women/sale102-4.png" },
      { type: "image", src: "Images/products/women/sale102-5.png" },
      { type: "image", src: "Images/products/women/sale102-3.png" }
    ],
    specifications: [
        { name: 'Категория', value: 'Портфели' },
        { name: 'Материал', value: 'Натуральная кожа' },
        { name: 'Цвет', value: 'Чёрный' },
        { name: 'Размер', value: 'M (40 x 30 x 12 см)' },
        { name: 'Вес', value: '1.1 кг' },
        { name: 'Внутренние карманы', value: '2' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 103,
    name: "RADO Sale 103 — Сумка через плечо из натуральной кожи",
    price: 530,
    oldPrice: 650,
    category: "women",
    image: "Images/products/women/sale103-3.png",
    isNew: false,
    onSale: true,
    color: "черный",
    colors: ["черный"],
    size: "M",
    material: "натуральная кожа",
    description: "Чёрная сумка через плечо RADO BAGS из натуральной кожи с мелкой зернистой текстурой. Основное отделение на молнии, передний карман на молнии, внутренний карман. Регулируемый плечевой ремень из чёрной ткани и серебристая фурнитура. Компактный формат для повседневной носки — минималистичный дизайн и практичность.",
    emoji: "👜",
    media: [
      { type: "image", src: "Images/products/women/sale103-3.png" },
      { type: "image", src: "Images/products/women/sale103-2.png" },
      { type: "image", src: "Images/products/women/sale103-4.png" },
      { type: "image", src: "Images/products/women/sale103-5.png" },
      { type: "image", src: "Images/products/women/sale103-1.png" }
    ],
    specifications: [
        { name: 'Категория', value: 'Сумки через плечо' },
        { name: 'Материал', value: 'Натуральная кожа' },
        { name: 'Цвет', value: 'Чёрный' },
        { name: 'Размер', value: 'M (28 x 20 x 8 см)' },
        { name: 'Вес', value: '0.6 кг' },
        { name: 'Внутренние карманы', value: '1' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 104,
    name: "RADO Sale 104 — Рюкзак из натуральной кожи",
    price: 545,
    oldPrice: 665,
    category: "women",
    image: "Images/products/women/sale104-1.png",
    isNew: false,
    onSale: true,
    color: "темно-коричневый",
    colors: ["темно-коричневый"],
    size: "L",
    material: "натуральная кожа",
    description: "Рюкзак RADO BAGS из натуральной кожи тёмно-коричневого оттенка с мелкой зернистой текстурой. Основное отделение на двойной молнии, передние карманы на молнии, боковые карманы, задний карман на молнии. Удобная спинка с вентилируемой подкладкой, регулируемые плечевые ремни из кожи. Внутренняя организация: карман на молнии и открытые карманы. Подходит для работы, учёбы и повседневной носки.",
    emoji: "🎒",
    media: [
      { type: "image", src: "Images/products/women/sale104-1.png" },
      { type: "image", src: "Images/products/women/sale104-2.png" },
      { type: "image", src: "Images/products/women/sale104-3.png" },
      { type: "image", src: "Images/products/women/sale104-4.png" },
      { type: "image", src: "Images/products/women/sale104-5.png" }
    ],
    specifications: [
        { name: 'Категория', value: 'Рюкзаки' },
        { name: 'Материал', value: 'Натуральная кожа' },
        { name: 'Цвет', value: 'Тёмно-коричневый' },
        { name: 'Размер', value: 'L (35 x 28 x 12 см)' },
        { name: 'Вес', value: '0.9 кг' },
        { name: 'Внутренние карманы', value: '2' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 105,
    name: "RADO Sale 105 — Борсетка из натуральной кожи",
    price: 455,
    oldPrice: 575,
    category: "women",
    image: "Images/products/women/sale105-1.png",
    isNew: false,
    onSale: true,
    color: "темно-коричневый",
    colors: ["темно-коричневый"],
    size: "S",
    material: "натуральная кожа",
    description: "Борсетка RADO BAGS из натуральной кожи тёмно-коричневого оттенка с мелкой зернистой текстурой. Основное отделение на молнии, два передних кармана на молнии. Внутри — светлая подкладка и карман на сетке с молнией. Кожаная петля для переноски. Компактный формат для документов, косметики или аксессуаров — лаконичный дизайн и практичность.",
    emoji: "👛",
    media: [
      { type: "image", src: "Images/products/women/sale105-1.png" },
      { type: "image", src: "Images/products/women/sale105-2.png" },
      { type: "image", src: "Images/products/women/sale105-3.png" },
      { type: "image", src: "Images/products/women/sale105-4.png" },
      { type: "image", src: "Images/products/women/sale105-5.png" }
    ],
    specifications: [
        { name: 'Категория', value: 'Косметички и борсетки' },
        { name: 'Материал', value: 'Натуральная кожа' },
        { name: 'Цвет', value: 'Тёмно-коричневый' },
        { name: 'Размер', value: 'S (24 x 16 x 8 см)' },
        { name: 'Вес', value: '0.4 кг' },
        { name: 'Внутренние карманы', value: '1' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 106,
    name: "RADO Sale 106 — Сумка через плечо из натуральной кожи",
    price: 470,
    oldPrice: 590,
    category: "women",
    image: "Images/products/women/sale106-1.png",
    isNew: false,
    onSale: true,
    color: "черный",
    colors: ["черный"],
    size: "M",
    material: "натуральная кожа",
    description: "Чёрная сумка через плечо RADO BAGS из натуральной кожи с мелкой зернистой текстурой. Два основных отделения на молнии, передний карман на молнии. Внутри — светлая подкладка и карман на молнии. Регулируемый плечевой ремень и серебристая фурнитура. Компактный формат для повседневной носки — лаконичный дизайн и практичность.",
    emoji: "👜",
    media: [
      { type: "image", src: "Images/products/women/sale106-1.png" },
      { type: "image", src: "Images/products/women/sale106-2.png" },
      { type: "image", src: "Images/products/women/sale106-3.png" },
      { type: "image", src: "Images/products/women/sale106-4.png" },
      { type: "image", src: "Images/products/women/sale106-5.png" }
    ],
    specifications: [
        { name: 'Категория', value: 'Сумки через плечо' },
        { name: 'Материал', value: 'Натуральная кожа' },
        { name: 'Цвет', value: 'Чёрный' },
        { name: 'Размер', value: 'M (28 x 20 x 8 см)' },
        { name: 'Вес', value: '0.5 кг' },
        { name: 'Внутренние карманы', value: '1' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 107,
    name: "RADO Sale 107",
    price: 485,
    oldPrice: 605,
    category: "women",
    image: "Images/products/women/w107.jpg",
    isNew: false,
    onSale: true,
    color: "коричневый",
    size: "L",
    material: "текстиль",
    description: "Минималистичная модель RADO BAGS: чистые линии, продуманная форма и качественные материалы.",
    emoji: "👜",
    specifications: [
        { name: 'Категория', value: 'Женские сумки' },
        { name: 'Материал', value: 'Текстиль' },
        { name: 'Цвет', value: 'Коричневый' },
        { name: 'Размер', value: 'L (35 x 28 x 12 см)' },
        { name: 'Вес', value: '0.9 кг' },
        { name: 'Внутренние карманы', value: '1' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 108,
    name: "RADO Sale 108",
    price: 500,
    oldPrice: 620,
    category: "women",
    image: "Images/products/women/w108.jpg",
    isNew: false,
    onSale: true,
    color: "серый",
    size: "S",
    material: "кожа",
    description: "Минималистичная модель RADO BAGS: чистые линии, продуманная форма и качественные материалы.",
    emoji: "👜",
    specifications: [
        { name: 'Категория', value: 'Женские сумки' },
        { name: 'Материал', value: 'Кожа' },
        { name: 'Цвет', value: 'Серый' },
        { name: 'Размер', value: 'S (30 x 20 x 8 см)' },
        { name: 'Вес', value: '0.6 кг' },
        { name: 'Внутренние карманы', value: '2' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 109,
    name: "RADO Sale 109",
    price: 515,
    oldPrice: 635,
    category: "women",
    image: "Images/products/women/w109.jpg",
    isNew: false,
    onSale: true,
    color: "оливковый",
    size: "M",
    material: "эко-кожа",
    description: "Минималистичная модель RADO BAGS: чистые линии, продуманная форма и качественные материалы.",
    emoji: "👜",
    specifications: [
        { name: 'Категория', value: 'Женские сумки' },
        { name: 'Материал', value: 'Эко-кожа' },
        { name: 'Цвет', value: 'Оливковый' },
        { name: 'Размер', value: 'M (32 x 25 x 10 см)' },
        { name: 'Вес', value: '0.7 кг' },
        { name: 'Внутренние карманы', value: '1' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 110,
    name: "RADO Sale 110",
    price: 530,
    oldPrice: 650,
    category: "women",
    image: "Images/products/women/w110.jpg",
    isNew: false,
    onSale: true,
    color: "черный",
    size: "L",
    material: "нейлон",
    description: "Минималистичная модель RADO BAGS: чистые линии, продуманная форма и качественные материалы.",
    emoji: "👜",
    specifications: [
        { name: 'Категория', value: 'Женские сумки' },
        { name: 'Материал', value: 'Нейлон' },
        { name: 'Цвет', value: 'Черный' },
        { name: 'Размер', value: 'L (35 x 28 x 12 см)' },
        { name: 'Вес', value: '0.9 кг' },
        { name: 'Внутренние карманы', value: '2' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 111,
    name: "RADO Sale 111",
    price: 545,
    oldPrice: 665,
    category: "women",
    image: "Images/products/women/w111.jpg",
    isNew: false,
    onSale: true,
    color: "бежевый",
    size: "S",
    material: "текстиль",
    description: "Минималистичная модель RADO BAGS: чистые линии, продуманная форма и качественные материалы.",
    emoji: "👜",
    specifications: [
        { name: 'Категория', value: 'Женские сумки' },
        { name: 'Материал', value: 'Текстиль' },
        { name: 'Цвет', value: 'Бежевый' },
        { name: 'Размер', value: 'S (30 x 20 x 8 см)' },
        { name: 'Вес', value: '0.6 кг' },
        { name: 'Внутренние карманы', value: '1' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 112,
    name: "RADO Sale 112",
    price: 455,
    oldPrice: 575,
    category: "women",
    image: "Images/products/women/w112.jpg",
    isNew: false,
    onSale: true,
    color: "коричневый",
    size: "M",
    material: "кожа",
    description: "Минималистичная модель RADO BAGS: чистые линии, продуманная форма и качественные материалы.",
    emoji: "👜",
    specifications: [
        { name: 'Категория', value: 'Женские сумки' },
        { name: 'Материал', value: 'Кожа' },
        { name: 'Цвет', value: 'Коричневый' },
        { name: 'Размер', value: 'M (32 x 25 x 10 см)' },
        { name: 'Вес', value: '0.7 кг' },
        { name: 'Внутренние карманы', value: '2' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 113,
    name: "RADO Sale 113",
    price: 470,
    oldPrice: 590,
    category: "women",
    image: "Images/products/women/w113.jpg",
    isNew: false,
    onSale: true,
    color: "серый",
    size: "L",
    material: "эко-кожа",
    description: "Минималистичная модель RADO BAGS: чистые линии, продуманная форма и качественные материалы.",
    emoji: "👜",
    specifications: [
        { name: 'Категория', value: 'Женские сумки' },
        { name: 'Материал', value: 'Эко-кожа' },
        { name: 'Цвет', value: 'Серый' },
        { name: 'Размер', value: 'L (35 x 28 x 12 см)' },
        { name: 'Вес', value: '0.9 кг' },
        { name: 'Внутренние карманы', value: '1' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 114,
    name: "RADO Sale 114",
    price: 485,
    oldPrice: 605,
    category: "women",
    image: "Images/products/women/w114.jpg",
    isNew: false,
    onSale: true,
    color: "оливковый",
    size: "S",
    material: "нейлон",
    description: "Минималистичная модель RADO BAGS: чистые линии, продуманная форма и качественные материалы.",
    emoji: "👜",
    specifications: [
        { name: 'Категория', value: 'Женские сумки' },
        { name: 'Материал', value: 'Нейлон' },
        { name: 'Цвет', value: 'Оливковый' },
        { name: 'Размер', value: 'S (30 x 20 x 8 см)' },
        { name: 'Вес', value: '0.6 кг' },
        { name: 'Внутренние карманы', value: '2' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 115,
    name: "RADO Sale 115",
    price: 500,
    oldPrice: 620,
    category: "women",
    image: "Images/products/women/w115.jpg",
    isNew: false,
    onSale: true,
    color: "черный",
    size: "M",
    material: "текстиль",
    description: "Минималистичная модель RADO BAGS: чистые линии, продуманная форма и качественные материалы.",
    emoji: "👜",
    specifications: [
        { name: 'Категория', value: 'Женские сумки' },
        { name: 'Материал', value: 'Текстиль' },
        { name: 'Цвет', value: 'Черный' },
        { name: 'Размер', value: 'M (32 x 25 x 10 см)' },
        { name: 'Вес', value: '0.7 кг' },
        { name: 'Внутренние карманы', value: '1' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 200,
    name: "RADO Кошелёк кожаный",
    price: 290,
    category: "accessories",
    image: "Images/products/women/wallet200-1.png",
    images: [
      "Images/products/women/wallet200-1.png",
      "Images/products/women/wallet200-2.png",
      "Images/products/women/wallet200-3.png"
    ],
    isNew: false,
    onSale: false,
    color: "тёмно-бордовый",
    size: "S",
    material: "кожа",
    description: "Компактный кожаный кошелёк с отделениями для карт и купюр. Минималистичный дизайн RADO BAGS.",
    emoji: "👛",
    specifications: [
        { name: 'Категория', value: 'Аксессуары' },
        { name: 'Материал', value: 'Натуральная кожа' },
        { name: 'Цвет', value: 'Тёмно-бордовый' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 201,
    name: "RADO Визитница",
    price: 195,
    category: "accessories",
    image: "Images/products/women/vizit201-1.png",
    images: [
      "Images/products/women/vizit201-1.png",
      "Images/products/women/vizit201-2.png",
      "Images/products/women/vizit201-3.png"
    ],
    isNew: false,
    onSale: false,
    color: "пыльно-розовый",
    size: "S",
    material: "кожа",
    description: "Стильная визитница для карт и документов. Удобный формат для ежедневного использования.",
    emoji: "💼",
    specifications: [
        { name: 'Категория', value: 'Аксессуары' },
        { name: 'Материал', value: 'Натуральная кожа' },
        { name: 'Цвет', value: 'Пыльно-розовый' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 202,
    name: "RADO Ремень кожаный",
    price: 350,
    category: "accessories",
    image: "Images/products/women/belt202-1.png",
    images: [
      "Images/products/women/belt202-1.png",
      "Images/products/women/belt202-2.png"
    ],
    isNew: false,
    onSale: false,
    color: "черный",
    size: "M",
    material: "кожа",
    description: "Классический кожаный ремень с металлической пряжкой. Универсальное дополнение к образу.",
    emoji: "🪢",
    specifications: [
        { name: 'Категория', value: 'Аксессуары' },
        { name: 'Материал', value: 'Натуральная кожа' },
        { name: 'Цвет', value: 'Черный' },
        { name: 'Размер', value: 'Длина 100–120 см' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 203,
    name: "RADO Чехол для очков",
    price: 145,
    category: "accessories",
    image: "Images/products/women/glasses203-1.png",
    images: [
      "Images/products/women/glasses203-1.png",
      "Images/products/women/glasses203-2.png",
      "Images/products/women/glasses203-3.png"
    ],
    isNew: false,
    onSale: false,
    color: "черный",
    size: "S",
    material: "экокожа",
    description: "Мягкий чехол для солнцезащитных очков. Защита от царапин и удобное хранение.",
    emoji: "🕶",
    specifications: [
        { name: 'Категория', value: 'Аксессуары' },
        { name: 'Материал', value: 'Экокожа' },
        { name: 'Цвет', value: 'Черный' },
        { name: 'Бренд', value: 'RADO BAGS' },
        { name: 'Страна', value: 'Молдова' }
    ]
  },






  // === Мужские сумки (201-208, 210-216) ===
  { id: 201, name: "RADO Мужские сумки — артикул 201", price: 850, category: "men", image: "Images/products/men/art201.jpg", isNew: false, onSale: false, color: "черный", size: "M", material: "кожа", description: "Мужская сумка/рюкзак RADO BAGS.", emoji: "👜", specifications: [{ name: 'Категория', value: 'Мужские сумки' }, { name: 'Бренд', value: 'RADO BAGS' }, { name: 'Страна', value: 'Молдова' }] },
  { id: 202, name: "RADO Мужские сумки — артикул 202", price: 920, category: "men", image: "Images/products/men/art202.jpg", isNew: false, onSale: false, color: "черный", size: "M", material: "кожа", description: "Мужская сумка/рюкзак RADO BAGS.", emoji: "👜", specifications: [{ name: 'Категория', value: 'Мужские сумки' }, { name: 'Бренд', value: 'RADO BAGS' }, { name: 'Страна', value: 'Молдова' }] },
  { id: 203, name: "RADO Мужские сумки — артикул 203", price: 990, category: "men", image: "Images/products/men/art203.jpg", isNew: false, onSale: false, color: "черный", size: "M", material: "кожа", description: "Мужская сумка/рюкзак RADO BAGS.", emoji: "👜", specifications: [{ name: 'Категория', value: 'Мужские сумки' }, { name: 'Бренд', value: 'RADO BAGS' }, { name: 'Страна', value: 'Молдова' }] },
  { id: 204, name: "RADO Мужские сумки — артикул 204", price: 1050, category: "men", image: "Images/products/men/art204.jpg", isNew: false, onSale: false, color: "черный", size: "M", material: "кожа", description: "Мужская сумка/рюкзак RADO BAGS.", emoji: "👜", specifications: [{ name: 'Категория', value: 'Мужские сумки' }, { name: 'Бренд', value: 'RADO BAGS' }, { name: 'Страна', value: 'Молдова' }] },
  { id: 205, name: "RADO Мужские сумки — артикул 205", price: 1120, category: "men", image: "Images/products/men/art205.jpg", isNew: false, onSale: false, color: "черный", size: "M", material: "кожа", description: "Мужская сумка/рюкзак RADO BAGS.", emoji: "👜", specifications: [{ name: 'Категория', value: 'Мужские сумки' }, { name: 'Бренд', value: 'RADO BAGS' }, { name: 'Страна', value: 'Молдова' }] },
  { id: 206, name: "RADO Мужские сумки — артикул 206", price: 1190, category: "men", image: "Images/products/men/art206.jpg", isNew: false, onSale: false, color: "черный", size: "M", material: "кожа", description: "Мужская сумка/рюкзак RADO BAGS.", emoji: "👜", specifications: [{ name: 'Категория', value: 'Мужские сумки' }, { name: 'Бренд', value: 'RADO BAGS' }, { name: 'Страна', value: 'Молдова' }] },
  { id: 207, name: "RADO Мужские сумки — артикул 207", price: 1260, category: "men", image: "Images/products/men/art207.jpg", isNew: false, onSale: false, color: "черный", size: "M", material: "кожа", description: "Мужская сумка/рюкзак RADO BAGS.", emoji: "👜", specifications: [{ name: 'Категория', value: 'Мужские сумки' }, { name: 'Бренд', value: 'RADO BAGS' }, { name: 'Страна', value: 'Молдова' }] },
  { id: 208, name: "RADO Мужские сумки — артикул 208", price: 1330, category: "men", image: "Images/products/men/art208.jpg", isNew: false, onSale: false, color: "черный", size: "M", material: "кожа", description: "Мужская сумка/рюкзак RADO BAGS.", emoji: "👜", specifications: [{ name: 'Категория', value: 'Мужские сумки' }, { name: 'Бренд', value: 'RADO BAGS' }, { name: 'Страна', value: 'Молдова' }] },
  {
    id: 210,
    name: "RADO Мужские сумки — артикул 210. Дорожная сумка из натуральной кожи",
    price: 1400,
    category: "men",
    image: "Images/products/men/men210-1.png",
    isNew: false,
    onSale: false,
    color: "коричнево-бордовый",
    colors: ["коричнево-бордовый"],
    size: "L",
    material: "натуральная кожа",
    description: "Дорожная сумка RADO BAGS из натуральной кожи коричнево-бордового оттенка с мелкой зернистой текстурой. Две верхние ручки и съёмный регулируемый плечевой ремень с серебристой фурнитурой. Основное отделение на молнии, внутренний карман на молнии. Удобный формат для поездок и деловых поездок — лаконичный дизайн и практичность.",
    emoji: "👜",
    media: [
      { type: "image", src: "Images/products/men/men210-1.png" },
      { type: "image", src: "Images/products/men/men210-2.png" },
      { type: "image", src: "Images/products/men/men210-3.png" },
      { type: "image", src: "Images/products/men/men210-4.png" },
      { type: "image", src: "Images/products/men/men210-5.png" }
    ],
    specifications: [
      { name: 'Категория', value: 'Дорожные сумки' },
      { name: 'Материал', value: 'Натуральная кожа' },
      { name: 'Цвет', value: 'Коричнево-бордовый' },
      { name: 'Размер', value: 'L (45 x 30 x 18 см)' },
      { name: 'Бренд', value: 'RADO BAGS' },
      { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 211,
    name: "RADO Мужские сумки — артикул 211. Сумка через плечо из текстиля",
    price: 1470,
    category: "men",
    image: "Images/products/men/men211-1.png",
    isNew: false,
    onSale: false,
    color: "серый",
    colors: ["серый"],
    size: "M",
    material: "текстиль",
    description: "Сумка через плечо RADO BAGS из прочного текстиля серого цвета. Основное отделение на молнии, передний карман, боковой карман на молнии. Регулируемый плечевой ремень из текстиля с тёмной фурнитурой. Лаконичный городской дизайн — практично для повседневной носки.",
    emoji: "👜",
    media: [
      { type: "image", src: "Images/products/men/men211-1.png" },
      { type: "image", src: "Images/products/men/men211-2.png" },
      { type: "image", src: "Images/products/men/men211-3.png" },
      { type: "image", src: "Images/products/men/men211-4.png" },
      { type: "image", src: "Images/products/men/men211-5.png" }
    ],
    specifications: [
      { name: 'Категория', value: 'Сумки через плечо' },
      { name: 'Материал', value: 'Текстиль' },
      { name: 'Цвет', value: 'Серый' },
      { name: 'Размер', value: 'M (28 x 22 x 8 см)' },
      { name: 'Бренд', value: 'RADO BAGS' },
      { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 212,
    name: "RADO Мужские сумки — артикул 212. Сумка для ноутбука из натуральной кожи",
    price: 1540,
    category: "men",
    image: "Images/products/men/men212-1.png",
    isNew: false,
    onSale: false,
    color: "черный",
    colors: ["черный"],
    size: "M",
    material: "натуральная кожа",
    description: "Сумка для ноутбука RADO BAGS из натуральной кожи чёрного цвета с мелкой зернистой текстурой. Два верхних отделения на молнии, два передних кармана на молнии. Две ручки и съёмный регулируемый плечевой ремень с серебристой фурнитурой. Внутри — карман на молнии. Деловой лаконичный дизайн для работы и поездок.",
    emoji: "💼",
    media: [
      { type: "image", src: "Images/products/men/men212-1.png" },
      { type: "image", src: "Images/products/men/men212-2.png" },
      { type: "image", src: "Images/products/men/men212-3.png" },
      { type: "image", src: "Images/products/men/men212-4.png" },
      { type: "image", src: "Images/products/men/men212-5.png" }
    ],
    specifications: [
      { name: 'Категория', value: 'Сумки для ноутбука' },
      { name: 'Материал', value: 'Натуральная кожа' },
      { name: 'Цвет', value: 'Чёрный' },
      { name: 'Размер', value: 'M (40 x 30 x 5 см)' },
      { name: 'Бренд', value: 'RADO BAGS' },
      { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 213,
    name: "RADO Мужские сумки — артикул 213. Сумка для ноутбука из плетёной кожи",
    price: 1610,
    category: "men",
    image: "Images/products/men/men213-1.png",
    isNew: false,
    onSale: false,
    color: "черный",
    colors: ["черный"],
    size: "M",
    material: "натуральная кожа",
    description: "Сумка для ноутбука RADO BAGS из чёрной натуральной кожи с плетёной (intrecciato) текстурой. Два верхних отделения на молнии, передний карман на молнии. Две ручки и съёмный регулируемый плечевой ремень с серебристой фурнитурой. Внутри — карман на молнии. Деловой премиальный вид.",
    emoji: "💼",
    media: [
      { type: "image", src: "Images/products/men/men213-1.png" },
      { type: "image", src: "Images/products/men/men213-2.png" },
      { type: "image", src: "Images/products/men/men213-3.png" },
      { type: "image", src: "Images/products/men/men213-4.png" }
    ],
    specifications: [
      { name: 'Категория', value: 'Сумки для ноутбука' },
      { name: 'Материал', value: 'Натуральная кожа' },
      { name: 'Цвет', value: 'Чёрный' },
      { name: 'Размер', value: 'M (40 x 30 x 5 см)' },
      { name: 'Бренд', value: 'RADO BAGS' },
      { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 214,
    name: "RADO Мужские сумки — артикул 214. Сумка через плечо из текстиля",
    price: 1680,
    category: "men",
    image: "Images/products/men/men214-1.png",
    isNew: false,
    onSale: false,
    color: "черный",
    colors: ["черный"],
    size: "M",
    material: "текстиль",
    description: "Сумка через плечо RADO BAGS из прочного чёрного текстиля. Основное отделение на молнии, передний карман на молнии с серебристой фурнитурой. Регулируемый плечевой ремень из текстиля. Внутри — карман на молнии. Лаконичный городской дизайн для повседневной носки.",
    emoji: "👜",
    media: [
      { type: "image", src: "Images/products/men/men214-1.png" },
      { type: "image", src: "Images/products/men/men214-2.png" },
      { type: "image", src: "Images/products/men/men214-3.png" },
      { type: "image", src: "Images/products/men/men214-4.png" },
      { type: "image", src: "Images/products/men/men214-5.png" }
    ],
    specifications: [
      { name: 'Категория', value: 'Сумки через плечо' },
      { name: 'Материал', value: 'Текстиль' },
      { name: 'Цвет', value: 'Чёрный' },
      { name: 'Размер', value: 'M (28 x 22 x 8 см)' },
      { name: 'Бренд', value: 'RADO BAGS' },
      { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 215,
    name: "RADO Мужские сумки — артикул 215. Рюкзак из натуральной кожи",
    price: 1750,
    category: "men",
    image: "Images/products/men/men215-1.png",
    isNew: false,
    onSale: false,
    color: "черный",
    colors: ["черный"],
    size: "M",
    material: "натуральная кожа",
    description: "Рюкзак RADO BAGS из чёрной натуральной кожи с мелкой зернистой текстурой. Закрытие на клапан с центральным ремнём. Основное отделение на молнии, передний карман на молнии. Верхняя ручка и регулируемые плечевые ремни с мягкой подкладкой. Внутри — карман на молнии. Лаконичный деловой дизайн.",
    emoji: "🎒",
    media: [
      { type: "image", src: "Images/products/men/men215-1.png" },
      { type: "image", src: "Images/products/men/men215-2.png" },
      { type: "image", src: "Images/products/men/men215-3.png" },
      { type: "image", src: "Images/products/men/men215-4.png" },
      { type: "image", src: "Images/products/men/men215-5.png" }
    ],
    specifications: [
      { name: 'Категория', value: 'Рюкзаки' },
      { name: 'Материал', value: 'Натуральная кожа' },
      { name: 'Цвет', value: 'Чёрный' },
      { name: 'Размер', value: 'M (38 x 28 x 12 см)' },
      { name: 'Бренд', value: 'RADO BAGS' },
      { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 216,
    name: "RADO Мужские сумки — артикул 216. Сумка через плечо из текстиля",
    price: 1820,
    category: "men",
    image: "Images/products/men/men216-1.png",
    isNew: false,
    onSale: false,
    color: "черный",
    colors: ["черный"],
    size: "M",
    material: "текстиль",
    description: "Сумка через плечо RADO BAGS из прочного чёрного текстиля. Два основных отделения на молнии, передний карман на молнии и дополнительный карман. Регулируемый плечевой ремень из текстиля. Внутри — карман на молнии. Лаконичный городской дизайн для повседневной носки.",
    emoji: "👜",
    media: [
      { type: "image", src: "Images/products/men/men216-1.png" },
      { type: "image", src: "Images/products/men/men216-2.png" },
      { type: "image", src: "Images/products/men/men216-3.png" },
      { type: "image", src: "Images/products/men/men216-4.png" },
      { type: "image", src: "Images/products/men/men216-5.png" }
    ],
    specifications: [
      { name: 'Категория', value: 'Сумки через плечо' },
      { name: 'Материал', value: 'Текстиль' },
      { name: 'Цвет', value: 'Чёрный' },
      { name: 'Размер', value: 'M (30 x 24 x 8 см)' },
      { name: 'Бренд', value: 'RADO BAGS' },
      { name: 'Страна', value: 'Молдова' }
    ]
  },
  // === Женские сумки: 12 артикулов для добавления фото и комментариев ===
  {
    id: 116,
    name: "Elegance Lock Tote",
    price: 0,
    category: "women",
    image: "Images/products/women/elegance_lock/1.jpg",
    isNew: false,
    onSale: false,
    color: "black",
    size: "M",
    material: "экокожа",
    description: "Стильная чёрная сумка-тоут с выразительным дизайном и золотой фурнитурой. Модель выполнена из гладкой экокожи и отличается структурированной формой, которая сохраняет аккуратный и элегантный силуэт.\n\nДекоративные ремешки и фирменный поворотный замок придают сумке премиальный характер и делают её ярким акцентом образа. Просторное основное отделение позволяет удобно разместить все необходимые вещи — от кошелька и телефона до документов и косметики.\n\nСумка идеально подойдёт для повседневной носки, работы и деловых встреч, сочетая практичность и современный стиль.",
    emoji: "👜",
    media: [
      { type: "image", src: "Images/products/women/elegance_lock/1.jpg" },
      { type: "image", src: "Images/products/women/elegance_lock/2.jpg" },
      { type: "image", src: "Images/products/women/elegance_lock/3.jpg" },
      { type: "image", src: "Images/products/women/elegance_lock/4.jpg" }
    ],
    specifications: [
      { name: 'Название', value: 'Elegance Lock Tote' },
      { name: 'Категория', value: 'Женские сумки' },
      { name: 'Материал', value: 'Чёрная гладкая экокожа' },
      { name: 'Цвет', value: 'Чёрный / Black' },
      { name: 'Особенности', value: 'чёрная гладкая экокожа, золотая металлическая фурнитура, поворотный замок, вместительное основное отделение, прочные ручки для ношения на плече или в руке, структурированный элегантный дизайн' },
      { name: 'Бренд', value: 'RADO BAGS' },
      { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 117,
    name: "Milano Classic Top Handle Bag",
    price: 0,
    category: "women",
    image: "Images/products/women/milano_classic/1.jpg",
    isNew: false,
    onSale: false,
    color: "beige",
    size: "M",
    material: "экокожа",
    description: "Элегантная сумка в стиле top handle в изысканном бежевом оттенке. Лаконичный дизайн и аккуратная форма делают эту модель универсальным аксессуаром для повседневных образов и деловых встреч.\n\nСумка выполнена из гладкой экокожи и хорошо держит форму. Просторное основное отделение закрывается на молнию, обеспечивая безопасность вещей. В комплекте идет регулируемый плечевой ремень, благодаря которому сумку можно носить как в руке, так и на плече.\n\nНейтральный бежевый цвет легко сочетается с любым гардеробом и добавляет образу утончённости.",
    emoji: "👜",
    media: [
      { type: "image", src: "Images/products/women/milano_classic/1.jpg" },
      { type: "image", src: "Images/products/women/milano_classic/2.jpg" },
      { type: "image", src: "Images/products/women/milano_classic/3.jpg" },
      { type: "image", src: "Images/products/women/milano_classic/4.jpg" },
      { type: "image", src: "Images/products/women/milano_classic/5.jpg" },
      { type: "image", src: "Images/products/women/milano_classic/6.jpg" }
    ],
    specifications: [
      { name: 'Название', value: 'Milano Classic Top Handle Bag' },
      { name: 'Категория', value: 'Женские сумки' },
      { name: 'Материал', value: 'Гладкая экокожа' },
      { name: 'Цвет', value: 'Бежевый / Beige' },
      { name: 'Особенности', value: 'гладкая экокожа, классическая форма top handle, съёмный регулируемый плечевой ремень, надёжная застёжка на молнии, компактная и вместительная, универсальный бежевый цвет' },
      { name: 'Бренд', value: 'RADO BAGS' },
      { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 118,
    name: "Candy Pink Mini Shoulder Bag",
    price: 0,
    category: "women",
    image: "Images/products/women/art118/1.jpg",
    isNew: false,
    onSale: false,
    color: "pink",
    size: "M",
    material: "экокожа",
    description: "Компактная и яркая сумка в насыщенном розовом цвете, созданная для стильных повседневных образов. Минималистичный дизайн и аккуратная форма делают эту модель идеальным аксессуаром для прогулок, встреч и вечерних выходов.\n\nСумка выполнена из гладкой экокожи и закрывается на молнию и декоративный поворотный замок. Несмотря на компактный размер, внутри достаточно места для телефона, кошелька, ключей и других необходимых мелочей.\n\nВ комплекте идёт регулируемый длинный ремень, благодаря которому сумку можно носить на плече или как кроссбоди.",
    emoji: "👜",
    media: [
      { type: "image", src: "Images/products/women/art118/1.jpg" },
      { type: "image", src: "Images/products/women/art118/2.jpg" },
      { type: "image", src: "Images/products/women/art118/3.jpg" },
      { type: "image", src: "Images/products/women/art118/4.jpg" },
      { type: "image", src: "Images/products/women/art118/5.jpg" },
      { type: "image", src: "Images/products/women/art118/6.jpg" }
    ],
    specifications: [
      { name: 'Название', value: 'Candy Pink Mini Shoulder Bag' },
      { name: 'Категория', value: 'Женские сумки' },
      { name: 'Материал', value: 'Гладкая экокожа' },
      { name: 'Цвет', value: 'Розовый / Pink' },
      { name: 'Особенности', value: 'гладкая экокожа, яркий розовый цвет, декоративный поворотный замок, застёжка на молнии, съёмный регулируемый плечевой ремень, компактный и лёгкий формат' },
      { name: 'Бренд', value: 'RADO BAGS' },
      { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 119,
    name: "Woven Mini Crossbody Bag",
    price: 0,
    category: "women",
    image: "Images/products/women/woven_mini/1.jpg",
    isNew: false,
    onSale: false,
    color: "black",
    size: "S",
    material: "плетёный материал",
    description: "Компактная сумка с плетёной текстурой, которая добавляет образу стиль и лёгкость. Модель выполнена в минималистичном дизайне и отлично подходит для повседневных прогулок, путешествий и летних образов.\n\nБлагодаря лёгкому и прочному плетению сумка сохраняет форму и остаётся удобной в использовании. Длинный ремень позволяет носить её на плече или как кроссбоди, освобождая руки.\n\nНесмотря на небольшой размер, сумка легко вмещает телефон, ключи, карту и другие необходимые мелочи.",
    emoji: "👜",
    media: [
      { type: "image", src: "Images/products/women/woven_mini/1.jpg" },
      { type: "image", src: "Images/products/women/woven_mini/2.jpg" },
      { type: "image", src: "Images/products/women/woven_mini/3.jpg" },
      { type: "image", src: "Images/products/women/woven_mini/4.jpg" },
      { type: "image", src: "Images/products/women/woven_mini/5.jpg" }
    ],
    specifications: [
      { name: 'Название', value: 'Woven Mini Crossbody Bag' },
      { name: 'Категория', value: 'Женские сумки' },
      { name: 'Размер', value: 'Small' },
      { name: 'Материал', value: 'Плетёная текстура' },
      { name: 'Доступные цвета', value: 'чёрный, коричневый, карамельный, красный, бежевый, тауп' },
      { name: 'Особенности', value: 'стильная плетёная текстура, лёгкая и удобная конструкция, длинный плечевой ремень, компактный и практичный формат, идеально подходит для повседневных образов' },
      { name: 'Бренд', value: 'RADO BAGS' },
      { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 130,
    name: "Soft Elegance Shoulder Bag",
    price: 0,
    category: "women",
    image: "Images/products/women/soft_elegance/1.jpg",
    isNew: false,
    onSale: false,
    color: "Camel",
    size: "L",
    material: "экокожа",
    description: "Элегантная и вместительная женская сумка с мягким силуэтом, созданная для повседневного комфорта и стильных образов. Лаконичный дизайн с плавными линиями делает модель универсальной — она легко сочетается как с деловым стилем, так и с повседневной одеждой.\n\nСумка выполнена из гладкой качественной экокожи и дополнена аккуратной золотой фурнитурой. Клапан с поворотным замком придаёт модели изысканный акцент и обеспечивает удобное закрытие. Мягкая форма позволяет сумке выглядеть элегантно и при этом оставаться практичной.\n\nВнутреннее пространство достаточно вместительное для всех необходимых вещей — телефона, кошелька, косметики и других повседневных аксессуаров. Сумку можно носить за верхнюю ручку или использовать длинный регулируемый ремень для ношения через плечо.",
    emoji: "👜",
    media: [
      { type: "image", src: "Images/products/women/soft_elegance/1.jpg" },
      { type: "image", src: "Images/products/women/soft_elegance/2.jpg" },
      { type: "image", src: "Images/products/women/soft_elegance/3.jpg" },
      { type: "image", src: "Images/products/women/soft_elegance/4.jpg" },
      { type: "image", src: "Images/products/women/soft_elegance/5.jpg" },
      { type: "image", src: "Images/products/women/soft_elegance/6.jpg" },
      { type: "image", src: "Images/products/women/soft_elegance/7.jpg" }
    ],
    specifications: [
      { name: 'Название', value: 'Soft Elegance Shoulder Bag' },
      { name: 'Категория', value: 'Женские сумки' },
      { name: 'Материал', value: 'Экокожа' },
      { name: 'Доступные цвета', value: 'Camel, Black, Chocolate, Taupe' },
      { name: 'Особенности', value: 'мягкий силуэт, клапан с поворотным замком, золотая фурнитура, верхняя ручка, регулируемый плечевой ремень, вместительное основное отделение' },
      { name: 'Бренд', value: 'RADO BAGS' },
      { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 121,
    name: "Mini Top Handle Classic Bag",
    price: 0,
    category: "women",
    image: "Images/products/women/mini_top_handle/1.jpg",
    isNew: false,
    onSale: true,
    color: "taupe",
    size: "M",
    material: "экокожа",
    description: "Компактная сумка с элегантной верхней ручкой, выполненная в минималистичном классическом стиле. Аккуратная структурированная форма и плавные линии придают модели утончённый и современный вид.\n\nСумка изготовлена из гладкой экокожи и идеально подходит для повседневных образов, прогулок и вечерних выходов. Несмотря на миниатюрный размер, внутри достаточно места для телефона, карты, ключей и других необходимых мелочей.\n\nБлагодаря удобной верхней ручке и съёмному ремню сумку можно носить как в руке, так и на плече.",
    emoji: "👜",
    media: [
      { type: "image", src: "Images/products/women/mini_top_handle/1.jpg" },
      { type: "image", src: "Images/products/women/mini_top_handle/2.jpg" },
      { type: "image", src: "Images/products/women/mini_top_handle/3.jpg" },
      { type: "image", src: "Images/products/women/mini_top_handle/4.jpg" },
      { type: "image", src: "Images/products/women/mini_top_handle/5.jpg" },
      { type: "image", src: "Images/products/women/mini_top_handle/6.jpg" }
    ],
    specifications: [
      { name: 'Название', value: 'Mini Top Handle Classic Bag' },
      { name: 'Категория', value: 'Женские сумки' },
      { name: 'Материал', value: 'Гладкая экокожа' },
      { name: 'Доступные цвета', value: 'Taupe, Olive Green, Dark Green, Pink, Purple' },
      { name: 'Особенности', value: 'гладкая экокожа, классическая форма mini bag, удобная верхняя ручка, съёмный плечевой ремень, компактный и лёгкий формат, структурированный силуэт' },
      { name: 'Бренд', value: 'RADO BAGS' },
      { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 122,
    name: "Classic Lock Shoulder Bag",
    price: 0,
    category: "women",
    image: "Images/products/women/classic_lock_shoulder/1.jpg",
    isNew: false,
    onSale: true,
    color: "black",
    size: "M",
    material: "экокожа",
    description: "Стильная сумка через плечо с элегантной металлической застёжкой и современным минималистичным дизайном. Модель выполнена из фактурной экокожи и отличается мягкой, но структурированной формой, которая делает её практичной и универсальной для повседневного использования.\n\nУдобный регулируемый ремень позволяет носить сумку на плече или как кроссбоди. Просторное основное отделение легко вмещает телефон, кошелёк, косметику и другие необходимые вещи.\n\nЛаконичный дизайн и классическая фурнитура делают эту модель отличным выбором как для повседневных образов, так и для более элегантного стиля.",
    emoji: "👜",
    media: [
      { type: "image", src: "Images/products/women/classic_lock_shoulder/1.jpg" },
      { type: "image", src: "Images/products/women/classic_lock_shoulder/2.jpg" },
      { type: "image", src: "Images/products/women/classic_lock_shoulder/3.jpg" },
      { type: "image", src: "Images/products/women/classic_lock_shoulder/4.jpg" },
      { type: "image", src: "Images/products/women/classic_lock_shoulder/5.jpg" },
      { type: "image", src: "Images/products/women/classic_lock_shoulder/6.jpg" }
    ],
    specifications: [
      { name: 'Название', value: 'Classic Lock Shoulder Bag' },
      { name: 'Категория', value: 'Женские сумки' },
      { name: 'Материал', value: 'Фактурная экокожа' },
      { name: 'Доступные цвета', value: 'Black, Beige, Cream' },
      { name: 'Особенности', value: 'фактурная экокожа, стильная металлическая застёжка, регулируемый плечевой ремень, удобный формат shoulder / crossbody, вместительное основное отделение, современный минималистичный дизайн' },
      { name: 'Бренд', value: 'RADO BAGS' },
      { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 123,
    name: "Elegance Lock Top Handle Bag",
    price: 0,
    category: "women",
    image: "Images/products/women/elegance_lock_top/1.jpg",
    isNew: false,
    onSale: false,
    color: "black",
    size: "M",
    material: "экокожа",
    description: "Элегантная сумка с классической верхней ручкой и стильной золотой фурнитурой. Модель выполнена из фактурной экокожи и отличается структурированным силуэтом, который сохраняет форму и придаёт образу утончённость.\n\nСумка идеально подходит как для повседневного использования, так и для более элегантных образов. Просторное основное отделение позволяет удобно разместить телефон, кошелёк, косметику и другие необходимые вещи.\n\nБлагодаря удобной верхней ручке и съёмному плечевому ремню сумку можно носить в руке, на плече или как кроссбоди.",
    emoji: "👜",
    media: [
      { type: "image", src: "Images/products/women/elegance_lock_top/1.jpg" },
      { type: "image", src: "Images/products/women/elegance_lock_top/2.jpg" },
      { type: "image", src: "Images/products/women/elegance_lock_top/3.jpg" },
      { type: "image", src: "Images/products/women/elegance_lock_top/4.jpg" },
      { type: "image", src: "Images/products/women/elegance_lock_top/5.jpg" },
      { type: "image", src: "Images/products/women/elegance_lock_top/6.jpg" }
    ],
    specifications: [
      { name: 'Название', value: 'Elegance Lock Top Handle Bag' },
      { name: 'Категория', value: 'Женские сумки' },
      { name: 'Материал', value: 'Фактурная экокожа' },
      { name: 'Доступные цвета', value: 'Black, Dark Brown, Cream' },
      { name: 'Особенности', value: 'фактурная экокожа, стильная золотая застёжка, классическая верхняя ручка, съёмный регулируемый плечевой ремень, вместительное основное отделение, элегантный структурированный дизайн' },
      { name: 'Бренд', value: 'RADO BAGS' },
      { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 124,
    name: "Vintage Suede Top Handle Bag",
    price: 0,
    category: "women",
    image: "Images/products/women/vintage_suede/1.jpg",
    isNew: false,
    onSale: false,
    color: "chocolate brown",
    size: "M",
    material: "замша",
    description: "Стильная сумка из мягкой замши в насыщенном коричневом оттенке. Модель выполнена в элегантном винтажном стиле и отличается мягкой структурированной формой, которая придаёт образу утончённость и характер.\n\nСумка оснащена удобными верхними ручками и съёмным плечевым ремнём, благодаря чему её можно носить как в руке, так и на плече. Просторное основное отделение позволяет легко разместить все необходимые вещи для повседневного использования.\n\nНатуральная замшевая текстура и тёплый коричневый цвет делают эту модель идеальным аксессуаром для осенних и повседневных образов.",
    emoji: "👜",
    media: [
      { type: "image", src: "Images/products/women/vintage_suede/1.jpg" },
      { type: "image", src: "Images/products/women/vintage_suede/2.jpg" },
      { type: "image", src: "Images/products/women/vintage_suede/3.jpg" },
      { type: "image", src: "Images/products/women/vintage_suede/4.jpg" },
      { type: "image", src: "Images/products/women/vintage_suede/5.jpg" },
      { type: "image", src: "Images/products/women/vintage_suede/6.jpg" },
      { type: "image", src: "Images/products/women/vintage_suede/7.jpg" }
    ],
    specifications: [
      { name: 'Название', value: 'Vintage Suede Top Handle Bag' },
      { name: 'Категория', value: 'Женские сумки' },
      { name: 'Материал', value: 'Мягкая замша' },
      { name: 'Цвет', value: 'Brown / Chocolate Brown' },
      { name: 'Особенности', value: 'мягкая замшевая текстура, элегантная форма top handle, съёмный регулируемый плечевой ремень, вместительное основное отделение, винтажный стиль' },
      { name: 'Бренд', value: 'RADO BAGS' },
      { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 125,
    name: "Luxe Handle Mini Bag",
    price: 0,
    category: "women",
    image: "Images/products/women/luxe_handle/1.jpg",
    isNew: false,
    onSale: false,
    color: "black",
    size: "M",
    material: "экокожа",
    description: "Элегантная мини-сумка с выразительной верхней ручкой и стильной золотой фурнитурой. Модель выполнена из гладкой экокожи и отличается структурированным силуэтом, который придаёт сумке современный и премиальный вид.\n\nПлетёная ручка делает дизайн уникальным и добавляет акцент в образе. Сумка идеально подходит для повседневных выходов, встреч или вечерних образов. Внутри достаточно места для телефона, карты, ключей и других необходимых мелочей.\n\nБлагодаря съёмному ремню сумку можно носить как в руке, на плече или как кроссбоди.",
    emoji: "👜",
    media: [
      { type: "image", src: "Images/products/women/luxe_handle/1.jpg" },
      { type: "image", src: "Images/products/women/luxe_handle/2.jpg" },
      { type: "image", src: "Images/products/women/luxe_handle/3.jpg" },
      { type: "image", src: "Images/products/women/luxe_handle/4.jpg" },
      { type: "image", src: "Images/products/women/luxe_handle/5.jpg" },
      { type: "image", src: "Images/products/women/luxe_handle/6.jpg" }
    ],
    specifications: [
      { name: 'Название', value: 'Luxe Handle Mini Bag' },
      { name: 'Категория', value: 'Женские сумки' },
      { name: 'Материал', value: 'Гладкая экокожа' },
      { name: 'Доступные цвета', value: 'Black, Dark Brown, Tan, Beige' },
      { name: 'Особенности', value: 'гладкая экокожа, стильная золотая застёжка, оригинальная плетёная ручка, съёмный регулируемый ремень, компактный и удобный формат, структурированный элегантный дизайн' },
      { name: 'Бренд', value: 'RADO BAGS' },
      { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 126,
    name: "Classic Leather Tote Bag",
    price: 0,
    category: "women",
    image: "Images/products/women/classic_leather_tote/1.jpg",
    isNew: false,
    onSale: false,
    color: "tan",
    size: "M",
    material: "экокожа",
    description: "Стильная и универсальная сумка-тоут в тёплом коричневом оттенке. Модель выполнена из гладкой экокожи с мягкой текстурой и отличается элегантным минималистичным дизайном.\n\nПросторное основное отделение делает сумку идеальной для повседневного использования — она легко вмещает документы, кошелёк, телефон, косметику и другие необходимые вещи. Длинные ручки позволяют комфортно носить сумку на плече или в руке.\n\nКлассический силуэт и тёплый карамельно-коричневый цвет делают эту модель универсальным аксессуаром, который легко сочетается как с деловым, так и с повседневным стилем.",
    emoji: "👜",
    media: [
      { type: "image", src: "Images/products/women/classic_leather_tote/1.jpg" },
      { type: "image", src: "Images/products/women/classic_leather_tote/2.jpg" },
      { type: "image", src: "Images/products/women/classic_leather_tote/3.jpg" },
      { type: "image", src: "Images/products/women/classic_leather_tote/4.jpg" },
      { type: "image", src: "Images/products/women/classic_leather_tote/5.jpg" }
    ],
    specifications: [
      { name: 'Название', value: 'Classic Leather Tote Bag' },
      { name: 'Категория', value: 'Женские сумки' },
      { name: 'Материал', value: 'Гладкая экокожа' },
      { name: 'Цвет', value: 'Tan / Caramel Brown' },
      { name: 'Особенности', value: 'гладкая экокожа, вместительный формат tote, удобные длинные ручки, минималистичный классический дизайн, лёгкая и практичная' },
      { name: 'Бренд', value: 'RADO BAGS' },
      { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 127,
    name: "Suede Accent Shoulder Bag",
    price: 0,
    category: "women",
    image: "Images/products/women/suede_accent/1.jpg",
    isNew: false,
    onSale: false,
    color: "black",
    size: "M",
    material: "экокожа и замша",
    description: "Элегантная сумка с мягким силуэтом и стильной замшевой вставкой. Модель сочетает гладкую экокожу и текстурную замшу, создавая современный и изысканный дизайн.\n\nСумка оснащена удобной ручкой и декоративной золотой фурнитурой, которая добавляет образу премиальный акцент. Просторное основное отделение позволяет удобно разместить все необходимые вещи для повседневного использования — телефон, кошелёк, косметику и аксессуары.\n\nБлагодаря универсальному дизайну сумка идеально подходит как для повседневных образов, так и для более элегантного стиля.",
    emoji: "👜",
    media: [
      { type: "image", src: "Images/products/women/suede_accent/1.jpg" },
      { type: "image", src: "Images/products/women/suede_accent/2.jpg" },
      { type: "image", src: "Images/products/women/suede_accent/3.jpg" },
      { type: "image", src: "Images/products/women/suede_accent/4.jpg" },
      { type: "image", src: "Images/products/women/suede_accent/5.jpg" }
    ],
    specifications: [
      { name: 'Название', value: 'Suede Accent Shoulder Bag' },
      { name: 'Категория', value: 'Женские сумки' },
      { name: 'Материал', value: 'Экокожа и замша' },
      { name: 'Доступные цвета', value: 'Black, Brown, Burgundy, Camel, Taupe' },
      { name: 'Особенности', value: 'сочетание экокожи и замши, мягкий структурированный силуэт, стильная золотая фурнитура, удобная верхняя ручка, вместительное основное отделение' },
      { name: 'Бренд', value: 'RADO BAGS' },
      { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 128,
    name: "Moon Gloss Shoulder Bag",
    price: 0,
    category: "women",
    image: "Images/products/women/moon_gloss/1.jpg",
    isNew: false,
    onSale: true,
    color: "Cream",
    size: "M",
    material: "глянцевая экокожа",
    description: "Стильная женская сумка формы полумесяца с гладкой глянцевой поверхностью, которая придаёт образу современный и элегантный акцент. Минималистичный силуэт делает модель универсальной — она легко сочетается как с повседневными, так и с более вечерними образами.\n\nСумка выполнена из качественной экокожи с лакированным эффектом и дополнена аккуратной металлической фурнитурой. Удобная верхняя ручка позволяет комфортно носить её на плече или в руке. Основное отделение закрывается на молнию и подходит для хранения телефона, кошелька, ключей и других необходимых мелочей.",
    emoji: "👜",
    media: [
      { type: "image", src: "Images/products/women/moon_gloss/1.jpg" },
      { type: "image", src: "Images/products/women/moon_gloss/2.jpg" },
      { type: "image", src: "Images/products/women/moon_gloss/3.jpg" },
      { type: "image", src: "Images/products/women/moon_gloss/4.jpg" },
      { type: "image", src: "Images/products/women/moon_gloss/5.jpg" }
    ],
    specifications: [
      { name: 'Название', value: 'Moon Gloss Shoulder Bag' },
      { name: 'Категория', value: 'Женские сумки' },
      { name: 'Материал', value: 'Глянцевая экокожа' },
      { name: 'Доступные цвета', value: 'Black, Chocolate, Camel, Cream, Sky Blue' },
      { name: 'Особенности', value: 'форма полумесяца, глянцевое покрытие, минималистичный дизайн, металлическая фурнитура, верхняя ручка, основное отделение на молнии' },
      { name: 'Бренд', value: 'RADO BAGS' },
      { name: 'Страна', value: 'Молдова' }
    ]
  },
  {
    id: 129,
    name: "Classic Lock Top Handle Bag",
    price: 0,
    category: "women",
    image: "Images/products/women/classic_lock_top_handle/1.jpg",
    isNew: false,
    onSale: true,
    color: "Black",
    size: "M",
    material: "экокожа",
    description: "Элегантная структурированная сумка с верхней ручкой, выполненная в классическом стиле. Чистые линии и лаконичный силуэт делают модель универсальной — она идеально подходит как для деловых образов, так и для повседневной элегантности.\n\nСумка изготовлена из качественной гладкой экокожи и украшена изысканной золотой фурнитурой с декоративным центральным замком, который придаёт модели премиальный характер. Жёсткая форма помогает сумке сохранять аккуратный внешний вид, а удобная верхняя ручка обеспечивает комфорт при ношении.\n\nОсновное отделение позволяет разместить все необходимые вещи: телефон, кошелёк, ключи и косметику, сохраняя порядок внутри сумки.",
    emoji: "👜",
    media: [
      { type: "image", src: "Images/products/women/classic_lock_top_handle/1.jpg" },
      { type: "image", src: "Images/products/women/classic_lock_top_handle/2.jpg" },
      { type: "image", src: "Images/products/women/classic_lock_top_handle/3.jpg" },
      { type: "image", src: "Images/products/women/classic_lock_top_handle/4.jpg" },
      { type: "image", src: "Images/products/women/classic_lock_top_handle/5.jpg" },
      { type: "image", src: "Images/products/women/classic_lock_top_handle/6.jpg" }
    ],
    specifications: [
      { name: 'Название', value: 'Classic Lock Top Handle Bag' },
      { name: 'Категория', value: 'Женские сумки' },
      { name: 'Материал', value: 'Экокожа' },
      { name: 'Доступные цвета', value: 'Black, Chocolate' },
      { name: 'Особенности', value: 'структурированная форма, золотая фурнитура, декоративный замок, верхняя ручка, вместительное основное отделение' },
      { name: 'Бренд', value: 'RADO BAGS' },
      { name: 'Страна', value: 'Молдова' }
    ]
  }
];

// Настройки пагинации для страниц категорий
const CATEGORY_ITEMS_PER_PAGE = 12;
let categoryCurrentPage = 1;
let categoryList = [];
let filteredList = [];
let activeFilters = {
  colors: [],
  sizes: [],
  priceMin: 0,
  priceMax: 1000
};

document.addEventListener('DOMContentLoaded', () => {
  initCategoryPage();
  initFilters();
  // Инициализируем корзину, если функция существует
  if (typeof initCart === 'function') {
    initCart();
  } else {
    // Иначе просто обновляем счетчик и отображение
    if (typeof updateCartCount === 'function') updateCartCount();
    if (typeof updateCartDisplay === 'function') updateCartDisplay();
  }
});

function initCategoryPage() {
  const path = window.location.pathname.split('/').pop();
  if (!path) return;

  if (path.includes('women')) {
    categoryList = products.filter(p => p.category === 'women' && (p.id === 76 || p.id === 77 || p.id === 78 || p.id === 79 || p.id === 130 || p.id === 131 || p.id === 128 || p.id === 129 || (p.id >= 116 && p.id <= 127)));
  } else if (path.includes('new')) {
    const womenLineIds = [77, 78, 79, 121, 122, 128, 129];
    categoryList = products.filter(p => (p.id >= 75 && p.id <= 100) && p.isNew && !womenLineIds.includes(p.id)).slice(0, 5);
  } else if (path.includes('sale')) {
    const womenLineIds = [77, 78, 79, 121, 122, 128, 129];
    const saleFeatured = products.filter(p => (p.id === 128 || p.id === 129 || p.id === 122 || p.id === 121 || p.id === 79) && !womenLineIds.includes(p.id));
    const otherSale = products.filter(p => p.onSale && p.id >= 102 && p.id <= 115);
    categoryList = [...saleFeatured, ...otherSale].filter(Boolean).slice(0, 5);
  } else if (path.includes('accessories')) {
    categoryList = products.filter(p => p.category === 'accessories');
  } else if (path.includes('men')) {
    // Артикулы с фото (102–106) + 7 артикулов мужской линии (210–216)
    const menWithPhotos = products.filter(p => p.onSale && p.id >= 102 && p.id <= 106);
    const menLine = products.filter(p => p.category === 'men' && p.id >= 210 && p.id <= 216);
    categoryList = [...menWithPhotos, ...menLine];
  } else {
    return;
  }

  // Инициализируем фильтрованный список
  filteredList = [...categoryList];
  
  // Находим максимальную цену для слайдера
  const maxPrice = Math.max(...categoryList.map(p => p.price || p.oldPrice || 0));
  if (maxPrice > 0) {
    activeFilters.priceMax = Math.ceil(maxPrice / 50) * 50; // Округляем до 50
    const priceMaxRange = document.getElementById('price-max');
    const priceMaxInput = document.getElementById('price-max-input');
    if (priceMaxRange) {
      priceMaxRange.max = activeFilters.priceMax;
      priceMaxRange.value = activeFilters.priceMax;
    }
    if (priceMaxInput) {
      priceMaxInput.max = activeFilters.priceMax;
      priceMaxInput.value = activeFilters.priceMax;
    }
    updatePriceDisplay();
  }

  renderCategoryPage(categoryCurrentPage);
}

// Инициализация фильтров
function initFilters() {
  // Ждем, пока categoryList будет заполнен
  setTimeout(() => {
    if (categoryList.length > 0) {
      setupColorFilters();
      setupSizeFilters();
      setupPriceFilters();
    }
  }, 100);
}

// Порядок размеров для фильтра (все возможные в каталоге)
const SIZE_ORDER = ['S', 'M', 'L', 'XL', 'XXL', 'One Size'];

// Порядок цветов для фильтра (как показывать; остальные — по алфавиту в конец)
const COLOR_ORDER = [
  'бежевый', 'белый', 'beige', 'black', 'черный',
  'карамельный', 'camel', 'chocolate brown', 'коричневый', 'dark brown', 'tan', 'taupe',
  'оливковый', 'розовый', 'pink', 'серый', 'синий'
];

// Настройка фильтров по цвету
function setupColorFilters() {
  const colorFiltersContainer = document.getElementById('color-filters');
  if (!colorFiltersContainer) return;

  // Все уникальные цвета из текущей категории
  const colorSet = new Set(categoryList.map(p => p.color).filter(Boolean));
  const colors = [...colorSet].sort((a, b) => {
    const ia = COLOR_ORDER.indexOf(a);
    const ib = COLOR_ORDER.indexOf(b);
    if (ia !== -1 && ib !== -1) return ia - ib;
    if (ia !== -1) return -1;
    if (ib !== -1) return 1;
    return String(a).localeCompare(String(b));
  });

  colorFiltersContainer.innerHTML = '';
  colors.forEach(color => {
    const option = document.createElement('div');
    option.className = 'filter-option';
    option.textContent = color;
    option.dataset.color = color;
    option.onclick = () => toggleColorFilter(color, option);
    colorFiltersContainer.appendChild(option);
  });
}

// Настройка фильтров по размеру
function setupSizeFilters() {
  const sizeFiltersContainer = document.getElementById('size-filters');
  if (!sizeFiltersContainer) return;

  // Все уникальные размеры из текущей категории, в порядке S, M, L, XL, ...
  const sizeSet = new Set(categoryList.map(p => p.size).filter(Boolean));
  const sizes = [...sizeSet].sort((a, b) => {
    const ia = SIZE_ORDER.indexOf(a);
    const ib = SIZE_ORDER.indexOf(b);
    if (ia !== -1 && ib !== -1) return ia - ib;
    if (ia !== -1) return -1;
    if (ib !== -1) return 1;
    return String(a).localeCompare(String(b));
  });

  sizeFiltersContainer.innerHTML = '';
  sizes.forEach(size => {
    const option = document.createElement('div');
    option.className = 'filter-option';
    option.textContent = size;
    option.dataset.size = size;
    option.onclick = () => toggleSizeFilter(size, option);
    sizeFiltersContainer.appendChild(option);
  });
}

// Настройка фильтров по цене
function setupPriceFilters() {
  const priceMinRange = document.getElementById('price-min');
  const priceMaxRange = document.getElementById('price-max');
  const priceMinInput = document.getElementById('price-min-input');
  const priceMaxInput = document.getElementById('price-max-input');
  
  // Слайдеры
  if (priceMinRange && priceMaxRange) {
    priceMinRange.addEventListener('input', () => {
      const min = parseInt(priceMinRange.value);
      const max = parseInt(priceMaxRange.value);
      if (min > max) {
        priceMinRange.value = max;
      }
      activeFilters.priceMin = parseInt(priceMinRange.value);
      if (priceMinInput) priceMinInput.value = activeFilters.priceMin;
      applyFilters();
    });
    
    priceMaxRange.addEventListener('input', () => {
      const min = parseInt(priceMinRange.value);
      const max = parseInt(priceMaxRange.value);
      if (max < min) {
        priceMaxRange.value = min;
      }
      activeFilters.priceMax = parseInt(priceMaxRange.value);
      if (priceMaxInput) priceMaxInput.value = activeFilters.priceMax;
      applyFilters();
    });
  }
  
  // Поля ввода
  if (priceMinInput && priceMaxInput) {
    priceMinInput.addEventListener('change', () => {
      const min = parseInt(priceMinInput.value) || 0;
      const max = parseInt(priceMaxInput.value) || activeFilters.priceMax;
      if (min > max) {
        priceMinInput.value = max;
      }
      activeFilters.priceMin = parseInt(priceMinInput.value) || 0;
      if (priceMinRange) priceMinRange.value = activeFilters.priceMin;
      applyFilters();
    });
    
    priceMaxInput.addEventListener('change', () => {
      const min = parseInt(priceMinInput.value) || 0;
      const max = parseInt(priceMaxInput.value) || activeFilters.priceMax;
      if (max < min) {
        priceMaxInput.value = min;
      }
      activeFilters.priceMax = parseInt(priceMaxInput.value) || activeFilters.priceMax;
      if (priceMaxRange) priceMaxRange.value = activeFilters.priceMax;
      applyFilters();
    });
  }
}

// Обновление отображения диапазона цен
function updatePriceDisplay() {
  const priceMinInput = document.getElementById('price-min-input');
  const priceMaxInput = document.getElementById('price-max-input');
  const priceMinRange = document.getElementById('price-min');
  const priceMaxRange = document.getElementById('price-max');
  
  if (priceMinInput) priceMinInput.value = activeFilters.priceMin;
  if (priceMaxInput) priceMaxInput.value = activeFilters.priceMax;
  if (priceMinRange) priceMinRange.value = activeFilters.priceMin;
  if (priceMaxRange) priceMaxRange.value = activeFilters.priceMax;
}

// Переключение фильтра по цвету
function toggleColorFilter(color, element) {
  const index = activeFilters.colors.indexOf(color);
  if (index > -1) {
    activeFilters.colors.splice(index, 1);
    element.classList.remove('active');
  } else {
    activeFilters.colors.push(color);
    element.classList.add('active');
  }
  applyFilters();
}

// Переключение фильтра по размеру
function toggleSizeFilter(size, element) {
  const index = activeFilters.sizes.indexOf(size);
  if (index > -1) {
    activeFilters.sizes.splice(index, 1);
    element.classList.remove('active');
  } else {
    activeFilters.sizes.push(size);
    element.classList.add('active');
  }
  applyFilters();
}

// Применение фильтров
function applyFilters() {
  filteredList = categoryList.filter(product => {
    // Фильтр по цвету
    if (activeFilters.colors.length > 0) {
      if (!activeFilters.colors.includes(product.color)) {
        return false;
      }
    }
    
    // Фильтр по размеру
    if (activeFilters.sizes.length > 0) {
      if (!activeFilters.sizes.includes(product.size)) {
        return false;
      }
    }
    
    // Фильтр по цене
    const productPrice = product.price || product.oldPrice || 0;
    if (productPrice < activeFilters.priceMin || productPrice > activeFilters.priceMax) {
      return false;
    }
    
    return true;
  });
  
  categoryCurrentPage = 1;
  renderCategoryPage(categoryCurrentPage);
}

// Сброс фильтров
function clearFilters() {
  activeFilters = {
    colors: [],
    sizes: [],
    priceMin: 0,
    priceMax: Math.max(...categoryList.map(p => p.price || p.oldPrice || 1000))
  };
  
  // Сбрасываем UI
  document.querySelectorAll('.filter-option.active').forEach(el => {
    el.classList.remove('active');
  });
  
  const priceMinRange = document.getElementById('price-min');
  const priceMaxRange = document.getElementById('price-max');
  const priceMinInput = document.getElementById('price-min-input');
  const priceMaxInput = document.getElementById('price-max-input');
  
  if (priceMinRange) priceMinRange.value = 0;
  if (priceMaxRange) {
    priceMaxRange.value = activeFilters.priceMax;
    priceMaxRange.max = activeFilters.priceMax;
  }
  if (priceMinInput) priceMinInput.value = 0;
  if (priceMaxInput) {
    priceMaxInput.value = activeFilters.priceMax;
    priceMaxInput.max = activeFilters.priceMax;
  }
  
  updatePriceDisplay();
  applyFilters();
}

function renderCategoryPage(page) {
  const grid = document.getElementById('category-grid');
  const pagination = document.getElementById('category-pagination');
  if (!grid || !Array.isArray(filteredList) || filteredList.length === 0) {
    if (grid) {
      grid.innerHTML = '<p style="text-align: center; padding: 40px; color: #666;">Товары не найдены</p>';
    }
    if (pagination) pagination.innerHTML = '';
    return;
  }

  const totalItems = filteredList.length;
  categoryCurrentPage = 1;
  const pageItems = filteredList;

  function getSecondImage(p) {
    if (p.image2) return p.image2;
    if (p.media && Array.isArray(p.media)) {
      const img = p.media.find(m => m.type === 'image' && m.src && m.src !== p.image);
      if (img) return img.src;
      if (p.media[1] && p.media[1].src) return p.media[1].src;
    }
    return null;
  }
  function getBadge(p) {
    if (p.badge) {
      const b = String(p.badge).toUpperCase();
      const cls = b === 'SALE' ? 'product-badge--sale' : b === 'BESTSELLER' ? 'product-badge--bestseller' : '';
      return { text: b, class: cls };
    }
    if (p.isNew) return { text: 'Новинка', class: 'product-badge--novinka' };
    if (p.onSale) return { text: 'SALE', class: 'product-badge--sale' };
    return null;
  }
  const colorToHex = {
    black: '#1a1a1a', white: '#f5f5f0', grey: '#9e9e9e', gray: '#9e9e9e', серый: '#9e9e9e', черный: '#1a1a1a',
    brown: '#6d4c3d', коричневый: '#6d4c3d', beige: '#c4a77d', бежевый: '#c4a77d',
    navy: '#2c3e50', blue: '#4a6fa5', red: '#a63d3d', green: '#4a6b4a', olive: '#6b7c3d', оливковый: '#6b7c3d',
    tan: '#b8860b', burgundy: '#722f37', yellow: '#c9b037'
  };
  function getSwatchColors(p) {
    const list = Array.isArray(p.colors) ? p.colors : (p.color ? [p.color] : []);
    return list.map(c => {
      const key = String(c || '').toLowerCase().trim();
      return { name: key, hex: colorToHex[key] || '#ccc' };
    });
  }
  function getAllImages(p) {
    const out = [];
    if (p.image) out.push(p.image);
    if (p.image2 && p.image2 !== p.image) out.push(p.image2);
    if (Array.isArray(p.media)) {
      p.media.forEach(m => {
        if (m.type === 'image' && m.src && !out.includes(m.src)) out.push(m.src);
        if (m.type === 'video' && m.poster && !out.includes(m.poster)) out.push(m.poster);
      });
    }
    return out;
  }

  grid.innerHTML = '';
  pageItems.forEach(product => {
    const emoji = product.emoji || '👜';
    const allImages = getAllImages(product);
    const swatches = getSwatchColors(product);
    const swatchesHtml = swatches.length
      ? `<div class="product-swatches">${swatches.map(s => `<span class="product-swatch" style="background-color:${s.hex}" title="${s.name}"></span>`).join('')}</div>`
      : '<div class="product-swatches"></div>';
    const hasSale = !!(product.oldPrice || product.onSale);
    const priceHtml = hasSale && product.oldPrice
      ? `<span class="product-price-minimal product-price-minimal--old">${product.oldPrice} MDL</span> <span class="product-price-minimal">${product.price} MDL</span>`
      : `<span class="product-price-minimal">${product.price} MDL</span>`;
    const imagesList = allImages.length > 1 ? allImages.join('|') : '';
    const firstImg = allImages[0] || '';
    const imageBlock = allImages.length > 0
      ? `<img src="${firstImg}" alt="" class="product-img product-img-cycle" onerror="this.style.display='none'" ${imagesList ? `data-product-images="${imagesList.replace(/"/g, '&quot;')}"` : ''}>${allImages.length > 1 ? '<button type="button" class="product-image-prev" aria-label="Предыдущее фото">‹</button><button type="button" class="product-image-next" aria-label="Следующее фото">›</button>' : ''}`
      : `<div class='product-emoji'>${emoji}</div>`;
    grid.innerHTML += `
      <div class="product-card product-card--catalog product-card--minimal" data-product-id="${product.id}">
        <div class="product-image product-image--cycle">${imageBlock}<div class="product-image__overlay">${swatchesHtml}<div class="product-price-minimal-wrap">${priceHtml}</div></div></div>
      </div>`;
  });

  renderCategoryPagination(1);

  // Листание фото при наведении
  grid.querySelectorAll('.product-img-cycle[data-product-images]').forEach(img => {
    const container = img.closest('.product-image--cycle');
    if (!container) return;
    const prevBtn = container.querySelector('.product-image-prev');
    const nextBtn = container.querySelector('.product-image-next');
    if (!img.dataset.productImages) return;
    const images = img.dataset.productImages.split('|').filter(Boolean);
    if (images.length < 2) return;
    let index = 0;
    let intervalId = null;
    function showImage(i) {
      index = (i + images.length) % images.length;
      img.src = images[index];
    }
    function startCycle() {
      if (intervalId) return;
      intervalId = setInterval(() => { showImage(index + 1); }, 2500);
    }
    function stopCycle() {
      if (intervalId) { clearInterval(intervalId); intervalId = null; }
      showImage(0);
    }
    container.addEventListener('mouseenter', startCycle);
    container.addEventListener('mouseleave', stopCycle);
    if (prevBtn) prevBtn.addEventListener('click', (e) => { e.stopPropagation(); e.preventDefault(); showImage(index - 1); });
    if (nextBtn) nextBtn.addEventListener('click', (e) => { e.stopPropagation(); e.preventDefault(); showImage(index + 1); });
  });

  // Делаем карточки кликабельными (переход на страницу товара)
  if (typeof makeProductCardsClickable === 'function') {
    makeProductCardsClickable();
  } else {
    document.querySelectorAll('.product-card').forEach(card => {
      const id = card.dataset.productId;
      if (!id) return;
      card.style.cursor = 'pointer';
      card.addEventListener('click', (e) => {
        if (!e.target.closest('.product-image-prev') && !e.target.closest('.product-image-next')) {
          window.location.href = `product.html?id=${id}`;
        }
      });
    });
  }
}

function renderCategoryPagination(totalPages) {
  const pagination = document.getElementById('category-pagination');
  if (!pagination) return;
  pagination.innerHTML = '';

  if (totalPages <= 1) return;

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement('button');
    btn.className = 'page-btn' + (i === categoryCurrentPage ? ' active' : '');
    btn.textContent = i;
    btn.onclick = () => {
      renderCategoryPage(i);
    };
    pagination.appendChild(btn);
  }
}