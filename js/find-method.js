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
