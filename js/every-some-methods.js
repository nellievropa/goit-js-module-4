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




// Array.prototype.some()
// поелементно перебирає масив і повертає тру, якщо ХОЧА б один елемент задовольняє умові
// цей метод повертає тру або фолсе

// чи є хоть хтось ондайн?
const isAnyOnline = players.some(player => player.isOnline)
console.log(isAnyOnline);

//  чи є онлайн хардкор ігроки?

const anyHardcorePlayers = players.some(player => player.timePlayed > 400);
console.log('anyHardcorePlayers: ', anyHardcorePlayers);