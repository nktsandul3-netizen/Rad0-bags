// База данных с детальной информацией о товарах
const productDetails = {
    1: {
        id: 1,
        name: "RADO Женская сумка шоппер NM301",
        price: 595,
        originalPrice: 675,
        category: "women",
        color: "черный",
        size: "L",
        material: "кожа",
        description: "Элегантная женская сумка шоппер из натуральной кожи. Идеальный выбор для повседневного использования. Просторное основное отделение, внутренний карман на молнии, регулируемый ремень.",
        features: ["Натуральная кожа", "Регулируемый ремень", "Внутренний карман", "Прочный замок"],
        images: [
            "Images/products/women/top1-1.jpg",
            "Images/products/women/top1-2.jpg",
            "Images/products/women/top1-3.jpg",
            "Images/products/women/top1-4.jpg"
        ],
        colors: ["черный", "коричневый", "бежевый"],
        sizes: ["S", "M", "L"],
        specifications: {
            "Материал": "Натуральная кожа",
            "Размеры": "30×25×15 см",
            "Вес": "0.8 кг",
            "Отделения": "Основное + карман на молнии",
            "Ремень": "Регулируемый, 120 см",
            "Фурнитура": "Металлическая"
        }
    },
    2: {
        id: 2,
        name: "RADO Женская сумка на плечо NM291",
        price: 595,
        category: "women",
        color: "коричневый",
        size: "M",
        material: "кожа",
        description: "Стильная сумка на плечо из качественной кожи. Компактный размер идеально подходит для ежедневного использования.",
        features: ["Качественная кожа", "Компактный размер", "Удобный ремень", "Стильный дизайн"],
        images: [
            "Images/products/women/top2-1.jpg",
            "Images/products/women/top2-2.jpg",
            "Images/products/women/top2-3.jpg"
        ],
        colors: ["коричневый", "черный", "бордовый"],
        sizes: ["S", "M"],
        specifications: {
            "Материал": "Натуральная кожа",
            "Размеры": "25×20×10 см",
            "Вес": "0.6 кг",
            "Отделения": "Основное отделение",
            "Ремень": "Съемный, 115 см",
            "Фурнитура": "Металлическая"
        }
    },
    // Добавь остальные товары по аналогии...
    11: {
        id: 11,
        name: "RADO Мужской рюкзак Urban M202",
        price: 300,
        category: "men",
        color: "черный",
        size: "M",
        material: "нейлон",
        description: "Стильный городской рюкзак для современного мужчины. Идеален для работы, учебы и путешествий.",
        features: ["Водоотталкивающий нейлон", "Отделение для ноутбука", "Эргономичные лямки", "Современный дизайн"],
        images: [
            "Images/products/men/top1-1.jpg",
            "Images/products/men/top1-2.jpg",
            "Images/products/men/top1-3.jpg"
        ],
        colors: ["черный", "серый", "синий"],
        sizes: ["S", "M", "L"],
        specifications: {
            "Материал": "Водоотталкивающий нейлон",
            "Размеры": "45×30×15 см",
            "Вес": "0.9 кг",
            "Ноутбук": "До 15.6 дюймов",
            "Лямки": "Эргономичные, регулируемые",
            "Карманы": "Основной + 3 дополнительных"
        }
    }
    // Продолжай для всех товаров...
};

let currentProductId = null;
let selectedColor = null;
let selectedSize = null;
let productQuantity = 1;

// Инициализация страницы товара
document.addEventListener('DOMContentLoaded', function() {
    // Получаем ID товара из URL
    const urlParams = new URLSearchParams(window.location.search);
    currentProductId = parseInt(urlParams.get('id'));
    
    if (currentProductId && productDetails[currentProductId]) {
        displayProductDetails(currentProductId);
        displayRelatedProducts(currentProductId);
    } else {
        // Если товар не найден, редирект на главную
        window.location.href = 'index.html';
    }
    
    updateCartCount();
});

// Показать детали товара
function displayProductDetails(productId) {
    const product = productDetails[productId];
    if (!product) return;

    // Заголовок и описание
    document.getElementById('product-title').textContent = product.name;
    document.getElementById('product-description').textContent = product.description;
    
    // Хлебные крошки
    document.getElementById('breadcrumb-category').textContent = product.category === 'women' ? 'Женские' : 'Мужские';
    document.getElementById('breadcrumb-category').href = product.category === 'women' ? 'women.html' : 'men.html';
    document.getElementById('breadcrumb-product').textContent = product.name;

    // Цены
    const currentPriceElement = document.getElementById('current-price');
    const originalPriceElement = document.getElementById('original-price');
    const discountBadgeElement = document.getElementById('discount-badge');
    
    currentPriceElement.textContent = `${product.price} MDL`;
    
    if (product.originalPrice) {
        originalPriceElement.textContent = `${product.originalPrice} MDL`;
        const discount = Math.round((1 - product.price / product.originalPrice) * 100);
        discountBadgeElement.textContent = `-${discount}%`;
        discountBadgeElement.style.display = 'block';
    } else {
        originalPriceElement.style.display = 'none';
        discountBadgeElement.style.display = 'none';
    }

    // Галерея изображений
    displayProductGallery(product.images);
    
    // Цвета
    displayColorOptions(product.colors, product.color);
    
    // Размеры
    displaySizeOptions(product.sizes, product.size);
    
    // Характеристики
    displaySpecifications(product.specifications);
}

// Показать галерею изображений
function displayProductGallery(images) {
    const mainImage = document.getElementById('main-product-image');
    const thumbnailsContainer = document.getElementById('image-thumbnails');
    
    // Основное изображение
    mainImage.src = images[0];
    mainImage.alt = document.getElementById('product-title').textContent;
    
    // Миниатюры
    thumbnailsContainer.innerHTML = '';
    images.forEach((image, index) => {
        const thumbnail = document.createElement('div');
        thumbnail.className = `thumbnail ${index === 0 ? 'active' : ''}`;
        thumbnail.innerHTML = `<img src="${image}" alt="Изображение ${index + 1}">`;
        thumbnail.onclick = () => changeMainImage(image, thumbnail);
        thumbnailsContainer.appendChild(thumbnail);
    });
}

// Сменить основное изображение
function changeMainImage(imageSrc, clickedThumbnail) {
    document.getElementById('main-product-image').src = imageSrc;
    
    // Убираем активный класс у всех миниатюр
    document.querySelectorAll('.thumbnail').forEach(thumb => {
        thumb.classList.remove('active');
    });
    
    // Добавляем активный класс к выбранной миниатюре
    clickedThumbnail.classList.add('active');
}

// Показать варианты цветов
function displayColorOptions(colors, defaultColor) {
    const container = document.getElementById('color-options');
    container.innerHTML = '';
    
    colors.forEach(color => {
        const colorOption = document.createElement('div');
        colorOption.className = `color-option ${color === defaultColor ? 'selected' : ''}`;
        colorOption.innerHTML = `
            <span class="color-dot" style="background-color: ${getColorCode(color)}" title="${color}"></span>
            <span class="color-name">${color}</span>
        `;
        colorOption.onclick = () => selectColor(color, colorOption);
        container.appendChild(colorOption);
    });
    
    selectedColor = defaultColor;
}

// Выбрать цвет
function selectColor(color, element) {
    selectedColor = color;
    
    // Убираем выделение у всех вариантов
    document.querySelectorAll('.color-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    
    // Выделяем выбранный вариант
    element.classList.add('selected');
}

// Показать варианты размеров
function displaySizeOptions(sizes, defaultSize) {
    const container = document.getElementById('size-options');
    container.innerHTML = '';
    
    sizes.forEach(size => {
        const sizeOption = document.createElement('div');
        sizeOption.className = `size-option ${size === defaultSize ? 'selected' : ''}`;
        sizeOption.textContent = size;
        sizeOption.onclick = () => selectSize(size, sizeOption);
        container.appendChild(sizeOption);
    });
    
    selectedSize = defaultSize;
}

// Выбрать размер
function selectSize(size, element) {
    selectedSize = size;
    
    // Убираем выделение у всех вариантов
    document.querySelectorAll('.size-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    
    // Выделяем выбранный вариант
    element.classList.add('selected');
}

// Показать характеристики
function displaySpecifications(specs) {
    const container = document.getElementById('product-specs');
    container.innerHTML = '';
    
    for (const [key, value] of Object.entries(specs)) {
        const specItem = document.createElement('div');
        specItem.className = 'spec-item';
        specItem.innerHTML = `
            <span class="spec-name">${key}:</span>
            <span class="spec-value">${value}</span>
        `;
        container.appendChild(specItem);
    }
}

// Показать похожие товары
function displayRelatedProducts(currentProductId) {
    const container = document.getElementById('related-products-grid');
    const currentProduct = productDetails[currentProductId];
    if (!currentProduct) return;
    
    // Находим товары из той же категории
    const relatedProducts = Object.values(productDetails).filter(product => 
        product.category === currentProduct.category && product.id !== currentProductId
    ).slice(0, 4); // Берем первые 4 товара
    
    container.innerHTML = '';
    relatedProducts.forEach(product => {
        const productCard = `
            <div class="product-card">
                <div class="product-image" onclick="location.href='product.html?id=${product.id}'">
                    <img src="${product.images[0]}" alt="${product.name}" 
                         onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
                    <div class="product-emoji" style="display: none">${product.category === 'women' ? '👜' : '🎒'}</div>
                </div>
                <h3>${product.name}</h3>
                <div class="product-price">${product.price} MDL</div>
                <button class="add-to-cart" onclick="event.stopPropagation(); addToCartWithNotification(${product.id})">
                    В КОРЗИНУ
                </button>
            </div>
        `;
        container.innerHTML += productCard;
    });
}

// Управление количеством
function increaseProductQuantity() {
    productQuantity++;
    document.getElementById('product-quantity').textContent = productQuantity;
}

function decreaseProductQuantity() {
    if (productQuantity > 1) {
        productQuantity--;
        document.getElementById('product-quantity').textContent = productQuantity;
    }
}

// Добавить товар в корзину со страницы товара
function addProductToCart() {
    if (!currentProductId) return;
    
    const product = productDetails[currentProductId];
    if (!product) return;
    
    // Создаем копию товара с выбранными параметрами
    const productToAdd = {
        ...product,
        selectedColor: selectedColor,
        selectedSize: selectedSize,
        quantity: productQuantity
    };
    
    // Добавляем в корзину
    const existingItem = cart.find(item => 
        item.id === productToAdd.id && 
        item.selectedColor === productToAdd.selectedColor && 
        item.selectedSize === productToAdd.selectedSize
    );

    if (existingItem) {
        existingItem.quantity += productToAdd.quantity;
    } else {
        cart.push(productToAdd);
    }

    cartCount += productToAdd.quantity;
    totalPrice += productToAdd.price * productToAdd.quantity;
    
    updateCartCount();
    showAddToCartNotification(`${product.name} (${selectedColor}, ${selectedSize})`);
    
    // Сбрасываем количество
    productQuantity = 1;
    document.getElementById('product-quantity').textContent = productQuantity;
}

// Вспомогательная функция для кодов цветов
function getColorCode(color) {
    const colorMap = {
        'черный': '#000000',
        'коричневый': '#8B4513',
        'бежевый': '#F5F5DC',
        'белый': '#FFFFFF',
        'розовый': '#FFC0CB',
        'красный': '#FF0000',
        'синий': '#0000FF',
        'серый': '#808080',
        'хаки': '#C3B091',
        'зеленый': '#008000',
        'бордовый': '#800000'
    };
    return colorMap[color] || '#CCCCCC';
}
