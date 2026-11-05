const N_FILAS = 15;
const N_COLS = 15;
const N_BUTACAS = 5;

const tabla = new Array(N_FILAS);

for (let i = 0; i < N_FILAS; i++) {
    tabla[i] = new Array(N_COLS).fill(0);
}

const tablero = document.getElementById("tablero");

for (let i = 0; i < N_FILAS; i++) {
    for (let j = 0; j < N_COLS; j++) {
        const mar = document.createElement("div");
        mar.classList.add("barco");
        mar.id = "barco" + i + "-" + j
        if (tabla[i][j] === 1) {
            mar.classList.add("ocupado");
        }
        tablero.appendChild(mar);
    }
}

let barcos = 0;

do {
    const filas_aleat = Math.floor(Math.random() * N_FILAS);
    const cols_aleat = Math.floor(Math.random() * N_COLS);
    if (tabla[filas_aleat][cols_aleat] === 0) {
        tabla[filas_aleat][cols_aleat] = 1;
        barcos++;
    }
} while (barcos < N_BUTACAS);


console.table(tabla);


function disparar() {
    let fila = window.prompt("Introduce la fila");
    let columna = window.prompt("Introduce la columna");

    if (tabla[fila][columna] >= 0 && tabla[fila][columna] <= 14) {
        console.log("las coordenadas son correctas");
    } else {
        console.log("las coordendaas no son correctas");
    }

    if (tabla[fila][columna] === 0) {
        document.getElementById("barco" + fila + "-" +columna).classList.add("disparo");
        console.log("has fallado el disparo");
    } else {
       document.getElementById("barco" + fila + "-" +columna).classList.add("ocupado");
        console.log("has tumbado un barco");
    }

    if (document.getElementById("barco" + fila + "-" +columna).classList.add("ocupado")) {
        console.log("ya has disparado a este barco");
    }


    // ejercicio 8 
    let aciertos = 0;
    aciertos++;
    console.log(aciertos);
    if (aciertos === 3) {
        document.getElementById("disp").disabled=true;
        window.alert("has ganado");
    }
}
