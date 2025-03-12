// interface Reservas {
//   id: number;
//   precio: number;
//   habitacion: string;
//   prepago: boolean;
//   completadaConExito: boolean;
// }

// const reservas: Reservas[] = [
//   {
//     id: 23453,
//     precio: 250,
//     habitacion: "standard",
//     prepago: false,
//     completadaConExito: true,
//   },
//   {
//     id: 56456,
//     precio: 150,
//     habitacion: "superior",
//     prepago: false,
//     completadaConExito: true,
//   },
//   {
//     id: 43243,
//     precio: 550,
//     habitacion: "standard",
//     prepago: true,
//     completadaConExito: false,
//   },
//   {
//     id: 23223,
//     precio: 550,
//     habitacion: "standard",
//     prepago: true,
//     completadaConExito: true,
//   },
//   {
//     id: 89232,
//     precio: 650,
//     habitacion: "superior",
//     prepago: true,
//     completadaConExito: false,
//   },
// ];

// const verSiAlgunaHaFallado = () => {
//   let algunaHaFallado = false;
//   for (let i = 0; i < reservas.length; i++) {
//     if (reservas[i].completadaConExito === false) {
//       algunaHaFallado = true;
//       break;
//     }
//   }
//   console.log("alguna reserva ha fallado: " + algunaHaFallado);
// };

// const actualizarReservaFallida = () => {
//   {
//     const reservasFallidas: Reservas[] = [];
//     for (let i = 0; i < reservas.length; i++) {
//       if (reservas[i].completadaConExito === false) {
//         reservasFallidas.push(reservas[i]);
//       }
//     }
//     console.log(reservasFallidas);
//   }
// };

// const actualizarReserva = () => {
//   {
//     let indiceDeReserva = -1;
//     for (let i = 0; i < reservas.length; i++) {
//       if (reservas[i].habitacion === "standard") {
//         indiceDeReserva = i;
//         break;
//       }
//     }
//     if (indiceDeReserva !== -1) {
//       const reservaMod = {
//         ...reservas[indiceDeReserva],
//         habitacion: "superior",
//       };
//       const nuevoArrayDeReserva = [
//         ...reservas.slice(0, indiceDeReserva),
//         reservaMod,
//         ...reservas.slice(indiceDeReserva + 1),
//       ];
//       console.log(nuevoArrayDeReserva);
//     }
//   }
// };

// const aplicarDescuento = () => {
//   let reservasConDescuento: Reservas[] = [];
//   for (let i = 0; i < reservas.length; i++) {
//     const reservaConDescuento = {
//       ...reservas[i],
//       precio: reservas[i].precio * 0.9,
//     };
//     reservasConDescuento = [...reservasConDescuento, reservaConDescuento];
//   }
//   console.log(reservasConDescuento);
// };

// const sumarPrecio = () => {
//   let total = 0;
//   for (let i = 0; i < reservas.length; i++) {
//     const reservasConDescuento = total + reservas[i].precio * 0.9;
//     total = reservasConDescuento;
//   }
//   console.log(`el precio total de las reservas es de ${total}€`);
// };

// const eventos = () => {
//   verSiAlgunaHaFallado();
//   actualizarReservaFallida();
//   actualizarReserva();
//   aplicarDescuento();
//   sumarPrecio();
// };

// eventos();

interface Reservas {
  id: number;
  precio: number;
  habitacion: string;
  prepago: boolean;
  completadaConExito: boolean;
}
const reservasEnDescuento: Reservas[] = [];

const reservas: Reservas[] = [
  {
    id: 23453,
    precio: 250,
    habitacion: "standard",
    prepago: false,
    completadaConExito: true,
  },
  {
    id: 56456,
    precio: 150,
    habitacion: "superior",
    prepago: false,
    completadaConExito: true,
  },
  {
    id: 43243,
    precio: 550,
    habitacion: "standard",
    prepago: true,
    completadaConExito: false,
  },
  {
    id: 23223,
    precio: 550,
    habitacion: "standard",
    prepago: true,
    completadaConExito: true,
  },
  {
    id: 89232,
    precio: 650,
    habitacion: "superior",
    prepago: true,
    completadaConExito: false,
  },
];

const verSiAlgunaHaFallado = () =>
  //every devuelve true si todos los elementos del array cumplen con la condición
  reservas.every(
    (reserva: Reservas): boolean => reserva.completadaConExito === true
  );

const actualizarReservaFallida = () =>
  //filter devuelve un nuevo array con los elementos que cumplen con la condición
  reservas.filter((reserva: Reservas): boolean => !reserva.completadaConExito);

const actualizarReserva = () => {
  //find encuentra el primer elemento que cumple con la condición
  reservas.find((reserva: Reservas): Reservas => {
    if (reserva.habitacion === "standard") {
      reserva.habitacion = "superior";
    }
    return reserva;
  });
  console.log("Reserva actualizada a superior: ");
  console.log(reservas);
};

const aplicarDescuento = () => {
  //map crea un nuevo array con los resultados de la función
  const reservasConDescuento = reservas.map((reserva: Reservas): Reservas => {
    return {
      ...reserva,
      precio: reserva.precio * 0.9,
    };
  });
  reservasEnDescuento.push(...reservasConDescuento);
  console.log("Reservas con descuento: ");
  console.log(reservasConDescuento);
};

const sumarPrecio = () => {
  //reduce recorre el array y devuelve un único valor de retorno
  const precioTotal: number = reservasEnDescuento.reduce(
    (acumulador: number, reserva: Reservas): number => {
      return acumulador + reserva.precio;
    },
    0
  );
  console.log("Precio total: " + precioTotal);
};

const ordenandoReservasPorPrecio = () => {
  // (toSorted) compara el elemento a con el b y si el resultado es negativo, el elemento a se coloca antes que el b y si es positivo, el elemento b se coloca antes que el a
  const reservasOrdenadas: Reservas[] = reservas.sort(
    (precioA: Reservas, precioB: Reservas): number =>
      precioA.precio - precioB.precio
  );
  console.log("reservas ordenadas por precio: ");
  console.log(reservasOrdenadas);
};

const verSiHaySuperior = () => {
  //some devuelve true si al menos un elemento del array cumple con la condición
  const haySuperior: boolean = reservas.some(
    (reserva: Reservas): boolean => reserva.habitacion === "superior"
  );
  console.log("Hay habitaciones superiores: " + haySuperior);
};

const verLasReservas = (): void => {
  const idReservas = reservas.forEach((reserva: Reservas) => {
    console.log(reserva.id);
  });
  return idReservas;
};

const eventos = () => {
  console.log("Estan todas completas: " + verSiAlgunaHaFallado());
  console.log("Reservas fallidas: ");
  console.log(actualizarReservaFallida());
  actualizarReserva();
  aplicarDescuento();
  sumarPrecio();
  ordenandoReservasPorPrecio();
  verSiHaySuperior();
  console.log("Id de las reservas: ");
  verLasReservas();
  console.log("Reservas: ");
  console.log(reservas);
};

eventos();
