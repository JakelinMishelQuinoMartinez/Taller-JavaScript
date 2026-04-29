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

// 2. LISTAR HABITACIONES
function listarHabitaciones() {
    if (habitaciones.length === 0) {
        console.log("No existen registros.");
    } else {
        console.log("--- Lista de Habitaciones ---");
        habitaciones.forEach((h) => {
            console.log(`Habitación ${h.numero}: ${h.tipo} | Precio: ${h.precioNoche} | Estado: ${h.estado} | Huésped: ${h.huesped}`);
        });
    }
    menuPrincipal();
}

//3. BUSCAR HABITACIÓN POR NÚMERO
function buscarHabitacion() {
    const numBuscar = parseInt(prompt("Ingrese el número de habitación que busca:"));
    console.log("Consultando la base de datos del hotel...");

    setTimeout (()=>{
        const encontrada = habitaciones.find(h => h.numero === numBuscar);
        if (encontrada){
            console.log("Resultado:", encontrada)
        } else {
            console.log("Haitación no encontrada")
        }
        menuPrincipal()
    },2000)
}

menuPrincipal();