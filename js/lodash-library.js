// console.dir(_) -глобальна змінна через яку отримуємо доступ в бібліотеку Лодаш
// lodash підключається через HTML в body через script


// isEmpty{}

console.log(_.isEmpty({}));
console.log(_.isEmpty({a: 555}));


// get method щоб заглянути глибоко під капот об'єкту

const user = {
    name: 'mango',
    location: {
        city: 'Lviv',
    },
};

// провверит есть ли у юзера такой переметр
console.log(_.get(user, 'location.city'));

// новый синтаксис тоже на такую же проверку

console.log(user?.location?.city);

// union шукає і повертає тільки унікальні елементи масиву

console.log(_.union([1, 2, 3], [4, 5, 3]));

// range создаст масив чисе от  и до Финишное значение не включает!

console.log(_.range(12, 51));

// задать шаг можно 3
console.log(_.range(1, 6, 2));
// если только одно значение - то єто конец: от 0 и до значения

console.log(_.range(10));

// sortBy сортує по убиванию
users = [
    { 'user': 'fred',   'age': 48 },
    { 'user': 'barney', 'age': 36 },
    { 'user': 'fred',   'age': 40 },
    { 'user': 'barney', 'age': 34 },
  ];

console.log(_.sortBy(users, ['user', 'age']));

// sum and sumBy -для масиву 

console.log(_.sum([1, 2, 3, 4, 5, 3]));

const players = [
    { id: 'id-1', tag: 'Mango', isOnline: true, rank: 800},
    { id: 'id-2', tag: 'Poly', isOnline: true, rank: 600},
    { id: 'id-3', tag: 'Ajax', isOnline: false, rank: 550},
    { id: 'id-4', tag: 'Kiwi', isOnline: true, rank: 100},
    { id: 'id-5', tag: 'Banana', isOnline: false, rank: 350},
];

console.log(_.sumBy(players, player => player.rank));


