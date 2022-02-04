// 1

/*
Se tiene creado un objeto, en el cual se desea agregar 2 propiedades
dentro de su prototipo, las propiedades son: edad: 300, pais:"narnia"
*/

let persona = {
  nombre: "foo",
__proto__:{
  edad: 300,
  pais:"narnia",
 }
}

console.log (persona.__proto__)

// ====================================================================

// 2

/*
https://jsonplaceholder.typicode.com/users 

Mediante la anterior url, se debe acceder al endpoint /users 
para mostrar todos los usuarios, con el uso de la librería axios, 
se debe hacer 2 diseños de consumo de este recurso. 

1 consumirlo con promesas es decir con then(...).catch(...)
2 consumirlo con el formato de diseño async / await */

/* docs:

https://github.com/axios/axios

npm install axios */

//---- PARTE 1 (PROMESAS) ------------

const axios1 = require ("axios")

function getUsers () {
axios1.get("https://jsonplaceholder.typicode.com/users")
      .then(function(RespuestaExitosa){
console.log ("EJERCICIO AXIOS", "\n",RespuestaExitosa)
}).catch(function(error1){
console.log(error1)
})
}

getUsers()

//----- PARTE 2 (ASYNC/AWAIT) ---------------

const axios2 = require ("axios")

async function getPost (){
    try{
        const r =await axios2.get("https://jsonplaceholder.typicode.com/users")
        console.log (r.data)
    }
    catch (error){
        console.log ("err")
    }
}

getPost()

// ====================================================================

// 3

/*
Se tiene el objeto "Can" y el objeto "Perro" en el objeto "Perro"
 se debe crear un vínculo con un prototipo hacia el objeto "Can" 
 para mostrar todas sus propiedades y funciones.

*/

let can = {
  ladra: true,
  cantidadDePatas: 4,
  __proto__: {
      correr() {
          return "corriendo";
      },
      salta() {
          return "saltando"
      }
  }
};

let perro = {
 nombre:"tornado",
__proto__:can
};

console.log (perro.__proto__.ladra)
console.log (perro.__proto__.cantidadDePatas)
console.log (perro.__proto__.__proto__)

// ====================================================================

// 4

/* Este string "fooziman" se debe proyectar de la siguiente forma "fOozimAn" 
 NOTA: con la segunda letra en upper y la ante penúltima en upper.
*/

let str = "fooziman"

var Array1 = str.split('')

Array1.splice(1,1,"O")
Array1.splice(6,1,"A")

console.log (Array1.join(""))

// ====================================================================

// 5

/*
Determinar con un loop/ciclo en el array de personas cuantas 
son mayores de edad y cuantas menores de edad, adicional decir 
el total de personas que compone el array.
*/

let personas = [{
  nombre: "foo",
  edad: 18
},
{
  nombre: "bar",
  edad: 17
},
{
  nombre: "zap",
  edad: 40
},
{
  nombre: "qux",
  edad: 19
}
];

for (var personasPos = 0 ; personasPos <= 2; personasPos++){
} if (personas[0].edad >= 18){
      console.log("foo es mayor de edad")
    }else{
      console.log ("foo es menor de edad")
    }
      if (personas[1].edad >= 18){
          console.log("bar es mayor de edad")
        }else{
          console.log ("bar es menor de edad")
      }
      if (personas[2].edad >= 18){
          console.log("zap es mayor de edad")
        }else{
          console.log ("zap es menor de edad")
        }
      
      if (personas[3].edad >= 18){
          console.log("qux es mayor de edad")
        }else{
          console.log ("qux es menor de edad")
    }
    
var index = 0
var length = personas.length;
console.log ("Hay", length ,"personas en el array");

// ====================================================================

// 6

/*
Hay 2 Objetos: Can y Perro, que deben ser transformados en un esquema de clases,
donde la clase Perro herede las propiedades y funciones de la clase Can y mostrar
todo el perfil del Perro por pantalla / terminal.

let Can = {
    ladra: true,
    cantidadDePatas: 4,
    correr() {
        return "corriendo";
    },
    salta() {
        return "saltando"
    }
};

let Perro = {
    nombre: "tornado",
}; */

class Can {

  constructor (ladra,cantidadDePatas){
  this.ladra = true
  this.cantidadDePatas = 4
  this.correr = "corriendo"
  this.salta = "saltando"
}
correrYsaltar(){
  return [this.correr , this.salta]  
  }
};

class Perro extends Can {
constructor(ladra,cantidadDePatas,nombre){
super(ladra,cantidadDePatas,nombre)
this.nombre = "tornado"
}

wrapAccionablesHeredados(){
return [...this.correrYsaltar()]
}
}

const PerroFinal = new Perro ()

console.log ("=========================")
console.log ("Perfil Completo del Perro")
console.log ("=========================")

console.log ("Ladra?", PerroFinal.ladra)
console.log ("Cantidad de patas?", PerroFinal.cantidadDePatas)
console.log ("Cual es su nombre?", PerroFinal.nombre)

console.log ("Que esta haciendo?", PerroFinal.wrapAccionablesHeredados())

// ====================================================================

// 7

/*
Se tiene una Wallet / Billetera virtual, a la que hay que agregarle en la
propiedad criptos del objeto Wallet, 3 critpomonedas, además se tiene que
conocer el total de stableCoin y el total de no stableCoin, 
si la propiedad stableCoin=true indica que es una stableCoin, por último indicar, cuál de 
las 3 criptos tiene mayor reserva de dinero tomando como referencia la 
propiedad del valor con dolar. */

const Wallet = {
  criptos: [],
  status: true,
  user: ""
};

let BTC = {
  name: "bitcoin",
  usd: "100",
  btc: "0,0023",
  current: "$42,750.52",
  stableCoin: false
};

let ETH = {
  name: "ethereum",
  usd: "1000",
  eth: "0,31",
  current: "$3,199.91",
  stableCoin: false
};

let USDT = {
  name: "tether",
  usd: "500",
  usdt: "500",
  current: "$1.00",
  stableCoin: true
};

Wallet.criptos = ["BTC","ETH","USDT"]

console.log (Wallet.criptos)

var UnstableCoinsSum = function (BTC , ETH){
return BTC + ETH
}

var sumResult = UnstableCoinsSum (100 , 1000);
console.log (" Stablecoin total:" ,`$`, USDT.usd , "\n", "Unstablecoin total:" , "$", sumResult)

let B = BTC.current
let E = ETH.current
let U = USDT.current

var cryptoArray = [B , E , U ]

for (var cryptoPos = 0 ; cryptoPos <= 2; cryptoPos++){
  } if (cryptoArray[0] > cryptoArray[1]) {
     console.log( "Bitcoin vale mas en dolares que Ethereum")
   }else{
     console.log ("Ethereum vale mas en dolares que bitcoin")
   }

for (var cryptoPos = 0 ; cryptoPos <= 2; cryptoPos++){
  } if (cryptoArray[0] > cryptoArray[2]) {
     console.log("Bitcoin vale mas en dolares que USDT")
   }else{
     console.log ("USDT vale mas en dolares que Bitcoin")
   }