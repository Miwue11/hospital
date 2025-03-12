// var pi= Math.PI;
// var r= 4;
// var area= pi * r ** 2;

// console.log('Area of circle with radius 4 is: ', area);

//----------------------------------------------//

// let nombre="Juan"; //ya se queda como string ty no es mutable
// let apellido="Perez";

// nombre= "Juan Carlos";//no podemos poner un int o un float, solo string

// console.log(nombre, apellido);

//----------------------------------------------//
// let nombre;

// nombre= 23;

// console.log(nombre); //23, ahora si podemos poner un int o un float, ya que no se le asigno un tipo de dato

//----------------------------------------------//

// let nombre: string; //ya se queda como string y no es mutable

// let nombre2:string|null =null //ahorsa deja añadir con el OR cualquier parametro por ejemplo null

// let edad:string|number = 23;

// edad ="hola";

// console.log(edad); //hola, ahora si podemos poner un int o un float, ya que no se le asigno un tipo de dato

//usamos el any para poder usar any tipo de dato (es peligroso)
// let nombre: any = "Juan";

// nombre=23;
// console.log(nombre); //23, ahora si podemos poner un int o un float, ya que no se le asigno un tipo de dato

//interface
// interface Cliente{
//     nombre: string;
//     apellido: string;
//     edad: number;
// }

// const clienteA: Cliente={
//     nombre: "Juan",
//     apellido: "Perez",
//     edad: 23
// }

// const clienteB: Cliente={
//     nombre: "Carlos",
//     apellido: "Gonzalez",
//     edad: 25
// }

// clienteA.edad=24;
// clienteB.edad=26;

// console.log(clienteA); //24
// console.log(clienteB); //26

// interface Pelicula{
//     titulo: string;
//     director: string;
//     año: number;
// }

// const peliculaA: Pelicula={
//     titulo: "Blade Runner",
//     director: "Ridley Scott",
//     año: 1982
// }

// const peliculaB: Pelicula={
//     titulo: "Matrix",
//     director: "Lana Wachowski",
//     año: 1999
// }

// console.log(peliculaA);
// console.log(peliculaB);

//-------------------------------------------------------------
// const areaDelCirculo=(r:number):number=>{
//     const pi= Math.PI;
//     return pi * r ** 2;
// }
// const areaC:number= areaDelCirculo(4);
// console.log(areaC)

// const areaDelCuadrado= (l:number):number=>
//     l*l;

// const areaCu:number= areaDelCuadrado(10);
// console.log(areaCu)

// function areaDelTriangulo(b:number,a:number):number{
//     return b*a/2;
// }
// const areaT:number= areaDelTriangulo(4,5);
// console.log(areaT)

//-------------------------------------------------------------

//FUNCION DE LA RECETA DE ENSALADA

// const lechuga="🥬 lechuga";
// const setas="🍄 setas";
// const alubias="🫘 alubias";
// const cebolla="🧅 cebolla";
// const maiz="🌽 maiz";
// const arandanos="🫐 arandano";
// const aceitunas="🫒 aceitunas";
// const piña="🍍 piña";
// const mango="🥭 mango";
// const zanahoria="🥕 zanahoria";
// const tomate="🍅 tomate";
// const pepino="🥒 pepino";
// const aguacate="🥑 aguacate";
// const bacon="🥓 bacon";
// const huevos="🥚 huevo";
// const queso="🧀 queso";
// const pollo="🍗 pollo";
// const nueces="🌰 nueces";

// function pintaReceta(titulo:string,ingredientes:string,preparacion:string):void

// {
//     const estiloTitulo="color:red; font-size:18px";
//     const estiloIngredientes="color:green; font-size:14px";
//     const estiloPreparacion="color:indigo; font-size:12px; font-style:italic";
//     //TITULO
//     console.log(`%c${titulo}`, estiloTitulo);
//     //INGREDIENTES
//     console.log(`%c-Ingredientes: ${ingredientes}`,estiloIngredientes);
//     //PREPARACION
//     console.log(`%c-Preparacion: ${preparacion}`,estiloPreparacion);
// }

// console.log("*********************")
// console.log(pintaReceta("Ensapada con alubias, aguacate y huevo",`${alubias}, ${aguacate}, ${huevos}, ${cebolla}, ${tomate}, ${lechuga}`,`cocer las alubias y dejar enfriar. Mezclar con aguacate en cubos, huevo cocido en rodajas, cebolla en juliana, tomate en cubos y lechuga troceada. Aliñar con aceite de oliva y vinagre.`));
// console.log("*********************")

// console.log(pintaReceta("Ensalada de setas y bacon",`${setas}, ${bacon}, ${lechuga}, ${tomate}, ${cebolla}, ${queso}`,`saltear las setas y el bacon hasta que estén dorados. Mezclar con lechuga troceada, tomate en cubos, cebolla en juliana y queso rallado. Aliñar con aceite de oliva y vinagre.`));
// console.log("*********************")

// console.log(pintaReceta("Ensalada de arándanos y pollo",`${arandanos}, ${pollo}, ${lechuga}, ${zanahoria}, ${queso}, ${nueces}`,`mezclar los arándanos con el pollo cocido en cubos, lechuga troceada, zanahoria rallada, queso rallado y nueces picadas. Aliñar con una vinagreta de miel y mostaza.`));
// console.log("*********************")

// console.log(pintaReceta("Ensalada de maíz y piña",`${maiz}, ${piña}, ${lechuga}, ${pepino}, ${cebolla}, ${aguacate}`,`mezclar el maíz con la piña en cubos, lechuga troceada, pepino en rodajas, cebolla en juliana y aguacate en cubos. Aliñar con una vinagreta de aceite de oliva y vinagre.`));
// console.log("*********************")

// console.log(pintaReceta("Ensalada de mango y queso feta",`${mango}, ${queso}, ${lechuga}, ${cebolla}, ${pepino}, ${aceitunas}`,`mezclar el mango en cubos con el queso feta desmenuzado, lechuga troceada, cebolla en juliana, pepino en rodajas y aceitunas. Aliñar con una vinagreta de limón y aceite de oliva.`));

// //----------------------------------------------//

// function sumar(){
//     //leer los valores de los imputs------le quitamos el posible valor de NULL con el (as HTMLInputElement)
//     const sumando1= (document.getElementById("sumando1")as HTMLInputElement).value;
//     const sumando2= (document.getElementById("sumando2")as HTMLInputElement).value;
//     //sumar los valores
//     const resultado=parseInt(sumando1)+parseInt(sumando2);
//     //mostrar el resultado
//     const resultadoElement=document.getElementById("resultado");
//     if (resultadoElement !==null && resultadoElement !== undefined) //ponemos la condicion de que si es diferente de null y undefined, que lo muestre
//     resultadoElement.innerHTML=resultado.toString();
// }

// const botonSumar=document.getElementById("sumar");
//     if (botonSumar !==null && botonSumar !== undefined) //ponemos la condicion de que si es diferente de null y undefined, que lo muestre
// botonSumar.addEventListener("click",sumar);

//------------------------------------------------//

// function cambiarFotoPrincipal(idMiniatura:string):void{
//     const fotoPrincipal=(document.getElementById("foto-principal"));
//     const miniatura=document.getElementById(idMiniatura);
//     if(fotoPrincipal instanceof HTMLImageElement && miniatura instanceof HTMLImageElement)
//     fotoPrincipal.src=miniatura.src;
// }

// const miniatura1=(document.getElementById("miniatura1")as HTMLImageElement);
// const miniatura2=(document.getElementById("miniatura2")as HTMLImageElement);
// const miniatura3=(document.getElementById("miniatura3")as HTMLImageElement);
// const miniatura4=(document.getElementById("miniatura4")as HTMLImageElement);
// const miniatura5=(document.getElementById("miniatura5")as HTMLImageElement);

// if (miniatura1 && miniatura2 && miniatura3 && miniatura4 && miniatura5 !==null
//     && miniatura1 && miniatura2 && miniatura3 && miniatura4 && miniatura5 !== undefined){
//     miniatura1.addEventListener("click",()=>cambiarFotoPrincipal("miniatura1"));
//     miniatura2.addEventListener("click",()=>cambiarFotoPrincipal("miniatura2"));
//     miniatura3.addEventListener("click",()=>cambiarFotoPrincipal("miniatura3"));
//     miniatura4.addEventListener("click",()=>cambiarFotoPrincipal("miniatura4"));
//     miniatura5.addEventListener("click",()=>cambiarFotoPrincipal("miniatura5"));
// }

//------------------------------------------------//

// class Cliente{
//     nombre:string="";

//     constructor(nombre:string){
//         this.nombre=nombre;
//     }
// }

// let miNumero:any=2;
// let miObjeto:Cliente=new Cliente("Juan");

// miNumero instanceof Object; //false
// miObjeto instanceof Object; //true

// console.log(miNumero instanceof Object);
// console.log(miObjeto instanceof Cliente);

// Tendrás que generar un número aleatorio que sea del 1 al 6.

// Si sale el dado 6, hemos perdido la partida, has sacado un 6, has perdido. En caso contrario seguiremos tirando hasta llegar a 50 puntos o más has obtenido 50 puntos o mas, has ganado la partida.

// En cualquier momento podrás plantarte, y mostrar el mensaje Te has plantado, tienes x puntos.

// Muestra dichos mensajes en el html.

// Create un proyecto donde generes el código con el juego (acuerdate de dividir el código, que cada función haga una cosa y solo una cosa...)
// Del ejercicio anterior create otro proyecto donde separes el código en modelo, motor y ui.
// En el último proyecto usaremos el caso anterior para aplicar testing a las funciones de motor.

// Extra:
// Tanto si has ganado o perdido al partida, bloquear el botón de tirar dado y el de plantarse
// Si me planto, el botón de tirar también se bloqueará y de la misma manera el de plantarse.
// Añade un css para darle estilado a tu html.

// const plantarse = document.getElementById("plantarse") as HTMLButtonElement;
// const intentosDiv = document.getElementById("intentos") as HTMLDivElement;
// const dadoImg = document.getElementById("dado") as HTMLImageElement;
// const resultadoDiv = document.getElementById("resultado") as HTMLDivElement;
// const mensajeDiv = document.getElementById("mensaje") as HTMLDivElement;

// let total = 0;
// let gameActive = true;

// const perder=()=> {
//     resultadoDiv.textContent = "Has perdido. Has sacado un 6.";
//     gameActive = false;
//     if(boton instanceof HTMLButtonElement)
//     boton.disabled = true;
//     plantarse.disabled = true;
// };

// const ganar=()=> {
//     resultadoDiv.textContent = "¡Felicidades! ¡Has ganado con 50 puntos o más!";
//     gameActive = false;
//     if(boton instanceof HTMLButtonElement)
//     boton.disabled = true;
//     plantarse.disabled = true;
//     }

// const actualizarIntentos=()=> {
//     intentosDiv.textContent = `Puntuación: ${total}`;
// }

// const actualizarDado=(valor: number)=> {
//     switch(valor){
//         case 1:
//             dadoImg.src = `https://media.tenor.com/tCq5mfycACMAAAAi/d20-dice-roll.gif`;
//             dadoImg.alt = `Dado mostrando 1`;
//             break;
//         case 2:
//             dadoImg.src = `https://media.tenor.com/zTg9FhOqpDIAAAAi/d20-dice-roll.gif`;
//             dadoImg.alt = `Dado mostrando 2`;
//             break;
//         case 3:
//             dadoImg.src = `https://media.tenor.com/8UcqJlc93EgAAAAi/d20-dice-roll.gif`;
//             dadoImg.alt = `Dado mostrando 3`;
//             break;
//         case 4:
//             dadoImg.src = `https://media.tenor.com/l-95tTbEKGkAAAAm/d20-dice-roll.webp`;
//             dadoImg.alt = `Dado mostrando 4`;
//             break;
//         case 5:
//             dadoImg.src = `https://media.tenor.com/r7bAmy9lpJUAAAAm/d20-dice-roll.webp`;
//             dadoImg.alt = `Dado mostrando 5`;
//             break;
//         case 6:
//             dadoImg.src = `https://media.tenor.com/HEHpab5WZHwAAAAm/d20-dice-roll.webp`;
//             dadoImg.alt = `Dado mostrando 6`;
//             break;
//         default:
//             break;
// }};

// function eventos(){
//     if(boton instanceof HTMLButtonElement){
// boton.addEventListener("click", () => {
//     const numero = Math.floor(Math.random() * 6) + 1;
//     actualizarDado(numero);

//     total += numero;
//     actualizarIntentos();

//     if (numero === 6) {
//         perder();
//     }
//     if (total >= 50) {
//         ganar();
//     }
// });

// if(plantarse instanceof HTMLButtonElement){
//     plantarse.addEventListener("click", () => {
//         if (!gameActive) return;

//     resultadoDiv.textContent = `Te has plantado con ${total} puntos.`;
//     boton.disabled = true;
//     plantarse.disabled = true;
//     gameActive = false;
//     });
//         };
// };}

// eventos();

//vamos a crea un bingo con 90 bolas, 15 bolas por fila, 3 filas, 5 números por fila.
//Cada vez que se saque una bola, se mostrará en el html y se eliminará de la lista de bolas.
//Se podrá sacar una bola cada vez que se pulse un botón.
//Cuando se saquen todas las bolas, se mostrará un mensaje en el html.
//Se mostrará un mensaje en el html cuando se cante línea y cuando se cante bingo.
//Se mostrará un botón en el html para reiniciar el juego.

// main.ts
//vamos a crea un bingo con 90 bolas, 15 bolas por fila, 3 filas, 5 números por fila.
//Cada vez que se saque una bola, se mostrará en el html y se eliminará de la lista de bolas.
//Se podrá sacar una bola cada vez que se pulse un botón.
//Cuando se saquen todas las bolas, se mostrará un mensaje en el html.
//Se mostrará un mensaje en el html cuando se cante línea y cuando se cante bingo.
//Se mostrará un botón en el html para reiniciar el juego.

// type Estado =
//     |"noEsNum"
//     |"esNumMayor"
//     |"esNumMenor"
//     |"esNumFueraDeRango"
//     |"esNumSecreto"
//     |"perder";

// let numeroParaAdivinar:number = Math.round(Math.random() * 100);
// console.log(numeroParaAdivinar);
// let mensaje:string="";
// let intentos:number=5;
// let finIntentos=0

// const intentosR=()=>
// {const intentosR = document.getElementById("intentos") as HTMLElement;
// intentosR.innerHTML=`Vas a tener solo ${intentos} intentos`;}

// intentosR();

// const apagarBoton=()=>{
//     if(boton instanceof HTMLButtonElement)
//         boton.disabled=true;
// }

// const muestraMensajeDeComprobacion=(texto:string,estado:Estado)=>{
//     switch(estado){
//         case "noEsNum":
//             mensaje="Debes introducir un número";
//             break;
//         case "esNumMayor":
//             restarIntentos();
//             if(intentos===finIntentos)
//             return;
//             mensaje=`El número es mayor que ${texto}`;
//             break;
//         case "esNumMenor":
//             restarIntentos();
//             if(intentos===finIntentos)
//             return;
//             mensaje=`El número es menor que ${texto}`;
//             break;
//         case "esNumFueraDeRango":
//             mensaje="El número debe estar entre 1 y 100";
//             break;
//         case "esNumSecreto":
//             mensaje="¡Has acertado!";
//             apagarBoton();
//             break;
//         case "perder":
//             mensaje="Has perdido, el numero era "+numeroParaAdivinar;
//             break;
//         default:
//             mensaje="Error";
//             break;
//     }
//     const resultado= document.getElementById("resultado")as HTMLElement;
//     resultado.innerHTML=mensaje;
// };

// const compruebaNumeroSecreto=(texto:string)=>{
//     const numero = parseInt(texto);
//     const esNum=!isNaN(numero);
//     if (!esNum){
//         return "noEsNum";
//     }
//     if (numero<1 || numero>100){
//         return "esNumFueraDeRango";
//     }
//     return (numero===numeroParaAdivinar&&intentos>0)
//         ?   "esNumSecreto"
//         :  (numero<numeroParaAdivinar&&intentos>0)
//             ?"esNumMayor"
//             :"esNumMenor";
// };

// const restarIntentos=()=>{
//     intentos--
//     intentosR();
//     if (intentos===finIntentos){
//         sinIntentos()
//     }
// };

// const sinIntentos=()=>{
//     intentosR();
//     if(boton instanceof HTMLButtonElement)
//     apagarBoton();
//     muestraMensajeDeComprobacion("","perder");
// }

// function handleClick(): void {
//     const input = document.getElementById("input");
//     if (input instanceof HTMLInputElement) {
//         const texto = input.value;
//         const estado = compruebaNumeroSecreto(texto);
//         muestraMensajeDeComprobacion(texto, estado);
//     }
// }

// const boton=document.getElementById("boton");
// if (boton instanceof HTMLButtonElement && boton !==null && boton !== undefined){
//     boton.addEventListener("click",handleClick);
// }

// type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

// interface NumeroPacientesPorEspecialidad {
//   medicoDeFamilia: number;
//   pediatria: number;
//   cardiologia: number;
// }
// interface Pacientes {
//   id: number;
//   nombre: string;
//   apellidos: string;
//   sexo: string;
//   temperatura: number;
//   frecuenciaCardiaca: number;
//   especialidad: Especialidad;
//   edad: number;
// }

// const pacientesCorregidos: Pacientes[] = [];

// const pacientes: Pacientes[] = [
//   {
//     id: 1,
//     nombre: "John",
//     apellidos: "Doe",
//     sexo: "Male",
//     temperatura: 36.8,
//     frecuenciaCardiaca: 80,
//     especialidad: "Medico de familia",
//     edad: 44,
//   },
//   {
//     id: 2,
//     nombre: "Jane",
//     apellidos: "Doe",
//     sexo: "Female",
//     temperatura: 36.8,
//     frecuenciaCardiaca: 70,
//     especialidad: "Medico de familia",
//     edad: 43,
//   },
//   {
//     id: 3,
//     nombre: "Junior",
//     apellidos: "Doe",
//     sexo: "Male",
//     temperatura: 36.8,
//     frecuenciaCardiaca: 90,
//     especialidad: "Pediatra",
//     edad: 8,
//   },
//   {
//     id: 4,
//     nombre: "Mary",
//     apellidos: "Wien",
//     sexo: "Female",
//     temperatura: 36.8,
//     frecuenciaCardiaca: 120,
//     especialidad: "Medico de familia",
//     edad: 20,
//   },
//   {
//     id: 5,
//     nombre: "Scarlett",
//     apellidos: "Somez",
//     sexo: "Female",
//     temperatura: 36.8,
//     frecuenciaCardiaca: 110,
//     especialidad: "Cardiólogo",
//     edad: 30,
//   },
//   {
//     id: 6,
//     nombre: "Brian",
//     apellidos: "Kid",
//     sexo: "Male",
//     temperatura: 39.8,
//     frecuenciaCardiaca: 80,
//     especialidad: "Pediatra",
//     edad: 11,
//   },
// ];

// const obtenPacientesAsignadosAPediatria = (
//   pacientes: Pacientes[]
// ): Pacientes[] => {
//   console.log("asignados a pediatria:");
//   pacientes.filter((paciente: Pacientes) => {
//     if (paciente.especialidad === "Pediatra") {
//       console.log(paciente);
//     }
//   });
//   return pacientes;
// };

// const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
//   pacientes: Pacientes[]
// ): Pacientes[] => {
//   console.log("asignados a pediatria y menores de 10 años:");
//   pacientes.filter((paciente: Pacientes) => {
//     if (paciente.especialidad === "Pediatra" && paciente.edad < 10) {
//       console.log(paciente);
//     }
//   });
//   return pacientes;
// };

// const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
//   let activarProctolo = false;
//   pacientes.some((paciente: Pacientes) => {
//     if (paciente.temperatura > 39.5 && paciente.frecuenciaCardiaca > 100) {
//       activarProctolo;
//     }
//   });
//   console.log("activar protocolo de urgencia");
//   return activarProctolo;
// };

// //esto lo hgo con un array nuevo para no estar modificando el inicial
// const reasignaPacientesAMedicoFamilia = (
//   pacientes: Pacientes[]
// ): Pacientes[] => {
//   console.log("Reasigna pacientes  a Medico de familia");
//   const nuevosPacientes: Pacientes[] = pacientes.map((paciente: Pacientes) => {
//     if (paciente.especialidad === "Pediatra") {
//       return { ...paciente, especialidad: "Medico de familia" };
//     }
//     return paciente;
//   });
//   pacientesCorregidos.push(...nuevosPacientes);
//   console.log(pacientesCorregidos);
//   return nuevosPacientes;
// };

// //aqui elijo el array nuevo por motivos obvios
// const HayPacientesDePediatria = (pacientesCorregidos: Pacientes[]): boolean => {
//   let hayPacientesDePediatria = false;
//   pacientesCorregidos.find((paciente: Pacientes) => {
//     if (paciente.especialidad === "Pediatra") {
//       hayPacientesDePediatria;
//     }
//   });
//   console.log("hay pacientes de pediatria");
//   console.log(pacientesCorregidos);
//   return hayPacientesDePediatria;
// };
// //cuento desde al array inicial por q creo q es el se busca contabilizar, sino solo es cambiar un array por otro
// const cuentaPacientesPorEspecialidad = (
//   pacientes: Pacientes[]
// ): NumeroPacientesPorEspecialidad => {
//   let medicoDeFamilia = 0;
//   let pediatria = 0;
//   let cardiologia = 0;
//   pacientes.forEach((paciente: Pacientes) => {
//     if (paciente.especialidad === "Medico de familia") {
//       medicoDeFamilia++;
//     } else if (paciente.especialidad === "Pediatra") {
//       pediatria++;
//     } else if (paciente.especialidad === "Cardiólogo") {
//       cardiologia++;
//     }
//   });
//   console.log("numero de pacientes por especialidad");
//   console.log({ medicoDeFamilia, pediatria, cardiologia });
//   return { medicoDeFamilia, pediatria, cardiologia };
// };

// const eventos = () => {
//   obtenPacientesAsignadosAPediatria(pacientes);
//   obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes);
//   console.log(activarProtocoloUrgencia(pacientes));
//   reasignaPacientesAMedicoFamilia(pacientes);
//   console.log(HayPacientesDePediatria(pacientesCorregidos));
//   cuentaPacientesPorEspecialidad(pacientes);
// };
// eventos();
