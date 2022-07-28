// arreglo de objetos cuentas
// let cuentas = [{
//         nombre: "Mali",
//         saldo: 200,
//         email: "mali.mali@email.com",
//     },
//     {
//         nombre: "Gera",
//         saldo: 290,
//         email: "gera.gera@email.com",
//     },
//     {
//         nombre: "Maui",
//         saldo: 67,
//         email: "maui.maui@email.com",
//     },
//     {
//         nombre: "Arling",
//         saldo: 500,
//         email: "arlin.holguin@email.com",
//     },
//     {
//         nombre: "David",
//         saldo: 550,
//         email: "david.zonana@email.com",
//     },
// ];

//recorro el aarreglo de objetos cuentas y muestro el nombre y el saldo
// for (let i = 0; i < cuentas.length; i++) {
//     console.log(cuentas[i].nombre + " tiene un saldo de: " + cuentas[i].saldo);
//     document.getElementById('cta').innerHTML = `<p class="mr-1">Cuenta ${cuentas[i].nombre}  </p>
//     <input class="mt-1 mr-4" type="radio">`;

// }



document.querySelector("#botonCuentas").addEventListener("click", traerCuentas);

function traerCuentas() {
    // console.log("dentro de la fucnion");
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "cuentas.json", true);
    xhttp.send();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let cuentas = JSON.parse(this.responseText);
            let res = document.querySelector("#res");
            res.innerHTML = "";
            let nombre = document.querySelector("#nombre").value;
            //validar campo si esta vacio
            if (nombre == "") {
                alert("El campo nombre esta vacio");
            }
            let password = document.querySelector("#password").value;
            //validar campo si esta vacio
            if (password == "") {
                alert("El campo password esta vacio");
            }




            console.log(nombre);
            console.log(password);

            for (let cuenta of cuentas) {
                if (nombre == cuenta.nombre && password == cuenta.password) {
                    res.innerHTML += `<p class="my-2 font-bold text-upercase bg-green-500 p-1 rounded text-center">${cuenta.nombre} bienvenido a nuestro cajero.</p><tr>
                    <td><button class="btn btn-info btn-sm" id="saldo">Consultar saldo</button>
                    <button class="btn btn-primary btn-sm" id="consignar">Ingresar Monto</button>
                    <button class="btn btn-success btn-sm" id="retirar">Retirar Monto</button> 
                    <button class="btn btn-warning btn-sm" id="salir">Salir</button></td>
                    <tr>`;
                    //limpiar campos de testo id="nombre" id="password"
                    document.querySelector("#nombre").value = "";
                    document.querySelector("#password").value = "";

                    document.querySelector("#saldo").addEventListener("click", function() {
                        res.innerHTML += `<p class="my-2 font-bold text-upercase bg-green-500 p-1 rounded text-center">${cuenta.nombre} tu saldo es: ${cuenta.saldo}</p>`;

                    });

                    document.querySelector("#consignar").addEventListener("click", function() {
                        res.innerHTML += `<p class="my-2 font-bold text-upercase bg-green-500 p-1 rounded text-center">${cuenta.nombre} ingrese el monto a consignar:</p>
                        <input type="text" class="form-control" id="monto">
                        <button class="btn btn-primary btn-sm" id="consignarMonto">Consignar</button>`;
                    });

                    document.querySelector("#retirar").addEventListener("click", function() {
                        res.innerHTML += `<p class="my-2 font-bold text-upercase bg-green-500 p-1 rounded text-center">${cuenta.nombre} ingrese el monto a retirar:</p>
                        <input type="text" class="form-control" id="monto">
                        <button class="btn btn-primary btn-sm" id="retirarMonto">Retirar</button>`;
                    });

                    document.querySelector("#salir").addEventListener("click", function() {
                        res.innerHTML += `<p class="my-2 font-bold text-upercase bg-green-500 p-1 rounded text-center">${cuenta.nombre} saliendo del cajero.</p>`;
                        document.querySelector("#res").innerHTML = "";
                    });



                    let botonCuentas = document.querySelector("#botonCuentas");
                    botonCuentas.style.display = "none";
                }
            }
        }
    };
}

//recorre el arreglo de objetos cuentas y muestro el nombre y el saldo
// cuentas.map(function(cuenta) {
//     console.log(cuenta.nombre + " tiene un saldo de: " + cuenta.saldo);
//     document.getElementById('cta').innerHTML = `<p class="mr-1">Cuenta ${cuenta.nombre}  </p>
//     <input class="mt-1 mr-4" type="radio">`;
// });

//buscar cuenta por nombre
// let cuenta = cuentas.find((cuenta) => cuenta.nombre === "Arling");
// alert(cuenta.saldo + " es el saldo de " + cuenta.nombre);
// console.log(cuenta.saldo);

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