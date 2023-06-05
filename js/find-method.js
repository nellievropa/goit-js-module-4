// array.prototype.find
// перебирає масив поелементно
// знаходить перший унікальний об'єкт і повертає його або underfind

const numbers = [5, 10, 12, 18, 25];

const number = numbers.find(number => number === 10);
// console.log(number);
// після того, як знайдений перший підходящий, перевірка зупиняється!!!
// тому частіше перевіряють на рівнісь!




const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 320, points: 54, isOnline: true },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, isOnline: false },
    { id: 'player-3', name: 'Ajax', timePlayed: 230, points: 48, isOnline: true },
    { id: 'player-4', name: 'Kiwi', timePlayed: 150, points: 71, isOnline: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, isOnline: true },
];
console.table(players);

// в масивах шукаєм по якомусь унікальному свойству: ID

const playerIdToFind = 'player-3';

// const playerWithId = players.find(player => player.id === playerIdToFind);
// console.log(playerWithId);

// через деструктуризацію це запишеться так
const playerWithId = players.find(({ id }) => id === playerIdToFind);
console.log(playerWithId);

// функція пошуку того ж ігрока буде виглядати так

const findPlayerById = (allPlayer, playerId) => {
    return allPlayer.find(player => player.id === playerId);
};
console.log(findPlayerById(players, 'player-1'));
console.log(findPlayerById(players, 'player-4'));

const playerNameToFind = 'Poly';

const playerWithName = players.find(player => player.name === playerNameToFind);
console.log(playerWithName);


// з автоперевірки пошук по титулу і по автору - виводиться вся інфа на книгу
const books = [
    {
      title: 'The Last Kingdom',
      author: 'Bernard Cornwell',
      rating: 8.38,
    },
    {
      title: 'Beside Still Waters',
      author: 'Robert Sheckley',
      rating: 8.51,
    },
    {
      title: 'The Dream of a Ridiculous Man',
      author: 'Fyodor Dostoevsky',
      rating: 7.75,
    },
    { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
  ];
  const BOOK_TITLE = 'The Dream of a Ridiculous Man';
  const AUTHOR = 'Robert Sheckley';
  // Change code below this line
  
  const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
  
  const bookByAuthor = books.find(book => book.author === AUTHOR);


  console.log(bookWithTitle);
  console.log(bookByAuthor);

// з автоперевірки кал-бек функція
users =[
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
  
  
  const getUserWithEmail = (users, email) => {
    return users.find((user) => user.email === email);
 };

 console.log(getUserWithEmail(users, "shereeanthony@kog.com"));
 // 