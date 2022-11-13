// Definicja funkcji

function message() {
    console.log("this is message");
}

message(); // wywołanie funkcji

// Zasięg zmiennych

for (let a of [1,3,4]) {  // zmienna stworzona w pętli ma zasięg blokowy
    console.log(a);
}
// console.log(a);  // ta linia wyrzuci błąd "a is not defined"

let globalVariable = "global";  // tak tworzymy zmienną o zasięgu globalnym

// Funkcja ze zmienną globalną

function messageWithGlobalVariable() {
    console.log("message " + globalVariable);
}

messageWithGlobalVariable();

// Funkcja z własnymi zmiennymi

function functionWithOwnVariable() {
    let b = 2;
    let a = 3;
    console.log(a+b);
}

functionWithOwnVariable();

// Funkcja wykorzystująca inną funkcję

function inside() {
    console.log("inside");
    message();
}

inside();

// Funkcja z parametrami

function addAndDisplay(a, b, c) {
    console.log(a+b+c);
}

addAndDisplay(2,5,8);  // w wywołaniu funkcji mamy argumenty
addAndDisplay(2,3,8);

let a = 3;
let b = 22;
let c = 12;
let myVariable = 33;

addAndDisplay(a, b, c);  // możemy użyć zmiennych jako argumentów
addAndDisplay(a, a, a);
addAndDisplay(myVariable, c, a);

// Zapisanie funkcji do zmiennej (umożliwia callbacki, będzie później)

let myFunction = function() {
    console.log("function assigned to variable");
}

myFunction();

// Stała zmienna

const size = 44;  // deklaracja stałej zmiennej
//size++;  // ta linijka da błąd "Assignment to constant variable", nie możemy modyfikawać zmiennej zadeklarowanej jako stała

// Funkcja która zwraca wartość

function addAndReturn(a, b, c) {
    let sum = a + b + c;
    console.log(sum);
    return sum;
}

let sum = addAndReturn(3, 6, 8);  // przypisanie wyniku funkcji do zmiennej
sum++;
console.log(sum);

// Modyfikowanie obiektu przy pomocy funkcji

let myCars = [
    {brand: "BMW", model: "m140i", year: 2017, power: 340},
    {brand: "Renault", model: "Megane", year: 2017, power: 205},
    {brand: "Saab", model: "9-3", year: 2011, power: 230},
    {brand: "Audi", model: "A6", year: 2008, power: 300}
]

function changePower(value) {
    for (let car of myCars) {
        car.power += value;
    }
}

changePower(100);
console.log(myCars);

// Przekazanie tablicy jako argumentu funkcji

let myCars2 = [
    {brand: "BMW", model: "m140i", year: 2017, power: 340},
    {brand: "Renault", model: "Megane", year: 2017, power: 205},
    {brand: "Saab", model: "9-3", year: 2011, power: 230},
    {brand: "Audi", model: "A6", year: 2008, power: 300}
]

function changePower2(value, myCars2) {
    for (let car of myCars2) {
        car.power += value;
    }
}

changePower2(200, myCars2);
console.log(myCars2);

