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

const user = {
    fullName: 'Mango',
    showName() {
        console.log('this', this);
        console.log('this.fullName', this.fullName);
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

// стрелка -конструктор ( у стрелочніх функций нет метода [Constract])

        const User = name => {
            this.name = name;
        }

        console.log(new User('Mango'));