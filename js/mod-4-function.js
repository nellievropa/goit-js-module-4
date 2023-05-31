3//  з автоперевірки

function greet(name) {
    return `Ласкаво просимо ${name}.`;

}
console.log(greet('Mango'));
console.log(greet('Nelly!!!'));
console.log(greet);

function registerGuest(name, callback) {
    console.log(`Реєструємо гостя ${name}.`);
    callback(name);
}
registerGuest('Nelly', greet);


function registerGuest(name, callback) {
    console.log(`Реєструємо гостя ${name}.`);
    callback(name);
  }
  
  // Передаємо інлайн функцію greet у якості колбека
  registerGuest("Манго", function greet(name) {
    console.log(`Ласкаво просимо ${name}.`);
  });
  
  // Передаємо інлайн функцію notify у якості колбека
  registerGuest("Полі", function notify(name) {
    console.log(`Шановний(а) ${name}, ваш номер буде готовий за 30 хвилин.`);
  });


//   function processCall(recipient) {
//     // Імітуємо доступність абонента випадковим числом
//     const isRecipientAvailable = Math.random() > 0.5;
  
//     if (!isRecipientAvailable) {
//       console.log(`Абонент ${recipient} недоступний, залиште повідомлення.`);
//       // Логіка активації автовідповідача
//     } else {
//       console.log(`З'єднуємо з ${recipient}, очікуйте...`);
//       // Логіка прийняття дзвінка
//     }
//   }
  
//   processCall("Манго");

  function processCall(recipient, onAvailable, onNotAvailable) {
    // Імітуємо доступність абонента випадковим числом
    const isRecipientAvailable = Math.random() > 0.5;
  
    if (!isRecipientAvailable) {
      onNotAvailable(recipient);
      return;
    }
  
    onAvailable(recipient);
  }
  
  function takeCall(name) {
    console.log(`З'єднуємо з ${name}, очікуйте...`);
    // Логіка прийняття дзвінка
  }
  
  function activateAnsweringMachine(name) {
    console.log(`Абонент ${name} недоступний, залиште повідомлення.`);
    // Логіка активації автовідповідача
  }
  
  function leaveHoloMessage(name) {
    console.log(`Абонент ${name} недоступний, записуємо голограму.`);
    // Логіка запису голограми
  }
  
  processCall("Манго", takeCall, activateAnsweringMachine);
  processCall("Полі", takeCall, leaveHoloMessage);

//   функцію, яка викликає console.log() N разів.
  function repeatLog(n) {
    for (let i = 0; i < n; i += 1) {
      console.log(i);
    }
  }
  
  repeatLog(5);

// зразок
  function printValue(value) {
    console.log(value);
  }
  
  function prettyPrint(value) {
    console.log("Logging value: ", value);
  }
  
  function repeat(n, action) {
    for (let i = 0; i < n; i += 1) {
      action(i);
    }
  }

  repeat(3, printValue);
//   repeat(3, prettyPrint);


// метод forEach

// массив.forEach(function callback(element, index, array) {
//     // Тіло колбек-функції
//   });

//   const numbers = [5, 10, 15, 20, 25];

// Класичний for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Індекс ${i}, значення ${numbers[i]}`);
// }

// Метод перебирання forEach - цикл не можна перервати, виконуэться до кынця 
// numbers.forEach(function (number, index) {
//   console.log(`Індекс ${index}, значення ${number}`);
// });
// стрілочні функції
// Звичайне оголошення функції
// function classicAdd(a, b, c) {
//     return a + b + c;
//   }
  
  // Те саме стрілочною функцією
//   const arrowAdd = (a, b, c) => {
//     return a + b + c;
//   };

//   Якщо параметрів декілька, то вони перераховуються через кому в круглих дужках, між знаками дорівнює = і стрілкою =>.

// const add = (a, b, c) => {
//   return a + b + c;
// };

// Якщо параметр один, його можна оголошувати без круглих дужок.

// const add = a => {
//   return a + 5;
// };

// Якщо параметри відсутні, то обов'язково повинні бути порожні круглі дужки.

// const greet = () => {
//   console.log("Привіт!");
// };

// const add = (...args) => {
//     console.log(args);
//   };
  
//   add(1, 2, 3);

  // Анонімна стрілочна функція для перебирання масиву
// numbers.forEach((number, index) => {
//     console.log(`Індекс ${index}, значення ${number}`);
//   });

//   const numbers = [5, 10, 15, 20, 25];

// const logMessage = (number, index) => {
//   console.log(`Індекс ${index}, значення ${number}`);
// };

// numbers.forEach(logMessage);


// Із атоперевірки 
// функция зворотнього виклику -callback
function deliverPizza(pizzaName) {
    return `Delivering ${pizzaName} pizza.`;
  };
// функция зворотнього виклику -callback
  function makePizza(pizzaName) {
    return `Pizza ${pizzaName} is being prepared, please wait...`;
  };
  
  // функція вищого порядку
  function makeMessage(pizzaName, callback) {
    const order = callback(pizzaName);
    console.log(callback());
    return;
  };
makeMessage("Royal Grand", makePizza);
makeMessage("Ultracheese", makePizza);
makeMessage("Ultracheese", deliverPizza);


// Пояснення Репети:
  // функція вищого порядку
const fnA = function (message, callback) {
    console.log(message);

    console.log(callback);
    callback(100);
};
// функция зворотнього виклику -callback
const fnB = function (number) {
    console.log(`Це лог при виклику fnB`, number);
};

fnA('qwqeqeqe', fnB);

const doMath = function (a, b, callback) {
    const result = callback(a, b);
    console.log(result);

};
// const add = function(x, y) {
//     return x + y;
// };
// літерал цієї функції виглядає так
doMath(2, 3, function(x, y) {
    return x + y;
});
// відніми - subtract
// const sub = function(x, y) {
//     return x - y;
// };
// літерал цієї функції виглядає так: - инлайн(вбудована функція)
doMath(54, 12, function(x, y) {
    return x - y;
});
// , function(x, y) {
// //     return x + y;
// });
// doMath(2, 3, add);
// doMath(10, 7, add);
// doMath(10, 7, sub);

//  Де використовуєм
// 1.  РЕГИСТРАЦІЯ подій
// за допомогою "document.querySelector" можемо отримати доступ до документу HTML
//  і ми хочемо зареєструвати того, хто клікнув на цю кнопку

const buttonRef = document.querySelector('.js-button');
const handleButtonClock = function() {
    console.log('Клік по кнопці');
}
// додаємо слухателя події
// це єдиний спосіб в JS зареєструвати когось по події
buttonRef.addEventListener('click', handleButtonClock);

// дуже приблизний приклад: десь там відбувається подія
function addEventListener(eventType, callback) {
    // якщо щось сталося і дорівню нашому кліку, то визивається нащша функція
    if(eventType === event) {
        callback();
    }
}
