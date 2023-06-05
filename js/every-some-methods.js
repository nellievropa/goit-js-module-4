// Array.prototype. every()
// поелементно перебирає масив і повертає тру, якщо всі вони задовольняють умові
// цей метод повертає тру або фолсе

const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 320, points: 54, isOnline: true },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, isOnline: false },
    { id: 'player-3', name: 'Ajax', timePlayed: 230, points: 48, isOnline: true },
    { id: 'player-4', name: 'Kiwi', timePlayed: 150, points: 71, isOnline: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, isOnline: true },
];
console.table(players);

// чи всі ігроки онлайн

const isAllPlayerOnline = players.every(player => player.isOnline);
console.log('isAllPlayerOnline', isAllPlayerOnline);

// із автоперевірки перевіряем не парність та непарність

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Change code below this line

// const eachElementInFirstIsEven = firstArray.every(number => number % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every(number => number % 2 !== 0);

// const eachElementInSecondIsEven = secondArray.every(number => number % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every(number => number % 2 !== 0);

// const eachElementInThirdIsEven = thirdArray.every(number => number % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every(number => number % 2 !== 0);

// із автоперевірки - перевіряємо чи всі онлайн
users = [
    {
      name: "Moore Hensley",
      email: "moorehensley@indexia.com",
      eyeColor: "blue",
      friends: ["Sharron Pace"],
      isActive: false,
      balance: 2811,
      gender: "male"
    },
    {
      name: "Sharlene Bush",
      email: "sharlenebush@tubesys.com",
      eyeColor: "blue",
      friends: ["Briana Decker", "Sharron Pace"],
      isActive: true,
      balance: 3821,
      gender: "female"
    },
    {
      name: "Ross Vazquez",
      email: "rossvazquez@xinware.com",
      eyeColor: "green",
      friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
      isActive: false,
      balance: 3793,
      gender: "male"
    },
    {
      name: "Elma Head",
      email: "elmahead@omatom.com",
      eyeColor: "green",
      friends: ["Goldie Gentry", "Aisha Tran"],
      isActive: true,
      balance: 2278,
      gender: "female"
    },
    {
      name: "Carey Barr",
      email: "careybarr@nurali.com",
      eyeColor: "blue",
      friends: ["Jordan Sampson", "Eddie Strong"],
      isActive: true,
      balance: 3951,
      gender: "male"
    },
    {
      name: "Blackburn Dotson",
      email: "blackburndotson@furnigeer.com",
      eyeColor: "brown",
      friends: ["Jacklyn Lucas", "Linda Chapman"],
      isActive: false,
      balance: 1498,
      gender: "male"
    },
    {
      name: "Sheree Anthony",
      email: "shereeanthony@kog.com",
      eyeColor: "brown",
      friends: ["Goldie Gentry", "Briana Decker"],
      isActive: true,
      balance: 2764,
      gender: "female"
    }
  ];
  
  
  const isEveryUserActive = (users) => {
     return users.every((user) => user.isActive === true);
  };
console.log(isEveryUserActive(users));



// Array.prototype.some()
// поелементно перебирає масив і повертає тру, якщо ХОЧА б один елемент задовольняє умові
// цей метод повертає тру або фолсе

// чи є хоть хтось ондайн?
const isAnyOnline = players.some(player => player.isOnline)
console.log(isAnyOnline);

//  чи є онлайн хардкор ігроки?

const anyHardcorePlayers = players.some(player => player.timePlayed > 400);
console.log('anyHardcorePlayers: ', anyHardcorePlayers);


// з автоперевірки : чи є хоть один парний чи непарний елемент?
const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Change below this line

const anyElementInFirstIsEven = firstArray.some(number => number % 2 === 0);
const anyElementInFirstIsOdd = firstArray.some(number => number % 2 !== 0);

const anyElementInSecondIsEven = secondArray.some(number => number % 2 === 0);
const anyElementInSecondIsOdd = secondArray.some(number => number % 2 !== 0);

const anyElementInThirdIsEven = thirdArray.some(number => number % 2 === 0);
const anyElementInThirdIsOdd = thirdArray.some(number => number % 2 !== 0);

// із автоперевірки перевірили чи є хоть один активний користувач(онлайн)
users = [
    {
      name: "Moore Hensley",
      email: "moorehensley@indexia.com",
      eyeColor: "blue",
      friends: ["Sharron Pace"],
      isActive: false,
      balance: 2811,
      gender: "male"
    },
    {
      name: "Sharlene Bush",
      email: "sharlenebush@tubesys.com",
      eyeColor: "blue",
      friends: ["Briana Decker", "Sharron Pace"],
      isActive: true,
      balance: 3821,
      gender: "female"
    },
    {
      name: "Ross Vazquez",
      email: "rossvazquez@xinware.com",
      eyeColor: "green",
      friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
      isActive: false,
      balance: 3793,
      gender: "male"
    },
    {
      name: "Elma Head",
      email: "elmahead@omatom.com",
      eyeColor: "green",
      friends: ["Goldie Gentry", "Aisha Tran"],
      isActive: true,
      balance: 2278,
      gender: "female"
    },
    {
      name: "Carey Barr",
      email: "careybarr@nurali.com",
      eyeColor: "blue",
      friends: ["Jordan Sampson", "Eddie Strong"],
      isActive: true,
      balance: 3951,
      gender: "male"
    },
    {
      name: "Blackburn Dotson",
      email: "blackburndotson@furnigeer.com",
      eyeColor: "brown",
      friends: ["Jacklyn Lucas", "Linda Chapman"],
      isActive: false,
      balance: 1498,
      gender: "male"
    },
    {
      name: "Sheree Anthony",
      email: "shereeanthony@kog.com",
      eyeColor: "brown",
      friends: ["Goldie Gentry", "Briana Decker"],
      isActive: true,
      balance: 2764,
      gender: "female"
    }
  ];

  const isAnyUserActive = users => {
    return users.some((user) => user.isActive === true);
 };

 console.log(isAnyUserActive(users));