describe('НАЗВАНИЕ_ГРУППЫ_ТЕСТОВ', function () {

    beforeEach('Начало теста', function () {
        cy.visit('https://pokemonbattle.me/'); // Зайти на сайт
        cy.get('[href="https://status.qastudio-monitor.com"] > img').should('be.visible'); // Элемент виден пользователю
        cy.get('.footer__logo > div').should('be.visible'); // Элемент виден пользователю
        cy.get('.footer__studio').should('be.visible'); // Элемент виден пользователю
          }); 
         


    it('успешная авторизация', function () {
        cy.get('.login__content').contains('Битва покемонов'); // Проверка наличия текста
        cy.get('.login__content').should('be.visible'); // Элемент виден пользователю
        cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN'); // Ввести верный логин
        cy.get('#password').type('USER_PASSWORD'); // Ввести верный пароль
        cy.get('.auth__button').click(); // Нажать кнопку войти
        cy.get('.header__btns > [href="/shop"]').click();// перейти на страницу магазина
        cy.get('.available > button').first().click();// нажать на кнопку купить у доступного аватара
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996');
        cy.get(':nth-child(1) > .pay_base-input-v2').type('0925')// ввести дату
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125') // вводим CVV
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('ZVEZDOCHKA') // вводим имя держателя карты
        cy.get('.pay-btn').click(); // Нажать кнопку оплатить
        cy.get('.payment__form-defolt').contains('Подтверждение покупки'); // Проверка наличия текста
        cy.get('.payment__form-defolt').should('be.visible'); // Элемент виден пользователю
        cy.get('.pay__select-block').should('be.visible'); // Элемент виден пользователю
        cy.get('#cardnumber').type('56456'); // вводим код подтверждения
        cy.get('.payment__submit-button').click(); // Нажать кнопку отправить
        cy.get('.payment__padding').contains('Покупка прошла успешно'); // Проверка наличия текста
    
    
    }) 

    
 }) 
