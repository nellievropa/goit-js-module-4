// Array.prototype.flat(depth)
// розгладжуе масиви в глибину
// за замовчуванням глибина 1

// це - багатомірний масив
const array = [1, 2, [4, [5]], [6, [7, 8, [9]]]];
// щоб розгладити на один рівень в глибину визиваєм метод flat
// console.log(array.flat());

// щоб розгладити глибше, треба поставити глибину 2 або 3 (скільки потрібно)
console.log(array.flat(2));




const tweets = [
    { id: '000', likes: 5, tags: ['js', 'nodejs'] },
    { id: '001', likes: 2, tags: ['html', 'css'] },
    { id: '002', likes: 8, tags: ['html', 'js', 'nodejs'] },
    { id: '003', likes: 15, tags: ['css', 'react'] },
    { id: '004', likes: 14, tags: ['js', 'react', 'nodejs'] },
];

// можна розпилити за допоомгою reduce
// const tags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], [],)
// console.log(tags);

// можна зробити теж саме за допомогою flat i map

// отримала масив з масивів
// const tags = tweets.map(t => t.tags);
// console.log(tags);

// щоб його розгладити, примінимо flat
// const tags = tweets.map(t => t.tags).flat();
// console.log(tags);

// проблема в тому, що ми перебірали масив 2 рази, тому спрощуємо
// const tags = tweets.flatMap(t => t.tags);
// console.log(tags);

// порахувати кількість повторюючихся тегів можна так
// const stats = tags.reduce((acc, tag) => {
//     return {
//         ...acc,
//         [tag]: acc[tag] ? acc[tag] +1 : 1,
//     };
// }, {});

// chaining виглядатиме так
const stats = tweets
.flatMap(t => t.tags)
.reduce((acc, tag) => 
({...acc,
    [tag]: acc[tag] ? acc[tag] +1 : 1, }),
    {},
    );

console.log(stats);


