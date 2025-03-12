type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}
interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientesCorregidos: Pacientes[] = [];

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];

const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[] => {
  console.log("asignados a pediatria:");
  pacientes.filter((paciente: Pacientes) => {
    if (paciente.especialidad === "Pediatra") {
      console.log(paciente);
    }
  });
  return pacientes;
};

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] => {
  console.log("asignados a pediatria y menores de 10 años:");
  pacientes.filter((paciente: Pacientes) => {
    if (paciente.especialidad === "Pediatra" && paciente.edad < 10) {
      console.log(paciente);
    }
  });
  return pacientes;
};

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  let activarProctolo = false;
  pacientes.some((paciente: Pacientes) => {
    if (paciente.temperatura > 39.5 && paciente.frecuenciaCardiaca > 100) {
      activarProctolo;
    }
  });
  console.log("activar protocolo de urgencia");
  return activarProctolo;
};

//esto lo hgo con un array nuevo para no estar modificando el inicial
const reasignaPacientesAMedicoFamilia = (
  pacientes: Pacientes[]
): Pacientes[] => {
  console.log("Reasigna pacientes  a Medico de familia");
  const nuevosPacientes: Pacientes[] = pacientes.map((paciente: Pacientes) => {
    if (paciente.especialidad === "Pediatra") {
      return { ...paciente, especialidad: "Medico de familia" };
    }
    return paciente;
  });
  pacientesCorregidos.push(...nuevosPacientes);
  console.log(pacientesCorregidos);
  return nuevosPacientes;
};

//aqui elijo el array nuevo por motivos obvios
const HayPacientesDePediatria = (pacientesCorregidos: Pacientes[]): boolean => {
  let hayPacientesDePediatria = false;
  pacientesCorregidos.find((paciente: Pacientes) => {
    if (paciente.especialidad === "Pediatra") {
      hayPacientesDePediatria;
    }
  });
  console.log("hay pacientes de pediatria");
  console.log(pacientesCorregidos);
  return hayPacientesDePediatria;
};
//cuento desde al array inicial por q creo q es el se busca contabilizar, sino solo es cambiar un array por otro
const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
  let medicoDeFamilia = 0;
  let pediatria = 0;
  let cardiologia = 0;
  pacientes.forEach((paciente: Pacientes) => {
    if (paciente.especialidad === "Medico de familia") {
      medicoDeFamilia++;
    } else if (paciente.especialidad === "Pediatra") {
      pediatria++;
    } else if (paciente.especialidad === "Cardiólogo") {
      cardiologia++;
    }
  });
  console.log("numero de pacientes por especialidad");
  console.log({ medicoDeFamilia, pediatria, cardiologia });
  return { medicoDeFamilia, pediatria, cardiologia };
};

const eventos = () => {
  obtenPacientesAsignadosAPediatria(pacientes);
  obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes);
  console.log(activarProtocoloUrgencia(pacientes));
  reasignaPacientesAMedicoFamilia(pacientes);
  console.log(HayPacientesDePediatria(pacientesCorregidos));
  cuentaPacientesPorEspecialidad(pacientes);
};
eventos();
