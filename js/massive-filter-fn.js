// із автоперевірки і працює тільки там, звернути увагу на порівняння!!

// const pizzaPalace = {
// 	pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
// 	order(pizzaName, onSuccess, onError) {
// 		if (!this.pizzas.includes(pizzaName)) {
// 			return onError(
// 				`There is no pizza with a name ${pizzaName} in the assortment.`,
// 			);
// 		}
// 		return onSuccess(pizzaName);
// 	},
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order("Smoked", makePizza, onOrderError);
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);

const filter = function (array, test) {
    const filteredArray = [];

    for (const el of array) {
        console.log(el);
        // console.log(test(el));
        const passed = test(el);

        if (passed) {
            filteredArray.push(el);
        }
    }

    return filteredArray;
};
 
// Логіка перевірки:
// 1. надо сюда передать функцию
// 2. Ця функція повинна отримувати кожний елемент массиуу
// 3. Якщо елемент масиву задовільняє умові, то функція повертає трк
// 4. Якщо елемент масиву НЕ задовільняє умові, то функція повертає фолсе

const callback1 = function (value) {
    return value >= 3;
};

const r1 = filter([1, 2, 3, 4, 5], callback1);
console.log(r1);
// запис вище довший, але з таким же перебором, як і знизу

const callback2 = function (value) {
    return value <= 4;
};

const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8, 12], callback2);
// це можно записати коротко
// const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8, 12], function (value) {
//     return value <= 4;
// });
console.log(r2);

const fruits = [
    { name: 'apple', quantity: 200, isFresh: true },
    { name: 'grapes', quantity: 150, isFresh: false },
    { name: 'pineapple', quantity: 300, isFresh: true },
    { name: 'bananas', quantity: 100, isFresh: true },
];

const getFruitsWithQuantity = function (fruits) {
    return fruits.quantity >= 120;
}
// callback3 = getFruitsWithQuantity
const r3 = filter(fruits, getFruitsWithQuantity);
console.log(r3);

function calculateTotalPrice(orderedItems) {
    let totalPrice = 0;
    // Change code below this line

    // for (let i = 0; i < orderedItems.length; i += 1) {
    //   totalPrice += orderedItems[i];
    // }
    orderedItems.forEach(function (number, index) {
        totalPrice += orderedItems[i];

        // Change code above this line
        return totalPrice;
    })
};

// const numbers = [1, 2, 3, 4, 5];
function filterArray(numbers, value) {
  const filteredNumbers = [];
  // Change code below this line

  numbers.forEach(function (number) {
  if (number > value) {
      filteredNumbers.push(number);
  }

  // for (let i = 0; i < numbers.length; i += 1) {
  //   if (numbers[i] > value) {
  //     filteredNumbers.push(numbers[i]);
  //   }
  
  });
  // Change code above this line
    return filteredNumbers;
}

filterArray([1, 2, 3, 4, 5], 3);

function getCommonElements(firstArray, secondArray) {
  const commonElements = [];
  // Change code below this line


  firstArray.forEach(function (number) {
    if (secondArray.includes(firstArray.number)) {
      commonElements.push(firstArray.number);
    }
  });
  return commonElements;
  // Change code above this line
};

getCommonElements([1, 2, 3], [2, 4]);
getCommonElements([1, 2, 3], [10, 20, 30]);

class Storage {
    constructor(items = []) {
        this.items = items;
    }
    getItems() {
        return this.items;
    };
    addItem(newItem) {
        this.items.push(newItem);
    };
    removeItem(itemToRemove) {
       
  
        for (let i = 0; i < this.items.length; i += 1) {
            if (this.items[i] === itemToRemove) {
                this.items.splice(i, 1);
            }
           
            //     this.items.filter((item) => !this.itemToRemove);
            // }
        }
    }
}
// Change code above this line
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]