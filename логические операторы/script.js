let userPassword = {
    admin: 'root',
    user: '123',
}

let userName = prompt('Введите имя пользователя');

if (userName === 'admin' || userName === 'user') {

    let pass = prompt('Введите пароль');

    if (pass === userPassword.admin || pass === userPassword.user) {
        alert('Вы вошли');
    } 
    else {
        alert('Неправильный пароль');
    }
} else {
    alert('Такого пользователя не существует');
}
