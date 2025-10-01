let numOrStr = prompt('input number or string');

switch (true) {
    case numOrStr === null:
        console.log('ви скасували')
        break;
    case numOrStr.trim() === '':
        console.log('Empty String');
        break;
    case isNaN(+numOrStr):
        console.log('NaN Number');
        break;
    default:
        console.log('OK!')
}