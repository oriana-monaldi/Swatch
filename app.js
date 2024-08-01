const reloj =  [
    {
        id: 1,
        nombre: "Second of Sweetness",
        precio: 144000,
        clasificacion: "Unisex",
        color: "Amarillo",
    },
    {
        id: 2,
        nombre: "Fall-Iage",
        precio: 160000,
        clasificacion: "Hombre",
        color: "Naranja",
    },
    {
        id: 3,
        nombre: "Frostbloom",
        precio: 172000,
        clasificacion: "Hombre",
        color: "Gris",
    },
    {
        id: 4,
        nombre: "What if Lemon",
        precio: 99000,
        clasificacion: "Mujer",
        color: "Amarillo",
    },
    {
        id: 5,
        nombre: "What if Mint",
        precio: 99000,
        clasificacion: "Mujer",
        color: "Verde",
    },
    {
        id: 6,
        nombre: "What if Rose",
        precio: 99000,
        clasificacion: "Hombre",
        color: "Rosa",
    },
    {
        id: 7,
        nombre: "What if Sky",
        precio: 99000,
        clasificacion: "Hombre",
        color: "Celeste",
    },
    {
        id: 8,
        nombre: " Swatch Neon Wave",
        precio: 168000,
        clasificacion: "Unisex",
        color: "Celeste",
    },
    { 
        id: 9,
        nombre: "Swatch Neon Flash Arrow",
        precio: 210000,
        clasificacion: "Mujer",
        color: "Blanco",
    },
    { 
        id: 10,
        nombre: "Swatch Neon Ridder",
        precio: 110000,
        clasificacion: "Hombre",
        color: "Negro",
    },
]

//Mostramos en el alert el array de relojes
//opcion 1

function mostrarRelojes() { 
    const ArrayRelojes = reloj.map(el => `${el.nombre}: $${el.precio}`).join('\n');
    alert(ArrayRelojes);
};

//-------------------FILTRADO POR CLASIFICACION-------------------//
//Filtrado de relojes de Mujer
//opcion 2

function relojesWoman() {
    const buscadoWoman = reloj.filter(el => el.clasificacion === "Mujer");
    const nombresYPrecios = buscadoWoman.map(el => `${el.nombre}: $${el.precio}`).join('\n');
    alert(`Los relojes de mujer disponibles son:\n${nombresYPrecios}`);
}

// Filtrado de relojes de Hombre
//opcion 3
function relojesMan() {
    const buscadoMan = reloj.filter(el => el.clasificacion === "Hombre");
    const nombresYPrecios = buscadoMan.map(el => `${el.nombre}: $${el.precio}`).join('\n');
    alert(`Los relojes de hombre disponibles son:\n${nombresYPrecios}`);
}

//Filtrado de relojes Unisex
//opcion 4

function relojesUnisex() {
    const buscadoUnisex = reloj.filter(el => el.clasificacion === "Unisex");
    const nombresYPrecios = buscadoUnisex.map(el => `${el.nombre}: $${el.precio}`).join('\n');
    alert(`Los relojes unisex disponibles son:\n${nombresYPrecios}`);
}

//Filtrar todos los relojes que su precio sea menor a $100000 
//opcion 5

function relojesEconomicos() {
    let resultado = "Los relojes económicos disponibles son:\n";
    for (let i = 0; i < reloj.length; i++) {
        if (reloj[i].precio < 100000) {
            resultado = `Nombre: ${reloj[i].nombre}, Precio: $${reloj[i].precio}\n`;
        }
    }
    alert(resultado);
}

// Pedir por prompt al usuario que ingrese el dinero maximo dispuesto a gastar, y que muestre en la consola cuales son los
//relojes que tienen un precio menor al que se pide por prompt
// Precios e/ 100.000 y 200.000
//opcion 6

function dineroMaximo() {
    const dineroMaximo = parseFloat(prompt("Ingresa el dinero máximo dispuesto a gastar:"));

    if (isNaN(dineroMaximo) || dineroMaximo <= 0) {
       alert("Ingrese una cantidad valida");
    } else {
        const relojes = reloj.filter(el => el.precio <= dineroMaximo);
        let cantidad = "";

        if (relojes.length > 0) {
            relojes.forEach(el => {
                cantidad += `Nombre: ${el.nombre}, Precio: $${el.precio}, Clasificación: ${el.clasificacion}, Color: ${el.color}\n`;
            });
        } else {
            cantidad = `No se encontraron relojes con precio menor o igual a $${dineroMaximo}.`;
        }

        alert(cantidad);
    }
}

//-----------FILTRADO POR COLOR CON PROMPT---------//
//opcion 7

function filtradoPorColor() {
    const ColorBuscado = prompt("Ingrese el color a buscar del reloj");

    const colorBuscadoLower = ColorBuscado.toLowerCase();

    const relojesPorColor = reloj.filter(el => el.color.toLowerCase() === colorBuscadoLower);

    let mensaje;

    if (relojesPorColor.length > 0) {
        const detalles = relojesPorColor.map(el => 
            `Nombre: ${el.nombre}, Precio: $${el.precio}, Clasificación: ${el.clasificacion}`
        );
        mensaje = `Relojes de color ${ColorBuscado}:\n${detalles.join('\n')}`;
    } else {
        mensaje = `No se encontraron relojes de color ${ColorBuscado}.`;
    }

    alert(mensaje);
}


//Si quisiera hacer una actualizacion de precios 
// ej un descuento en todos los relojes de mujer 
//opcion 8

function descuento() {
    const relojesActualizados = reloj.map(el => {
        if (el.clasificacion === "Mujer") {
            return {
                nombre: el.nombre,
                precioOriginal: el.precio,
                precioDescuento: el.precio * 0.90,
                clasificacion: el.clasificacion
            };
        }
        return el;
    });
    
    const relojesMujerConDescuento = relojesActualizados.filter(el => el.clasificacion === "Mujer");

    if (relojesMujerConDescuento.length > 0) {
        const mensaje = relojesMujerConDescuento.map(el =>
            `Nombre: ${el.nombre}, Precio original: $${el.precioOriginal.toFixed(2)}, Precio con descuento: $${el.precioDescuento.toFixed(2)}`).join('\n');
        alert(mensaje);
    } else {
        alert("No se encontraron relojes de mujer con descuento");
    }
}


//Ordenar el array del mayor al menor precios de los relojes
//opcion 9

function mayorAMenor() {
    const ordenadoMayorAMenor = [...reloj].sort((a, b) => b.precio - a.precio);
    const mensaje = `Precios ordenados de mayor a menor:\n${ordenadoMayorAMenor.map(el => `Nombre: ${el.nombre}, Precio: $${el.precio.toFixed(2)}`).join('\n')}`;
    alert(mensaje);
}

//Ordenar el array del menor al mayor precios de los relojes
//opcion 10

function menorAMayor() {
    const ordenadoMenorAMayor = [...reloj].sort((a, b) => a.precio - b.precio);
    const MenorAMayor = `Precios ordenados de menor a mayor:\n${ordenadoMenorAMayor.map(el => `Nombre: ${el.nombre}, Precio: $${el.precio}`).join('\n')}`;
    alert(MenorAMayor);
}


// Cargar relojes al carrito
//opcion 11

const carrito = [];

function cargarProducto() {
    let seguirComprando = true;
    while (seguirComprando)  {

        const ArrayRelojes = reloj.map(el => `${el.id}- ${el.nombre}: $${el.precio}`).join('\n');
        const IDproductoAComprar = parseInt(prompt(`Ingrese el id del producto a añadir \n\n ${ArrayRelojes}`));
        
        for (let i = 0; i < reloj.length; i++) {
            if (reloj[i].id === IDproductoAComprar) {
                carrito.push(reloj[i])
                alert("El producto se ha añadido al carrito correctamente");
            } else if (IDproductoAComprar >= reloj.length) {
                alert("El id ingresado no existe");
                return;
            }
        }

        seguirComprando = confirm("¿Desea añadir otro producto al carrito?"); 
    }
}

// Ver carrito
// opcion 12

function verProductos() {
    if (carrito.length === 0) {
        alert("El carrito está vacío.");
        return;
    }

    let total = 0;
    for (let i = 0; i < carrito.length; i++) {
        total = carrito[i].precio;
    }

    const arrayCarrito = carrito.map(el => `ID numero: ${el.id} Nombre: ${el.nombre} Precio: $${el.precio}`).join('\n');

    alert(` Los productos son:\n\n  ${arrayCarrito} 
    \n\n Precio total del carrito: $${total}`); 
}

//Eliminar un producto del carrito
//opcion 13

function eliminarProducto() {
    if (carrito.length === 0) {
        alert("El carrito está vacío.");
        return;
    }

    const productosEnCarrito = carrito.map(el => `${el.id} - ${el.nombre}: $${el.precio}`).join('\n');
    const idProductoAEliminar = parseInt(prompt(`Ingrese el id del producto a eliminar \n\n ${productosEnCarrito}`));

    let index = -1;
    for (let i = 0; i < carrito.length; i++) {
        if (carrito[i].id === idProductoAEliminar) {
            index = i;
            break;
        }
    }

    if (index !== -1) {
        carrito.splice(index, 1);
        alert("El producto se ha eliminado del carrito.");
    } else {
        alert("El id ingresado no existe en el carrito.");
    }
}



// Generar factura 
//opcion 14 

function verFactura() {
    const nombre = prompt("Ingrese su nombre:");
    const apellido = prompt("Ingrese su apellido:");
    const dni = prompt("Ingrese el DNI sin puntos ni comas");
    const dniNumero = parseInt(dni);

    if (!isNaN(dniNumero) && dniNumero >= 1000000 && dniNumero <= 99999999) {
        const productosCarrito = carrito.map(el => `- ${el.nombre}: $${el.precio}`).join('\n');
        const total = carrito.reduce((sum, el) => sum + el.precio, 0);

        alert("Sus datos fueron cargados con éxito");

        if (carrito.length > 0) {
            alert(`¡Gracias por su compra!  \n\n INFORMACIÓN DE LA FACTURA: \n\n -Nombre: ${nombre} \n\n -Apellido: ${apellido} \n\n-DNI: ${dni} \n\n -Productos:\n${productosCarrito} \n\n -Precio Total: $${total}`);
        } else {
            alert(`No se ha podido realizar la factura, debe primero seleccionar relojes.`);
        }
    } else {
        alert("El DNI no existe, ingrese un DNI correcto");
    }
}



// menu 

function mostrarMenu() {
    let continuar = true

    while (continuar){
        let opcion = prompt(
            "Seleccione una opción:\n" +
                "1. Mostrar todos los relojes\n" +
                "2. Mostrar relojes de mujer\n" +
                "3. Mostrar relojes de hombre\n" +
                "4. Mostrar relojes Unisex\n" +
                "5. Mostrar relojes Economicos\n" +
                "6. Filtro de relojes por un precio dado\n" +
                "7. Filtro de relojes por color dado\n"+
                "8. Ver los descuentos aplicados a los relojes de mujer\n"+
                "9. Mostar los precios de los relojes de mayor a menor\n"+
                "10. Mostar los precios de los relojes de menor a mayor \n"+
                "11. Cargar productos al carrito \n" +
                "12. Ver productos del carrito\n"+
                "13. Eliminar productos del carrito\n"+
                "14. Ver factura\n"+
                "15. Salir"
            )
        
        switch(opcion) {
            case '1':
                mostrarRelojes();
                break;
            case '2':
                relojesWoman();
                break;
            case '3':
                relojesMan();
            break;
            case '4':
                relojesUnisex();
            break;
            case '5':
                relojesEconomicos();
            break;
            case '6':
                dineroMaximo();
            break;
            case '7':
                filtradoPorColor();
            break;
            case '8':
                descuento();
            break;
            case '9':
                mayorAMenor();
            break;
            case '10':
                menorAMayor();
            break; 
            case '11':
                cargarProducto();
            break;
            case '12':
                verProductos();
            break; 
            case '13':
                eliminarProducto();
            break;
            case '14':
                verFactura();
            break;
            case '15':
                continuar = false;
                alert("Gracias por usar la tienda.");
            break;
            default:
                alert('Opción no válida.');
        }
    }
    if (continuar) {
            continuar = confirm("¿Desea volver al menú anterior?");
        }
}

mostrarMenu();
