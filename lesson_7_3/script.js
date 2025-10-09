const array = [1, 3, 4, 6, 2, 5, 7, 3];
removeElement(array, 3);
console.log(array);

function removeElement(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            array.splice(i, 1);
        }
    }
}