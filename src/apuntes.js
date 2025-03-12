//sitio para buscar emojis
//  https://emojiterra.com/es//

//formatear el console.log para añadir parametros css

//https://how.dev/answers/how-to-format-messages-in-consolelog-in-javascript

// // logicas
// var radio=4;
// const pi=Math.PI;
// const area=  pi * radio **2;
// console.log(area);

// // objetos concatenados
// var cliente={
//     nif:"1223456f",
//     nombre:"Miguel",
//     apellidos:{
//         apellido1:"lopez",
//     apellido2:"Rodriguez"},
//     direccion:"URB dominion park"
// };
// console.log(cliente);

// //null
// console.log(null)

// //undifined
// console.log(undefined)

//operadores con ejemplo de mi abogado
// let comision_abogado=0.15;
// let iva=1.21;
// const finiquito=3938.75;
// var dinero_al_abogado=(finiquito*comision_abogado-165.29)*iva;
// var dinero_a_percibir=finiquito-dinero_al_abogado;

// console.log(Math.round(dinero_a_percibir));

//const asigna al objeto completo pero vemos que podemos cambiar sus datos con el punto
// const cliente={
//     nombre:"Miguel",
//     apellidos:"Lopez",
//     direccion:{
//         calle:"calle de la rosa",
//         numero:3,
//         piso:1,
//         letra:"A",
//         codigo_postal:28001,
//         ciudad:"Madrid",
//         pais:"España",
//     },
//     edad:30,
// };

// cliente.nombre="Miguel Angel"; //cambia el nombre
// cliente.edad=31;  //cambia la edad

// console.log(cliente.nombre); //muestra el nombre
// console.log(cliente);  //muestra el objeto completo

//cambiamos el valor de la fecha de publicacion a const y let y si se puede
//cambiar el libro entero en const es invalido.
// const libro={
//     titulo:"The Catcher in the Rye",
//     autor:"J.D. Salinger",
//     fecha_de_publicacion:1951,
// };
// libro.fecha_de_publicacion=1920;
// console.log(libro)

//cambiamos datos de let y const y vemos que se puede cambiar el valor de la variable
// let nombre="Miguel";
// let apellido="Lopez";

// let ciudad={
//     nombre:"Madrid",
//     pais:"España",
// }
// nombre=ciudad.nombre;
// apellido=ciudad.pais;

// console.log(nombre+" "+apellido); //concatenacion (saldria Madrid España)

/*
Ensalada de alubias con aguacate y huevo

Ingredientes: alubias, aguacate, huevo, cebolla, tomate, lechuga.
Preparación: cocer las alubias y dejar enfriar. Mezclar con aguacate en cubos,
huevo cocido en rodajas, cebolla en juliana, tomate en cubos y lechuga troceada.
Aliñar con aceite de oliva y vinagre.
Ensalada de setas y bacon

Ingredientes: setas, bacon, lechuga, tomate, cebolla, queso.
Preparación: saltear las setas y el bacon hasta que estén dorados. Mezclar con
lechuga troceada, tomate en cubos, cebolla en juliana y queso rallado. Aliñar con
aceite de oliva y vinagre.

Ensalada de arándanos y pollo

Ingredientes: arándanos, pollo cocido, lechuga, zanahoria, queso, nueces.
Preparación: mezclar los arándanos con el pollo cocido en cubos, lechuga troceada,
zanahoria rallada, queso rallado y nueces picadas. Aliñar con una vinagreta de
miel y mostaza.

Ensalada de maíz y piña

Ingredientes: maíz, piña en cubos, lechuga, pepino, cebolla, aguacate.
Preparación: mezclar el maíz con la piña en cubos, lechuga troceada, pepino en
rodajas, cebolla en juliana y aguacate en cubos. Aliñar con una vinagreta de
aceite de oliva y vinagre.

Ensalada de mango y queso feta

Ingredientes: mango en cubos, queso feta, lechuga, cebolla, pepino, aceitunas.
Preparación: mezclar el mango en cubos con el queso feta desmenuzado, lechuga
troceada, cebolla en juliana, pepino en rodajas y aceitunas. Aliñar con una
vinagreta de limón y aceite de oliva.
*/

/*
emoticonos:
    🥬 Lechuga
    🍄 Setas
    🫘 Alubias
    🧅 Cebolla
    🌽 Maíz
    🫐 Arándanos
    🫒 Aceitunas
    🍍 Piña
    🥭 Mango
    🥕 Zanahoria
    🍅 Tomate
    🥒 Pepino
    🥑 Aguacate
    🥓 Bacon
    🥚 huevos
    🧀 Queso
*/

// const estiloTitulo="color:red; font-size:18px";
// const estiloIngredientes="color:green; font-size:14px";
// const estiloPreparacion="color:indigo; font-size:12px; font-style:italic";

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

// //TITULO
// console.log("%cEnsalada de alubias con aguacate y huevo", estiloTitulo);  //color azul y tamaño de letra 18px

// //INGREDIENTES

// console.log(`%c-Ingredientes: , ${alubias}, ${aguacate}, ${huevos}, ${cebolla}, ${tomate}, ${lechuga}`,estiloIngredientes); //color verde y tamaño de letra 14px

// //PREPARACION

// console.log("%cPreparación: cocer las alubias y dejar enfriar. Mezclar con aguacate en cubos, huevo cocido en rodajas, cebolla en juliana, tomate en cubos y lechuga troceada. Aliñar con aceite de oliva y vinagre.",estiloPreparacion); //color rojo y tamaño de letra 12px

// console.log("*********************")

// //TITULO
// console.log("%cEnsalada de setas y bacon", estiloTitulo);  //color azul y tamaño de letra 18px

// //INGREDIENTES

// console.log(`%c-Ingredientes: ${setas} ${bacon} ${lechuga} ${tomate} ${cebolla} ${queso}`,estiloIngredientes);

// //PREPARACION

// console.log("%cPreparación: saltear las setas y el bacon hasta que estén dorados. Mezclar con lechuga troceada, tomate en cubos, cebolla en juliana y queso rallado. Aliñar con aceite de oliva y vinagre.",estiloPreparacion); //color rojo y tamaño de letra 12px

// console.log("*********************")

// //TITULO

// console.log("%cEnsalada de arándanos y pollo", estiloTitulo);  //color azul y tamaño de letra 18px

// //INGREDIENTES

// console.log(`%c-Ingredientes: ${arandanos}, ${pollo}, ${lechuga}, ${zanahoria}, ${queso}, ${nueces}`,estiloIngredientes);

// //PREPARACION

// console.log("%cPreparación: mezclar los arándanos con el pollo cocido en cubos, lechuga troceada, zanahoria rallada, queso rallado y nueces picadas. Aliñar con una vinagreta de miel y mostaza.",estiloPreparacion); //color rojo y tamaño de letra 12px

// console.log("*********************")

// //TITULO

// console.log("%cEnsalada de maíz y piña", estiloTitulo);  //color azul y tamaño de letra 18px

// //INGREDIENTES

// console.log(`-%cIngredientes: ${maiz}, ${piña}, ${lechuga}, ${pepino}, ${cebolla}, ${aguacate}`,estiloIngredientes);

// //PREPARACION

// console.log("%cPreparación: mezclar el maíz con la piña en cubos, lechuga troceada, pepino en rodajas, cebolla en juliana y aguacate en cubos. Aliñar con una vinagreta de aceite de oliva y vinagre.",estiloPreparacion); //color rojo y tamaño de letra 12px

// console.log("*********************")

// //TITULO

// console.log("%cEnsalada de mango y queso feta", estiloTitulo);  //color azul y tamaño de letra 18px

// //INGREDIENTES

// console.log(`-%cIngredientes: ${mango} , ${queso}, ${lechuga}, ${cebolla}, ${pepino}, ${aceitunas}`,estiloIngredientes); //color verde y tamaño de letra 14px

// //PREPARACION

// console.log("%cPreparación: mezclar el mango en cubos con el queso feta desmenuzado, lechuga troceada, cebolla en juliana, pepino en rodajas y aceitunas. Aliñar con una vinagreta de limón y aceite de oliva.",estiloPreparacion); //color rojo y tamaño de letra 12px

// console.log("*********************")

//----------------------------------------------//

//FUNCIONES

// function doble(x){
//     return x* 2;
// }
// console.log(doble(2))

// function suma(sumando1,sumando2){
//     return sumando1+sumando2;
// }
// console.log(suma(20,33))

// function resta(minuendo,sustraendo){
//     return minuendo-sustraendo;
// }
// console.log(resta(20,33))

//AREAS GEOMETRICAS EN FUNCIONES

// function area_del_circulo(radio){
//     return 2* Math.PI * radio **2;
// }
// console.log(area_del_circulo(3));

// function area_del_cuadrado(lado){
//     return lado*lado;
// }
// console.log(area_del_cuadrado(3));

// function area_del_rectangulo(base,altura){
//     return base*altura;
// }
// let resultado=area_del_rectangulo(3,4);
// console.log(resultado);

// //----------------------------------------------//

// //FUNCION DE LA RECETA DE ENSALADA

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

// function pintaReceta(titulo, ingredientes, preparacion){
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

// function saludar(){
//     //leer los valores de los imputs
//     const nombre= document.getElementById("nombre").value;
//     const apellido= document.getElementById("apellido").value;
//     //compilar el resultado
//     const resultado= `¡hola ${nombre} ${apellido}!`;
//     //mostrar el resultado
//     document.getElementById("resultado").innerHTML=resultado;
// }
// const boton=document.getElementById("boton");
// boton.addEventListener("click",saludar);

//------------------------------------------------//

// function cambiarFotoPrincipal(idMiniatura){
//     const fotoPrincipal=document.getElementById("foto-principal");
//     const miniatura=document.getElementById(idMiniatura);
//     fotoPrincipal.src=miniatura.src;
// }

// const miniatura1=document.getElementById("miniatura1");
// const miniatura2=document.getElementById("miniatura2");
// const miniatura3=document.getElementById("miniatura3");
// const miniatura4=document.getElementById("miniatura4");
// const miniatura5=document.getElementById("miniatura5");

// miniatura1.addEventListener("click",() => //llamamos a una funcion fantasma con los arrows (flechas)
//     cambiarFotoPrincipal("miniatura1"));//no necesita llaves
// ;

// miniatura2.addEventListener("click",() =>
//     cambiarFotoPrincipal("miniatura2"));

// miniatura3.addEventListener("click",function(){ //aqui llamamos a una funcion anonima (necesita llaves)
//     cambiarFotoPrincipal("miniatura3");
// });

// miniatura4.addEventListener("click",()=>
//     cambiarFotoPrincipal("miniatura4"));

// miniatura5.addEventListener("click",()=>
//     cambiarFotoPrincipal("miniatura5"));

//CONDICIONALES

//OPERADORES DE COMPARACION
// == igual
// === igual en valor y tipo
// != distinto
// > mayor que
// < menor que
// >= mayor o igual que
// <= menor o igual que

//OPERADORES LOGICOS
// && and
// || or
// ! not

// const acierto=true;
// const numeroIntentos=3;
// const maxIntentos=3;

// if(acierto===true && numeroIntentos<=maxIntentos){
//     console.log("¡Has acertado!");
// }
// else{
//     console.log("¡Has fallado!");
// }

// const haAcertado=(numeroAdivinar,numeroUsuario)=>{
//     if(numeroAdivinar===numeroUsuario){
//         return "¡Has acertado!";
//     }
//     else if(numeroAdivinar>numeroUsuario){
//         return "El número es mayor";
//     }
//     else{
//         return "El número es menor";
//     }
// }

// console.log(haAcertado(3,5));
// console.log(haAcertado(5,3));
// console.log(haAcertado(5,5));

// const intentos=(numeroIntentos,maxIntentos)=>{
//     if(numeroIntentos>maxIntentos){
//         return "has superado el numero de intentos"
//     }
//     else{
//         return "aun te quedan intentos"
//     }
// }

// console.log(intentos(4,5));
// console.log(intentos(8,5))

// const boton = document.getElementById("boton");
// const input = document.getElementById("input");
// const resultado = document.getElementById("resultado");
// const intentosR = document.getElementById("intentos");
// const mayor = document.getElementById("mayor");
// const menor = document.getElementById("menor");
// const acierto = document.getElementById("acierto");
// let numeroAdivinar=Math.random()*100;
// numeroAdivinar=Math.round(numeroAdivinar);
// console.log(numeroAdivinar);
// let intentos=6;
// intentosR.innerHTML="Vas a tener solo 6 intentos...";

// boton.addEventListener("click",function(){
//     const numeroUsuario=parseInt(input.value);

//     if(numeroUsuario<0 || numeroUsuario>100){
//         resultado.innerHTML="El número debe estar entre 0 y 100";
//         mayor.innerHTML="";
//         menor.innerHTML="";
//         intentos++;
//     }
//     if(numeroAdivinar===numeroUsuario){
//         boton.disabled=true;
//         mayor.innerHTML="";
//         menor.innerHTML="";
//         intentosR.innerHTML="";
//         acierto.innerHTML="¡Has acertado!";
//         resultado.innerHTML="";
//     }
//     if(numeroUsuario<=100 && numeroUsuario>=0){
//         mayor.innerHTML="";
//         menor.innerHTML="";
//     }
//     if(numeroAdivinar>numeroUsuario){
//         menor.innerHTML="";
//         mayor.innerHTML="El número es mayor";
//     }
//     if(numeroAdivinar<numeroUsuario){
//         mayor.innerHTML="";
//         menor.innerHTML="El número es menor";
//     }
//     if(intentos>0 && numeroAdivinar!==numeroUsuario){
//         intentos--;
//         intentosR.innerHTML="te quedan "+intentos+" intentos";

//     }
//     if(intentos===0){
//         boton.disabled=true;
//         mayor.innerHTML="";
//         menor.innerHTML="";
//         intentosR.innerHTML="";
//         resultado.innerHTML="¡Has fallado!, el numero era "+numeroAdivinar;
//     }
// });

//-------------------------------------------------//

// const noEsNum=0;
// const esNumMayor=1;
// const esNumMenor=2;
// const esNumSecreto=3;
// const esNumFueraDeRango=4;
// const perder=5;

// const intentosR = document.getElementById("intentos");
// const generarNum= ()=> Math.round(Math.random() * 100);

// const numeroParaAdivinar= generarNum();
// console.log(numeroParaAdivinar);

// let mensaje="";
// let intentos=6;
// intentosR.innerHTML=`Vas a tener solo ${intentos} intentos`;
// const muestraMensajeDeComprobacion=(texto,estado)=>{
//     switch(estado){
//         case noEsNum:
//             mensaje="Debes introducir un número";
//             break;
//         case esNumMayor:
//             restarIntentos();
//             if(intentos===0)
//             return;
//             mensaje=`El número es mayor que ${texto}`;
//             break;
//         case esNumMenor:
//             restarIntentos();
//             if(intentos===0)
//             return;
//             mensaje=`El número es menor que ${texto}`;
//             break;
//         case esNumFueraDeRango:
//             mensaje="El número debe estar entre 1 y 100";
//             break;
//         case esNumSecreto:
//             mensaje="¡Has acertado!";
//             break;
//         case perder:
//             mensaje="Has perdido, el numero era "+ numeroParaAdivinar;
//             break;
//         default:
//             mensaje="Error";
//             break;
//     }
//     document.getElementById("resultado").innerHTML=mensaje;
// };
// const compruebaNumeroSecreto=(texto)=>{
//     const numero = parseInt(texto);
//     const esNum=!isNaN(numero);
//     if (!esNum){
//         return noEsNum;
//     }
//     if (numero<1 || numero>100){
//         return esNumFueraDeRango;
//     }
//     return (numero===numeroParaAdivinar&&intentos>0)
//         ?  esNumSecreto
//         :  (numero<numeroParaAdivinar&&intentos>0)
//             ?esNumMayor
//             :esNumMenor;
// }
// const restarIntentos=()=>{
//     intentos--
//     intentosR.innerHTML=`Te quedan ${intentos} intentos`;
//     if (intentos===0){
//         sinIntentos()
//     }
// };
// const sinIntentos=()=>{
//     intentosR.innerHTML=`Te quedaste sin intentos...`
//     document.getElementById("boton").disabled=true;
//     muestraMensajeDeComprobacion("",perder);
// }
// const handleClick=()=>{
//     const texto=document.getElementById("input").value;
//     const estado=compruebaNumeroSecreto(texto);
//     muestraMensajeDeComprobacion(texto,estado);
// }
// const boton=document.getElementById("boton");
// boton.addEventListener("click",handleClick);

// const nombres = [
//   "Miguel",
//   "Luis",
//   "Ana",
//   "Maria",
//   "Pedro",
//   "Juan",
//   "Sara",
//   "Lucia",
//   "Pablo",
//   "Sofia",
// ];

// const mostrarNombreEnPagina = (nombre) => {
//   const div = document.getElementById("lista-nombres");
//   const parrafo = document.createElement("p");
//   parrafo.textContent = nombre;
//   div.appendChild(parrafo);
// };
// for (let i = 0; i < nombres.length; i++) {
//   mostrarNombreEnPagina(nombres[i]);
// }

//----------------------------------------------

// const ropa = [
//   {
//     foto: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/online-shop/images/image-1.jpg",
//     tipoProducto: "Camisa",
//     precio: 25,
//   },
//   {
//     foto: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/online-shop/images/image-2.jpg",
//     tipoProducto: "Camiseta",
//     precio: 22.99,
//   },
//   {
//     foto: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/online-shop/images/image-3.jpg",
//     tipoProducto: "Vestido",
//     precio: 34.99,
//   },
//   {
//     foto: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/online-shop/images/image-4.jpg",
//     tipoProducto: "Vaqueros",
//     precio: 79.99,
//   },
//   {
//     foto: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/online-shop/images/image-5.jpg",
//     tipoProducto: "Polo",
//     precio: 44.95,
//   },
//   {
//     foto: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/online-shop/images/image-6.jpg",
//     tipoProducto: "Camisa",
//     precio: 44.99,
//   },
// ];

// const mostrarRopaEnPagina = (ropa) => {
//   const div = document.getElementById("lista-ropa");
//   const imagen = document.createElement("img");
//   const parrafo = document.createElement("p");
//   const precio = document.createElement("p");
//   const cardDiv = document.createElement("div");

//   imagen.src = ropa.foto;
//   parrafo.textContent = ropa.tipoProducto;
//   precio.textContent = `${ropa.precio}€`;
//   cardDiv.setAttribute("class", "card");

//   div.appendChild(cardDiv);
//   cardDiv.appendChild(imagen);
//   cardDiv.appendChild(parrafo);
//   cardDiv.appendChild(precio);
// };

// const muestraColeccionDePrendas = (ropa) => {
//   for (let i = 0; i < ropa.length; i++) {
//     mostrarRopaEnPagina(ropa[i]);
//   }
// };

// let carrito = [
//   {
//     tipoProducto: "Vestido",
//     precio: 34.99,
//   },
//   {
//     tipoProducto: "Vaqueros",
//     precio: 79.99,
//   },
// ];

// const sonLosGastosDeEnvioGratis = () => {
//   let total = 0;
//   for (let i = 0; i < carrito.length && total < 100; i++) {
//     total += carrito[i].precio;
//   }
//   return total > 100;
// };

// const esGratis = () => sonLosGastosDeEnvioGratis();

// // for (let i = 0; i < carrito.length; i++) {
// //   const prenda = carrito[i];
// //   console.log(prenda.precio, prenda.tipoProducto);
// // }

// const recorremosElCarrito = () => {
//   for (let i = 0; i < carrito.length; i++) {
//     const prenda = carrito[i];
//     console.log(prenda.precio, prenda.tipoProducto);
//   }
// };

// const comprobarSiHayGastosDeEnvioGratis = () => {
//   if (sonLosGastosDeEnvioGratis() === true) {
//     const div = document.getElementById("gastos-de-envios");
//     const parrafo = document.createElement("p");
//     parrafo.textContent = "Gastos de envio gratis";
//     div.appendChild(parrafo);
//   } else {
//     const div = document.getElementById("gastos-de-envios");
//     const parrafo = document.createElement("p");
//     parrafo.textContent = "Gastos de envio 5€";
//     div.appendChild(parrafo);
//   }
// };

// carrito.push({
//   tipoProducto: "camiseta",
//   precio: 22.99,
// });

// carrito.splice();

// document.addEventListener("DOMContentLoaded", () => {
//   muestraColeccionDePrendas(ropa);
//   comprobarSiHayGastosDeEnvioGratis();
//   recorremosElCarrito();
// });

//------------------------------------------

// const modificandoArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// modificandoArray[0] = 100;
// console.log(modificandoArray);

// const manolo = {
//   nombre: "Manolo",
//   edad: 25,
// };

// const personas = [
//   manolo,
//   {
//     nombre: "Miguel",
//     edad: 25,
//   },
//   {
//     nombre: "Luis",
//     edad: 25,
//   },
//   {
//     nombre: "Ana",
//     edad: 35,
//   },
// ];
// personas[0] = {
//   ...personas[0],
//   edad: 21,
// };

/*
1.Valores de personas[0]
{
  {
    nombre: "Manolo",
    edad: 21,
  }
}
al poner los tres puntos delante de personas[0] estamos creando un nuevo objeto con los valores de personas[0] y modificando la edad a 21
*/

// console.log(manolo);
// console.log(personas);

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const pares = [];
// const impares = [];
// for (let i = 0; i < numeros.length; i++) {
//   if (numeros[i] % 2 === 0) {
//     pares.push(numeros[i]);
//   } else {
//     impares.push(numeros[i]);
//   }
// }
// console.log(pares);
// console.log(impares);

//----------------------------------------------

// const peliculas = [
//   "el padrino",
//   "el padrino 2",
//   "el padrino 3",
//   "pulp fiction",
//   "kill bill",
//   "reservoir dogs",
// ];

// const peliculasVistas = [...peliculas.slice(0, 1), ...peliculas.slice(2, 6)];
// console.log(peliculas);
// console.log(peliculasVistas);
// //--------------------------------

//realizando un ejemplo de reservas de un hotel
