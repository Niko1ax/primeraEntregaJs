function mostrarMenu() {
    const hotWheels = [
        {
            id: 1, marca: 'Peugeot', modelo: '206 Rally', tipo: 'auto', color: 'rojo', año: 1969
        },
        {
            id: 2, marca: 'Bone Shaker', modelo: 'Shaker', tipo: 'auto', color: 'negro', año: 2006
        },
        {
            id: 3, marca: 'Roger ', modelo: 'Dodger', tipo: 'auto', color: 'azul', año: 1974
        },
        {
            id: 4, marca: 'Porsche', modelo: '356A Outlaw', tipo: 'auto', color: 'verde', año: 2013
        },
        {
            id: 5, marca: 'Volkswagen', modelo: 'T1 drag buss', tipo: 'auto', color: 'plateado', año: 2019
        },
        {
            id: 6, marca: 'Mercury', modelo: 'Cougar', tipo: 'auto', color: 'amarillo', año: 1968
        },
        {
            id: 7, marca: 'Dodge', modelo: 'Charger R/T', tipo: 'auto', color: 'naranja', año: 1970
        },
        {
            id: 8, marca: 'Nissan', modelo: '180SX Type X', tipo: 'auto', color: 'blanco', año: 1996
        },
        {
            id: 9, marca: 'Nissan', modelo: 'GT-R (R35)', tipo: 'auto', color: 'azul', año: 2017
        },
        {
            id: 10, marca: 'Ford', modelo: 'Mustang Mach 1', tipo: 'auto', color: 'rojo', año: 1971
        }
    ];

    let opcion = prompt('Bienvenido a compras online de HotWheels porfavor seleciona una opcion: \n1 - Buscar por marca \n2 - Buscar por tipo \n3 - Buscar por año \n4 - Ver todos \n5 - Carrito \n6 - Exit');
    switch (opcion) {
        case '1':
            buscarPorMarca(hotWheels);
            break;
        case '2':
            buscarPorTipo(hotWheels);
            break;
        case '3':
            buscarPorAño(hotWheels);
            break;
        case '4':
            mostrar(hotWheels);
            break;
        case '5':
            carrito(hotWheels);
            break;
        case '6':
            alert('Gracias por pasarte');
            break;
        default:
            alert("Opcion no valida. ingrese un numero correcto");
            mostrarMenu(hotWheels);
    }
}
function buscarPorMarca(hotWheels) {

    let opcion = prompt('Selecciona una opcion para ordenar los hotwheels \n1 - por marca \n2 por tipo \n3 por color \n4 por año')
    let hotWheelsOrdenados;

    switch (opcion) {
        case '1':
            hotWheelsOrdenados = hotWheels.sort((a, b) => a.marca.localeCompare(b.marca));
            break;
        case '2':
            hotWheelsOrdenados = hotWheels.sort((a, b) => b.marca.localeCompare(a.marca));
            break;
        default:
            alert("Opción no válida. Por favor, seleccione una opción correcta.");
            return buscarPorMarca(hotWheels); // Llama a la función nuevamente en caso de opción inválida
    }

    console.log("HotWheels ordenados por marca:");
    hotWheelsOrdenados.forEach(hotWheel => {
        console.log(`ID: ${hotWheel.id}, Marca: ${hotWheel.marca}, Modelo: ${hotWheel.modelo}, Tipo: ${hotWheel.tipo}, Color: ${hotWheel.color}, Año: ${hotWheel.año}`);
    });

    mostrarMenu(hotWheels); // Vuelve al menú principal
}

function buscarPorTipo(hotWheels) {

    let tipoHotWheelsOpcion = prompt('Selectiona tipo de HotWheels: \n1 - Autos \n2 - Camionetas')
    let tipoHotWheels
    switch (tipoHotWheelsOpcion) {
        case '1':
            tipoHotWheels = 'Autos';
            break;
        case '2':
            tipoHotWheels = 'Camioneta';
            break;
        default:
            alert("Opcion no valida. ingrese un numero correcto");
            buscarPorTipo(hotWheels);
            return;
    }
}

function buscarPorAño(hotWheels) {

}

function mostrar(hotWheels) {
    let cadena = hotWheels.map(car =>
        `Marca: ${car.marca}, Modelo: ${car.modelo}, Tipo: ${car.tipo}, Color: ${car.color}, Año: ${car.año}`
    ).join('\n');
    prompt("Los autos son:\n" + cadena);
}


function carrito(hotWheels) {

}

mostrarMenu();

