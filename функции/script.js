//возвращаем меньшее число из двух
function minNumber(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  }
console.log(minNumber(5, 10));


//рассчитаем себестоимость применяя функцию
function getProfit(price, costPrice) {
    return price - costPrice;
}

let sushi = {
    name: 'sushi',
    ingredients: ['rice', 'fish', 'nuri'],
    cookingTime: 60,
    price: 0,
    costPrice: 100,
}
let wok = {
    name: 'wok',
    ingredients: ['noodles', 'pepper', 'pork', 'seasoning'],
    cookingTime: 30,
    price: 0,
    costPrice: 200,

}
let buuza = {
    name: 'buuza',
    ingredients: ['dough', 'meat', 'onion'],
    cookingTime: 90,
    price: 0,
    costPrice: 35,
}
let pizza = {
    name: 'pizza',
    ingredients: ['cake', 'vegetables', 'sausage'],
    cookingTime: 100,
    price: 0,
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
    menu[i].price = totalCostPreparation;
}

let result = ''
for (let i = 0; i < menu.length; i++){
    menu[i].profit = getProfit(menu[i].price, menu[i].costPrice);
    result += `Блюдо ${menu[i].name}; прибыль от продажи ${menu[i].profit}\n`;
}
console.log(result);