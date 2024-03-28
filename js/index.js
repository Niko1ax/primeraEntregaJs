function ingreseNombre() {
    let nombre = prompt("Ingrese su nombre");
    alert("Bienvenido/a " + nombre + "!\nUsted tiene $500 disponibles para comprar");
}

ingreseNombre();

function comprasMenu() {

    let saldoAFavor = 500;
    let pantalones = 200;
    let camisetas = 100;
    let zapatillas = 250;

    while (saldoAFavor > pantalones || saldoAFavor > camisetas || saldoAFavor > zapatillas ) {
        let opcion = prompt("Ingrese numero del item que desea comprar\n1. Pantalones $200\n2. Camisetas $100\n3. Zapatillas $250");

        if (opcion == 1) {
            saldoAFavor = saldoAFavor - pantalones;
            alert("Compra realizada por $" + pantalones);
        } else if (opcion == 2) {
            saldoAFavor = saldoAFavor - camisetas;
            alert("Compra realizada por $" + camisetas);

        } else if (opcion == 3) {
            saldoAFavor = saldoAFavor - zapatillas;
            alert("Compra realizada por $" + zapatillas);
        } else {
            alert("numero ingresado es incorrecto")
            break;
        }
        if (saldoAFavor > 0 ) {
            alert("Saldo restante es " + saldoAFavor)
        } else {
            alert("No te alcanza para mas")
        }
    }
}

comprasMenu();

