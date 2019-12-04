console.log('App was loaded...');

const person = confirm('Are you man?');
const age = prompt('Enter your age here:');

// if(person){
//     if(age > 20){
//         if(age < 40){
//             console.log('OK');
//         }
//     }
// }

// if(person && age > 20 && age < 40){
//     console.log('OK');
// }else{
//     console.log('nOK');
// }

// if(person){
//     if(age < 20){
//         console.log('OK male');
//     }
// }else{
//     if(age > 30){
//         console.log('OK female');
//     }
// }

if((person && age < 20) || (!person && age > 30)){
    console.log('OK');
}

"AB47".split('')