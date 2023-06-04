// Array.prototype.map()
// дозволяє перебирати оригінальний масив
// не змінює оригінальний масив
// повертає новий масив такої ж довжини

const numbers = [5, 10, 12, 18, 25];

// повернути подвоєний масив

const doubleNums = numbers.map(number => {
    console.log(number);

    return number * 2;
});

// console.log('number', numbers);
// console.log('doubleNums', doubleNums);

const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 320, points: 54, isOnline: true },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, isOnline: false },
    { id: 'player-3', name: 'Ajax', timePlayed: 230, points: 48, isOnline: true },
    { id: 'player-4', name: 'Kiwi', timePlayed: 150, points: 71, isOnline: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, isOnline: true },
];
console.table(players);
// якщо треба вибрати тільки імена

const playerNames = players.map(player => {
    return player.name;
 });
console.log('playerNames', playerNames);

const playerIds = players.map(player => player.id);
console.log('playerIds', playerIds);

// const res = players.map(player => {
//     return {
//         name: player.name,
//         onLine: player.isOnline,
//     };
// });
// console.log('res', res);

// теж саме можна зробити коротше
// const res = players.map(({ name, isOnline }) => {
//     // return тоже можно убрать
//     return {
//         name,
//         isOnline,
//     };
// });
// console.log('res', res);

  // return тоже можно убрать
const res = players.map(({ name, isOnline }) => ({ name, isOnline }));
console.log('res', res);


// Обновить(увеличить ) рейтинг- тт.е. нужен новій масив с обновленніми свойствами

// const updatedPlayers = players.map((player) => {
//     console.log(player);
//     // вернуть пустой об'єкт
//     // return {};

//     // розпилити обє'кт і змінити в ньому поинті
//     return {
//         ...player,
//         points: player.points * 1.1,
//     };
// });

// console.log(updatedPlayers);
// console.table(updatedPlayers);

// без returnвиглядає так
// const updatedPlayers = players.map((player) => ({
//         ...player,
//         points: player.points * 1.1,
//     }));

// console.log(updatedPlayers);
// console.table(updatedPlayers);

// якщо треба обновити тільки один об'єкт з масиву

const playerIdToUpdate = 'player-3';

// const upatedPlayers = players.map(player => {
//     console.log(player.id);
//     if (playerIdToUpdate === player.id) {
//         return {
//             ...player,
//             timePlayed: player.timePlayed + 100,
//         }
//     }
//     return player;
// });
// console.table(upatedPlayers);

// з тернарним кодом це буде так
// const upatedPlayers = players.map(player => {
//      return playerIdToUpdate === player.id ?
//          {
//             ...player,
//             timePlayed: player.timePlayed + 100,
//         }
   
//     : player;
// });
// console.table(upatedPlayers);

// самая короткая запись
const upatedPlayers = players.map(player => 
    playerIdToUpdate === player.id
        ? { ...player, timePlayed: player.timePlayed + 100 }
      : player,
);
console.table(upatedPlayers);



const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
];

const getUserNames = (users) => {
	return users.map((user) => user.name);
};

console.log(getUserNames(users));

const getUserEmails = (users) => {
    return users.map((user) => user.email);

};
console.log(getUserEmails(users));