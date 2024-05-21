var names = prompt("Введіть Ім'я",'');
var position = prompt('Введіть професфю','');
var phone = prompt('Введіть номер телефону','');



// Створення HTML коду для візитки
var visitCard = ''
    + ' <TABLE class="visit-card">'
    + ' <TR>'
    + ' <TD>'
    + ' <IMG src="image.jpg" alt="Profile Image">'
    + ' </TD>'
    + ' <TD>'
    + ' <B>' + name + '</B><BR>'
    + ' <I>' + position + '</I><BR>'
    + ' <FONT color="blue">' + phone + '</FONT>'
    + ' </TD>'
    + ' </TR>'
    + ' </TABLE>';

// Знайти контейнер для відображення візиток
var container = document.getElementById("card-container");

// Створити таблицю, що міститиме 12 рядків з 3 стовпчиками
var table = '<TABLE class="visit-card-grid">';
for (var y = 0; y < 12; y++) {
    table += '<TR>';
    for (var x = 0; x < 3; x++) {
        table += '<TD class="visit-card">';
        table += visitCard;
        table += '</TD>';
    }
    table += '</TR>';
}
table += '</TABLE>';

// Додати таблицю до контейнера
container.innerHTML = table;