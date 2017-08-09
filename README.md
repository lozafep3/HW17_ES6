Отображение в доме делать по желанию. Если отображение в доме не делаете то реализовать вызов методов в консоль.

Данные сохранять можно в localStorage или https://mlab.com.

Если будете использовать mlab то в настройках аккаунта нужно поставить галочку на прямой доступ к базе данных не через бекенд.

Желательно использовать async await, если получатся не будет то можно Promise.



A small library ESMyBank.


Internal classes:

client (full name, addresses, phones)
card (number, expiry date, CVV code, client)
payment (senders card, receivers card, amount, currency, date)
Each class should has appropriate methods and properties (up to you!)


Library should allow to:

create/update/delete instances for all internal classes
fetch data about any item
To use ES6 features as much as possible.


http://slides.com/olegrovenskyi/es6/