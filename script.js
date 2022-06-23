const array1 = [1, 2, 3, 4, 5, 6, 7, 8];
const array2 = [10, 1, 2, 5, 6];

//esercizio1  fare console.log() di ogni elemento di array1
function showElement(element, index, array) {
  return console.log(element);
}
array1.forEach(showElement);


//esercizio2 fare un console.log() di ogni elemento, dopo un set timeout di (elemento * index)
const showTimedList = () => {
  

  array1.forEach((element, index) => {
    setTimeout(() => {
      console.log(element);
    }, 1000 * element * index);
 
  });
};
showTimedList();


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


