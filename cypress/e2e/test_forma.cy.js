
import * as data from "../help/data.json"

describe('НАЗВАНИЕ_ГРУППЫ_ТЕСТОВ', function () {

    beforeEach('Начало теста', function () {
        cy.visit('/'); // Зайти на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
          }); // Надписть "Забыли пароль" верного цвета

    afterEach('Конец теста', function () {
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');//Крестик виден пользователю
           });

    it('успешная авторизация', function () {
         cy.get('#mail').type(data.login); // Ввести правильный логин
         cy.get('#pass').type(data.password);// Ввести правильный пароль
         cy.get('#loginButton').click(); // Нажать войти
         cy.get('#message').contains('Авторизация прошла успешно'); // Проверить наличие правильного текста
         cy.get('#message').should('be.visible');//Текст виден пользователю
         
     })

     it('не верный пароль', function () {
        cy.get('#mail').type(data.login); // Ввести правильный логин
        cy.get('#pass').type('iLoveqastudio');// Ввести не правильный пароль
        cy.get('#loginButton').click(); // Нажать войти
        cy.get('#message').contains('Такого логина или пароля нет'); // Проверить наличие правильного текста
        cy.get('#message').should('be.visible');//Текст виден пользователю
       
    })

    it('не верный логин', function () {
        cy.get('#mail').type("zvezdochka@mail.ru"); // Ввести не правильный логин
        cy.get('#pass').type(data.password);// Ввести правильный пароль
        cy.get('#loginButton').click(); // Нажать войти
        cy.get('#message').contains('Такого логина или пароля нет'); // Проверить наличие правильного текста
        cy.get('#message').should('be.visible');//Текст виден пользователю
        
    })

    it('проверка на валидацию', function () {
        cy.get('#mail').type("germandolnikov.ru"); // Ввести логин без @
        cy.get('#pass').type(data.password);// Ввести правильный пароль
        cy.get('#loginButton').click(); // Нажать войти
        cy.get('#message').contains('Нужно исправить проблему валидации'); // Проверить наличие правильного текста
        cy.get('#message').should('be.visible');//Текст виден пользователю
        
    })

    it('логика восстановления пароля', function () {
        cy.get('#forgotEmailButton').click(); // Нажать на кнопку "Забыли пароль"
        cy.get('#forgotForm').contains('Восстановите пароль'); //Проверить наличие правильного текста
        cy.get('#forgotForm').should('be.visible');//Текст виден пользователю
        cy.get('#restoreEmailButton').contains('Отправить код'); //Проверить наличие правильного текста
        cy.get('#restoreEmailButton').should('be.visible');//Текст виден пользователю
        cy.get('#mailForgot').type(data.login); // Ввести почту
        cy.get('#restoreEmailButton').click(); // нажать отправить код
        cy.get('#message').contains('Успешно отправили пароль на e-mail'); // Проверить наличие правильного текста
        cy.get('#message').should('be.visible');//Текст виден пользователю
    })

    it('проверку на приведение к строчным буквам в логине', function () {
        cy.get('#mail').type("GerMan@Dolnikov.ru"); // Ввести правильный логин
         cy.get('#pass').type(data.password);// Ввести правильный пароль
         cy.get('#loginButton').click(); // Нажать войти
         cy.get('#message').contains('Авторизация прошла успешно'); // Проверить наличие правильного текста
         cy.get('#message').should('be.visible');//Текст виден пользователю

    })
 }) 