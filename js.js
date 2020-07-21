/**
 * Ejercicios Libro - Página: 168:
- 5.6
  - 5.8
  - 5.10(considerar los arreglos de 10 elementos)
  - 5.13(considerar un arreglo de 15 elementos declarados estáticamente)
  - 5.17
 */

/**
5.6 ) Realice y represente mediante diagrama de flujo y
pseudocódigo un algoritmo que lea los nombres y las edades de diez alumnos,
y que los datos se almacenen en dos vectores, y con base en esto se determine
 el nombre del alumno con la edad mayor del arreglo.
 */
console.log(`------Ejercicio-5.6---------------`)
let nombres = ['Gustavo', 'Miguel', 'Cesar', 'Ramon', 'Kevin', 'Jose', 'Arturo', 'Pedro', 'Leonidas', 'Oscar']
let edad = ['26', '25', '24', '30', '22', '21', '20', '19', '18', '17']

let ingresarnombre = 'Stephany'
let ingresaredad = 16


nombres.push(ingresarnombre)
edad.push(ingresaredad)

let Contenedor = { nombres, edad }
let edadMaxima = Math.max(...edad)

let indice = edad.findIndex(e => e == edadMaxima);

let NombreDeLaEdadMaxima = nombres[indice]
console.log(`El nombre es: ${NombreDeLaEdadMaxima} y su edad ${edadMaxima}`)



/**
 * 5.8) Realice un algoritmo que lea un vector y a partir de él, forme un segundo vector,
 * de tal forma que el primer elemento pase a ser el segundo,
 * el segundo pase a ser el tercero,
 * el último pase a ser el primero, y así sucesivamente.
 */

let nombres2 = ['Gustavo', 'Miguel', 'Cesar', 'Ramon', 'Kevin', 'Jose', 'Arturo', 'Pedro', 'Leonidas', 'Oscar']

let ultimonombre = nombres2.length - 1
let poultimonombre = nombres2[ultimonombre]

nombres2.splice(0, 0, poultimonombre)
console.log(`------Ejercicio-5.8---------------`)
for (let i = 0; i < nombres2.length; i++) {
  let valor = nombres2[i]
  console.log(`posicion ${i} : ${valor}`)
  var removed = nombres2.splice(10, 1)
}


/**
 * Realice un algoritmo que lea dos vectores de cien elementos y que calcule
 *  la suma de éstos guardando su resultado en otro vector, 
 * el cual se debe presentar en forma impresa
 */
console.log(`------Ejercicio-5.10---------------`)
let vector1 = [26, 25, 24, 30, 22, 21, 20, 19, 18, 17]
let vector2 = [26, 25, 24, 30, 22, 21, 20, 19, 18, 18]
let suma1 = 0, suma2 = 0
for (let i = 0; i < vector1.length; i++) {
  suma1 = suma1 + vector1[i]
}

for (let i = 0; i < vector2.length; i++) {
  suma2 = suma2 + vector2[i]
}

let vector3 = [suma1, suma2]
console.log(vector3)

/**
 * Se tiene en un arreglo cien elementos representando calificaciones
 * de los estudiantes de una escuela. Realice un algoritmo que lea el
 *  arreglo y calcule la calificación promedio del grupo, además, que
 *  cuente los estudiantes que obtuvieron calificaciones arriba del promedio del grupo.
 */
console.log(`------Ejercicio-5.13---------------`)
let notas = [10, 15, 05, 10, 20, 04, 13, 19, 18, 17]
let cantidaddenotas = notas.length - 1
let sumanotas = 0
for (let i = 0; i < notas.length; i++) {
  sumanotas = sumanotas + notas[i]
}

let promedionotas = sumanotas / cantidaddenotas

console.log(promedionotas.toFixed(2))

for (let i = 0; i < notas.length; i++) {
  let variable = notas[i]
  if (variable > promedionotas) {
    console.log(`Las notas que superan al promedio son: ${variable}`)
  }
}

console.log(`------Ejercicio-5.17---------------`)

let nombretrabajadores = ['Gustavo', 'Miguel', 'Cesar', 'Ramon', 'Kevin']
let horastrabajadas = [8, 10, 8, 10, 9]
let sueldo = [10, 15, 20, 25, 30]

console.log(`------Parte a---------------`)
for (let i = 0; i < horastrabajadas.length; i++) {
  let horastrabajadassemana = horastrabajadas[i] * sueldo[i]
  console.log(`El personal ${nombretrabajadores[i]} ganará semanalmente ${horastrabajadassemana} `)
}

console.log(`------Parte b---------------`)
for (let i = 0; i < horastrabajadas.length; i++) {
  let horastrabajadassemana = (horastrabajadas[i] * sueldo[i]) * 4
  console.log(`El personal ${nombretrabajadores[i]} el total que pagara la empresa es: ${horastrabajadassemana} `)
}
