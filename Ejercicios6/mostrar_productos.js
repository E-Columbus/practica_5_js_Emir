const {productos} = require ("./productos")
const {precios} = require ("./precios")

for (var X = 0; X <= 3; X++)
console.log (productos[X], precios[X])