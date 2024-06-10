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

let mainMenu = ''

for (let i = 0; i < menu.length; i++) {
    let totalCostPreparation = 0;
    let info = `
наименование: ${menu[i].name}
ингридиенты: ${menu[i].ingredients}
цена: ${menu[i].price}
-------------------------------------------------------`
    mainMenu += info
}
console.log('                                                          Меню')
console.log(mainMenu)

