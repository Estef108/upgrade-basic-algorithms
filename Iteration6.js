//1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.
for (x = 0; x <= 9; x++) {
    console.log(x);
}

/*1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo 
cuando el resto del numero dividido entre 2 sea 0.*/
for (x = 0; x <= 9; x++) {
    if (x % 2 == 0) {
        console.log(x);
    }
}

/*1.3 Crea un bucle para conseguir dormir contando ovejas. 
Este bucle empieza en 0 y termina en 10. 
Muestra por consola un mensaje diciendo 'Intentando dormir' en cada vuelta del bucle 
y cambia el mensaje en la última vuelta a 'Dormido!'.*/

let i = 0;
while (i < 10){
    console.log(i + "...Intentando dormir");
    i++;
} 
console.log( i + " Dormido!");