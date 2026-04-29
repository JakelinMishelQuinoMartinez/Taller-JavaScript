const habitacionUno = {
    numero: 1,
    tipo: "Sencilla",
    precioNoche: 100,
    estado: "libre",
    huesped: "vacío",
}

const habitacionDos = {
    numero: 2,
    tipo: "Sencilla",
    precioNoche: 100,
    estado: "Ocupado",
    huesped: "Jorge López",
}

const habitacionTres = {
    numero: 3,
    tipo: "Doble",
    precioNoche: 150,
    estado: "libre",
    huesped: "vacío",
}
const habitacionCuatro = {
    numero: 4,
    tipo: "Doble",
    precioNoche: 150,
    estado: "Ocupado",
    huesped: "Erika Pérez",
}

const habitacionCinco = {
    numero: 5,
    tipo: "Suite",
    precioNoche: 200,
    estado: "limpieza",
    huesped: "vacío",
}

//ARREGLO DE HABITACIONES
let habitaciones = [habitacionUno, habitacionDos, habitacionTres, habitacionCuatro, habitacionCinco,]

function menuPrincipal(){
    let opc = prompt(
        "============= HOTEL =============\n"+
        "1. Registrar nueva habitación\n"+
        "2. Listar habitaciones\n"+
        "3. Buscar habitación por número\n"+
        "4. Cambiar estado de una Habitación\n"+
        "5. Eliminar Habitación\n"+
        "6. Salir\n"+
        "========= Elija una opción =========="
    );
    switch(opc){
        case "1":
            registrarHabitacion();
            break;
        case "2":
            listarHabitaciones();
            break;
        case "3":
            buscarHabitacion();
            break;
        case "4":
            cambiarEstado();
            break;
        case "5":
            eliminarHabitación();
            break;
        case "6":
            console.log("¡Saliendo!")
            break;
        default:
            console.log("Ingrese un valor válido");
            menuPrincipal();
    }
}
menuPrincipal();