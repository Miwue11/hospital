import { crearCarton } from "../apuntes/bingo/motor";
import { bolas, bolasSacadas } from "../apuntes/bingo/model";

let ultimaBolaSacada = 0;
let lineasCantadas = 0;
let carton: number[][] = [];

const bolasRestantesDiv = () =>
  document.getElementById("bolasRestantes") as HTMLDivElement;
const bolasSacadasDiv = () =>
  document.getElementById("bolasSacadas") as HTMLDivElement;
const cartonDiv = document.getElementById("carton") as HTMLDivElement;
export const sacarBolaButton = document.getElementById(
  "sacarBola"
) as HTMLButtonElement;
export const reiniciarButton = document.getElementById(
  "reiniciar"
) as HTMLButtonElement;
const mensajeDiv = document.getElementById("mensaje") as HTMLDivElement;
const bolaActualDiv = document.getElementById("bola-actual") as HTMLDivElement;

export const mostrarCarton = () => {
  cartonDiv.innerHTML = ""; // Limpia el cartón anterior
  for (let i = 0; i < carton.length; i++) {
    const filaDiv = document.createElement("div");
    filaDiv.classList.add("fila");
    for (let j = 0; j < carton[i].length; j++) {
      const numeroDiv = document.createElement("div");
      numeroDiv.classList.add("numero");
      numeroDiv.textContent = carton[i][j].toString();
      filaDiv.appendChild(numeroDiv);
    }
    cartonDiv.appendChild(filaDiv);
  }
};

export const comprobarLinea = (): void => {
  for (let i = 0; i < carton.length; i++) {
    if (lineasCantadas == i)
      if (carton[i].every((numero) => bolasSacadas.includes(numero))) {
        mensajeDiv.textContent = `¡LÍNEA EN LA FILA ${i + 1}!`;
        lineasCantadas++;
      }
  }
};

const comprobarBingo = (): void => {
  if (carton.flat().every((numero) => bolasSacadas.includes(numero))) {
    mensajeDiv.textContent = "¡BINGO!";
    bloquearBotones();
  }
};

export const bloquearBotones = () => {
  sacarBolaButton.disabled = true;
  sacarBolaButton.style.display = "none";
  reiniciarButton.disabled = false;
  reiniciarButton.style.display = "block";
};

export const desbloquearBotones = () => {
  sacarBolaButton.disabled = false;
  reiniciarButton.disabled = false;
  reiniciarButton.style.display = "none";
  sacarBolaButton.style.display = "block";
};

// Función para sacar una bola

export const sacandoBolas = () => {
  if (bolas.length === 0) {
    mensajeDiv.textContent = "¡Ya no quedan mas bolas!";
    return;
  }
  const indiceAleatorio = Math.floor(Math.random() * bolas.length);
  const bola = bolas.splice(indiceAleatorio, 1)[0];
  bolasSacadas.push(bola);
  ultimaBolaSacada = bola; // Update the global variable.
  bolasRestantesDiv().textContent = `Bolas restantes: ${bolas.length}`;
  bolasSacadasDiv().textContent = `Bolas sacadas: ${bolasSacadas.join(", ")}`;
  Checkeo();
  const bolasList = document.querySelector("#bolasSacadas .bolas-list");
  if (bolasList) {
    bolasList.innerHTML = "";
    bolasSacadas.forEach((numero) => {
      const bolaDiv = document.createElement("div");
      bolaDiv.classList.add("bola-sacada");
      bolaDiv.textContent = numero.toString();
      bolasList.appendChild(bolaDiv);
    });
  }
  if (bolas.length === 0) {
    mensajeDiv.textContent = "¡BINGO! ¡Se han sacado todas las bolas!";
    bloquearBotones();
  }
};

export const Checkeo = () => {
  bolaActualDiv.textContent = ultimaBolaSacada.toString(); // Now using the global variable.
  actualizarCarton();
  comprobarLinea();
  comprobarBingo();
};

export const nuevoJuego = () => {
  bolas.length = 0;
  bolasSacadas.length = 0;
  lineasCantadas = 0;
  cartonDiv.innerHTML = "";
  mensajeDiv.textContent = "";
  bolaActualDiv.textContent = "";
  for (let i = 1; i <= 90; i++) {
    bolas.push(i);
  }
  bolasRestantesDiv().textContent = `Bolas restantes: ${bolas.length}`;
  bolasSacadasDiv().textContent = "Bolas sacadas: ";
  carton = crearCarton();
  mostrarCarton();
  desbloquearBotones();
};

const actualizarCarton = () => {
  const numerosCarton = document.querySelectorAll("#carton .numero");
  numerosCarton.forEach((numeroDiv) => {
    const numero = parseInt(numeroDiv.textContent!);
    if (bolasSacadas.includes(numero)) {
      numeroDiv.classList.add("tachado");
    } else {
      numeroDiv.classList.remove("tachado");
    }
  });
};
