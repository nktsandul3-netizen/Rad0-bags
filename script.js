// База товаров для главной страницы с картинками
// База товаров для главной страницы с картинками
const topProducts = {
    men: [
        { id: 201, name: "RADO Мужские сумки — артикул 201", price: 850, category: "men", image: "Images/products/men/art201.jpg", color: "", size: "", material: "", description: "Мужская сумка/рюкзак. Фото: Images/products/men/art201.jpg", emoji: "👜", specifications: [{ name: 'Категория', value: 'Мужские сумки' }, { name: 'Бренд', value: 'RADO BAGS' }, { name: 'Страна', value: 'Молдова' }] },
        { id: 202, name: "RADO Мужские сумки — артикул 202", price: 920, category: "men", image: "Images/products/men/art202.jpg", color: "", size: "", material: "", description: "Мужская сумка/рюкзак. Фото: Images/products/men/art202.jpg", emoji: "👜", specifications: [{ name: 'Категория', value: 'Мужские сумки' }, { name: 'Бренд', value: 'RADO BAGS' }, { name: 'Страна', value: 'Молдова' }] },
        { id: 203, name: "RADO Мужские сумки — артикул 203", price: 990, category: "men", image: "Images/products/men/art203.jpg", color: "", size: "", material: "", description: "Мужская сумка/рюкзак. Фото: Images/products/men/art203.jpg", emoji: "👜", specifications: [{ name: 'Категория', value: 'Мужские сумки' }, { name: 'Бренд', value: 'RADO BAGS' }, { name: 'Страна', value: 'Молдова' }] },
        { id: 204, name: "RADO Мужские сумки — артикул 204", price: 1050, category: "men", image: "Images/products/men/art204.jpg", color: "", size: "", material: "", description: "Мужская сумка/рюкзак. Фото: Images/products/men/art204.jpg", emoji: "👜", specifications: [{ name: 'Категория', value: 'Мужские сумки' }, { name: 'Бренд', value: 'RADO BAGS' }, { name: 'Страна', value: 'Молдова' }] },
        { id: 205, name: "RADO Мужские сумки — артикул 205", price: 1120, category: "men", image: "Images/products/men/art205.jpg", color: "", size: "", material: "", description: "Мужская сумка/рюкзак. Фото: Images/products/men/art205.jpg", emoji: "👜", specifications: [{ name: 'Категория', value: 'Мужские сумки' }, { name: 'Бренд', value: 'RADO BAGS' }, { name: 'Страна', value: 'Молдова' }] },
        { id: 206, name: "RADO Мужские сумки — артикул 206", price: 1190, category: "men", image: "Images/products/men/art206.jpg", color: "", size: "", material: "", description: "Мужская сумка/рюкзак. Фото: Images/products/men/art206.jpg", emoji: "👜", specifications: [{ name: 'Категория', value: 'Мужские сумки' }, { name: 'Бренд', value: 'RADO BAGS' }, { name: 'Страна', value: 'Молдова' }] },
        { id: 207, name: "RADO Мужские сумки — артикул 207", price: 1260, category: "men", image: "Images/products/men/art207.jpg", color: "", size: "", material: "", description: "Мужская сумка/рюкзак. Фото: Images/products/men/art207.jpg", emoji: "👜", specifications: [{ name: 'Категория', value: 'Мужские сумки' }, { name: 'Бренд', value: 'RADO BAGS' }, { name: 'Страна', value: 'Молдова' }] },
        { id: 208, name: "RADO Мужские сумки — артикул 208", price: 1330, category: "men", image: "Images/products/men/art208.jpg", color: "", size: "", material: "", description: "Мужская сумка/рюкзак. Фото: Images/products/men/art208.jpg", emoji: "👜", specifications: [{ name: 'Категория', value: 'Мужские сумки' }, { name: 'Бренд', value: 'RADO BAGS' }, { name: 'Страна', value: 'Молдова' }] },
        { id: 210, name: "RADO Мужские сумки — артикул 210. Дорожная сумка из натуральной кожи", price: 1400, category: "men", image: "Images/products/men/men210-1.png", color: "коричнево-бордовый", size: "L", material: "натуральная кожа", description: "Дорожная сумка RADO BAGS из натуральной кожи коричнево-бордового оттенка. Две ручки, съёмный плечевой ремень, основное отделение на молнии.", emoji: "👜", specifications: [{ name: 'Категория', value: 'Дорожные сумки' }, { name: 'Материал', value: 'Натуральная кожа' }, { name: 'Цвет', value: 'Коричнево-бордовый' }, { name: 'Бренд', value: 'RADO BAGS' }, { name: 'Страна', value: 'Молдова' }] },
        { id: 211, name: "RADO Мужские сумки — артикул 211. Сумка через плечо из текстиля", price: 1470, category: "men", image: "Images/products/men/men211-1.png", color: "серый", size: "M", material: "текстиль", description: "Сумка через плечо RADO BAGS из текстиля серого цвета. Основное отделение на молнии, передний и боковой карманы.", emoji: "👜", specifications: [{ name: 'Категория', value: 'Сумки через плечо' }, { name: 'Материал', value: 'Текстиль' }, { name: 'Цвет', value: 'Серый' }, { name: 'Бренд', value: 'RADO BAGS' }, { name: 'Страна', value: 'Молдова' }] },
        { id: 212, name: "RADO Мужские сумки — артикул 212. Сумка для ноутбука из натуральной кожи", price: 1540, category: "men", image: "Images/products/men/men212-1.png", color: "черный", size: "M", material: "натуральная кожа", description: "Сумка для ноутбука RADO BAGS из чёрной натуральной кожи. Два отделения и передние карманы на молнии, съёмный плечевой ремень.", emoji: "💼", specifications: [{ name: 'Категория', value: 'Сумки для ноутбука' }, { name: 'Материал', value: 'Натуральная кожа' }, { name: 'Цвет', value: 'Чёрный' }, { name: 'Бренд', value: 'RADO BAGS' }, { name: 'Страна', value: 'Молдова' }] },
        { id: 213, name: "RADO Мужские сумки — артикул 213. Сумка для ноутбука из плетёной кожи", price: 1610, category: "men", image: "Images/products/men/men213-1.png", color: "черный", size: "M", material: "натуральная кожа", description: "Сумка для ноутбука RADO BAGS из чёрной кожи с плетёной текстурой. Два отделения и передний карман на молнии, съёмный плечевой ремень.", emoji: "💼", specifications: [{ name: 'Категория', value: 'Сумки для ноутбука' }, { name: 'Материал', value: 'Натуральная кожа' }, { name: 'Цвет', value: 'Чёрный' }, { name: 'Бренд', value: 'RADO BAGS' }, { name: 'Страна', value: 'Молдова' }] },
        { id: 214, name: "RADO Мужские сумки — артикул 214. Сумка через плечо из текстиля", price: 1680, category: "men", image: "Images/products/men/men214-1.png", color: "черный", size: "M", material: "текстиль", description: "Сумка через плечо RADO BAGS из чёрного текстиля. Основное отделение и передний карман на молнии, регулируемый ремень.", emoji: "👜", specifications: [{ name: 'Категория', value: 'Сумки через плечо' }, { name: 'Материал', value: 'Текстиль' }, { name: 'Цвет', value: 'Чёрный' }, { name: 'Бренд', value: 'RADO BAGS' }, { name: 'Страна', value: 'Молдова' }] },
        { id: 215, name: "RADO Мужские сумки — артикул 215. Рюкзак из натуральной кожи", price: 1750, category: "men", image: "Images/products/men/men215-1.png", color: "черный", size: "M", material: "натуральная кожа", description: "Рюкзак RADO BAGS из чёрной натуральной кожи. Клапан с ремнём, основное отделение и передний карман на молнии, регулируемые ремни.", emoji: "🎒", specifications: [{ name: 'Категория', value: 'Рюкзаки' }, { name: 'Материал', value: 'Натуральная кожа' }, { name: 'Цвет', value: 'Чёрный' }, { name: 'Бренд', value: 'RADO BAGS' }, { name: 'Страна', value: 'Молдова' }] },
        { id: 216, name: "RADO Мужские сумки — артикул 216. Сумка через плечо из текстиля", price: 1820, category: "men", image: "Images/products/men/men216-1.png", color: "черный", size: "M", material: "текстиль", description: "Сумка через плечо RADO BAGS из чёрного текстиля. Два отделения и передний карман на молнии, регулируемый ремень.", emoji: "👜", specifications: [{ name: 'Категория', value: 'Сумки через плечо' }, { name: 'Материал', value: 'Текстиль' }, { name: 'Цвет', value: 'Чёрный' }, { name: 'Бренд', value: 'RADO BAGS' }, { name: 'Страна', value: 'Молдова' }] }
    ],
    accessories: [
        { id: 301, name: "RADO Аксессуары — артикул 301", price: 420, category: "accessories", image: "Images/products/accessories/art301.jpg", color: "", size: "", material: "", description: "Аксессуар из натуральной кожи.", emoji: "👜", specifications: [{ name: 'Категория', value: 'Аксессуары' }, { name: 'Бренд', value: 'RADO BAGS' }, { name: 'Страна', value: 'Молдова' }] },
        { id: 302, name: "RADO Аксессуары — артикул 302", price: 480, category: "accessories", image: "Images/products/accessories/art302.jpg", color: "", size: "", material: "", description: "Аксессуар из натуральной кожи.", emoji: "👜", specifications: [{ name: 'Категория', value: 'Аксессуары' }, { name: 'Бренд', value: 'RADO BAGS' }, { name: 'Страна', value: 'Молдова' }] },
        { id: 303, name: "RADO Аксессуары — артикул 303", price: 540, category: "accessories", image: "Images/products/accessories/art303.jpg", color: "", size: "", material: "", description: "Аксессуар из натуральной кожи.", emoji: "👜", specifications: [{ name: 'Категория', value: 'Аксессуары' }, { name: 'Бренд', value: 'RADO BAGS' }, { name: 'Страна', value: 'Молдова' }] },
        { id: 304, name: "RADO Аксессуары — артикул 304", price: 590, category: "accessories", image: "Images/products/accessories/art304.jpg", color: "", size: "", material: "", description: "Аксессуар из натуральной кожи.", emoji: "👜", specifications: [{ name: 'Категория', value: 'Аксессуары' }, { name: 'Бренд', value: 'RADO BAGS' }, { name: 'Страна', value: 'Молдова' }] },
        { id: 305, name: "RADO Аксессуары — артикул 305", price: 650, category: "accessories", image: "Images/products/accessories/art305.jpg", color: "", size: "", material: "", description: "Аксессуар из натуральной кожи.", emoji: "👜", specifications: [{ name: 'Категория', value: 'Аксессуары' }, { name: 'Бренд', value: 'RADO BAGS' }, { name: 'Страна', value: 'Молдова' }] },
        { id: 306, name: "RADO Аксессуары — артикул 306", price: 710, category: "accessories", image: "Images/products/accessories/art306.jpg", color: "", size: "", material: "", description: "Аксессуар из натуральной кожи.", emoji: "👜", specifications: [{ name: 'Категория', value: 'Аксессуары' }, { name: 'Бренд', value: 'RADO BAGS' }, { name: 'Страна', value: 'Молдова' }] },
        { id: 307, name: "RADO Аксессуары — артикул 307", price: 780, category: "accessories", image: "Images/products/accessories/art307.jpg", color: "", size: "", material: "", description: "Аксессуар из натуральной кожи.", emoji: "👜", specifications: [{ name: 'Категория', value: 'Аксессуары' }, { name: 'Бренд', value: 'RADO BAGS' }, { name: 'Страна', value: 'Молдова' }] },
        { id: 308, name: "RADO Аксессуары — артикул 308", price: 850, category: "accessories", image: "Images/products/accessories/art308.jpg", color: "", size: "", material: "", description: "Аксессуар из натуральной кожи.", emoji: "👜", specifications: [{ name: 'Категория', value: 'Аксессуары' }, { name: 'Бренд', value: 'RADO BAGS' }, { name: 'Страна', value: 'Молдова' }] }
    ],
    women: [
        { id: 116, name: "RADO Женские сумки — артикул 116", price: 0, category: "women", image: "Images/products/women/look1.png", color: "", size: "", material: "", description: "Добавьте описание и комментарий к модели.", emoji: "👜", specifications: [{ name: 'Категория', value: 'Женские сумки' }, { name: 'Бренд', value: 'RADO BAGS' }, { name: 'Страна', value: 'Молдова' }] },
        { id: 117, name: "RADO Женские сумки — артикул 117", price: 0, category: "women", image: "Images/products/women/look2.png", color: "", size: "", material: "", description: "Добавьте описание и комментарий к модели.", emoji: "👜", specifications: [{ name: 'Категория', value: 'Женские сумки' }, { name: 'Бренд', value: 'RADO BAGS' }, { name: 'Страна', value: 'Молдова' }] },
        { id: 118, name: "RADO Женские сумки — артикул 118", price: 0, category: "women", image: "Images/products/women/look3.png", color: "", size: "", material: "", description: "Добавьте описание и комментарий к модели.", emoji: "👜", specifications: [{ name: 'Категория', value: 'Женские сумки' }, { name: 'Бренд', value: 'RADO BAGS' }, { name: 'Страна', value: 'Молдова' }] },
        { id: 119, name: "RADO Женские сумки — артикул 119", price: 0, category: "women", image: "Images/products/women/look4.png", color: "", size: "", material: "", description: "Добавьте описание и комментарий к модели.", emoji: "👜", specifications: [{ name: 'Категория', value: 'Женские сумки' }, { name: 'Бренд', value: 'RADO BAGS' }, { name: 'Страна', value: 'Молдова' }] },
        { id: 120, name: "RADO Женские сумки — артикул 120", price: 0, category: "women", image: "Images/products/women/look5.png", color: "", size: "", material: "", description: "Добавьте описание и комментарий к модели.", emoji: "👜", specifications: [{ name: 'Категория', value: 'Женские сумки' }, { name: 'Бренд', value: 'RADO BAGS' }, { name: 'Страна', value: 'Молдова' }] },
        { id: 121, name: "RADO Женские сумки — артикул 121", price: 0, category: "women", image: "Images/products/women/art121.jpg", color: "", size: "", material: "", description: "Добавьте описание и комментарий к модели. Фото: Images/products/women/art121.jpg", emoji: "👜", specifications: [{ name: 'Категория', value: 'Женские сумки' }, { name: 'Бренд', value: 'RADO BAGS' }, { name: 'Страна', value: 'Молдова' }] },
        { id: 122, name: "RADO Женские сумки — артикул 122", price: 0, category: "women", image: "Images/products/women/art122.jpg", color: "", size: "", material: "", description: "Добавьте описание и комментарий к модели. Фото: Images/products/women/art122.jpg", emoji: "👜", specifications: [{ name: 'Категория', value: 'Женские сумки' }, { name: 'Бренд', value: 'RADO BAGS' }, { name: 'Страна', value: 'Молдова' }] },
        { id: 123, name: "RADO Женские сумки — артикул 123", price: 0, category: "women", image: "Images/products/women/art123.jpg", color: "", size: "", material: "", description: "Добавьте описание и комментарий к модели. Фото: Images/products/women/art123.jpg", emoji: "👜", specifications: [{ name: 'Категория', value: 'Женские сумки' }, { name: 'Бренд', value: 'RADO BAGS' }, { name: 'Страна', value: 'Молдова' }] },
        { id: 124, name: "RADO Женские сумки — артикул 124", price: 0, category: "women", image: "Images/products/women/art124.jpg", color: "", size: "", material: "", description: "Добавьте описание и комментарий к модели. Фото: Images/products/women/art124.jpg", emoji: "👜", specifications: [{ name: 'Категория', value: 'Женские сумки' }, { name: 'Бренд', value: 'RADO BAGS' }, { name: 'Страна', value: 'Молдова' }] },
        { id: 125, name: "RADO Женские сумки — артикул 125", price: 0, category: "women", image: "Images/products/women/art125.jpg", color: "", size: "", material: "", description: "Добавьте описание и комментарий к модели. Фото: Images/products/women/art125.jpg", emoji: "👜", specifications: [{ name: 'Категория', value: 'Женские сумки' }, { name: 'Бренд', value: 'RADO BAGS' }, { name: 'Страна', value: 'Молдова' }] },
        { id: 126, name: "RADO Женские сумки — артикул 126", price: 0, category: "women", image: "Images/products/women/art126.jpg", color: "", size: "", material: "", description: "Добавьте описание и комментарий к модели. Фото: Images/products/women/art126.jpg", emoji: "👜", specifications: [{ name: 'Категория', value: 'Женские сумки' }, { name: 'Бренд', value: 'RADO BAGS' }, { name: 'Страна', value: 'Молдова' }] },
        { id: 127, name: "RADO Женские сумки — артикул 127", price: 0, category: "women", image: "Images/products/women/art127.jpg", color: "", size: "", material: "", description: "Добавьте описание и комментарий к модели. Фото: Images/products/women/art127.jpg", emoji: "👜", specifications: [{ name: 'Категория', value: 'Женские сумки' }, { name: 'Бренд', value: 'RADO BAGS' }, { name: 'Страна', value: 'Молдова' }] }
    ]
};

const TOP_PRODUCTS_LIMIT = 12;
let topProductsSynced = false;

function syncTopProductsWithCatalog(limit = TOP_PRODUCTS_LIMIT) {
    if (topProductsSynced) return;
    if (typeof products === 'undefined' || !Array.isArray(products)) return;
    
    const normalizeCategory = value => (value || '').toLowerCase();
    const womenFromCatalog = products.filter(p => normalizeCategory(p.category) === 'women' && p.id >= 116 && p.id <= 127);
    // На главной в блоке «Мужские сумки» — те же артикулы, что и на men.html: 102–106 (с фото) + 210–216 (мужская линия)
    const menWithPhotos = products.filter(p => p.onSale && p.id >= 102 && p.id <= 106);
    const menLine = products.filter(p => normalizeCategory(p.category) === 'men' && p.id >= 210 && p.id <= 216);
    const menFromCatalog = [...menWithPhotos, ...menLine];
    const accessoriesFromCatalog = products.filter(p => normalizeCategory(p.category) === 'accessories' && p.id);
    
    if (womenFromCatalog.length) {
        topProducts.women = womenFromCatalog.slice(0, limit);
    }
    if (menFromCatalog.length) {
        topProducts.men = menFromCatalog.slice(0, limit);
    }
    if (accessoriesFromCatalog.length) {
        topProducts.accessories = accessoriesFromCatalog.slice(0, limit);
    }
    
    topProductsSynced = true;
}

function findProductById(productId) {
    var id = typeof productId === 'number' ? productId : parseInt(productId, 10);
    if (isNaN(id)) return null;
    if (typeof products !== 'undefined' && Array.isArray(products)) {
        var catalogProduct = products.find(function (p) { return p.id === id; });
        if (catalogProduct) return catalogProduct;
    }
    syncTopProductsWithCatalog();
    return topProducts.women.find(function (p) { return p.id === id; }) || topProducts.men.find(function (p) { return p.id === id; }) || (topProducts.accessories && topProducts.accessories.find(function (p) { return p.id === id; })) || null;
}

function getAllProductsForSearch() {
    syncTopProductsWithCatalog();
    var list = [];
    if (topProducts.women) list = list.concat(topProducts.women);
    if (topProducts.men) list = list.concat(topProducts.men);
    if (topProducts.accessories) list = list.concat(topProducts.accessories);
    if (typeof products !== 'undefined' && Array.isArray(products)) {
        var ids = {};
        list.forEach(function (p) { ids[p.id] = true; });
        products.forEach(function (p) {
            if (!ids[p.id]) list.push(p);
        });
    }
    return list;
}

// Настройки пагинации
const ITEMS_PER_PAGE = 4;
let currentWomenPage = 1;
let currentMenPage = 1;
let currentAccessoriesPage = 1;

// Корзина (при загрузке синхронизируем счётчик и сумму с массивом cart)
let cart = JSON.parse(localStorage.getItem('rado-cart')) || [];
let cartCount = 0;
let totalPrice = 0;
cart.forEach(function (item) {
    cartCount += item.quantity || 1;
    totalPrice += (item.price || 0) * (item.quantity || 1);
});
let checkoutFormEl;

// Избранное (тот же ключ, что и в product.js)
var FAVORITES_STORAGE_KEY = 'rado-favorites';
function getFavorites() {
    try {
        var raw = localStorage.getItem(FAVORITES_STORAGE_KEY);
        var ids = raw ? JSON.parse(raw) : [];
        return Array.isArray(ids) ? ids : [];
    } catch (e) {
        return [];
    }
}
function updateFavoritesCount() {
    var el = document.getElementById('header-favorites-count');
    if (!el) return;
    var n = getFavorites().length;
    el.textContent = n;
    el.style.display = n > 0 ? '' : 'none';
}

// URL для отправки заказов и сообщений в Telegram (файл api/telegram.php на вашем сервере)
window.RADO_TELEGRAM_API = window.RADO_TELEGRAM_API || 'http://localhost:3000';

// Функция для отображения картинки
function getProductImage(product) {
    if (product.image) {
        return `<img src="${product.image}" alt="${product.name}" class="product-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">`;
    }
    return '';
}

// Вторая картинка для hover (из media или image2)
function getProductSecondImage(product) {
    if (product.image2) return product.image2;
    if (product.media && Array.isArray(product.media)) {
        const img = product.media.find(m => m.type === 'image' && m.src && m.src !== product.image);
        if (img) return img.src;
        const firstImg = product.media.find(m => m.type === 'image' && m.src);
        if (firstImg) return firstImg.src;
    }
    return null;
}

// Бейдж: NEW, SALE, BESTSELLER
function getProductBadge(product) {
    if (product.badge) {
        const b = String(product.badge).toUpperCase();
        const cls = b === 'SALE' ? 'product-badge--sale' : b === 'BESTSELLER' ? 'product-badge--bestseller' : '';
        return { text: b, class: cls };
    }
    if (product.isNew) return { text: 'NEW', class: '' };
    if (product.onSale) return { text: 'SALE', class: 'product-badge--sale' };
    return null;
}

// Рейтинг (число отзывов)
function getProductRatingCount(product) {
    return product.ratingCount != null ? product.ratingCount : 24;
}

// Цветовые точки для минимальной карточки
const productColorToHex = {
    black: '#1a1a1a', white: '#f5f5f0', grey: '#9e9e9e', gray: '#9e9e9e', серый: '#9e9e9e', черный: '#1a1a1a',
    brown: '#6d4c3d', коричневый: '#6d4c3d', beige: '#c4a77d', бежевый: '#c4a77d',
    navy: '#2c3e50', blue: '#4a6fa5', red: '#a63d3d', green: '#4a6b4a', olive: '#6b7c3d', оливковый: '#6b7c3d',
    tan: '#b8860b', burgundy: '#722f37', yellow: '#c9b037'
};
function getSwatchColorsForCard(p) {
    const list = Array.isArray(p.colors) ? p.colors : (p.color ? [p.color] : []);
    return list.map(c => {
        const key = String(c || '').toLowerCase().trim();
        return { name: key, hex: productColorToHex[key] || '#ccc' };
    });
}

// Топ продаж — мужские
function displayMenTopSales(page = 1) {
    const grid = document.getElementById('men-top-grid');
    const pagination = document.getElementById('men-pagination');
    if (!grid) return;

    syncTopProductsWithCatalog();
    currentMenPage = page;
    const menProducts = topProducts.men || [];
    const totalPages = Math.max(1, Math.ceil(menProducts.length / ITEMS_PER_PAGE));
    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const pageProducts = menProducts.slice(startIndex, endIndex);

    grid.innerHTML = '';
    if (pageProducts.length === 0) {
        grid.innerHTML = '<p class="top-sales-empty">Товары мужской линии скоро появятся. <a href="men.html">Перейти в каталог</a></p>';
        if (pagination) pagination.innerHTML = '';
        return;
    }
    pageProducts.forEach(product => {
        const productImage = getProductImage(product);
        const swatches = getSwatchColorsForCard(product);
        const swatchesHtml = swatches.length
            ? `<div class="product-swatches">${swatches.map(s => `<span class="product-swatch" style="background-color:${s.hex}" title="${s.name}"></span>`).join('')}</div>`
            : '<div class="product-swatches"></div>';
        const oldPrice = product.originalPrice || product.oldPrice;
        const priceHtml = oldPrice
            ? `<span class="product-price-minimal product-price-minimal--old">${oldPrice} MDL</span> <span class="product-price-minimal">${product.price} MDL</span>`
            : `<span class="product-price-minimal">${product.price} MDL</span>`;
        grid.innerHTML += `
            <div class="product-card product-card--minimal" data-product-id="${product.id}">
                <div class="product-image">${productImage}<div class="product-emoji" style="display: ${product.image ? 'none' : 'flex'}">👜</div><div class="product-image__overlay">${swatchesHtml}<div class="product-price-minimal-wrap">${priceHtml}</div></div></div>
            </div>
        `;
    });
    makeProductCardsClickable();
    createPagination(pagination, page, totalPages, 'men');
}

// Топ продаж — аксессуары
function displayAccessoriesTopSales(page = 1) {
    const grid = document.getElementById('accessories-top-grid');
    const pagination = document.getElementById('accessories-pagination');
    if (!grid) return;

    syncTopProductsWithCatalog();
    currentAccessoriesPage = page;
    const accessoriesProducts = (topProducts.accessories || []).slice(0, 4);
    const totalPages = Math.max(1, Math.ceil(accessoriesProducts.length / ITEMS_PER_PAGE));
    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const pageProducts = accessoriesProducts.slice(startIndex, endIndex);

    grid.innerHTML = '';
    if (pageProducts.length === 0) {
        grid.innerHTML = '<p class="top-sales-empty">Аксессуары скоро появятся. <a href="accessories.html">Перейти в каталог</a></p>';
        if (pagination) pagination.innerHTML = '';
        return;
    }
    pageProducts.forEach(product => {
        const productImage = getProductImage(product);
        const swatches = getSwatchColorsForCard(product);
        const swatchesHtml = swatches.length
            ? `<div class="product-swatches">${swatches.map(s => `<span class="product-swatch" style="background-color:${s.hex}" title="${s.name}"></span>`).join('')}</div>`
            : '<div class="product-swatches"></div>';
        const oldPrice = product.originalPrice || product.oldPrice;
        const priceHtml = oldPrice
            ? `<span class="product-price-minimal product-price-minimal--old">${oldPrice} MDL</span> <span class="product-price-minimal">${product.price} MDL</span>`
            : `<span class="product-price-minimal">${product.price} MDL</span>`;
        grid.innerHTML += `
            <div class="product-card product-card--minimal" data-product-id="${product.id}">
                <div class="product-image">${productImage}<div class="product-emoji" style="display: ${product.image ? 'none' : 'flex'}">👜</div><div class="product-image__overlay">${swatchesHtml}<div class="product-price-minimal-wrap">${priceHtml}</div></div></div>
            </div>
        `;
    });
    makeProductCardsClickable();
    createPagination(pagination, page, totalPages, 'accessories');
}

// Показать ТОП ПРОДАЖ Женские на главной
function displayWomenTopSales(page = 1) {
    const grid = document.getElementById('women-top-grid');
    const pagination = document.getElementById('women-pagination');
    if (!grid) return;

    syncTopProductsWithCatalog();
    currentWomenPage = page;
    const womenProducts = topProducts.women.slice(0, 4);
    const totalPages = 1;
    
    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const pageProducts = womenProducts.slice(startIndex, endIndex);
    
    grid.innerHTML = '';
    pageProducts.forEach(product => {
        const productImage = getProductImage(product);
        const swatches = getSwatchColorsForCard(product);
        const swatchesHtml = swatches.length
            ? `<div class="product-swatches">${swatches.map(s => `<span class="product-swatch" style="background-color:${s.hex}" title="${s.name}"></span>`).join('')}</div>`
            : '<div class="product-swatches"></div>';
        const oldPrice = product.originalPrice || product.oldPrice;
        const priceHtml = oldPrice
            ? `<span class="product-price-minimal product-price-minimal--old">${oldPrice} MDL</span> <span class="product-price-minimal">${product.price} MDL</span>`
            : `<span class="product-price-minimal">${product.price} MDL</span>`;
        grid.innerHTML += `
            <div class="product-card product-card--minimal" data-product-id="${product.id}">
                <div class="product-image">${productImage}<div class="product-emoji" style="display: ${product.image ? 'none' : 'flex'}">👜</div><div class="product-image__overlay">${swatchesHtml}<div class="product-price-minimal-wrap">${priceHtml}</div></div></div>
            </div>
        `;
    });
    makeProductCardsClickable();
    createPagination(pagination, page, totalPages, 'women');
}

// Создать пагинацию
function createPagination(container, currentPage, totalPages, type) {
    if (!container) return;
    
    container.innerHTML = '';
    
    if (totalPages <= 1) return;
    
    // Кнопка "Назад"
    const prevButton = document.createElement('button');
    prevButton.className = 'page-btn';
    prevButton.innerHTML = '‹';
    prevButton.disabled = currentPage === 1;
    const displayFn = type === 'men' ? displayMenTopSales : type === 'accessories' ? displayAccessoriesTopSales : displayWomenTopSales;
    prevButton.onclick = () => displayFn(currentPage - 1);
    container.appendChild(prevButton);
    
    // Номера страниц
    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.className = `page-btn ${i === currentPage ? 'active' : ''}`;
        pageButton.textContent = i;
        pageButton.onclick = () => displayFn(i);
        container.appendChild(pageButton);
    }
    
    // Кнопка "Вперед"
    const nextButton = document.createElement('button');
    nextButton.className = 'page-btn';
    nextButton.innerHTML = '›';
    nextButton.disabled = currentPage === totalPages;
    nextButton.onclick = () => displayFn(currentPage + 1);
    container.appendChild(nextButton);
}

// Добавить в корзину
function addToCart(productId) {
    const product = findProductById(productId);
    if (!product) {
        console.warn('Товар с ID', productId, 'не найден');
        return;
    }

    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    cartCount++;
    totalPrice += product.price || 0;

    updateCartCount();
    showCart();
    updateCartDisplay();
    saveCartToStorage();
}

// Сохранить корзину в localStorage
function saveCartToStorage() {
    try {
        localStorage.setItem('rado-cart', JSON.stringify(cart));
        localStorage.setItem('rado-cart-count', String(cartCount));
        localStorage.setItem('rado-cart-total', String(totalPrice));
    } catch (e) {
        console.warn('Не удалось сохранить корзину', e);
    }
}

// Обновить счетчик корзины
function updateCartCount() {
    const cartCountElements = document.querySelectorAll('.cart-count');
    cartCountElements.forEach(function (el) {
        el.textContent = cartCount;
        el.style.display = cartCount > 0 ? '' : 'none';
    });
}

// Показать корзину
function showCart() {
    const cartOverlay = document.getElementById('cart-overlay');
    if (cartOverlay) {
        cartOverlay.style.display = 'block';
        setTimeout(() => {
            cartOverlay.classList.add('active');
        }, 10);
    }
}

// Закрыть корзину
function closeCart() {
    const cartOverlay = document.getElementById('cart-overlay');
    if (cartOverlay) {
        cartOverlay.classList.remove('active');
        setTimeout(() => {
            cartOverlay.style.display = 'none';
        }, 300);
    }
}

// Обновить отображение корзины
function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('cart-total-price');
    
    if (!cartItems) return;
    
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="cart-empty">
                <div class="cart-empty-icon">🛒</div>
                <p>Ваша корзина пуста</p>
                <button class="continue-shopping-btn" onclick="closeCart()">Продолжить покупки</button>
            </div>
        `;
        if (totalElement) totalElement.textContent = '0';
        return;
    }
    
    cart.forEach(item => {
        const itemImage = item.image ? `<img src="${item.image}" alt="${item.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />` : '';
        const itemEmoji = item.emoji || '👜';
        const itemTotal = (item.price || 0) * (item.quantity || 1);
        
        const cartItem = `
            <div class="cart-item" data-product-id="${item.id}">
                <div class="cart-item-image">
                    ${itemImage}
                    <div class="cart-item-emoji" style="display: ${item.image ? 'none' : 'flex'}">${itemEmoji}</div>
                </div>
                <div class="cart-item-info">
                    <h4 class="cart-item-name">${item.name}</h4>
                    <div class="cart-item-details">
                        ${item.color ? `<span class="cart-item-detail">Цвет: ${item.color}</span>` : ''}
                        ${item.size ? `<span class="cart-item-detail">Размер: ${item.size}</span>` : ''}
                    </div>
                    <div class="cart-item-price">
                        <span class="item-unit-price">${item.price || 0} MDL</span>
                        <span class="item-total-price">× ${item.quantity || 1} = ${itemTotal} MDL</span>
                    </div>
                </div>
                <div class="cart-item-actions">
                    <div class="quantity-controls">
                        <button class="quantity-btn decrease" onclick="decreaseQuantity(${item.id})" aria-label="Уменьшить">−</button>
                        <span class="quantity-value">${item.quantity || 1}</span>
                        <button class="quantity-btn increase" onclick="increaseQuantity(${item.id})" aria-label="Увеличить">+</button>
                    </div>
                    <button class="remove-item-btn" onclick="removeFromCart(${item.id})" aria-label="Удалить">✕</button>
                </div>
            </div>
        `;
        cartItems.innerHTML += cartItem;
    });
    
    if (totalElement) totalElement.textContent = totalPrice;
    
    updateCheckoutSummary();
}

// Обновление краткого резюме заказа в модальном окне
function updateCheckoutSummary() {
    const summaryContainer = document.getElementById('checkout-summary');
    if (!summaryContainer) return;
    
    if (cart.length === 0) {
        summaryContainer.innerHTML = `
            <strong>Корзина пуста</strong>
            <p style="margin: 0; color: #999; font-size: 12px;">Добавьте товары, чтобы оформить заказ.</p>
        `;
        return;
    }
    
    let itemsHtml = '';
    cart.forEach(item => {
        const lineTotal = (item.price || 0) * (item.quantity || 1);
        itemsHtml += `
            <div class="checkout-summary__row">
                <span>${item.name}${item.quantity > 1 ? ` × ${item.quantity}` : ''}</span>
                <span>${lineTotal} MDL</span>
            </div>
        `;
    });
    
    summaryContainer.innerHTML = `
        <strong>Ваш заказ</strong>
        ${itemsHtml}
        <div class="checkout-summary__row checkout-summary__total">
            <span>Итого</span>
            <span>${totalPrice} MDL</span>
        </div>
    `;
}

function attachCheckoutFormHandler() {
    checkoutFormEl = document.getElementById('checkout-form');
    if (checkoutFormEl && !checkoutFormEl.dataset.bound) {
        checkoutFormEl.addEventListener('submit', handleCheckoutSubmit);
        checkoutFormEl.dataset.bound = 'true';
    }
}

function ensureCheckoutModalExists() {
    let modal = document.getElementById('checkout-modal');
    if (modal) {
        attachCheckoutFormHandler();
        return modal;
    }
    
    const modalTemplate = `
        <div class="checkout-modal" id="checkout-modal" aria-hidden="true">
            <div class="checkout-modal__backdrop" onclick="closeCheckoutModal()"></div>
            <div class="checkout-modal__content" role="dialog" aria-modal="true">
                <button class="checkout-modal__close" onclick="closeCheckoutModal()">✕</button>
                <h3>Оформление заказа</h3>
                <p class="checkout-modal__hint">Введите контакты, и мы свяжемся для подтверждения заказа.</p>
                <form id="checkout-form">
                    <label>
                        Имя и фамилия
                        <input type="text" name="name" placeholder="Мария Иванова" required>
                    </label>
                    <label>
                        Номер телефона
                        <input type="tel" name="phone" placeholder="+373 69 000 000" required>
                    </label>
                    <label>
                        Город / Адрес доставки
                        <input type="text" name="address" placeholder="Кишинёв, ул. ...">
                    </label>
                    <label>
                        Комментарий к заказу
                        <textarea name="comment" rows="3" placeholder="Удобное время для звонка и т.д."></textarea>
                    </label>
                    <div class="checkout-summary" id="checkout-summary"></div>
                    <button type="submit" class="primary-action">Подтвердить заказ</button>
                </form>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalTemplate);
    attachCheckoutFormHandler();
    return document.getElementById('checkout-modal');
}

function openCheckoutModal() {
    if (cart.length === 0) {
        alert('Корзина пуста!');
        return;
    }
    closeCart();
    const modal = ensureCheckoutModalExists();
    if (!modal) return;
    updateCheckoutSummary();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCheckoutModal() {
    const modal = document.getElementById('checkout-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function handleCheckoutSubmit(event) {
    event.preventDefault();
    
    if (cart.length === 0) {
        alert('Корзина пуста!');
        closeCheckoutModal();
        return;
    }
    
    const formData = new FormData(event.target);
    const orderPayload = {
        type: 'order',
        name: formData.get('name') || '',
        phone: formData.get('phone') || '',
        address: formData.get('address') || '',
        comment: formData.get('comment') || '',
        total: totalPrice,
        items: cart.map(item => ({
            id: item.id,
            name: item.name,
            quantity: item.quantity || 1,
            price: item.price || 0,
            color: item.color || null,
            size: item.size || null
        }))
    };

    const apiBase = (typeof window.RADO_TELEGRAM_API !== 'undefined' && window.RADO_TELEGRAM_API) ? window.RADO_TELEGRAM_API : 'http://localhost:3000';
    const apiUrl = apiBase.replace(/\/$/, '') + '/api/order';
    fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderPayload)
    }).then(function (res) { return res.json(); }).then(function (data) {
        if (data && data.ok) {
            alert('Спасибо! Заказ отправлен, мы свяжемся с вами в ближайшее время.');
        } else {
            alert('Спасибо! Мы получили ваш заказ и свяжемся с вами в ближайшее время.');
        }
    }).catch(function () {
        alert('Спасибо! Мы получили ваш заказ и свяжемся с вами в ближайшее время.');
    }).finally(function () {
        cart = [];
        cartCount = 0;
        totalPrice = 0;
        saveCartToStorage();
        updateCartCount();
        updateCartDisplay();
        if (event.target.reset) event.target.reset();
        closeCheckoutModal();
        closeCart();
    });
}

// Увеличить количество
function increaseQuantity(productId) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;
    
    item.quantity += 1;
    cartCount++;
    totalPrice += item.price;
    
    updateCartCount();
    updateCartDisplay();
    saveCartToStorage();
}

// Уменьшить количество
function decreaseQuantity(productId) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;
    
    if (item.quantity > 1) {
        item.quantity -= 1;
        cartCount--;
        totalPrice -= item.price;
    } else {
        removeFromCart(productId);
        return;
    }
    
    updateCartCount();
    updateCartDisplay();
    saveCartToStorage();
}

// Удалить из корзины
function removeFromCart(productId) {
    const itemIndex = cart.findIndex(item => item.id === productId);
    if (itemIndex === -1) return;
    
    const item = cart[itemIndex];
    
    cartCount -= item.quantity;
    totalPrice -= item.price * item.quantity;
    
    cart.splice(itemIndex, 1);
    
    updateCartCount();
    updateCartDisplay();
    saveCartToStorage();
}

// Инициализация корзины (и общих элементов шапки)
function initCart() {
    updateCartCount();
    updateFavoritesCount();
    updateCartDisplay();
    if (document.getElementById('header-search-btn')) initHeaderSearch();
    
    // Открыть корзину при клике на иконку
    const cartIcon = document.querySelector('.cart-icon');
    if (cartIcon) {
        cartIcon.addEventListener('click', showCart);
    }
    
    // Закрыть корзину при клике на оверлей
    const cartOverlay = document.getElementById('cart-overlay');
    if (cartOverlay) {
        cartOverlay.addEventListener('click', function(e) {
            if (e.target === this) {
                closeCart();
            }
        });
    }
}

/* Hero: play second video right after the first, then loop both */
function initHeroVideoSequence() {
    var first = document.querySelector('.hero-video--first');
    var second = document.querySelector('.hero-video--second');
    var slide2Content = document.getElementById('hero-slide2-content');
    if (!first || !second) return;

    function playSecond() {
        first.classList.add('hero-video--inactive');
        first.pause();
        second.classList.add('hero-video--active');
        second.currentTime = 0;
        second.play();
        if (slide2Content) slide2Content.style.display = '';
    }

    function playFirst() {
        second.classList.remove('hero-video--active');
        second.pause();
        first.classList.remove('hero-video--inactive');
        first.currentTime = 0;
        first.play();
        if (slide2Content) slide2Content.style.display = 'none';
    }

    first.addEventListener('ended', playSecond);
    second.addEventListener('ended', playFirst);

    var btnPrev = document.querySelector('.hero-banner-switcher__prev');
    var btnNext = document.querySelector('.hero-banner-switcher__next');
    if (btnPrev) btnPrev.addEventListener('click', playFirst);
    if (btnNext) btnNext.addEventListener('click', playSecond);
}

/* Шапка исчезает при скролле вниз, появляется при скролле вверх; над первым баннером цвет не меняется на чёрный */
function initHeaderOverBannerScroll() {
    var header = document.querySelector('.header-over-banner') || document.querySelector('.header');
    if (!header) return;
    var scrollThreshold = 50;
    var firstBannerHeight = typeof window !== 'undefined' ? window.innerHeight : 700;
    var lastScrollY = window.scrollY || 0;
    function updateHeaderScroll() {
        var scrollY = window.scrollY || 0;
        if (scrollY <= scrollThreshold) {
            header.classList.remove('header-hidden');
        } else if (scrollY > lastScrollY) {
            header.classList.add('header-hidden');
        } else {
            header.classList.remove('header-hidden');
        }
        if (scrollY < firstBannerHeight * 0.9) {
            header.classList.add('header-over-first-banner');
        } else {
            header.classList.remove('header-over-first-banner');
        }
        lastScrollY = scrollY;
    }
    window.addEventListener('scroll', updateHeaderScroll, { passive: true });
    updateHeaderScroll();
}

var SEARCH_FREQUENT = ['женские сумки', 'рюкзаки', 'аксессуары', 'кожаные сумки', 'мужские сумки'];

function openSearchOverlay() {
    var overlay = document.getElementById('search-overlay');
    var input = document.getElementById('search-overlay-input');
    if (!overlay || !input) return;
    overlay.classList.add('is-open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    input.value = '';
    input.focus();
    fillSearchSuggestions();
    fillSearchPopular();
    var resultsEl = document.getElementById('search-overlay-results');
    var colTitle = document.getElementById('search-overlay-col-title');
    if (resultsEl) {
        resultsEl.classList.remove('search-overlay__results--list');
        resultsEl.innerHTML = '';
    }
    if (colTitle) colTitle.textContent = 'Популярные товары';
}

function closeSearchOverlay() {
    var overlay = document.getElementById('search-overlay');
    if (!overlay) return;
    overlay.classList.remove('is-open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

function fillSearchSuggestions() {
    var ul = document.getElementById('search-overlay-suggestions');
    if (!ul) return;
    var icon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>';
    ul.innerHTML = SEARCH_FREQUENT.map(function (q) {
        return '<li><button type="button" class="search-overlay__suggestion" data-query="' + q.replace(/"/g, '&quot;') + '">' + q + icon + '</button></li>';
    }).join('');
}

function fillSearchPopular() {
    var resultsEl = document.getElementById('search-overlay-results');
    if (!resultsEl) return;
    syncTopProductsWithCatalog();
    var list = [];
    if (topProducts.women && topProducts.women.length) list = list.concat(topProducts.women.slice(0, 4));
    if (list.length < 4 && topProducts.men && topProducts.men.length) list = list.concat(topProducts.men.slice(0, 4 - list.length));
    if (list.length < 4 && topProducts.accessories && topProducts.accessories.length) list = list.concat(topProducts.accessories.slice(0, 4 - list.length));
    if (list.length === 0) {
        var all = getAllProductsForSearch();
        list = all.slice(0, 4);
    }
    resultsEl.classList.remove('search-overlay__results--list');
    resultsEl.innerHTML = list.map(function (p) {
        var price = (p.price || 0) + ' MDL';
        var oldP = p.originalPrice || p.oldPrice;
        var priceHtml = oldP ? '<span class="search-overlay__product-price--old">' + oldP + ' MDL</span> ' + price : price;
        var img = p.image ? '<img src="' + p.image + '" alt="" class="search-overlay__product-img">' : '<span class="search-overlay__product-emoji">' + (p.emoji || '👜') + '</span>';
        var badge = p.badge ? '<span class="search-overlay__product-badge">' + p.badge + '</span>' : '';
        if (!badge && p.category === 'women') badge = '<span class="search-overlay__product-badge">Новинка</span>';
        return '<a href="product.html?id=' + p.id + '" class="search-overlay__product">' + '<div class="search-overlay__product-img-wrap">' + badge + img + '</div>' + '<div class="search-overlay__product-price">' + priceHtml + '</div></a>';
    }).join('');
}

function runSearchOverlay(query) {
    var resultsEl = document.getElementById('search-overlay-results');
    var colTitle = document.getElementById('search-overlay-col-title');
    if (!resultsEl) return;
    query = (query || '').trim().toLowerCase();
    if (query.length < 2) {
        if (colTitle) colTitle.textContent = 'Популярные товары';
        fillSearchPopular();
        return;
    }
    if (colTitle) colTitle.textContent = 'Результаты поиска';
    resultsEl.classList.add('search-overlay__results--list');
    var all = getAllProductsForSearch();
    var found = all.filter(function (p) {
        return (p.name || '').toLowerCase().indexOf(query) !== -1 ||
               (p.description || '').toLowerCase().indexOf(query) !== -1;
    }).slice(0, 12);
    if (found.length === 0) {
        resultsEl.innerHTML = '<p class="search-overlay__empty">Ничего не найдено</p>';
        return;
    }
    resultsEl.innerHTML = found.map(function (p) {
        var img = p.image ? '<img src="' + p.image + '" alt="" class="search-overlay__result-img">' : '<span class="search-overlay__result-emoji">' + (p.emoji || '👜') + '</span>';
        return '<a href="product.html?id=' + p.id + '" class="search-overlay__result">' + img + '<span class="search-overlay__result-title">' + (p.name || '') + '</span><span class="search-overlay__result-price">' + (p.price || 0) + ' MDL</span></a>';
    }).join('');
}

function initHeaderSearch() {
    var btn = document.getElementById('header-search-btn');
    var overlay = document.getElementById('search-overlay');
    var backdrop = document.getElementById('search-overlay-backdrop');
    var closeBtn = document.getElementById('search-overlay-close');
    var findBtn = document.getElementById('search-overlay-find');
    var input = document.getElementById('search-overlay-input');
    if (btn) btn.addEventListener('click', openSearchOverlay);
    if (backdrop) backdrop.addEventListener('click', closeSearchOverlay);
    if (closeBtn) {
        closeBtn.addEventListener('click', function (e) { e.preventDefault(); closeSearchOverlay(); });
    }
    if (findBtn) findBtn.addEventListener('click', function () { runSearchOverlay(input && input.value); });
    if (input) {
        input.addEventListener('input', function () { runSearchOverlay(input.value); });
        input.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') closeSearchOverlay();
            if (e.key === 'Enter') { e.preventDefault(); runSearchOverlay(input.value); }
        });
    }
    var suggestionsEl = document.getElementById('search-overlay-suggestions');
    if (suggestionsEl) suggestionsEl.addEventListener('click', function (e) {
        var btn = e.target.closest('.search-overlay__suggestion');
        if (!btn) return;
        var q = btn.getAttribute('data-query');
        if (q && input) { input.value = q; runSearchOverlay(q); }
    });
}

// Slide-out sidebar (Ekonika-style)
function initSidebar() {
    var overlay = document.getElementById('sidebar-overlay');
    var sidebar = document.getElementById('sidebar');
    var closeBtn = document.getElementById('sidebar-close');
    var hamburger = document.querySelector('.header-hamburger');
    if (!overlay || !sidebar) return;

    function isOpen() {
        return sidebar.classList.contains('is-open');
    }

    function openSidebar() {
        overlay.classList.add('is-open');
        sidebar.classList.add('is-open');
        overlay.setAttribute('aria-hidden', 'false');
        sidebar.setAttribute('aria-hidden', 'false');
        document.body.classList.add('sidebar-open');
        document.body.style.overflow = 'hidden';
        if (hamburger) hamburger.setAttribute('aria-expanded', 'true');
    }

    function closeSidebar() {
        overlay.classList.remove('is-open');
        sidebar.classList.remove('is-open');
        overlay.setAttribute('aria-hidden', 'true');
        sidebar.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('sidebar-open');
        document.body.style.overflow = '';
        if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
    }

    function toggleSidebar() {
        if (isOpen()) closeSidebar();
        else openSidebar();
    }

    if (hamburger) {
        hamburger.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            toggleSidebar();
        });
    }
    overlay.addEventListener('click', closeSidebar);
    if (closeBtn) closeBtn.addEventListener('click', closeSidebar);
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && isOpen()) closeSidebar();
    });
    sidebar.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', closeSidebar);
    });
}

// Инициализация главной страницы (мобильное меню категорий; если есть сайдбар — гамбургер открывает сайдбар)
function initMobileMenu() {
    var header = document.querySelector('.header');
    var hamburger = document.querySelector('.header-hamburger');
    var nav = document.querySelector('.header-categories');
    if (document.getElementById('sidebar')) return;
    if (!header || !hamburger || !nav) return;

    function isOpen() {
        return header.classList.contains('menu-open');
    }

    function openMenu() {
        header.classList.add('menu-open');
        hamburger.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        header.classList.remove('menu-open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }

    function toggleMenu() {
        if (isOpen()) closeMenu();
        else openMenu();
    }

    hamburger.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        toggleMenu();
    });

    nav.addEventListener('click', function(e) {
        if (!e.target.closest('.header-categories .container')) {
            closeMenu();
        }
    });

    nav.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', closeMenu);
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && isOpen()) closeMenu();
    });
}

document.addEventListener('DOMContentLoaded', function() {
    displayWomenTopSales();
    displayMenTopSales();
    displayAccessoriesTopSales();
    initCart();
    initHeaderOverBannerScroll();
    initHeroVideoSequence();
    initSidebar();
    initMobileMenu();
});

// Функция для использования placeholder изображений если реальные картинки отсутствуют
function initializePlaceholderImages() {
    const images = document.querySelectorAll('.product-img');
    images.forEach(img => {
        img.onerror = function() {
            const productName = this.alt || 'RADO BAGS';
            const color = 'FFC0CB';
            this.src = `https://via.placeholder.com/300x300/f8f8f8/${color}?text=${encodeURIComponent(productName)}`;
        };
    });
}

// Показать уведомление о добавлении в корзину
function showAddToCartNotification(productName) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #000;
        color: white;
        padding: 15px 20px;
        border-radius: 0;
        font-size: 12px;
        letter-spacing: 1px;
        text-transform: uppercase;
        z-index: 3000;
        transition: all 0.3s ease;
    `;
    notification.textContent = `✓ ${productName} добавлен в корзину`;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Обновленная функция добавления в корзину с уведомлением
function addToCartWithNotification(productId) {
    addToCart(productId);
    const product = findProductById(productId);
    if (product) showAddToCartNotification(product.name);
}

// Обновляем обработчики кнопок "В корзину"
function updateAddToCartButtons() {
    const buttons = document.querySelectorAll('.add-to-cart');
    buttons.forEach(button => {
        const productId = button.getAttribute('onclick').match(/\d+/)[0];
        button.setAttribute('onclick', `addToCartWithNotification(${productId})`);
    });
}

// Инициализация улучшенного функционала
document.addEventListener('DOMContentLoaded', function() {
    displayWomenTopSales();
    displayMenTopSales();
    displayAccessoriesTopSales();
    updateCartCount();
    
    initializePlaceholderImages();
    updateAddToCartButtons();
    
    const cartIcon = document.querySelector('.cart-icon');
    if (cartIcon) {
        cartIcon.addEventListener('click', showCart);
    }
    
    const cartOverlay = document.getElementById('cart-overlay');
    if (cartOverlay) {
        cartOverlay.addEventListener('click', function(e) {
            if (e.target === this) {
                closeCart();
            }
        });
    }
    
    attachCheckoutFormHandler();
    updateCheckoutSummary();
});
// Функция для перехода на страницу товара
function goToProductPage(productId) {
    window.location.href = `product.html?id=${productId}`;
}

// Сделать карточки товаров кликабельными
function makeProductCardsClickable() {
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        const productId = card.dataset.productId;
        if (productId) {
            card.style.cursor = 'pointer';
            card.addEventListener('click', (e) => {
                // Не переходим если кликнули на кнопку "В корзину"
                if (!e.target.closest('.add-to-cart')) {
                    goToProductPage(parseInt(productId));
                }
            });
        }
    });
}

// Обновляем функции отображения товаров чтобы добавлять data-product-id
function displayWomenTopSales(page = 1) {
    const grid = document.getElementById('women-top-grid');
    const pagination = document.getElementById('women-pagination');
    if (!grid) return;

    syncTopProductsWithCatalog();
    currentWomenPage = page;
    const womenProducts = topProducts.women.slice(0, 4);
    const totalPages = 1;
    
    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const pageProducts = womenProducts.slice(startIndex, endIndex);
    
    grid.innerHTML = '';
    pageProducts.forEach(product => {
        const productImage = getProductImage(product);
        const swatches = getSwatchColorsForCard(product);
        const swatchesHtml = swatches.length
            ? `<div class="product-swatches">${swatches.map(s => `<span class="product-swatch" style="background-color:${s.hex}" title="${s.name}"></span>`).join('')}</div>`
            : '<div class="product-swatches"></div>';
        const oldPrice = product.originalPrice || product.oldPrice;
        const priceHtml = oldPrice
            ? `<span class="product-price-minimal product-price-minimal--old">${oldPrice} MDL</span> <span class="product-price-minimal">${product.price} MDL</span>`
            : `<span class="product-price-minimal">${product.price} MDL</span>`;
        grid.innerHTML += `
            <div class="product-card product-card--minimal" data-product-id="${product.id}">
                <div class="product-image">${productImage}<div class="product-emoji" style="display: ${product.image ? 'none' : 'flex'}">👜</div><div class="product-image__overlay">${swatchesHtml}<div class="product-price-minimal-wrap">${priceHtml}</div></div></div>
            </div>
        `;
    });
    makeProductCardsClickable();
    createPagination(pagination, page, totalPages, 'women');
}

// Обновляем инициализацию
document.addEventListener('DOMContentLoaded', function() {
    displayWomenTopSales();
    displayMenTopSales();
    displayAccessoriesTopSales();
    updateCartCount();
    
    initializePlaceholderImages();
    updateAddToCartButtons();
    
    const cartIcon = document.querySelector('.cart-icon');
    if (cartIcon) {
        cartIcon.addEventListener('click', showCart);
    }
    
    const cartOverlay = document.getElementById('cart-overlay');
    if (cartOverlay) {
        cartOverlay.addEventListener('click', function(e) {
            if (e.target === this) {
                closeCart();
            }
        });
    }
});
// Функция для перехода на страницу товара
function goToProductPage(productId) {
    window.location.href = `product.html?id=${productId}`;
}

// Сделать карточки товаров кликабельными
function makeProductCardsClickable() {
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        const productId = card.dataset.productId;
        if (productId) {
            card.style.cursor = 'pointer';
            card.addEventListener('click', (e) => {
                // Не переходим если кликнули на кнопку "В корзину"
                if (!e.target.closest('.add-to-cart')) {
                    goToProductPage(parseInt(productId));
                }
            });
        }
    });
}