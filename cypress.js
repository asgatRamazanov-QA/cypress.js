
describe('Тестирование форма логина', function () {
    it('Проверка на позитивный логин и пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon');
        cy.get('#exitMessageButton > .exitIcon').click();
        cy.contains('Форма логина');
    })
})
 

 
describe('Тестирование Забыли пароль?', function () {
    it('Проверка на Востановление пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('german@dolnikov.ru');
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon');
        cy.get('#exitMessageButton > .exitIcon').click();
    })
})


describe('Тестирование Негативный тест авторизации', function () {
    it('Проверка на неправельный пароль и правильный логин', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio2');
        cy.get('#loginButton').click();
        cy.get('#message').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon');
        cy.get('#exitMessageButton > .exitIcon').click();
        cy.contains('Форма логина');
    })    
})


describe('Тестирование Негативный тест авторизации', function () {
    it('Проверка на неправельный Логин и првильный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikav.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#message').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon');
        cy.get('#exitMessageButton > .exitIcon').click();
        cy.contains('Форма логина');
        
    })    
})
 

describe('Тестирование Негативный тест кейс валидации', function () {
    it('Проверка на Логин без @ и правильным паролем', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('germandolnikav.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#message').contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon');
        cy.get('#exitMessageButton > .exitIcon').click();
        cy.contains('Форма логина');
        
    })    
})


describe('Тестирование на привидение к строчным буквам в логине', function () {
    it('Проверка Логин к приведению от Загланых букв к строчным и правильным паролем', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#message').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon');
        cy.get('#exitMessageButton > .exitIcon').click();
        cy.contains('Форма логина');
       
    })    
})


describe('Тестирование покупка 3 шт БРОММС Двухместная кровать и 1шт КЛЛАРИОН Низкий столик', function () {
    it('Проверка Заказа товаров онлайн', function () {
        cy.visit('https://testqastudio.me/');
        cy.get('.post-11342 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
        cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').click();
        cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').click();
        cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
        cy.get('.cart-panel-content > .modal-header > .close-account-panel > .razzi-svg-icon > svg').click();
        cy.wait(4050);
        cy.get('#menu-top > .menu-item-home > a').click();
        cy.get('.post-11337 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
        cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
        cy.wait(4050);
        cy.get('.woocommerce-mini-cart__buttons > [href="https://testqastudio.me/cart/"]').click();
        cy.get('.checkout-button').click();
        cy.get('#billing_first_name').type('антон');
        cy.get('#billing_last_name').type('кузнецов');
        cy.get('#billing_company').type('солнце и подсолнух');
        cy.wait(6000);
        cy.get('#select2-billing_country-container');
        cy.get('#billing_address_1').type('дом.22,ул верхняя масловка');
        cy.get('#billing_address_2').type('этаж 2,подъезд 2');
        cy.get('#billing_city').type('москва');
        cy.get('#billing_state').type('савеловский');
        cy.get('#billing_postcode').type('234567');
        cy.get('#billing_phone').type('+79672343456');
        cy.get('#billing_email').type('awd324@mail.ru');
        cy.get('#order_comments').type('упаковать и срочно доставить');
        cy.get('#place_order').click();




        

    })    
})





