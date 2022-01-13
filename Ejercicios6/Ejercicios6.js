/* ==========================================
1) const a = ["foo", "alfa", "ram"];
 
seleccionar las primeras letras de los 3 elementos
y mostrar: "far" */

const a = ["foo", "alfa", "ram"]

let arrayUnido = a.map(function(options){
  return options[0]
  })

console.log (arrayUnido.join(""))

/* ==========================================
2) const b = ["hola", "mundo", "desde", "vscode"];
   
mostrar por pantalla: "hola - mundo, desde vscode." */

const b = ["hola", "mundo", "desde", "vscode"];

let arrayUnido2 = b.map(function(options2){
  return (options2)
  })

arrayUnido2.splice(1,0," - ")
arrayUnido2.splice(3,0,", ")
arrayUnido2.splice(5,0," ")
arrayUnido2.splice(7,0,".")

console.log (arrayUnido2.join(""))

/* ==========================================
3) const nombres = [
    {nombre:"foo"},
    {nombre:"bar"},
    {nombre:"qux"},
    [nombre:"ram"]
   ];

   hacer 3 procedimientos de iteración mediante los ciclos:
   map, while y for.
   
   emitir:

   1- nombre: foo
   2- nombre: bar
   3- nombre: qux
   4- nombre: ram */
   
function lineas(){
console.log(`${"-".repeat(25)}`);
}

   const nombres = [
    {nombre:"foo"},
    {nombre:"bar"},
    {nombre:"qux"},
    {nombre:"ram"},
   ];

nombres.map(function(options3, idx){
console.log (`${idx + 1}-`,options3)
})

lineas();

var index = 0;
var len = nombres.length;

while(index < len){
   console.log(`${index + 1}-`,nombres[index]);
   index++;
}

lineas();

var cicloFor = Object.keys(nombres)

for (let index=0; index < cicloFor.length; index++){
  let lista = cicloFor[index];
  console.log(`${index + 1}-`,nombres[lista]);
}

/* ==========================================
4) productos.js 
   const productos = ["tv", "tablet", "pc", "desktop"];
   
   precios.js
   const precios = ["1000 usd", "500 usd", "2000 usd", "700 usd"];   
      
   se tiene 2 array cada uno en un archivo diferente,
   por ejemplo:
  
   el archivo productos.js contine el array productos
   el archivo precios.js contiene el array precios

   se desea crear un archivo llamado:
   mostrar_productos.js

   en ella mediante el uso de ciclos sea "for", "while" ó "map"
   crear un array que contenga los datos de los array mostrados
   de la siguiente forma:    
   
    [{
      tv:"1000usd"
    },
    {
      tablet:"500usd" 
    },
    {
      pc:"2000 usd"
    },
    {
      desktop:"700 usd"
    }]; */

/* ==========================================
5) eres un espia ahora debes crear un sistema de cifrado
   para los números donde si ingresan un número: 0,1,2,3,4,5,6,7,8,9
   debes hacer una sustitución de valor
   
   0 = *
   1 = .
   2 = ?
   3 = /
   4 = x
   5 = !
   6 = #
   7 = &
   8 = ¿
   9 = q
   
   es decir si ingreso el valor de 100 = .**
   otro ejemplo si ingreso 75123 = &!.?/
   
   adicional debes descifrar el valor codificado
   si recibes el valor de .qq* = 1990
   otro ejemplo si ingreso ?*** = 2000
   
   NOTA: se desea el uso de funciones y crear un sistema modulos
         de separación de archivos. */

// DESCOMPOSICION DE STRING EN ARRAY

let str = "*.?/x!#&¿q"

var arrayUnido5 = str.split('')

// UNION DE SIMBOLOS Y NUMEROS POR INYECCION EN UN SOLO ARRAY

arrayUnido5.splice(1,0,"0")
arrayUnido5.splice(3,0,"1")
arrayUnido5.splice(5,0,"2")
arrayUnido5.splice(7,0,"3")
arrayUnido5.splice(9,0,"4")
arrayUnido5.splice(11,0,"5")
arrayUnido5.splice(13,0,"6")
arrayUnido5.splice(15,0,"7")
arrayUnido5.splice(17,0,"8")
arrayUnido5.splice(19,0,"9")

console.log (arrayUnido5)

// DESCIFRADO DE SIMBOLO A NUMERO (UNA POSICION HACIA ADELANTE)

function descifrado(str) {
  // crear variable vacia
  let resultadoFinal = '';

  // iterar el array
  for (let i = 0; i < str.length; i++) {
    const posicionEnArray = str[i];

  // saltar una posicion adelante
      const charIndex = arrayUnido5.findIndex((c) => c === posicionEnArray);

      resultadoFinal += arrayUnido5[charIndex + 1]
    
  }
  return resultadoFinal;
}

console.log(descifrado('.**'));

// CIFRADO DE NUMERO A SIMBOLO (UNA POSICION HACIA ATRAS)

function cifrado(str) {
  // crear variable vacia
  let resultadoFinal = '';

  // iterar el array
  for (let i = 0; i < str.length; i++) {
    const posicionEnArray = str[i];

  // saltar una posicion atras
      const charIndex = arrayUnido5.findIndex((c) => c === posicionEnArray);

      resultadoFinal += arrayUnido5[charIndex - 1]
    
  }
  return resultadoFinal;
}

console.log(cifrado('100'));

/* ==========================================
6) const c = [
     {pies:"pies"},
     [["cabeza"]],
     function(){
      return "cuerpo"
     }
   ];

  dado el array loco anterior, mostrar lo siguiente
  por la consola:
 
  "cabeza"
  "cuerpo"
  "pies"  

  se recomienda usar el ciclo "for" como medio de iteración */

const c = [
  {pies:"pies"},
  [["cabeza"]],
  function(){
   return "cuerpo"
  }
];

c[0] = "cabeza"
c[1] = "cuerpo"
c[2] = "pies"

for (var cPos = 0; cPos <= 2; cPos++)
console.log (c[cPos])

/* ==========================================
7) const menu = ["burguer", "papas", "gaseosa", "helado"];
   
  mostrar por consola el menu mediante "map" adicional antes
  de mostrar el menu, debes agregar al final del menú despues 
  del item helado,el item "agua"
    
  -------------------
  MENU - MENU - MENU
  -------------------
  1) burguer
  -------------------
  2) papas
  -------------------
  3) gaseosa
  -------------------
  4) helado
  -------------------
  5) agua
  -------------------
========================================== */

const menu = ["burguer", "papas", "gaseosa", "helado"];

lineas();
console.log(" MENU - MENU - MENU")
lineas();

menu.push("agua")

menu.map(function(options7 , i){
  console.log (` ${i+1}) ${options7}`, "\n",`${"-".repeat(19)}` )
})