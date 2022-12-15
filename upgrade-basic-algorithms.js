//Iteración #1: Variables 

let myFavoriteHero = "Hulk";
let x = 50;
let h = 5;
let y = 10;
let z = h + y;

//Iteración #2: Variables avanzadas

// 1.1 Dado el siguiente javascript, cambia el valor de la propiedad age a 25.

const character = {
    name: 'Jack Sparrow',
    age: 25
}; //Una constante no se puede modificar, asi que lo he cambiado directamente.



// 1.2 Declara 3 variables con los nombres y valores siguientes 
// 	firstName = 'Jon'; 
// 	lastName = 'Snow'; 
// 	age = 24; 
// Muestralos por consola de esta forma: 
// 	'Soy Jon Snow, tengo 24 años y me gustan los lobos.'

let firstName = 'Jon';
let lastName = 'Snow';
let age = 24;

console.log("Soy " + firstName + " " + lastName + ", tengo " + age + " años y me gustan los lobos.");

// 1.3 Dado el siguiente javascript, imprime con un console.log la suma del precio de
// ambos juguetes.
const toy1 = {
    name: 'Buss myYear',
    price: 19
};
const toy2 = {
    name: 'Rallo mcKing',
    price: 29
};

console.log(toy1.price+toy2.price);

// 1.4 Dado el siguiente javascript, actualiza el valor de la variable globalBasePrice a 25000 
// y actualiza la propiedad finalPrice de todos los coches con el valor de su propiedad 
// basePrice más el valor de la variable globalBasePrice.
 let globalBasePrice = 10000;
 const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
 const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};

 globalBasePrice = 25000;
 car1.finalPrice = globalBasePrice + car1.basePrice;
 car2.finalPrice = globalBasePrice + car2.basePrice;

 console.log(car1.finalPrice,car2.finalPrice);