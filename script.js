//numeros primos
function primos(numero) {
    var primo = true;
    for (var i = 2; i < numero; i++) {
        if (numero % i == 0) {
            primo = false;
        }
    }
    return primo;
}
console.log(primos(4));

//numero par o impar
function parImpar(numero) {
    if (numero % 2 == 0) {
        return "par";
    } else {
        return "impar";
    }
}
console.log(parImpar(4));

//numero mayor o menor que 50
function mayorMenor(numero) {
    if (numero > 50) {
        return "mayor";
    } else {
        return "menor";
    }
}
console.log(mayorMenor(4));

//numero piramidal
function piramidal(numero) {
    var piramidal = "";
    for (var i = 1; i <= numero; i++) {
        piramidal += i + " ";
    }
    return piramidal;
}
console.log(piramidal(200));

//mostrar solo numerpos impares de 1 a 100
function impares(numero) {
    var impares = "";
    for (var i = 1; i <= numero; i++) {
        if (i % 2 != 0) {
            impares += i + " ";
        }
    }
    return impares;
}
console.log(impares(100));

//generar un arreglo del abecedario en mayusculas
function abecedario(numero) {
    var abecedario = "";
    for (var i = 65; i <= numero; i++) {
        abecedario += String.fromCharCode(i) + " ";
    }
    return abecedario;
}
console.log(abecedario(90));

//tabla del 9 de 1 a 10 mostrando el resultado
function tabla(numero) {
    var tabla = "";
    for (var i = 1; i <= numero; i++) {
        tabla += i + " x " + numero + " = " + i * numero + "\n";
    }
    return tabla;
}
console.log(tabla(9));

//Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 36.000 veces esta operación.
function lanzamientoDados(numero) {
    var lanzamiento = [];
    for (var i = 0; i < numero; i++) {
        lanzamiento.push(Math.floor(Math.random() * 6) + 1);
    }
    return lanzamiento;
}
console.log(lanzamientoDados(2));

//Crear una expresión regular valide una fecha en formato "XX/XX/XXXX", donde "X" es un dígito. Probarlo con la expresión: "Nací el 05/04/1982 en Donostia.".
function fecha(fecha) {
    var regex = /^\d{2}\/\d{2}\/\d{4}$/;
    return regex.test(fecha);
}
console.log(fecha("05/04/1982"));

// muestre la fecha y la hora actual en un reloj que se va actualizando.
function reloj() {
    var fecha = new Date();
    var hora = fecha.getHours();
    var minutos = fecha.getMinutes();
    var segundos = fecha.getSeconds();
    var dia = fecha.getDate();
    var mes = fecha.getMonth() + 1;
    var anio = fecha.getFullYear();
    var reloj =
        hora + ":" + minutos + ":" + segundos + " " + dia + "/" + mes + "/" + anio;
    return reloj;
}
console.log(reloj());
// var actualreloj = setInterval(reloj, 1000);

//mostrar una calificacion segun la nota numero
function calificacion(nota) {
    if (nota >= 0 && nota <= 5) {
        return "Insuficiente";
    } else if (nota >= 6 && nota <= 7) {
        return "Suficiente";
    } else if (nota >= 8 && nota <= 9) {
        return "Bien";
    } else if (nota >= 10 && nota <= 11) {
        return "Notable";
    } else if (nota >= 12 && nota <= 13) {
        return "Sobresaliente";
    } else if (nota >= 14 && nota <= 15) {
        return "Matricula de Honor";
    } else {
        return "Error";
    }
}
console.log(calificacion(10));

//contar palabras de una frase
function contarPalabras(frase) {
    var palabras = frase.split(" ");
    return palabras.length;
}
console.log(contarPalabras("hola mundo como vamos que tal todo bien"));

//poner mayuscula a cada palabra de una frase
function mayuscula(frase) {
    var palabras = frase.split(" ");
    var fraseMayuscula = "";
    for (var i = 0; i < palabras.length; i++) {
        fraseMayuscula +=
            palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1) + " ";
    }
    return fraseMayuscula;
}
console.log(mayuscula("hola mundo como vamos que tal todo bien"));

//determinar si un numero es divisible en 5 y 7
function divisible(numero) {
    if (numero % 5 == 0 && numero % 7 == 0) {
        return "divisible";
    } else {
        return "no divisible";
    }
}
console.log(divisible(35));

//Determinar si un año dado es bisiesto.
function bisiesto(anio) {
    if ((anio % 4 == 0 && anio % 100 != 0) || anio % 400 == 0) {
        return "bisiesto";
    } else {
        return "no bisiesto";
    }
}
console.log(bisiesto(2022));

//array de emojis
function emojis(numero) {
    var emojis = [];
    for (var i = 1; i <= numero; i++) {
        emojis.push(String.fromCodePoint(0x1f600 + i));
    }
    return emojis;
}
console.log(emojis(79));

//Crea una función que reciba un array de strings y retorne un array con los strings que contienen exactamente 3 letras:
function tresLetras(array) {
    var tresLetras = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i].length == 3) {
            tresLetras.push(array[i]);
        }
    }
    return tresLetras;
}
console.log(
    tresLetras(["hola", "mundo", "como", "vamos", "que", "tal", "todo", "bien"])
);

//Crea una función que reciba (Nombre Apellido) y retorne el string invertido (Apellido Nombre)
function invertir(nombre) {
    var nombreInvertido = "";
    var nombreArray = nombre.split(" ");
    for (var i = nombreArray.length - 1; i >= 0; i--) {
        nombreInvertido += nombreArray[i] + " ";
    }
    return nombreInvertido;
}
console.log(invertir("Juan Perez"));

//Crea una función que reciba un array de enteros y retorne un array con los negativos de dichos enteros.
function negativos(array) {
    var negativos = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            negativos.push(array[i]);
        }
    }
    return negativos;
}
console.log(negativos([1, 2, 3, -4, -5, -6, 7, 8, 9]));

//Crea una función que reciba un array de números y retorne “¡Bomba!” si encuentra un cero en el array, sino retorna “Libre de bombas!”
function bombas(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] == 0) {
            return "¡Bomba!";
        }
    }
    return "Libre de bombas!";
}
console.log(bombas([1, 0, 3, 4, 5, 6, 7, 8, 9]));

//Crea una función que reciba un número de 2 dígitos y verifique si es mayor al mismo número invertido, si es mayor retorna “El número es mayor”, si no es mayor ret
function mayor(numero) {
    var numeroInvertido = numero.toString().split("").reverse().join("");
    if (numero > numeroInvertido) {
        return "El número es mayor";
    } else {
        return "El número es menor";
    }
}
console.log(mayor(62));

//calcular el area de un triangulo
function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
console.log(areaTriangulo(5, 6));

//buscar un elemento en un array de objetos
function buscar(array, elemento) {
    for (var i = 0; i < array.length; i++) {
        if (array[i].nombre == elemento) {
            return array[i];
        }
    }
}
console.log(
    buscar(
        [
            { nombre: "Juan", edad: 20 },
            { nombre: "Pedro", edad: 30 },
            { nombre: "Maria", edad: 40 },
        ],
        "Maria"
    )
);

//Este bucle escribe el valor de la i con el condicional que indica -mientras i no sea superior a 3
for (var i = 0; i < 3; i++) {
    console.log(i);
}

//forEach nos permite recorrer un array y ejecutar una función por cada elemento del array.
var array = [1, 2, 3, 4, 5];
array.forEach(function(elemento) {
    console.log(elemento);
});
//map nos permite recorrer un array y ejecutar una función por cada elemento del array y retorna un nuevo array con los resultados de la función.
var array = [1, 2, 3, 4, 5];
var arrayNuevo = array.map(function(elemento) {
    return elemento * 2;
});
console.log(arrayNuevo);
//filter nos permite recorrer un array y ejecutar una función por cada elemento del array y retorna un nuevo array con los resultados de la función.
var array = [1, 2, 3, 4, 5];
var arrayNuevo = array.filter(function(elemento) {
    return elemento > 2;
});
console.log(arrayNuevo);

//generar link de imagenes en un array de objetos
function generarLink(array) {
    var arrayNuevo = array.map(function(elemento) {
        return "<img src='" + elemento.imagen + "'>";
    });
    return arrayNuevo;
}
console.log(
    generarLink([{
            imagen: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
        },
        {
            imagen: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
        },
        {
            imagen: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
        },
    ])
);

//calculadora de derivadas
function derivada(funcion, x) {
    var h = 0.00001;
    return (funcion(x + h) - funcion(x)) / h;
}
console.log(
    derivada(function(x) {
        return x * x;
    }, 0)
);

//calcular si una palabra tiene una tilde y si la tiene que indique si es grave aguda o esdrujula
function tieneTilde(palabra) {
    var tilde = false;
    for (var i = 0; i < palabra.length; i++) {
        if (
            palabra[i] == "á" ||
            palabra[i] == "é" ||
            palabra[i] == "í" ||
            palabra[i] == "ó" ||
            palabra[i] == "ú"
        ) {
            tilde = true;
        }
    }
    return tilde;
}
console.log(tieneTilde("Esdrújula"));

// Validar si un string es un palindromo
function esPalindromo(string) {
    var stringInvertido = string.split("").reverse().join("");
    if (string == stringInvertido) {
        return true;
    } else {
        return false;
    }
}
console.log(esPalindromo("ala"));

//fetch tweeter
const token = process.env["TWITTER_BEARER_TOKEN"];
const fetchTweetsFromUser = async(screenName, count) => {
    const response = await fetch(
        `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${screenName}&count=${count}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
    const json = await response.json();
    return json;
};

//funcion calback para sumar dos numeros y sacar el promedio de los dos
function sumar(numero1, numero2, callback) {
    var resultado = numero1 + numero2;
    callback(resultado);
}
sumar(1, 2, function(resultado) {
    console.log(resultado);
});

//funcion flecha para sumar dos numeros y sacar el promedio de los dos
sumar = (numero1, numero2) => {
    var resultado = numero1 + numero2;
    console.log(resultado);
}
sumar(1, 2);

//funcion de orden superior para sumar dos numeros y sacar el promedio de los dos
let restaCallBack = (a, b) => a - b
let sumaCallBack = (a, b) => a + b

const operaciones = (numero1, numero2, operacion) => {
    return operacion(numero1, numero2)
}
operaciones(10, 5, sumaCallBack)
operaciones(10, 5, restaCallBack)

//map
const numeros = [1, 2, 3, 4, 5]
    // numeros.map((numero) => numero + 2)
numeros.map((numero) => {
    return numero + 2
})

//filter