//Built-in Objects exercises.

/*---------- String ----------*/
/*
1. Crear una función que reciba un string como parametro y que al ser llamada haga
un console.log mostrando el length del string recibido.

Ex:
myFunc('myString');
*/ 

/*------------------------------ Solución ------------------------------------------- */

function FunString(mystring){
    console.log(mystring.length);
  }
  FunString("I need to finish my homework");


/*----------------------------------------------------------------------------------- */



/*---------- Number ----------*/
/*
2. Crear una función que reciba un number, que haga lo siguiente:
* Determinar si el numero recibido es un número entero.
* En caso de ser entero, hacer un console.log avisando que es un entero. 
* En caso de no ser entero, convertirlo a entero y mostar el nuevo valor usando console.log.

Ex:
myFunc(number);
posibles casos:
a) el número es un entero :3
b) el número ahora es un entero con valor de (valor) ;)
*/ 

/*------------------------------ Solución ------------------------------------------- */

function FunInteger(number) {
  if(Number.isInteger(number)) {
    console.log(number + " es un número entero");
  }
  else {
    console.log("El número ahora es un entero con valor de " + Number.parseInt(number));
  }
}

FunInteger(7.3);


/*----------------------------------------------------------------------------------- */



/*---------- Boolean ----------*/
/*
3. Crear una función que reciba un boolean, que al ser llamada haga un console.log mostrando:
* El numero de caracteres que representan el valor del boolean recibido.

Ex:
var flag = true;
myFunc(flag);
expected result:  4 caracteres.
*/

/*------------------------------ Solución ------------------------------------------- */


function numCaracteres (value) {
    console.log(value.toString().length);
}

numCaracteres(false);

/*----------------------------------------------------------------------------------- */



/*---------- Object ----------*/
/*
4. Crear una función que reciba un object, que al ser llamada haga un console.log mostrando:
* El numero de propiedades que contiene el objeto.
* El nombre de cada una de las propiedades del objeto.
* El valor de cada una las propiedades del objeto.

Ex:
myFunc(obj);
*/ 

/*------------------------------ Solución ------------------------------------------- */

let usuario = {
    name: "alumnoA",
    matricula: "29344876",
    grupo: "207-A"
  };

  function myFunc(obj){
    console.log(Object.keys(usuario).length, Object.keys(usuario), Object.values(usuario));
  }
  myFunc(usuario);

/*----------------------------------------------------------------------------------- */



/*---------- Function ----------*/
/*
5. Crear una función que reciba una function, que al ser llamada haga un console log mostrando:
* El número de argumentos que espera la funcion.

Ex:
var sum = new Function('a','b','c', 'return a + b + c');

myFunc(sum);
result: 3.
*/ 

/*------------------------------ Solución ------------------------------------------- */

var value = new Function ('a', 'b', 'c', 'return a + b + c');

function funSuma (value) {
    console.log(value.length);
}

funSuma(value);

/*----------------------------------------------------------------------------------- */



/*---------- Array ----------*/
/*
6. Crear una función que reciba un array de strings, un número (desiredLength) y un string (template), 
que al ser llamda haga lo siguiente:
*Checar el numero de propiedades que tiene el array.
*Si el numero de propiedades es menor a desiredLength por 1: 
    *Rellenar el espacio faltante dentro del array usando template.  
    *Hacer un console.log del arreglo con los cambios.
*En caso de que no se cumpla la condición, mencionar si el array es menor o mayor que desiredLength y por cuanto.
Ex:

var arr = ['Apple', 'Banana'];
myFunc(arr, 3, 'apple');
*/ 

/*------------------------------ Solución ------------------------------------------- */

let array = ["apple", "banana"];
function myFunc(array,desiredLength,template){
  let diferencia = desiredLength - array.length;
  if(diferencia === 1){s
    array.push(template);
    console.log(array);
  }
  else if(diferencia > 1){
    console.log("El arreglo es menor que desiredLength por " + diferencia)
  }
  else{
    console.log("El arreglo es mayor que desiredLength por  " + Math.abs(diferencia));
  }
}

myFunc(array,3,'grapes');

/*----------------------------------------------------------------------------------- */



/*---------- Date ----------*/
/*
7. Crear una función que al ser llamada haga dos console.log, uno mostrando la fecha actual 
y otro que muestre cuantos milisegundos han pasado desde el 1/enero/1970 hasta ahora.

myFunc();
*/

/*------------------------------ Solución ------------------------------------------- */

function fDate(){
    var date = new Date();
    console.log("La fecha actual es: " + date.toISOString());
    console.log(Date.now());
    }

   fDate();


/*----------------------------------------------------------------------------------- */



/*---------- Math ----------*/
/*
8. Crear una función que reciba dos numeros (base y exponente). 
la función al ser llamada usará el valor absoluto de base y lo elevara a la potencia 
determinada por exponente, al final mostrar este resultado usando console.log.

Ex:

myFunc(-3, 2) 
result = 9;
*/

/*------------------------------ Solución ------------------------------------------- */

function Potencia(a, b) {
    console.log(Math.pow(Math.abs(a),b));
  }
  Potencia(-3, 2);


/*----------------------------------------------------------------------------------- */



/*---------- RegExp ----------*/
/*
9. Dada el siguiente patrón (/([A-Z])/), crear una funcion que reciba dos strings (str, template).
* Determine si str cumple con el patrón.
* Si cumple, remplazar el las incidencias del patron con el valor de template.
* Mostar el resultado usando console.log.
* Si no, mostrar un mensaje de no coincidencia usando console.log

Ex:
myFunc(str, template)
*/

/*------------------------------ Solución ------------------------------------------- */

var rg = new RegExp(/([A-Z])/);

function myFun(str, template) {
    if (rg.test(str)) {
        console.log(str.replace(rg, template));
        return;
    }
    console.log("No se encontraron coincidencias");
}

myFun("Nombre", "abc");

/*----------------------------------------------------------------------------------- */



/*---------- Error ----------*/
/*
10. Crear una funcion que reciba un numero.
*Si el número es menor o igual a 10, usar console.log para mostrar un mensaje de valor dentro de los paramatros.
*Si el número es mayor a 10 arrojar un error con el mensaje, el valor esta fuera de los parametros.

Ex: myFunc(number)
*/

/*------------------------------ Solución ------------------------------------------- */

function isAerror(number){
    if (number <= 10){
        console.log("Valor dentro de los parametros ");
        return
    }
    throw new Error("El valor está fuera de los parametros");
}
isAerror(10);

/*----------------------------------------------------------------------------------- */


/*---------- Extra (más no opcional) ----------*/
/*
Usar los objetos vistos en clase y aplicarlos para solucionar un escenario que pueda ocurrir 
entre los proyectos finales que tienen asignados.

Describir el caso:

//Proyecto: PetMatcher
//Se presentan dos funciones cuyos parámetros son dos arreglos pet y preferences(derivado de las preferencias
  del usuario por los perros). 
  
 1. Función getUpperCase: Dado que el usuario puede ingresar su información con letras mayúsculas o 
  minúsculas, esta función convierte todos los elementos a letra mayúsculas.
 2. Función match: recibe los parámetros pet y preferences. Tiene la finalidad de buscar elementos
  idénticos entre los array (a través de includes()), por cada coincidencia entre ambos habrá un contador
  que registre este número, para ejemplificarlo se definió que a partir de 3 coincidencias existe un match.
         *Si el resultado de coincidencias es mayor o igual a 3 se usará un console.log con la leyenda
           "Tu nuevo mejor amigo es X".
         *En caso contrario, se usará una leyenda con "Por el momento no tenemos el amigo perfecto para tí."

Mostrar la solucíon en código:
*/

const pet = ["Fido", "small", "black", "Kids", "old"];
const preferences = ["Nalle", "Small", "white", "kids", "old"];
var contador = 0;

//Cambiar los elementos del arreglo a mayúsculas
function getUpperCase (pet,preferences) {
  for(var i= 0; i <pet.length; i++){
    pet[i] = pet[i].toUpperCase();
    preferences[i] = preferences[i].toUpperCase();
  }
  console.log(pet, preferences);  
}
getUpperCase(pet, preferences);

//Hacer el match con los elementos en mayúscula
function match (pet, preferences){
     for(let i=0; i < preferences.length; i++) {
        let result = pet.includes(preferences[i]);
            if(result === true) {
                contador += 1;
            }
     }
    if (contador >=3) {
      console.log("Tu nuevo mejor amigo es " + pet[0]);  
      }
      else {
      console.log("Por el momento no tenemos el amigo perfecto para tí")  
      }
}

match(pet, preferences);


