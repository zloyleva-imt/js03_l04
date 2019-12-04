console.log('App was loaded...');

let str1 = {en: 'Hello', ru: 'Привет'};
let str2 = {en: 'world', ru: 'мир'};
let str3 = {en: 'Its me', ru: 'Это я'};

const locale = 'ru';

// console.log('text 1 : text 2');
// console.log(str1 + ' : ' + str2 + ' # ' + str3);
console.log(`${str1[locale]} ${str2[locale]}! ${str3[locale]}`);