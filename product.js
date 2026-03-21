// Функции для страницы товара
let currentProduct = null;
let currentQuantity = 1;
let currentMediaList = [];
let currentMediaIndex = 0;

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

function setFavorites(ids) {
    localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(ids));
}

function isInFavorites(productId) {
    return getFavorites().indexOf(productId) !== -1;
}

function toggleFavorite(productId) {
    var ids = getFavorites();
    var i = ids.indexOf(productId);
    if (i === -1) ids.push(productId);
    else ids.splice(i, 1);
    setFavorites(ids);
    return isInFavorites(productId);
}

function updateFavoriteButton() {
    var btn = document.querySelector('.product-favorite-btn');
    if (!btn || !currentProduct) return;
    var active = isInFavorites(currentProduct.id);
    btn.classList.toggle('is-active', active);
    btn.setAttribute('aria-label', active ? 'Убрать из избранного' : 'В избранное');
}

function initFavoriteButton() {
    var btn = document.querySelector('.product-favorite-btn');
    if (!btn) return;
    updateFavoriteButton();
    btn.addEventListener('click', function () {
        if (!currentProduct) return;
        toggleFavorite(currentProduct.id);
        updateFavoriteButton();
        if (typeof updateFavoritesCount === 'function') updateFavoritesCount();
    });
}

// Загрузка товара при открытии страницы
document.addEventListener('DOMContentLoaded', function() {
    loadProduct();
    updateCartCount();
    initProductDrawer();
    loadRelatedProducts();
    initFavoriteButton();
});

var productDrawerTitles = {
    description: 'ОПИСАНИЕ',
    characteristics: 'ХАРАКТЕРИСТИКИ',
    certificate: 'СЕРТИФИКАТ СООТВЕТСТВИЯ',
    care: 'УХОД ЗА ИЗДЕЛИЕМ'
};

function initProductDrawer() {
    var drawer = document.getElementById('product-drawer');
    var overlay = document.getElementById('product-drawer-overlay');
    var panel = document.getElementById('product-drawer-panel');
    var titleEl = document.getElementById('product-drawer-title');
    var contentEl = document.getElementById('product-drawer-content');
    var closeBtn = document.getElementById('product-drawer-close');
    if (!drawer || !contentEl || !titleEl) return;

    function closeDrawer() {
        drawer.classList.remove('is-open');
        drawer.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    function openDrawer(section) {
        var title = productDrawerTitles[section];
        var sourceId = section === 'description' ? 'product-description' : section === 'characteristics' ? 'product-specs' : section === 'certificate' ? 'product-certificate-source' : 'product-care-source';
        var source = document.getElementById(sourceId);
        if (title) titleEl.textContent = title;
        if (source) contentEl.innerHTML = source.innerHTML; else contentEl.innerHTML = '';
        drawer.classList.add('is-open');
        drawer.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    document.querySelectorAll('.product-accordion-trigger').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var section = this.getAttribute('data-drawer');
            if (section) openDrawer(section);
        });
    });
    if (overlay) overlay.addEventListener('click', closeDrawer);
    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && drawer.classList.contains('is-open')) closeDrawer();
    });
}

// Загрузить данные товара
function loadProduct() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    
    if (!productId) {
        showError('Товар не найден');
        return;
    }

    // Ищем товар во всех категориях
    // Ищем товар сначала в общей базе products (категории сайта)
    if (typeof products !== 'undefined') {
        currentProduct = products.find(p => p.id === productId);
    }

    // Если не нашли в products — ищем в топах главной страницы
    if (!currentProduct && typeof topProducts !== 'undefined') {
        currentProduct = topProducts.women.find(p => p.id === productId);
    }

    if (!currentProduct) {
        console.error('Товар с ID', productId, 'не найден');
        showError('Товар не найден');
        return;
    }

    console.log('Товар загружен:', currentProduct);
    displayProductDetails();
}

// Показать детали товара
function displayProductDetails() {
    // Основная информация
    const productTitle = document.getElementById('product-title');
    const breadcrumbProduct = document.getElementById('breadcrumb-product');
    const breadcrumbCategory = document.getElementById('breadcrumb-category');
    
    if (productTitle) productTitle.textContent = currentProduct.name;
    if (breadcrumbProduct) breadcrumbProduct.textContent = currentProduct.name;
    if (breadcrumbCategory) {
        const isMen = (currentProduct.category || '').toLowerCase() === 'men';
        breadcrumbCategory.textContent = isMen ? 'Мужские сумки' : 'Каталог';
        breadcrumbCategory.href = isMen ? 'men.html' : 'women.html';
    }
    
    // Цены
    const currentPriceElem = document.getElementById('current-price');
    const originalPriceElem = document.getElementById('original-price');
    const discountBadgeElem = document.getElementById('discount-badge');
    
    if (currentPriceElem) {
        currentPriceElem.textContent = `${currentProduct.price || 0} MDL`;
    }
    
    const oldPriceVal = currentProduct.originalPrice || currentProduct.oldPrice;
    if (oldPriceVal && originalPriceElem && discountBadgeElem) {
        const discount = Math.round((1 - currentProduct.price / oldPriceVal) * 100);
        originalPriceElem.textContent = `${oldPriceVal} MDL`;
        originalPriceElem.style.display = 'block';
        discountBadgeElem.textContent = `-${discount}%`;
        discountBadgeElem.style.display = 'block';
    } else {
        if (originalPriceElem) originalPriceElem.style.display = 'none';
        if (discountBadgeElem) discountBadgeElem.style.display = 'none';
    }

    // Галерея (Ekonika layout) или старое отображение изображений
    const galleryGrid = document.getElementById('product-gallery-grid');
    if (galleryGrid) {
        displayProductGalleryGrid();
    } else {
        displayProductImages();
    }
    initProductZoom();

    // Цвета и размеры (только если блоки есть на странице)
    if (document.getElementById('color-options')) displayColorOptions();
    if (document.getElementById('size-options')) displaySizeOptions();

    // Метка товара (Новинка)
    const labelEl = document.getElementById('product-label');
    if (labelEl) {
        labelEl.textContent = currentProduct.isNew ? 'Новинка' : '';
        labelEl.style.display = currentProduct.isNew ? 'block' : 'none';
    }

    // Рассрочка
    const installmentEl = document.getElementById('product-installment-text');
    if (installmentEl && currentProduct.price) {
        const perPayment = Math.round(currentProduct.price / 4);
        installmentEl.textContent = '4 платежа по ' + perPayment + ' MDL';
    }

    // Описание и характеристики
    displayProductDescription();
}

// Получить список медиафайлов
function getProductMediaList() {
    const mediaItems = [];

    if (Array.isArray(currentProduct.media) && currentProduct.media.length > 0) {
        currentProduct.media.forEach(item => {
            const normalized = normalizeMediaItem(item);
            if (normalized) mediaItems.push(normalized);
        });
    } else if (Array.isArray(currentProduct.images) && currentProduct.images.length > 0) {
        currentProduct.images.forEach(src => {
            const normalized = normalizeMediaItem({ src });
            if (normalized) mediaItems.push(normalized);
        });
    } else if (currentProduct.image) {
        const normalized = normalizeMediaItem({ src: currentProduct.image });
        if (normalized) mediaItems.push(normalized);
    }

    return mediaItems;
}

function normalizeMediaItem(item) {
    if (!item) return null;
    if (typeof item === 'string') {
        return {
            type: getMediaType(item),
            src: item
        };
    }

    const src = item.src || item.url;
    if (!src) return null;

    return {
        type: item.type || getMediaType(src),
        src,
        poster: item.poster || null
    };
}

function getMediaType(src) {
    return /\.(mp4|webm|ogg)$/i.test(src) ? 'video' : 'image';
}

// Галерея в сетке 2 колонки (Ekonika layout): клик открывает превью
function displayProductGalleryGrid() {
    const grid = document.getElementById('product-gallery-grid');
    if (!grid) return;

    currentMediaList = getProductMediaList();
    const imageList = currentMediaList.filter(function (m) { return m.type === 'image'; });

    if (!imageList.length && currentProduct.image) {
        imageList.push({ type: 'image', src: currentProduct.image });
    }

    grid.innerHTML = '';

    if (!imageList.length) {
        grid.innerHTML = '<div class="product-gallery-item" style="grid-column: 1 / -1; display: flex; align-items: center; justify-content: center; font-size: 48px; color: #ccc;">' + (currentProduct.emoji || '👜') + '</div>';
        return;
    }

    var zoomOverlay = document.getElementById('product-zoom-overlay');
    var zoomImg = document.getElementById('product-zoom-image');

    function openZoom(src, alt) {
        if (!zoomOverlay || !zoomImg) return;
        zoomImg.src = src;
        zoomImg.alt = alt || currentProduct.name || '';
        zoomOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    imageList.forEach(function (media, index) {
        var item = document.createElement('div');
        item.className = 'product-gallery-item';
        var img = document.createElement('img');
        img.src = media.src;
        img.alt = (currentProduct.name || '') + ' — фото ' + (index + 1);
        img.loading = index < 2 ? 'eager' : 'lazy';
        img.onerror = function () {
            this.style.display = 'none';
            var fallback = item.querySelector('.product-gallery-emoji');
            if (fallback) fallback.style.display = 'flex';
        };
        item.appendChild(img);
        var fallback = document.createElement('span');
        fallback.className = 'product-gallery-emoji';
        fallback.style.display = 'none';
        fallback.textContent = currentProduct.emoji || '👜';
        fallback.setAttribute('aria-hidden', 'true');
        item.appendChild(fallback);
        item.addEventListener('click', function () {
            openZoom(media.src, img.alt);
        });
        grid.appendChild(item);
    });
}

// Показать изображения/видео товара (старый layout)
function displayProductImages() {
    const mainImageContainer = document.querySelector('.main-image');
    const thumbnails = document.getElementById('image-thumbnails');

    if (!mainImageContainer) {
        console.error('Контейнер .main-image не найден');
        return;
    }

    currentMediaList = getProductMediaList();
    currentMediaIndex = 0;

    if (!currentMediaList.length) {
        mainImageContainer.innerHTML = `<div class="product-emoji">${currentProduct.emoji || '👜'}</div>`;
        if (thumbnails) thumbnails.innerHTML = '';
        return;
    }

    renderMainMedia(mainImageContainer, currentMediaList[currentMediaIndex]);
    renderMediaThumbnails(thumbnails, currentMediaList, currentMediaIndex);
}

function renderMainMedia(container, media) {
    container.innerHTML = '';

    if (!media) {
        container.innerHTML = `<div class="product-emoji">${currentProduct.emoji || '👜'}</div>`;
        return;
    }

    if (media.type === 'video') {
        const video = document.createElement('video');
        video.controls = true;
        video.loop = true;
        video.muted = true;
        video.playsInline = true;
        video.autoplay = true;
        video.className = 'product-video';
        if (media.poster) video.poster = media.poster;

        const source = document.createElement('source');
        source.src = media.src;
        source.type = 'video/mp4';
        video.appendChild(source);

        container.appendChild(video);
    } else {
        const img = document.createElement('img');
        img.id = 'main-product-image';
        img.src = media.src;
        img.alt = currentProduct.name;
        img.className = 'product-img';
        img.onerror = function() {
            handleImageError(this);
        };
        container.appendChild(img);
        const zoomBtn = document.createElement('button');
        zoomBtn.type = 'button';
        zoomBtn.className = 'product-zoom-btn';
        zoomBtn.id = 'product-zoom-btn';
        zoomBtn.setAttribute('aria-label', 'Увеличить');
        zoomBtn.textContent = '🔍';
        container.appendChild(zoomBtn);
        zoomBtn.addEventListener('click', function() {
            const zoomOverlay = document.getElementById('product-zoom-overlay');
            const zoomImg = document.getElementById('product-zoom-image');
            if (zoomOverlay && zoomImg && img.src) {
                zoomImg.src = img.src;
                zoomImg.alt = img.alt || '';
                zoomOverlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    }
}

function renderMediaThumbnails(container, mediaList, activeIndex) {
    if (!container) return;

    container.innerHTML = '';

    if (mediaList.length <= 1) {
        container.style.display = 'none';
        return;
    }

    container.style.display = 'flex';

    mediaList.forEach((media, index) => {
        const thumbnail = document.createElement('div');
        thumbnail.className = `thumbnail ${index === activeIndex ? 'active' : ''}`;
        thumbnail.dataset.mediaIndex = index;

        if (media.type === 'video') {
            const videoThumb = document.createElement('div');
            videoThumb.className = 'thumbnail-video';
            if (media.poster) {
                videoThumb.innerHTML = `<img src="${media.poster}" alt="Видео ${index + 1}"><span class="video-icon">▶</span>`;
            } else {
                videoThumb.innerHTML = `<span class="video-icon">▶</span>`;
            }
            thumbnail.appendChild(videoThumb);
        } else {
            const img = document.createElement('img');
            img.src = media.src;
            img.alt = `${currentProduct.name} превью ${index + 1}`;
            img.onerror = function() {
                const altSrc = media.src.replace(/\.jpeg$/i, '.jpg') !== media.src
                    ? media.src.replace(/\.jpeg$/i, '.jpg')
                    : media.src.replace(/\.jpg$/i, '.jpeg');
                if (this.dataset.triedAlt) return;
                this.dataset.triedAlt = '1';
                this.src = altSrc;
            };
            thumbnail.appendChild(img);
        }

        thumbnail.addEventListener('click', () => changeMainMedia(index));
        container.appendChild(thumbnail);
    });
}

function changeMainMedia(index) {
    if (index === currentMediaIndex || !currentMediaList[index]) return;

    currentMediaIndex = index;
    const mainImageContainer = document.querySelector('.main-image');
    if (mainImageContainer) {
        renderMainMedia(mainImageContainer, currentMediaList[currentMediaIndex]);
    }

    const thumbnails = document.getElementById('image-thumbnails');
    if (thumbnails) {
        thumbnails.querySelectorAll('.thumbnail').forEach((thumb, thumbIndex) => {
            thumb.classList.toggle('active', thumbIndex === currentMediaIndex);
        });
    }
}

// Показать варианты цветов (с кружками)
function displayColorOptions() {
    const colorOptions = document.getElementById('color-options');
    const isSale102 = currentProduct && (currentProduct.id === 102 || (currentProduct.name && currentProduct.name.toLowerCase().includes('sale 102')));
    const isSale103 = currentProduct && (currentProduct.id === 103 || (currentProduct.name && currentProduct.name.toLowerCase().includes('sale 103')));
    const isSale104 = currentProduct && (currentProduct.id === 104 || (currentProduct.name && currentProduct.name.toLowerCase().includes('sale 104')));
    const isSale105 = currentProduct && (currentProduct.id === 105 || (currentProduct.name && currentProduct.name.toLowerCase().includes('sale 105')));
    const isSale106 = currentProduct && (currentProduct.id === 106 || (currentProduct.name && currentProduct.name.toLowerCase().includes('sale 106')));
    const isSuedeFringe = currentProduct && (currentProduct.id === 75 || (currentProduct.name && currentProduct.name.toLowerCase().includes('suede fringe')));
    const isSuedeTassel = currentProduct && (currentProduct.id === 131 || (currentProduct.name && currentProduct.name.toLowerCase().includes('suede tassel bucket')));
    const isMiniBelle = currentProduct && (currentProduct.id === 77 || (currentProduct.name && currentProduct.name.toLowerCase().includes('mini belle')));
    const isHeritageLeather = currentProduct && (currentProduct.id === 78 || (currentProduct.name && currentProduct.name.toLowerCase().includes('heritage leather')));
    const isEleganceTote = currentProduct && (currentProduct.id === 79 || (currentProduct.name && currentProduct.name.toLowerCase().includes('elegance leather tote')));
    const isEleganceLock = currentProduct && (currentProduct.id === 116 || (currentProduct.name && currentProduct.name.toLowerCase().includes('elegance lock tote')));
    const isMilanoClassic = currentProduct && (currentProduct.id === 117 || (currentProduct.name && currentProduct.name.toLowerCase().includes('milano classic')));
    const isCandyPink = currentProduct && (currentProduct.id === 118 || (currentProduct.name && currentProduct.name.toLowerCase().includes('candy pink')));
    const isWovenMini = currentProduct && (currentProduct.id === 119 || (currentProduct.name && currentProduct.name.toLowerCase().includes('woven mini')));
    const isClassicLock = currentProduct && (currentProduct.id === 120 || (currentProduct.name && currentProduct.name.toLowerCase().includes('classic lock mini')));
    const isSoftElegance = currentProduct && (currentProduct.id === 130 || (currentProduct.name && currentProduct.name.toLowerCase().includes('soft elegance shoulder')));
    const isMiniTopHandle = currentProduct && (currentProduct.id === 121 || (currentProduct.name && currentProduct.name.toLowerCase().includes('mini top handle classic')));
    const isClassicLockShoulder = currentProduct && (currentProduct.id === 122 || (currentProduct.name && currentProduct.name.toLowerCase().includes('classic lock shoulder')));
    const isEleganceLockTopHandle = currentProduct && (currentProduct.id === 123 || (currentProduct.name && currentProduct.name.toLowerCase().includes('elegance lock top handle')));
    const isVintageSuede = currentProduct && (currentProduct.id === 124 || (currentProduct.name && currentProduct.name.toLowerCase().includes('vintage suede top handle')));
    const isLuxeHandle = currentProduct && (currentProduct.id === 125 || (currentProduct.name && currentProduct.name.toLowerCase().includes('luxe handle mini')));
    const isClassicLeatherTote = currentProduct && (currentProduct.id === 126 || (currentProduct.name && currentProduct.name.toLowerCase().includes('classic leather tote')));
    const isSuedeAccent = currentProduct && (currentProduct.id === 127 || (currentProduct.name && currentProduct.name.toLowerCase().includes('suede accent shoulder')));
    const isMoonGloss = currentProduct && (currentProduct.id === 128 || (currentProduct.name && currentProduct.name.toLowerCase().includes('moon gloss')));
    const isClassicLockTopHandleBag = currentProduct && (currentProduct.id === 129 || (currentProduct.name && currentProduct.name.toLowerCase().includes('classic lock top handle')));
    let colors, labels;
    if (isSale102 || isSale103 || isSale106) {
        colors = ['черный'];
        labels = ['Чёрный'];
    } else if (isSale104 || isSale105) {
        colors = ['темно-коричневый'];
        labels = ['Тёмно-коричневый'];
    } else if (isSuedeFringe) {
        colors = ['beige', 'taupe', 'camel', 'burgundy', 'black'];
        labels = ['Beige', 'Taupe', 'Camel', 'Burgundy', 'Black'];
    } else if (isSuedeTassel) {
        colors = ['black', 'burgundy', 'chocolate', 'camel', 'olive', 'taupe'];
        labels = ['Black', 'Burgundy', 'Chocolate', 'Camel', 'Olive', 'Taupe'];
    } else if (isMiniBelle) {
        colors = ['black', 'chocolate brown', 'taupe', 'burgundy', 'olive', 'cognac', 'tan'];
        labels = ['Black', 'Chocolate Brown', 'Taupe', 'Burgundy', 'Olive', 'Cognac', 'Tan'];
    } else if (isHeritageLeather) {
        colors = ['chocolate brown', 'black'];
        labels = ['Chocolate Brown', 'Black'];
    } else if (isEleganceTote || isEleganceLock) {
        colors = ['black'];
        labels = ['Black'];
    } else if (isMilanoClassic) {
        colors = ['beige'];
        labels = ['Beige'];
    } else if (isCandyPink) {
        colors = ['forest green', 'classic red', 'lavender', 'cognac brown', 'fuchsia pink'];
        labels = ['Forest Green', 'Classic Red', 'Lavender', 'Cognac Brown', 'Fuchsia Pink'];
    } else if (isWovenMini) {
        colors = ['black', 'dark brown', 'camel', 'red', 'beige', 'taupe'];
        labels = ['Black', 'Brown', 'Camel', 'Red', 'Beige', 'Taupe'];
    } else if (isClassicLock) {
        colors = ['black', 'beige', 'cream', 'camel', 'taupe', 'orange', 'light blue'];
        labels = ['Black', 'Beige', 'Cream', 'Camel', 'Taupe', 'Orange', 'Light Blue'];
    } else if (isSoftElegance) {
        colors = ['camel', 'black', 'chocolate', 'taupe'];
        labels = ['Camel', 'Black', 'Chocolate', 'Taupe'];
    } else if (isMiniTopHandle) {
        colors = ['taupe', 'olive green', 'dark green', 'pink', 'purple'];
        labels = ['Taupe', 'Olive Green', 'Dark Green', 'Pink', 'Purple'];
    } else if (isClassicLockShoulder) {
        colors = ['black', 'beige', 'cream'];
        labels = ['Black', 'Beige', 'Cream'];
    } else if (isEleganceLockTopHandle) {
        colors = ['black', 'dark brown', 'cream'];
        labels = ['Black', 'Dark Brown', 'Cream'];
    } else if (isVintageSuede) {
        colors = ['chocolate brown'];
        labels = ['Chocolate Brown'];
    } else if (isLuxeHandle) {
        colors = ['black', 'dark brown', 'tan', 'beige'];
        labels = ['Black', 'Dark Brown', 'Tan', 'Beige'];
    } else if (isClassicLeatherTote) {
        colors = ['tan'];
        labels = ['Tan'];
    } else if (isSuedeAccent) {
        colors = ['black', 'dark brown', 'burgundy', 'camel', 'taupe'];
        labels = ['Black', 'Brown', 'Burgundy', 'Camel', 'Taupe'];
    } else if (isMoonGloss) {
        colors = ['black', 'chocolate', 'camel', 'cream', 'sky blue'];
        labels = ['Black', 'Chocolate', 'Camel', 'Cream', 'Sky Blue'];
    } else if (isClassicLockTopHandleBag) {
        colors = ['black', 'chocolate'];
        labels = ['Black', 'Chocolate'];
    } else {
        colors = ['black', 'charcoal grey', 'light grey', 'olive green', 'red', 'burgundy', 'dark brown', 'cognac', 'beige', 'taupe'];
        labels = ['Black', 'Charcoal Grey', 'Light Grey', 'Olive Green', 'Red', 'Burgundy', 'Dark Brown', 'Cognac', 'Beige', 'Taupe'];
    }
    const productColor = (currentProduct.color || '').toLowerCase().replace(/\s+/g, ' ').trim();
    const norm = (c) => c.replace(/\s+/g, ' ').trim();
    const match = (c) => norm(productColor) === norm(c) || (productColor === 'карамельный' && c === 'camel') || (productColor === 'beige' && (c === 'tan' || c === 'taupe')) || (productColor === 'dark brown' && c === 'chocolate brown') || (productColor === 'pink' && c === 'fuchsia pink');

    colorOptions.innerHTML = '';
    colors.forEach((color, index) => {
        const colorOption = document.createElement('div');
        const isSelected = match(color) || (index === 0 && !productColor);
        colorOption.className = `color-option ${isSelected ? 'selected' : ''}`;
        colorOption.innerHTML = `
            <div class="color-dot" style="background-color: ${getColorHex(color)}"></div>
            <span class="color-name">${labels[index]}</span>
        `;
        colorOption.onclick = () => selectColor(colorOption, color);
        colorOptions.appendChild(colorOption);
    });
}

// Показать варианты размеров
function displaySizeOptions() {
    const sizeOptions = document.getElementById('size-options');
    const sizes = currentProduct.size ? [currentProduct.size] : ['M'];
    
    sizeOptions.innerHTML = '';
    sizes.forEach((size, index) => {
        const sizeOption = document.createElement('div');
        sizeOption.className = `size-option ${index === 0 ? 'selected' : ''}`;
        sizeOption.textContent = size;
        sizeOption.onclick = () => selectSize(sizeOption, size);
        sizeOptions.appendChild(sizeOption);
    });
}

// Показать описание и характеристики
function displayProductDescription() {
    if (!currentProduct) {
        console.error('currentProduct не определен');
        return;
    }
    
    const descriptionElem = document.getElementById('product-description');
    const specsElem = document.getElementById('product-specs');
    
    if (!descriptionElem) {
        console.error('Элемент product-description не найден на странице');
        return;
    }
    
    if (!specsElem) {
        console.error('Элемент product-specs не найден на странице');
        return;
    }
    
    // ОПИСАНИЕ - используем реальное описание из объекта товара
    if (currentProduct.description) {
        descriptionElem.textContent = currentProduct.description;
    } else {
        // Если описания нет, показываем стандартное
        descriptionElem.textContent = `Премиальная женская сумка от RADO BAGS. Высокое качество материалов и стильный дизайн.`;
    }
    
    // Характеристики - используем из объекта товара, если есть
    let specs = [];
    
    if (currentProduct.specifications && Array.isArray(currentProduct.specifications) && currentProduct.specifications.length > 0) {
        // Если у товара есть свои характеристики, используем их
        specs = currentProduct.specifications;
        console.log('Используются характеристики товара:', specs);
    } else {
        // Стандартные характеристики (если не указаны индивидуальные)
        specs = [
            { name: 'Категория', value: 'Женские сумки' },
            { name: 'Материал', value: currentProduct.material || 'качественный материал' },
            { name: 'Цвет', value: currentProduct.color || 'классический' },
            { name: 'Размер', value: currentProduct.size || 'стандартный' },
            { name: 'Бренд', value: 'RADO BAGS' },
            { name: 'Страна', value: 'Молдова' }
        ];
        console.log('Используются стандартные характеристики:', specs);
    }
    
    specsElem.innerHTML = '';
    if (specs.length === 0) {
        specsElem.innerHTML = '<p style="color: #999; padding: 20px;">Характеристики не указаны</p>';
        return;
    }
    
    specs.forEach(spec => {
        const specItem = document.createElement('div');
        specItem.className = 'spec-item';
        specItem.innerHTML = `
            <span class="spec-name">${spec.name}</span>
            <span class="spec-value">${spec.value}</span>
        `;
        specsElem.appendChild(specItem);
    });
    
    console.log('Характеристики отображены, количество:', specs.length);
}

// Загрузить похожие товары
function loadRelatedProducts() {
    const relatedGrid = document.getElementById('related-products-grid');
    if (!relatedGrid) {
        console.warn('Элемент related-products-grid не найден');
        return;
    }

    // Берем товары из той же категории
    const relatedProducts = topProducts.women.filter(p => p.id !== currentProduct.id).slice(0, 4);

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
        if (p.isNew) return { text: 'NEW', class: '' };
        if (p.onSale) return { text: 'SALE', class: 'product-badge--sale' };
        return null;
    }
    function getRatingCount(p) {
        return p.ratingCount != null ? p.ratingCount : 24;
    }

    relatedGrid.innerHTML = '';
    relatedProducts.forEach(product => {
        const productImage = getProductImage(product);
        const secondImg = getSecondImage(product);
        const badge = getBadge(product);
        const ratingCount = getRatingCount(product);
        const productCard = `
            <div class="product-card" onclick="goToProductPage(${product.id})">
                <div class="product-image">
                    ${badge ? `<span class="product-badge ${badge.class}">${badge.text}</span>` : ''}
                    ${productImage}
                    ${secondImg ? `<img src="${secondImg}" alt="" class="product-img product-img-hover" loading="lazy">` : ''}
                    <div class="product-emoji" style="display: ${product.image ? 'none' : 'flex'}">${(product.emoji || currentProduct.emoji || '👜')}</div>
                </div>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-rating"><span class="product-rating-stars">★★★★★</span> (${ratingCount})</div>
                ${product.originalPrice ? `
                    <div class="original-price">${product.originalPrice} MDL</div>
                    <div class="product-price">${product.price} MDL</div>
                ` : `<div class="product-price">${product.price} MDL</div>`}
            </div>
        `;
        relatedGrid.innerHTML += productCard;
    });
}

// Вспомогательные функции
function getColorHex(color) {
    const colorMap = {
        'black': '#000000',
        'chocolate': '#3D2314',
        'chocolate brown': '#3D2314',
        'sky blue': '#87CEEB',
        'tan': '#D2B48C',
        'olive': '#6B8E23',
        'charcoal grey': '#36454F',
        'light grey': '#D3D3D3',
        'olive green': '#6B8E23',
        'dark green': '#013220',
        'purple': '#800080',
        'forest green': '#228B22',
        'classic red': '#B22222',
        'lavender': '#E6E6FA',
        'cognac brown': '#9A463D',
        'fuchsia pink': '#FF77FF',
        'red': '#CC0000',
        'pink': '#FF69B4',
        'burgundy': '#800020',
        'dark brown': '#5C4033',
        'cognac': '#9A463D',
        'beige': '#E8DCC4',
        'cream': '#FFFDD0',
        'orange': '#FF8C00',
        'light blue': '#ADD8E6',
        'taupe': '#8B8589',
        'camel': '#C19A6B',
        'черный': '#000000',
        'коричневый': '#8B4513',
        'карамельный': '#C4A574',
        'коньячный': '#C4A574',
        'бежевый': '#F5F5DC',
        'розовый': '#FFC0CB',
        'белый': '#FFFFFF',
        'красный': '#FF0000',
        'серый': '#808080',
        'синий': '#0000FF',
        'хаки': '#C3B091',
        'зеленый': '#008000',
        'оливковый': '#6B8E23'
    };
    const key = (color || '').toLowerCase().replace(/\s+/g, ' ').trim();
    return colorMap[key] || colorMap[color] || '#000000';
}

function initProductZoom() {
    const zoomOverlay = document.getElementById('product-zoom-overlay');
    const zoomClose = document.getElementById('product-zoom-close');
    const zoomImg = document.getElementById('product-zoom-image');
    if (!zoomOverlay || !zoomImg) return;

    function closeZoom() {
        zoomOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (zoomClose) zoomClose.addEventListener('click', closeZoom);
    zoomOverlay.addEventListener('click', function (e) {
        if (e.target === zoomOverlay) closeZoom();
    });
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && zoomOverlay.classList.contains('active')) closeZoom();
    });

    var zoomBtn = document.getElementById('product-zoom-btn');
    var mainImg = document.getElementById('main-product-image');
    if (zoomBtn && mainImg) {
        zoomBtn.addEventListener('click', function () {
            var src = mainImg.src || mainImg.getAttribute('src');
            if (src) {
                zoomImg.src = src;
                zoomImg.alt = mainImg.alt || '';
                zoomOverlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    }
}

function selectColor(element, color) {
    document.querySelectorAll('.color-option').forEach(opt => opt.classList.remove('selected'));
    element.classList.add('selected');
}

function selectSize(element, size) {
    document.querySelectorAll('.size-option').forEach(opt => opt.classList.remove('selected'));
    element.classList.add('selected');
}

function increaseProductQuantity() {
    currentQuantity++;
    document.getElementById('product-quantity').textContent = currentQuantity;
}

function decreaseProductQuantity() {
    if (currentQuantity > 1) {
        currentQuantity--;
        document.getElementById('product-quantity').textContent = currentQuantity;
    }
}

function addCurrentProductToCart() {
    if (!currentProduct) return;
    
    // Добавляем товар в корзину currentQuantity раз
    for (let i = 0; i < currentQuantity; i++) {
        addToCartWithNotification(currentProduct.id);
    }
    
    // Сбрасываем количество
    currentQuantity = 1;
    document.getElementById('product-quantity').textContent = currentQuantity;
}

// Совместимость со старым вызовом
function changeMainImage(payload) {
    if (typeof payload === 'number') {
        changeMainMedia(payload);
        return;
    }

    const targetIndex = currentMediaList.findIndex(item => item.src === payload);
    if (targetIndex >= 0) {
        changeMainMedia(targetIndex);
    }
}

function handleImageError(img) {
    if (!img) return;
    if (!img.dataset.triedAlt && img.src) {
        img.dataset.triedAlt = '1';
        const altSrc = /\.jpeg$/i.test(img.src) ? img.src.replace(/\.jpeg$/i, '.jpg') : img.src.replace(/\.jpg$/i, '.jpeg');
        img.onerror = null;
        img.src = altSrc;
        return;
    }
    img.style.display = 'none';
    const emoji = document.createElement('div');
    emoji.className = 'product-emoji';
    emoji.textContent = currentProduct && (currentProduct.emoji || '👜');
    if (img.parentNode) {
        img.parentNode.appendChild(emoji);
    }
}

function showError(message) {
    document.querySelector('.product-detail-layout').innerHTML = `
        <div style="text-align: center; padding: 60px 20px;">
            <h2>${message}</h2>
            <button onclick="location.href='index.html'" class="cta-button">Вернуться на главную</button>
        </div>
    `;
}
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
