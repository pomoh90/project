const num = 50;

switch (num ){       // строгое соответствие !
    case 49: 
         console.log('error');
         break;
    case 100: 
         console.log('error');
         break;
    case 51: 
        console.log('true');
        break;
    default:
        console.log('not this time');
        break;
}


// const num = 50;

// if (num < 49) {
//     console.log('error');
// } else if (num > 100) {
//     console.log('not this time');
// } else {
//     console.log('ok!')
// };