// chaining-method використовується для того, щоб послідовно провести декілька операцій з одним масиво чи об'єктом


const numbers = [1, 5, 3, 4, 2, 9, 7];

// спочатку вибираємо всі елементи більші за 2
// const greaterThenTwo = numbers.filter(function (num) {
//     return num > 2;
// });
// ця функція коротко пишется так
const greaterThenTwo = numbers.filter(num => num > 2);
console.log(greaterThenTwo);

// потім новий масив помножити на 3;

const multByTree = greaterThenTwo.map(num => num * 3);
console.log(multByTree);

// а потім відсортувати по убиваннію

// const sorted = multByTree.sort((a, b) => b - a);
// console.log(sorted);
//  все це можна записати коротше. тому що метод фильтр повертає новий МАСИВ
// метод мап також повертає масив! і ми на ного визиваєм сорт

const sorted = numbers
.filter(num => num > 2)
.map(num => num * 3)
.sort((a, b) => b - a);

console.log(sorted);

// Сортуємо тих, хто онлайн по рангу:
// спочатку фільтруємо
// потім сортуємо

const players = [
    { id: 'id-1', tag: 'Mango', isOnline: true, rank: 800},
    { id: 'id-2', tag: 'Poly', isOnline: true, rank: 600},
    { id: 'id-3', tag: 'Ajax', isOnline: false, rank: 550},
    { id: 'id-4', tag: 'Kiwi', isOnline: true, rank: 100},
    { id: 'id-5', tag: 'Banana', isOnline: false, rank: 350},
];

// const onlineAndSorted = players
// .filter(player => !player.isOnline)
// .sort((playerA, playerB) => playerA.rank - playerB.rank)
// reduce((acc, tweet);

// console.log(onlineAndSorted);

// jquery - библиотека работі со свойствами


















// із автоперевірки щоб у змінній names вийшов масив імен авторів в алфавітному порядку, рейтинг книг яких більший за значення змінної MIN_BOOK_RATING.
const books = [
    {
      title: "The Last Kingdom",
      author: "Bernard Cornwell",
      rating: 8.38,
    },
    {
      title: "Beside Still Waters",
      author: "Robert Sheckley",
      rating: 8.51,
    },
    {
      title: "The Dream of a Ridiculous Man",
      author: "Fyodor Dostoevsky",
      rating: 7.75,
    },
    { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
    {
      title: "The Dreams in the Witch House",
      author: "Howard Lovecraft",
      rating: 8.67,
    },
  ];
  const MIN_BOOK_RATING = 8;
  // Change code below this line
  
  const names = [...books]
  .filter((book, rating) => book.rating > MIN_BOOK_RATING)
  .map((book) => book.author)
  .sort((firstAuthor, secondAuthor) => firstAuthor.localeCompare(secondAuthor));

console.log(names);

// function повертала масив імен користувачів, відсортований за зростанням кількості їхніх друзів (властивість friends).


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
      friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
      isActive: true,
      balance: 3951,
      gender: "male"
    },
    {
      name: "Blackburn Dotson",
      email: "blackburndotson@furnigeer.com",
      eyeColor: "brown",
      friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
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

// fiter - user.friends.length

// sort friends.length
// map user.name
  const getNamesSortedByFriendCount = (users)
  
  .sort((firstUser, secondUser) => secondUser.friend - firstUser.friend);
//   .filter((user) => user.friends)
  console.log(getNamesSortedByFriendCount);
//   .sort((firstFriend, secondFriend) => secondFriend.length - firstFriend.length)
  
//   .map();
//   console.log(getNamesSortedByFriendCount);
//   .filter(user)
  // 

//   const names1 = [...books]
//   .filter((book, rating) => book.rating > MIN_BOOK_RATING)
//   .map((book) => book.author)
//   .sort((firstAuthor, secondAuthor) => firstAuthor.localeCompare(secondAuthor));

// console.log(names);

