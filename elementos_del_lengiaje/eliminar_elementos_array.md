# ELiminar elementos de array

## .push()

El método `.push()` nos permite agregar uno o más elementos al final de un array.

A continuación veremos un ejemplo aplicado con un array que contiene números:

```js
// Array de números

let numArray = [1,2,3,4,5]

function newNum(){
  numArray.push(6,7)
}

newNum()
```

Como vemos, luego de aplicar `.shift()` se eliminó exitosamente el primer elemento del array. ¿Y si quisiéramos eliminar el último elemento? Pasemos al bonus track de esta clase 🙌🏼.

# Bonus
Si ya entendiste cómo funciona `.shift()` aplicar `.pop()` te será pan comido 🍞. El método `.pop()` eliminará el último elemento de un array. En este sentido, si tenemos un array de 5 elementos, `pop()` eliminará el elemento en el índice 4. Usemos el mismo ejemplo pero usando este método.

```js

// --- SHIFT ---

//Creamos el array
let array = [1,2,3,4,5]
console.log(array)

// Aplicamos .shift()
let shiftArray = array.shift()

//Revisamos. El output debe de ser [2,3,4,5]
console.log(array)

// --- POP ---

//Creamos el array
let array = [1,2,3,4,5]
console.log(array)

// Aplicamos .shift()
let shiftArray = array.pop()

//Revisamos. El output debe de ser [1,2,3,4]
console.log(array)
```