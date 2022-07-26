// arreglo de objetos cuentas 
let cuentas = [{
        "nombre": "Mali",
        "saldo": 200,
        "email": "mali.mali@email.com"
    },
    {
        "nombre": "Gera",
        "saldo": 290,
        "email": "gera.gera@email.com"
    },
    {
        "nombre": "Maui",
        "saldo": 67,
        "email": "maui.maui@email.com"
    },
    {
        "nombre": "Arling",
        "saldo": 500,
        "email": "arlin.holguin@email.com"
    },
    {
        "nombre": "David",
        "saldo": 550,
        "email": "david.zonana@email.com"
    }
];

//recorro el aarreglo de objetos cuentas y muestro el nombre y el saldo
// for (let i = 0; i < cuentas.length; i++) {
//     console.log(cuentas[i].nombre + " tiene un saldo de: " + cuentas[i].saldo);
//     document.getElementById('cta').innerHTML = `<p class="mr-1">Cuenta ${cuentas[i].nombre}  </p>
//     <input class="mt-1 mr-4" type="radio">`;

// }

//recorre el arreglo de objetos cuentas y muestro el nombre y el saldo
cuentas.map(function(cuenta) {
    console.log(cuenta.nombre + " tiene un saldo de: " + cuenta.saldo);
    document.getElementById('cta').innerHTML = `<p class="mr-1">Cuenta ${cuenta.nombre}  </p>
    <input class="mt-1 mr-4" type="radio">`;
});



//buscar cuenta por nombre 
let cuenta = cuentas.find(cuenta => cuenta.nombre === "Arling");
alert(cuenta.saldo + " es el saldo de " + cuenta.nombre);
console.log(cuenta.saldo);


//acceder a el arreglo de objetos cuentas
// let cuenta = cuentas.find(cuenta => cuenta.nombre === "mali");
// alert(cuenta.saldo);
// alert(cuentas[0].saldo);


//Al seleccionar una cuenta, debes ingresar el password asociado a la cuenta.
// Si el password es incorrecto, debes notificar al usuario y permitirle intentarlo
// nuevamente. Si el password es correcto, debes mostrar las siguientes opciones:

// Consultar saldo
// Ingresar monto
// Retirar Monto

// Al seleccionar consultar saldo, debe mostrar en pantalla el saldo actual de la cuenta
// Al seleccionar ingresar monto, el usuario debe escribir el monto a ingresar. Al ingresar el monto, debe mostrarle al usuario el monto ingresado y el nuevo saldo total.
// Al seleccionar retirar monto, el usuario debe escribir el monto a retirar. Al retirar el monto, debe mostrarle al usuario el monto retirado y el nuevo saldo total.
// Como regla de negocio, una cuenta no debe de tener más de $990 y menos de $10. Es necesario hacer las validaciones pertinentes para que no se rompa esta regla de negocio.


//generar md5 
// window.addEventListener('load', function() {
//     var strHash = md5('mali.mali@email.com');
//     // alert('The MD5 hash of the tutsplus string is:' + strHash);
// });