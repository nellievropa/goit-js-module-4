// функції, що замикаються

const fnA = function (parameter) {
    const innerVariable = `Значення внутрішньої змінної функції fnA`;

    const innerFunction = function () {
        console.log(parameter);
        console.log(innerVariable);
        console.log('Це виклик innerFunction');

    };
    return innerFunction;
};
// в функцию fnB() записуємо результат fnА() і маємо до нього доступ де завгодно
// const fnB = fnA(555);

// fnB();

// console.log(fnB);

// Поваренок

// const makeDish = function (sheffName, dish) {
//     console.log(`${sheffName}, готовит ${dish}`);
// };
 
// makeDish('Mango', 'pie');
// makeDish('Mango', 'tea');
// makeDish('Mango', 'fish');

// makeDish('Polly', 'soup');
// makeDish('Polly', 'grill');
// makeDish('Polly', 'coffee');

// используя замыкание мы создаем фунцию "сделай шефа имя"
const makeSheff = function (name) {
// можна одавати багаато змінних
    const innerVar = 555;
    const a = 'hello';

    const makeDish = function (dish) {
        console.log(innerVar);
        console.log(a);
        console.log(`${name}, готовит ${dish}`);
    };
    return makeDish;
 };

//  щоб її визвати робимо змінну 
const mango = makeSheff('Mango');

// console.log(mango);
console.dir(mango);


// mango('pie');
// mango('tea');

// const polly = makeSheff('Polly');

// polly('grill');
// polly('coffee');

// Округлятор

const floatingPoint = 3.456789;
const someInt = Math.round(floatingPoint);
// кількість знаків після коми
const withDecimals = Number(floatingPoint.toFixed(2));


const number1 = 3.6542131;
const number2 = 4.532164;
console.log(Number(floatingPoint.toFixed(3)));
console.log(Number(number2.toFixed(4)));

// функція буде виглядати так

// const rounder = function (number, places) {
//     return Number(number.toFixed(places))
// };

// console.log(rounder(3.6985236, 4));

// С замиканием ЭТА ФУНКИЯ БУДЕТ ВЫГЛЯДЕТЬ ТАК
const rounder = function (places) {
    return function (number) {
        return Number(number.toFixed(places));

    }
};

const rounder2 = rounder(2);
const rounder3 = rounder(3);

console.log(rounder2(3.6985236));
console.log(rounder3(3.6985236));

// Замикання використовують для приватних данних приклад с зп

const salaryManagerFactory = function (employeerName, baseSalary) {
    let salary = baseSalary;
    const changeBy = function (amount) {
        salary += amount;
    };
    return {
        raise(amount) {
            if (amount > 1000) {
                return `ті офігел`;
            }
            changeBy(amount);
        },
        lower(amount) {
            changeBy(amount);
        },
        current() {
            return `Текущая зп ${employeerName} - ${salary}`;

        },
    };
};

const salaryManager = salaryManagerFactory('Mango', 5000);

console.log(salaryManager.current());

console.log(salaryManager.raise(10000000));








