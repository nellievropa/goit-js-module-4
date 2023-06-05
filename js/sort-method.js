// array.prototype.sort()
// змінює вихідний масив
// за замовчування сортує по возрастающей
// !! але сортирут с использование UNICODE це дивне сортування- не зовсім звичне
// unicode-table.com/en


const numbers = [1, 9, 47, 32, 65, 14];
numbers.sort();
console.log('numbers:', numbers);


const letters = ['a', 'B', 'A', 'b', 'C', 'd'];
letters.sort();
console.log('letters:', letters);


// compareFunction - функція порівняння колбека