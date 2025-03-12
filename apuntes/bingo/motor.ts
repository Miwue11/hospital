export const crearCarton = (): number[][] => {
  const nuevoCarton: number[][] = [[], [], []];
  const numerosDisponibles: number[] = Array.from(
    { length: 90 },
    (_, i) => i + 1
  );

  for (let fila = 0; fila < 1; fila++) {
    const numerosFila: number[] = [];
    for (let i = 0; i < 9; i++) {
      const indiceAleatorio = Math.floor(
        Math.random() * numerosDisponibles.length
      );
      const numero = numerosDisponibles.splice(indiceAleatorio, 1)[0];
      numerosFila.push(numero);
    }

    nuevoCarton[fila] = numerosFila.sort((a, b) => a - b); // Ordena los números de la fila
  }
  return nuevoCarton;
};
