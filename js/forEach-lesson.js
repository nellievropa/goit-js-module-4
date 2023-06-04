// array.prototype.forEach(callback(currentValue, index, array), thisArg)
// forEach поелементно перебирає оригінальний масив
// нічого не повертає
// замінює класичний for, якщо не треба переривати цикл!!!


const numbers = [5, 15, 25, 36, 47];

numbers.forEach(function (number, index, array) {
    console.log('number', number);

    // щоб додати елемент

    // array[index] = 20;
});

console.log(numbers);

// з автоперевірки
function changeEven(numbers, value) {
  // Change code below this line
  const newArray = [];
  
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 === 0) {
      numbers[i] = numbers[i] + value;
      
    }
    newArray.push(numbers[i]);
  }
  return newArray;
  
  // Change code above this line
};
console.log(changeEven([1, 2, 3, 4, 5], 10));
console.log(changeEven([44, 13, 81, 92, 36, 54], 100));
