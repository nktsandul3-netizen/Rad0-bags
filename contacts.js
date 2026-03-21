// Инициализация страницы контактов
document.addEventListener('DOMContentLoaded', function() {
    initializeContactForm();
});

// Инициализация формы обратной связи
function initializeContactForm() {
    const form = document.getElementById('feedback-form');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
        
        // Анимация полей формы
        const formInputs = form.querySelectorAll('input, textarea, select');
        formInputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.parentElement.classList.add('focused');
            });
            
            input.addEventListener('blur', function() {
                if (this.value === '') {
                    this.parentElement.classList.remove('focused');
                }
            });
            
            // Проверка заполненных полей при загрузке
            if (input.value !== '') {
                input.parentElement.classList.add('focused');
            }
        });
    }
}

// Обработка отправки формы
function handleFormSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    
    // Валидация формы
    if (validateForm(formData)) {
        // Имитация отправки формы
        showFormSuccess();
        form.reset();
        
        // Сброс стилей полей
        const formGroups = form.querySelectorAll('.form-group');
        formGroups.forEach(group => {
            group.classList.remove('focused');
        });
    }
}

// Валидация формы
function validateForm(formData) {
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    if (!name || !email || !subject || !message) {
        alert('Пожалуйста, заполните все обязательные поля (отмечены *)');
        return false;
    }
    
    if (!isValidEmail(email)) {
        alert('Пожалуйста, введите корректный email адрес');
        return false;
    }
    
    return true;
}

// Проверка email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Показать успешное сообщение
function showFormSuccess() {
    alert('Спасибо! Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время.');
}

// Открыть карту
function openMap() {
    const address = "ТЦ MALLDOVA, ул. Пушкина 12, Кишинев";
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(googleMapsUrl, '_blank');
}

// Показать/скрыть FAQ
function toggleFAQ(faqItem) {
    const answer = faqItem.querySelector('p');
    answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
}
