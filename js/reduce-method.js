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