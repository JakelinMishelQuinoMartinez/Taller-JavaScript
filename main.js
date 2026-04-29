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

//1. REGISTRAR NUEVA HABITACIÓN
function registrarHabitacion() {
    const numero = parseInt(prompt("Número de la habitación:"));
    const tipo = prompt("Tipo (Sencilla, Doble o Suite):");
    const precioNoche = parseFloat(prompt("Precio por noche:"));
    const estado = prompt("Estado (libre, Ocupado o limpieza):");
    const huesped = prompt("Nombre del huésped:");
    console.log("Validando información de la habitación...");

    setTimeout(() => {
        const nuevaHab = {
            numero: numero,
            tipo: tipo,
            precioNoche: precioNoche,
            estado: estado,
            huesped: huesped,
        };
        habitaciones.push(nuevaHab);
        console.log("Habitación registrada correctamente.");
        menuPrincipal();
    }, 2000);
}
