// Array.prototype.reduce()
// поэлементно перебирает масив и возвращает что угодно
// изменяет все на свете-- крутой метод для работы с массивами
// берет много из из этого много делает что-то одно


const numbers = [5, 10, 12, 18, 25];

// посчитать общую сумму
//  перша частина в () називаєть аккумулятор (acc) і друга- value
// якщо не задати аккумулятор, то він візьме перший елемент для першої операції, а далі буде-undefind
const total = numbers.reduce((acc, number) => { 
    // console.log('number:', number);
    // console.log('acc:', acc);

    // щоб порахувати загальну суму 

    return acc + number;
}, 0);
// тому задаємо аккумулятор тут після } - 0
console.log(total)

// accumulator = 0 -> number = 5 return 0 + 5;
// accumulator = 5 -> number = 10 return 5 + 10;
// accumulator = 15 -> number = 12 return 15 + 12;
// і так до кінця, в кінці видає загальну суму!!!


const salary = {
    mango: 100,
    poly: 55,
    ajax: 150,
};
// щоб порахувати зп 
// так виглядає наш масив, на який ми будемо викликати метод редюс
console.log(Object.values(salary));
// const totalSalary = Object.values(salary).reduce((total, value) => {
//     return total + value;
// }, 0);
// без ретерн виглядає так
const totalSalary = Object.values(salary).reduce(
    (total, value) => total + value,
    0,
);

// console.log(totalSalary);


// з автоперевірки : підраховуємо загальний час, а потім вираховуємо середній
const players1 = {
    mango: 1270,
    poly: 468,
    ajax: 710,
    kiwi: 244
  };
  const playtimes = Object.values(players1); // [1270, 468, 710, 244]
  // Change code below this line
  
  const totalPlayTime = playtimes.reduce((acc, time) => {
    return acc + time;
  }, 0);
  
  //тут довжина - це кількість ігроів (4)
  const averagePlayTime = totalPlayTime / playtimes.length;

// з автоперевірки вираховуємо середній час в грі кожного ігрока і складаємо ці значення
const players2 = [
    { name: "Mango", playtime: 1270, gamesPlayed: 4 },
    { name: "Poly", playtime: 469, gamesPlayed: 2 },
    { name: "Ajax", playtime: 690, gamesPlayed: 3 },
    { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
  ];
  // Change code below this line
  
  const totalAveragePlaytimePerGame = players2.reduce((acc, player) => {
    return acc + player.playtime / player.gamesPlayed;
  }, 0);


//   пример Репети
const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 320, points: 54, isOnline: true },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, isOnline: false },
    { id: 'player-3', name: 'Ajax', timePlayed: 230, points: 48, isOnline: true },
    { id: 'player-4', name: 'Kiwi', timePlayed: 150, points: 71, isOnline: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, isOnline: true },
];
// console.table(players);

// нарахувати загальну кількість годин ігри всіх ігроків
// reduce викликаєм на масив

// const totalTimePlayed = players.reduce((totalTime, player) => {
//     return totalTime + player.timePlayed;
// }, 0);
// без ретерн так
const totalTimePlayed = players.reduce(
    (totalTime, player) => totalTime + player.timePlayed,
    0,
);

    // console.log(totalTimePlayed);


    // приклад з автоперевірки : рахуєм загальний баланс
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
      
      const calculateTotalBalance = (users) => {
           return users.reduce((acc, user) => acc + user.balance, 0);
      };
console.log(calculateTotalBalance(users));

// шукаємо загальну кількість друзів з масиву

const getTotalFriendCount = (users) => {
    return users.reduce((acc, user) => acc + user.friends.length, 0);
  };

  console.log(getTotalFriendCount(users));

    //   приклад Репети

const cart = [
    { label: 'Apples', price: 100, quantity: 2 },
    { label: 'Bananas', price: 120, quantity: 3 },
    { label: 'Lemones', price: 70, quantity: 5 },
];
// порахуєм загальну кількість товарів

// const totalAmount = cart.reduce((total, item) => {
//     return total + item.price * item.quantity;
//  }, 0);
//   без ретерн и с деструктуризацией виглядає так

const totalAmount = cart.reduce((total, { price, quantity }) => total + price * quantity,
    0,
);
 
// console.log(totalAmount);

const tweets = [
    { id: '000', likes: 5, tags: ['js', 'nodejs'] },
    { id: '001', likes: 2, tags: ['html', 'css'] },
    { id: '002', likes: 8, tags: ['html', 'js', 'nodejs'] },
    { id: '003', likes: 15, tags: ['css', 'react'] },
    { id: '004', likes: 14, tags: ['js', 'react', 'nodejs'] },
];

// треба зібрати всі теги(у  масив) із твитов
// accumulator в цьому випадку це пустий масив []
// const allTags = tweets.reduce((tags, tweet) => { 
//     tags.push(...tweet.tags);
//     // тут масив мутує
//     return tags;
// }, []);

// тому правильно записати так 
const allTags = tweets.reduce((acc, tweet) => [...acc,...tweet.tags], []);

console.log(allTags);

// щоб проаналізувати який тег скільки разів використовувався будемо філтрувати так

// будем робити об'єкт : ім'я - скільки разів зустрілося
// нам треба стрворити об'єкт {}
// логіка такая : если свойство с ключом tag есть, то увеличивем его количество на 1
// если такого свойства нет, то создаем его

// const tagsStats = allTags.reduce((acc, tag) => {
//     console.log(acc);

//     if (acc[tag]) {
//         acc[tag] += 1;

//         return acc;
//     }
//     acc[tag] = 1;

//     return acc;
// }, {});
 
// console.log(tagsStats);

// як записати коротше
// по ссілке изменять параметри пагано

// const tagsStats = allTags.reduce((acc, tag) => {
//     console.log(acc);

//     if (acc[tag]) {
//         // acc[tag] += 1;
// // на каждой итерации создаем новій обєкт, розпилюємо його і додаємо 
//         return {
//             ...acc,
//             [tag]: acc.tag + 1,
//         };
//     }

//     // якщо такого тегу не було , то створюємо його

//     acc[tag] = 1;

//     return {
//         ...acc,
//         [tag]: 1,
//     };
// }, {});
 
// console.log(tagsStats);

// ще коротше записати через тернарник

const tagsStats = allTags.reduce((acc, tag) => {
    // console.log(acc);

           return {
            ...acc,
            [tag]: acc[tag] ? acc[tag] + 1 : 1,
        }; 

 }, {});
 
console.log(tagsStats);


// розшифрвання дужок (як їх читають)
const user = {
    name: 'Mango',
};

const key = 'name';

console.log(user[key]);