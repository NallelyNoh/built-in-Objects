//Built-in Objects exercises.

/*---------- String ----------*/
/*
1. Crear una función que reciba un string como parametro y que al ser llamada haga
un console.log mostrando el length del string recibido.

Ex:
myFunc('myString');
*/ 

/*------------------------------ Solución ------------------------------------------- */

function myString(strg){
    console.log(strg.length);
  }
  myString("I need to finish my homework");


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

function entero(num){
    if (Number.isInteger(num)){
      console.log(num + "es entero");
    }else{
      console.log("el numero ahora es un entero con valor de " + Number.parseInt(num));
    }
  }
  entero(3.4)

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

var value = false;

function exercise3 (value) {
    console.log(value.toString().length);
}

exercise3(value)

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
  }
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

var valores = new Function ('a', 'b', 'c', 'return a+b+c');

function suma (valores) {
    console.log(valores.length)
}

suma(valores)

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

// let frutas = ["apple", "banana"];
// function myFunc(array,desiredLength,template){
//   let diferencia = desiredLength - array.length;
//   if(diferencia === 1){
//     array.push(template);
//     console.log(array);
//   }else if(diferencia > 1){
//     console.log(" el arreglo es menor por " + diferencia)
//   }else{
//     console.log("el arreglo es mayor por  " + Math.abs(diferencia));
//   }
// }
// myFunc(frutas,1,'apple');

/*----------------------------------------------------------------------------------- */



/*---------- Date ----------*/
/*
7. Crear una función que al ser llamada haga dos console.log, uno mostrando la fecha actual 
y otro que muestre cuantos milisegundos han pasado desde el 1/enero/1970 hasta ahora.

myFunc();
*/

/*------------------------------ Solución ------------------------------------------- */

function date(){
    var today = new Date();
    console.log(today.toISOString());
    console.log(Date.now());
    }
    date();


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

// function myFunc(a, b) {
//     var c = Math.abs(a);
//     console.log(Math.pow(c, b));
//   }
//   myFunc(-3, 2);


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
function regex(str, template) {
    if (rg.test(str)) {
        newstring = str.replace(rg, template);
        console.log(newstring);
        return;
    }
    console.log("No encuentro coincidencias");
}
regex("nombre", "Ja");

/*----------------------------------------------------------------------------------- */



/*---------- Error ----------*/
/*
10. Crear una funcion que reciba un numero.
*Si el número es menor o igual a 10, usar console.log para mostrar un mensaje de valor dentro de los paramatros.
*Si el número es mayor a 10 arrojar un error con el mensaje, el valor esta fuera de los parametros.

Ex: myFunc(number)
*/

/*------------------------------ Solución ------------------------------------------- */

function myError(number){
    if (number <= 10){
        console.log("valor dentro de los parametros ");
        return
    }
    throw new Error("el valor esta fuera de los parametros");
}
myError(8);

/*----------------------------------------------------------------------------------- */


/*---------- Extra (más no opcional) ----------*/
/*
Usar los objetos vistos en clase y aplicarlos para solucionar un escenario que pueda ocurrir 
entre los proyectos finales que tienen asignados.

Describir el caso:

Mostrar la solucíon en código:


*/
