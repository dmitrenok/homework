let userAge = prompt ('сколько тебе лет?');
if (userAge >= 18) {
    alert ('доступ разрешен')
} else {
    alert ('доступ запрещен')
}

let start = prompt ('готов?')
let answer = 'да'
if (start === answer) {
    alert ('поехали!')
} else {
    alert (':(')
}

let question = prompt ('у Вали сестер и братьев в семье одинаковое количество, кого больше? братьев или сестер?')
let sisters = 'сестер'
if (question === sisters) {
    alert ('правильно!')
} else {
    alert ('упс!')
}
 let question2 = prompt ('корень из 289?');
 if (question2 === 17) {
    alert ('да, молодец!');
 } else if (question2 === 18) {
    alert ('почти угадал')
 } else {
    alert ('oh no')
 }

 //теперь выполниим последний пример с оператором "?"
let question3 = prompt ('корень из 289?')
    question3 === 17 ? alert ('да, молодец!') :
    question3 === 18 ? alert ('почти угадал') : alert ('oh no')
