// const add = function (a, b, c) {
//     console.log(a, b, c);
//     return a + b + c;
// };

// console.log(add(10, 5, 15));

// теж ссаме зі стрілками записується так
// слово функция заменили на стрелки после обїявления параметров
// если параметров 2 и больше--то скобки обязательны!!!
// если один переметр-скобки не нужны
//  если переметров нет вообще-- ОБЯЗАТЕЛЬНО стави пустые скобки

// const add = (a, b, c) => {
//     console.log(a, b, c);
//     return a + b + c;
// };

// console.log(add(10, 5, 15));

// если в теле функции только одно условие нужно выполнить 

const add = (a, b, c) => {
    
    return a + b + c;
};

// то записывается НЕЯВНЫЙ ВОЗВРАТ

const addArrow = (a, b, c) => a + b + c;

// у стрелочніх функций нет аргументов, и чтобі к ним обратиться нужно записать так(сорали в массив)

const addArrow1 = (...args) => {
    console.log(args);
};

console.log(addArrow1(2, 3, 6));


// Подводній камень !!! Обратить внимание

// const fnA = function () {
//     return {
//         a: 5,
//     };
// };

// console.log(fnA());

// со стрелками єто будет віглядеть так (возвращаем обїект)

const arrowFnA = () => ({arrow: 5});
console.log(arrowFnA());

const onGetPositionSuccess = (position) => {
    console.log('Єто візов onGetPositionSuccess');
    console.log(position);
};

// у стрілочних функцій немає THIS !!! (працює навпаки від звичайних функцій)
// const showThis = () => {
//     console.log('this is showThis', this);

// };
// showThis();

// робимо об'єкт user
// const user = { name: 'Mango' };
// user.showContext = showThis;

// user.showContext();

// контекст стрелочніх фукнкций обїявляется в момент их создания!!!

// приклади

// const user = {
//     fullName: 'Mango',
//     showName() {
//         console.log('this', this);
//         console.log('this.fullName', this.fullName);
// создаем внутреннюю функцию, которая консолит this
        // const inner = function () {
        //     console.log('this is inner:', this);
        // }
// если обічную функцию заменить на стрелочную, она будет ссілаться на нашего юзера
//          const inner = () => {
//             console.log('this is inner:', this);
//         }
// inner();
//     },
// };

// user.showName();

// стрелка -конструктор ( у стрелочніх функций нет метода [Constract]), тому вона не може бути викликана через метод new!!!

// const User = name => {
//     this.name = name;
// };

// console.log(new User('Mango'));

// приклад з вкладеними об'єктами

const objA = {
    x: 5,
    showX() {
        console.log('this is a objA.showX: ', this);
        console.log(this.x);

        const objB = {
            y: 10,
            // якщо додати тут стрілки, він стане частиною об'єкту А
            // тому стрілки бесполезні як метод об'єкту!!!
            showThis: () => {
                console.log('this is s objB.showThis: ', this);
            },
        };
        objB.showThis();
    },

};

objA.showX();

// стрілочні функції ідеально підходять для перебору масивів
// повернути числа більші за 2
// const numbers = [1, 2, 3, 6, 7];

// const greaterThenTwo = numbers.filter(function (num) {
//     return num > 2;
// });
// console.log(greaterThenTwo);


// зі стрілкою буде так і щн return змінимо
const numbers = [1, 2, 3, 6, 7, 5];

const greaterThenTwo = numbers.filter(num =>  num > 2);
// console.log(greaterThenTwo);

// множимо

// const multByTwo = greaterThenTwo.map(function (num) {
//     return num * 3;
// });
// рефакторим

const multByTwo = greaterThenTwo.map(num => num * 3 );

// console.log(multByTwo);

// сортуємо

// const sorted = multByTwo.sort(function(a, b) {
//     return a - b;
// });

// зі стрілками 
const sorted = multByTwo.sort((a, b) => a - b);

// console.log(sorted);

// ще один приклад
// const res = numbers
//  .filter(function(num) {
//     return num > 2;
// })
//  .map(function(num) {
//     return num * 3;
// })
//     .sort(function (a, b) {
//         return a - b;
//     });

    // зі стрілками
    const res = numbers
 .filter(num => num > 2)
 .map(num => num * 3)
 .sort((a, b) => a - b);

// console.log(res);

// приклад з плеєрами

// const players = [
//     { id: 'id-1', tag: 'Mango', isOnline: true, rank: 800 },
//     { id: 'id-2', tag: 'Poly', isOnline: false, rank: 600 },
//     { id: 'id-3', tag: 'Ajax', isOnline: true, rank: 100 },
//     { id: 'id-4', tag: 'Kiwi', isOnline: true, rank: 700 },
// ];

// const onlineAndSorted = players
    // .filter(function (player) {
    //     return player.isOnline;
    // })
    // .sort(function (prevPlayer, nextPlayer) {
    //     return prevPlayer.rank - nextPlayer.rank;
    // });

    // відрефактрорим
//        .filter(player => player.isOnline)
//     .sort((prevPlayer, nextPlayer) => prevPlayer.rank - nextPlayer.rank);
    
// console.table(onlineAndSorted);

const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 320, points: 54, isOnline: true },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, isOnline: false },
    { id: 'player-3', name: 'Ajax', timePlayed: 230, points: 48, isOnline: true },
    { id: 'player-4', name: 'Kiwi', timePlayed: 150, points: 71, isOnline: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, isOnline: true },
];

// увеличиваем количество поинтов каждого игрока

// const upatedPlayers = players.map(function (player) {
//     return {
//         ...player,
//         points: player.points + player.points * 0.1,
//     };
// });

// виконаємо рефакторинг
// const upatedPlayers = players.map(player =>  {
//   якщо треба повернути об'єкт, то ми не можемо зробити як раніше!
//     return {
//         ...player,
//         points: player.points + player.points * 0.1,
//     };
// });
// другий варіант і кращій! з отакими () - це скобки виразу(выражения)
// const upatedPlayers = players.map(player => ({
    
//         ...player,
//         points: player.points + player.points * 0.1,
  
// }));

// console.table(upatedPlayers);

// увеличиваем количество игроков!

const playerIdToUpdate = 'player-3';

// const updatedPlayers = players.map(function (player) {
//     if (player.id === playerIdToUpdate) {
//         return {
//             ...player,
//             timePlayed: player.timePlayed + 50,
//         };
//     }
//     return player;
// });

// виконаємо рефакторинг
const updatedPlayers = players.map(player => {
    if (player.id === playerIdToUpdate) {
        return {
            ...player,
            timePlayed: player.timePlayed + 50,
        };
    }
    return player;
});

console.table(updatedPlayers);
