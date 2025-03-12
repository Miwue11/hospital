// enum Estado{
//     noEsNum=0,
//     esNumMayor=1,
//     esNumMenor=2,
//     esNumSecreto=3,
//     esNumFueraDeRango=4,
//     perder=5,
// };
// const intentosR = document.getElementById("intentos") as HTMLElement;
// let numeroParaAdivinar = Math.round(Math.random() * 100);
// console.log(numeroParaAdivinar);
// let mensaje:string="";
// let intentos:number=5;
// intentosR.innerHTML=`Vas a tener solo ${intentos} intentos`;

// const muestraMensajeDeComprobacion=(texto:string,estado:Estado):void=>{
//     switch(estado){
//         case Estado.noEsNum:
//             mensaje="Debes introducir un número";
//             break;
//         case Estado.esNumMayor:
//             restarIntentos();
//             if(intentos===0)
//             return; 
//             mensaje=`El número es mayor que ${texto}`;
//             break;
//         case Estado.esNumMenor:
//             restarIntentos();
//             if(intentos===0)
//             return; 
//             mensaje=`El número es menor que ${texto}`;
//             break;
//         case Estado.esNumFueraDeRango:
//             mensaje="El número debe estar entre 1 y 100";
//             break;
//         case Estado.esNumSecreto:
//             mensaje="¡Has acertado!";
//             break;
//         case Estado.perder:
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
//         return Estado.noEsNum;
//     }
//     if (numero<1 || numero>100){
//         return Estado.esNumFueraDeRango;
//     }
//     return (numero===numeroParaAdivinar&&intentos>0)
//         ?  Estado.esNumSecreto
//         :  (numero<numeroParaAdivinar&&intentos>0)
//             ?Estado.esNumMayor
//             :Estado.esNumMenor;
// };

// const restarIntentos=()=>{
//     intentos--
//     intentosR.innerHTML=`Te quedan ${intentos} intentos`;
//     if (intentos===0){
//         sinIntentos()
//     }
// };

// const sinIntentos=()=>{
//     intentosR.innerHTML=`Te quedaste sin intentos...`
//     if(boton instanceof HTMLButtonElement)
//     boton.disabled=true;
//     muestraMensajeDeComprobacion("",Estado.perder);
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