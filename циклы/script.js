//четные числа
for (let i = 2; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log (i)
    }
}

//бесконечный цикл, прерванный на 5 итерации
let i = 0;
while (true) {
    console.log (i)
    if (i === 5) {
        break;
    }
    i++
}


let sushi = {
    name: 'sushi',
    ingredients: ['rice', 'fish', 'nuri'],
    cookingTime: 60,
    price: 600,
    costPrice: 300,
}
let wok = {
    name: 'wok',
    ingredients: ['noodles', 'pepper', 'pork', 'seasoning'],
    cookingTime: 30,
    price: 400,
    costPrice: 200,

}
let buuza = {
    name: 'buuza',
    ingredients: ['dough', 'meat', 'onion'],
    cookingTime: 90,
    price: 70,
    costPrice: 35,
}
let pizza = {
    name: 'pizza',
    ingredients: ['cake', 'vegetables', 'sausage'],
    cookingTime: 100,
    price: 700,
    costPrice: 200,
}
let menu = [sushi, wok, buuza, pizza]

let ingPrice = {
    'rice': 20,
    'fish': 100,
    'nuri': 10,
    'noodles': 30,
    'pepper': 80,
    'pork': 100,
    'seasoning': 10,
    'dough': 40,
    'meat': 100,
    'onion':10,
    'cake': 40,
    'vegetables': 80,
    'sausage': 100,
};

for (let i = 0; i < menu.length; i++) {
    let totalCostPreparation = 0;

    for (let j = 0; j < menu[i].ingredients.length; j++) {
        totalCostPreparation += ingPrice[menu[i].ingredients[j]];
    }
    console.log (`стоимость приготовления ${menu[i].name}: ${totalCostPreparation}`)
}

