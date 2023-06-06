// array.prototype.sort()
// змінює вихідний масив
// за замовчування сортує по возрастающей
// !! але сортирут с использование UNICODE це дивне сортування- не зовсім звичне
// unicode-table.com/en


const numbers = [1, 9, 47, 32, 65, 14];
// numbers.sort();
// console.log('numbers:', numbers);


// const letters = ['a', 'B', 'A', 'b', 'C', 'd'];
// letters.sort();
// console.log('letters:', letters);


// compareFunction - функція порівняння колбека
// сортує по 2 елементи а и в

numbers.sort((curEl, nextEl) => {
//    відсортує по наростанню
    // return curEl - nextEl;

    // відсортувати по убиванню
    return   nextEl - curEl;

});

console.log(numbers);

// щоб не сортувати оригінал, треба зобити копію вихідного масиву
// використовуємо spred(...massyv)

const copy = [...numbers];
// копія не рівна вихідному масиву
console.log(copy === numbers);
// хоча вигляд у них однаковий
console.log('copy:', copy);

// щоб не робити проміжну копію, треба писати так. сортуємо по убиванню

const descSortedNumbers = [...numbers].sort((a, b) => b - a);
console.log('descSortedNumbers:', descSortedNumbers);
// по возрастанию
const ascSortedNumbers = [...numbers].sort((a, b) => a - b);
console.log('ascSortedNumbers:', ascSortedNumbers);

// зробити противоположний можно за допоиогою reverse

console.log([1, 2, 3, 4, 5].reverse());


// щоб сортувати об'єкти треба сортувати по властивості(свойству) об'єкту але пам'ятати прнцип а и в - це просто параметри

const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 320, points: 54, isOnline: true },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, isOnline: false },
    { id: 'player-3', name: 'Ajax', timePlayed: 230, points: 48, isOnline: true },
    { id: 'player-4', name: 'Kiwi', timePlayed: 150, points: 71, isOnline: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, isOnline: true },
];
console.table(players);

// відсортуємо ігрокив по ігровому часу

const sortedByBestPlayers = [...players].sort((prewPlayer, nextPlayer) => {
    return nextPlayer.timePlayed - prewPlayer.timePlayed;
    
});
console.table(sortedByBestPlayers);

// від гіршого до кращого
const sortedByWorstPlayers = [...players].sort((prewPlayer, nextPlayer) => {
    return prewPlayer.timePlayed - nextPlayer.timePlayed;
});
console.table(sortedByWorstPlayers);

// СОРТУВАННЯ НЕ по числам
// за ім'ям
const byName = [...players].sort((a, b) => {
     
    // console.log(a.name[0]);
    // console.log(b.name[0]);

    const result = a.name[0] > b.name[0];
// якщо поміняти місцями 1 і -1 , то відсортує по алфавіту
    if (result) {
        return -1;
    }

    if (!result) {
        return 1;
}
    
});
console.table(byName);

// код літер charCodeAt()

console.log('abc'.charCodeAt(2));

// сортування з автоперевірки!!!!
const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
  "Howard Lovecraft",
];
// Change code below this line

const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));

const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));


// автоперевірка : ортування за рейтингом і алфавітом
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
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];


const sortedByAuthorName = [...books].sort((firstBook, secondBook) => firstBook.author.localeCompare(secondBook.author));

const sortedByReversedAuthorName = [...books].sort((firstBook, secondBook) => secondBook.author.localeCompare(firstBook.author));

const sortedByAscendingRating = [...books].sort((firstBook, secondBook) => firstBook.rating - secondBook.rating);

const sortedByDescentingRating = [...books].sort((firstBook, secondBook) => secondBook.rating - firstBook.rating);

// з автоперевірки
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

const sortByAscendingBalance =  [...users].sort((firstUser, secondUser) => firstUser.balance - secondUser.balance);
 
console.log(sortByAscendingBalance);

// відсортували по кількості друзів спадаюча
const sortByDescendingFriendCount = [...users].sort((firstUser, secondUser) => secondUser.friends.length - firstUser.friends.length);
console.log(sortByDescendingFriendCount);

// відсортувати по імені в алфавитному порядку
const sortByName = users => [...users].sort((firstUser, secondUser) => firstUser.name.localeCompare(secondUser.name));