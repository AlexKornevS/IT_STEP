// Основное в JS

// выражения, функции, и обьекты (обьект - набор свойств. Ключ:значение)

// Пример обьекта
/* const info = {
  myName: 'Alex',
  mySecondName: 'Kornev',
  age: 30,
  payInfo: {              //вложенный обьект
    cardNumer: 4445454452,
    date: '12.12.2030'
  }
} */

// ********console-object*******log-method*******.-dot notation*********('some')-method call**************************************
// console.log('some things')       вывод в консоль
// console.dir('object')            свойства обьекта
// console.table('object)           свойства обьекта в табличном видеЛюбая функция возвращает значение
// Any function returns a value

// expression *****************************************************************************
/* 'abc'
    10
    5 + 2
    c = 10
    'Hey ' + 'Man'
    a <= b || c !== d *********** true/false
    myFn(c, d) */

    // assingnment operator = '=' NOT equals*********************side-effect expression*
    // a = 20 - expression 

    // side-effect expression *************************************
    // a = 5      
    // b++  ************************* увеличивает значение переменной на 1
    // myFn(c, d) ************** не только возврат значения, но еще и выполняют другие действия             

// ******************Variables**********************************************************
// MyName - PascalCase for types and classes
// DB_PASSWORD - uppercase for const (optional)
// myName - camelCase for other variables & names

//*******************declare/announce variables *********************
// let - for mutable value 
// const - for unchangen value
// var - not use.можно вызвать, до обьявления в коде
/*      let myName = 'Alex';
        console.log(myName)         */

// ******************TYPES*********************************************************
// *******************primitive type**************
// string - 'abcd'
// boolean - true || false
// number - 10, 20, 333
// null - ставится переменной, подразумевая, что позже в нее будет присвоенно другое значение
// undefined - когда переменная обьявлена, но значение ей не присвоено
// symbol - можно создавать уникальные значения

// ******************reference type****************
// const myObject = {
  // 1:1,
  // 2:2
// }
// const myObject = reference type. Это ссылка, которая уже потом ведет к свойствам обьекта

