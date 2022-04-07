// 1. Realiza un script que pida la edad y si es mayor de 18 años indica que ya puede conducir.

let permisoCon = () => {
    let age = document.getElementById('a').value;
    if(age > 18){
        document.write('puedes condcir');
    } else document.write('No puedes conducir');
};


// 3. Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor.

const comparar = () => {
    let nombre1 = document.getElementById('name1').value;
    let numero1 = Number(document.getElementById('number1').value);
    let nombre2 = document.getElementById('name2').value;
    let numero2 = Number(document.getElementById('number2').value);
    let nombre3 = document.getElementById('name3').value;    
    let numero3 = Number(document.getElementById('number3').value);
    const mayor = Math.max(numero1, numero2, numero3);
    if(mayor == numero1){
        document.write('El mayor es ' + nombre1);
    }
    if(mayor == numero2){
        document.write('El mayor es ' + nombre2);
    }
    if(mayor == numero3){
        document.write('El mayor es ' + nombre3);
    }
}


//4. Genera 3 números aleatorios entre 1 y 99 pero que no se repita ninguno.

const generar = () => {
    let z = 0;
    let num;
    let uno = 0;
    let dos = 0;
    let tres = 0;
    do {
        num = Math.floor((Math.random() * 99) + 1);
        if ((num != uno) && (num != dos) && (num != 3)) {
            document.write(num + "<br>");
            z++;
            if (z == 1) {
                uno = num;
            }
            if (z == 2) {
                dos = num;
            }
            if (z == 3) {
                tres = num;
            }
        }
    } while (z < 3);
}


// 5. Realiza un script que cuente el número de vocales que tiene un texto.

const qq = () => {
    let cadena = document.getElementById('cadena').value;
    let numchar = cadena.length;
    cadena = cadena.toUpperCase();
    let car;
    let contador = 0;
    let i;
    for(i = 0; i < numchar; i++){
        car = cadena.charAt(i);
        if((car === 'A') || (car === 'E') || (car === 'I') || (car === 'O') || (car === 'U')){
            contador++;
        }
    }
document.write('Numero de vocales = ' + contador);
}


// 6. Pedimos una cadena de texto que sabemos que puede contener paréntesis. Realiza un script que extraiga la cadena que se encuentra entre los paréntesis. Ejemplo: Si escribimoe el texto “Hola (que) tal” se mostrará “que”. Si no existe el signo “(“ mostrará una cadena vacía y si existe el signo “(“pero no el signo “)” mostrará
//desde el primer paréntesis hasta el final.

const p6 = () => {
    let cad = document.getElementById('cad').value;
    let conchar = cad.length;
    let j;
    let carr;
    let salida = '';
    let copiar = false;
    for (j=0; j < conchar; j++) {
        carr = cad.charAt(j);
        if(carr === ')'){
            copiar = false;
        }
        if(copiar){
            salida = salida + carr;
        }
        if(carr === '('){
            copiar = true;
        }
    }
    document.write(salida);
}


// 7. Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá
// mostrar “lat euq aloh”.

const p7 = () => {
    let cadena = document.getElementById('rev').value;
    let numchar = cadena.length;
    let j;
    let car;
    let salida = '';
    for (j = 0; j < numchar; j++){
        car = cadena.charAt(j);
        salida = car + salida;
    }
    document.write(salida);
}


// 8. Realiza un script que muestre la serie de fibonacci hasta un número entre 1 y 100 pedido por teclado.

const p8 = () => {
    let numero = document.getElementById('fibo').value;
    if((numero >= 1) && (numero <= 100)) {
        let x = 0;
        let y = 1;
        let z;
        document.write(x + "<br>");
        for (i = 0; i < (numero-1); i++) {
            z = x + y;
            document.write(z + "<br>");
            y = x;
            x = z;
        }
    }
    else {
        alert("Número erróneo");
    }
}


// 9. Realiza un juego de Piedra Papel Tijera contra el Pc

const p9 = () => {
    do {
        let jugada = document.getElementById('game').value;
        let aleatorio = Math.floor((Math.random() * 9) + 1);
        let elige = "";
        if (aleatorio <= 3) {
            elige = "piedra";
        }
        else if (aleatorio <= 6) {
            elige = "papel";
        }
        else {
            elige = "tijera";
        }

        if ((jugada == "piedra") && (elige == "piedra")) {
            alert(jugada+"-"+elige+": Empate");
        }
        else if ((jugada == "piedra") && (elige == "papel")) {
            alert(jugada+"-"+elige+": Gana PC");
        }
        else if ((jugada == "piedra") && (elige == "tijera")) {
            alert(jugada+"-"+elige+": Gana Jugador");
        }
        else if ((jugada == "papel") && (elige == "papel")) {
            alert(jugada+"-"+elige+": Empate");
        }
        else if ((jugada == "papel") && (elige == "tijera")) {
            alert(jugada+"-"+elige+": Gana PC");
        }
        else if ((jugada == "papel") && (elige == "piedra")) {
            alert(jugada+"-"+elige+": Gana Jugador");
        }
        else if ((jugada == "tijera") && (elige == "tijera")) {
            alert(jugada+"-"+elige+": Empate");
        }
        else if ((jugada == "tijera") && (elige == "piedra")) {
            alert(jugada+"-"+elige+": Gana PC");
        }
        else if ((jugada == "tijera") && (elige == "papel")) {
            alert(jugada+"-"+elige+": Gana Jugador");
        }
    } while (alert('Intentalo de nuevo!'));
}


// 10. Crea una función que reciba 2 parámetros, precio e iva, y devuelva el precio con iva incluido. Si no recibe el iva,
//aplicará el 21 por ciento por defecto.
 
const p10 = () => {
    let precio = document.getElementById('prec').value;
    let iva = document.getElementById('iva').value;
    const masIva = (precio, iva) => {
        iva = iva || 21
        let coniva = (precio + precio*iva/100);
        return coniva;
    }
    if(iva > 0){
       resultado = masIva(precio, iva);
    }
    else{
       resultado = masIva(precio);
    }
    document.write("Precio sin iva: " + precio);
    document.write("<br>Precio más Iva: " + resultado);
}


// 12. Realiza un script que muestre un reloj en pantalla con fecha y hora y que se actualice cada segundo. Función setTimeout().

let reloj = 0;
let frecuencia = 1000;
const actualizar = () => {
    let ahora = new Date();
    let fecha = ahora.getDate() + "/" + (ahora.getMonth() + 1) + "/" + ahora.getFullYear();
    let hora = ahora.getHours() + ":" + ahora.getMinutes() + ":" + ahora.getSeconds();
    let escribe = 'Hoy es ' + fecha + ' y son las ' + hora + ' horas';
    let situa = document.getElementById('capa0');
    situa.innerHTML = escribe;
    reloj = setTimeout("actualizar()", frecuencia);
}


// 13. Programa una función que dada una fecha valida determine cuantos años han pasado hasta el día de hoy.

const p13 = () => {
    //let fecha = document.getElementById('time');
    const volverFuturo = (fecha = undefined) => {
        if(fecha === undefined) return console.warn('Olvidaste pasarme la fecha');
        if(!(fecha instanceof Date)) return console.error('El valor ingresado no es una fecha vaildad');
        let calculoAnios = new Date().getTime() - fecha.getTime();
        let transMiles = 1000*60*60*24*365;
        let anios = Math.floor(calculoAnios/transMiles);
        let mos1 = `Faltan ${Math.abs(anios)} años para el ${fecha.getFullYear()}.`;
        let mos2 = `Pasaron ${anios} años desde ${fecha.getFullYear()}.`;
        let mos3 = `No hay diferencia en el año actual ${fecha.getFullYear()}.`;
        return (Math.sign(anios) === -1)
        ? document.write(mos1)
        :(Math.sign(anios) === 1)
         ? document.write(mos2)
         : document.write(mos3)
    }
     volverFuturo();
     volverFuturo(new Date(document.getElementById('time').value));
}


// 14. Programa una función que dada una cadena de texto cuente el numero de vocales y consonantes.
const p14 = () => {
    let texto = document.getElementById('tt').value;
    const contarLetras = (texto = undefined) => {
        if (texto === undefined) return console.warn('Ingrese un texto porfavor');
        if (typeof(texto) !== "string") return console.error('Lo ingresado no es un texto');
        let textocopy = texto.replace(/ /g,'');
        let vocales = new RegExp(/[aeiou]/ig);
        let consonante = /[^aeiou]/ig;
        let cantidadVocales = textocopy.match(vocales).length;
        let cantidadConsonantes = textocopy.match(consonante).length;
        let mostrar = `En el texto ${texto} hay ${cantidadVocales} vocales y ${cantidadConsonantes} consonantes`;
       return document.write(mostrar);
    }    
    contarLetras();
    contarLetras(true);
    contarLetras(texto);
}


// 15. Programa una función que valide que un texto sea un nombre valido. Entrada(‘edson’) devolverá ‘verdadero’.
const p15 = () => {
    const validarNombre = (nombre = undefined,apellido = undefined)=>{
        let inf1 = `No completo el nombre`;
        let inf2 = `No completo el apellido`;
        let inf3 = 'Nombre no valido';
        let inf4 = `Apellido no valido`;
        let inf5 = `Nombre : "${nombre} ${apellido}" valido`;
        if(nombre === undefined)return document.write(inf1);
        if(apellido === undefined)return document.write(inf2);
        let regularNombre = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
        
        if ( !regularNombre.test(nombre))return document.write(inf3);
        if ( !regularNombre.test(apellido))return document.write(inf4);
        else if(regularNombre.test(nombre) && regularNombre.test(apellido)) {return document.write(inf5)};
    }
    validarNombre(document.getElementById('nomb').value,document.getElementById('ape').value);
}


// 16. Programa una función que dado un arreglo de elementos, elimine los duplicados:
// entrada([‘5’, ’25’, ‘10’, ‘s’, ‘5’, ‘a’, ‘a’]) devolverá ([‘5’, ‘25’, ‘10’, ‘s’, ‘a’]). 

const p16 = () => {
    let inf1 = `No ingresaste un areglo`;
    let inf2 = `Esto no es un arreglo de numero`;
    let inf3 = `Arreglo vacio`;
    
    const eliminarDuplicado = (arreglo = undefined)=>{
        let resul = `El arreglo "${arreglo}"\n sin duplicados es : ${arreglo = [...new Set(arreglo)]}`
        if(arreglo === undefined) return document.write(inf1)
        if(!(arreglo instanceof Array)) return document.write(inf2);
        if(arreglo === 0) return document.write(inf3);
        return console.log(resul);
        }
    //eliminarDuplicado(["x", 10, "x", 2, "10", 10, true, true]);
    eliminarDuplicado(document.getElementById('arreg').value);
}