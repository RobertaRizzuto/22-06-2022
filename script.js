const array1 = [1, 2, 3, 4, 5, 6, 7, 8];
const array2 = [10, 1, 2, 5, 6];

//esercizio1  fare console.log() di ogni elemento di array1
function showElement(element, index, array) {
  return console.log(element);
}
const voidConstant = array1.forEach(showElement);

//esercizio3 tenere dentro l'array1 solo i numeri pari
function showEvenNumbers(element, index, array) {
  return element % 2 === 0;
}
const evenNumbers = array1.filter(showEvenNumbers);
console.log(evenNumbers);

//esercizio4 tenere solo i numeri in comune tra array1 e array2: metodo indexOf
function filterFn(element, index, array) {
  return array2.indexOf(element) > -1;
}
const showCommonNumbers = array1.filter(filterFn);
console.log(showCommonNumbers);

//esercizio4 tenere solo i numeri in comune tra array1 e array2: metodo includes
function filterFn2(element, index, array) {
  return array2.includes(element);
}
const showCommonNumbers2 = array1.filter(filterFn2);
console.log(showCommonNumbers2);

// fare un console.log() di ogni elemento, dopo un set timeout di (elemento * index)
// risultato: dopo 0s: console.log(1)
//            dopo 1s: console.log(2)
//            dopo 2s: console.log(3)



const showTimedList = () => {
  let timer = 0;

  array1.forEach((element, index) => {
    setTimeout(() => {
      console.log(element);
    }, timer);
    timer = timer + 1000 * (index+1);
  });
};
showTimedList();
