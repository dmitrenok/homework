let sushi = {
    ingredients: ['rice', 'fish', 'nuri'],
    cookingTime: 60,
    price: 600,
    costPrice: 300,
}
let wok = {
    ingredients: ['noodles', 'vegetables', 'meat', 'seasoning'],
    cookingTime: 30,
    price: 400,
    costPrice: 200,

}
let buuza = {
    ingredients: ['dough', 'meat', 'onion'],
    cookingTime: 90,
    price: 70,
    costPrice: 35,
}
let pizza = {
    ingredients: ['dough', 'vegetables', 'sausage'],
    cookingTime: 100,
    price: 700,
    costPrice: 200,
}
console.log(sushi, wok, buuza, pizza);

//создаем массив из объектов
let menu = [sushi, wok, buuza, pizza]
console.log(menu);

//удаляем одно блюдо из массива
menu.pop();
console.log(menu);

//добавляем удаленное блюдо на первое место
menu.unshift(pizza);
console.log(menu);

//удаляем один из ингридиентов этого блюда
delete pizza.ingredients;
console.log(pizza.ingredients);

//посчитаю сколько потрачу на приготовление
console.log(sushi.costPrice+wok.costPrice+buuza.costPrice+pizza.costPrice);

//посчитаю за сколько буду продавать
console.log(sushi.price+wok.price+buuza.price+pizza.price);

//посчитаю сколько заработаю на проданном суши
console.log(sushi.price-sushi.costPrice);

//на проданном воке
console.log(wok.price-wok.costPrice);

//на проданной буузе;
console.log(buuza.price-buuza.costPrice);

//на проданной пицце
console.log(pizza.price-pizza.costPrice);

//удалим все элементы из массива, кроме одного
menu = [menu.pop()];
console.log(menu);



