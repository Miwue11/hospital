// import {
//   nuevoJuego,
//   sacandoBolas,
//   sacarBolaButton,
//   reiniciarButton,
// } from "../../src/UI";

// sacarBolaButton.addEventListener("click", sacandoBolas);
// reiniciarButton.addEventListener("click", nuevoJuego);
// document.addEventListener("DOMContentLoaded", () => {
//   nuevoJuego();
// });

// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <link rel="icon" type="image/svg+xml" href="/vite.svg" />
//     <link rel="stylesheet" href="./src/style.css" />
//     <link rel="stylesheet" href="./src/compra.css" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Bingo</title>
//   </head>
//     <div id="bola-actual-container">
//       <div id="bola-actual"></div>
//     </div>
//     <h1>Bingo</h1>
//     <div id="game-container">
//       <div id="bolas-container">
//         <div id="bolasRestantes">Bolas restantes: 90</div>
//         <div id="bolasSacadas">
//           Bolas sacadas:
//           <div class="bolas-list"></div>
//         </div>
//         </div>
//       </div>
//       <div id="mensaje"></div>
//       <div class="button-container">
//         <button id="sacarBola">Sacar Bola</button>
//         <button id="reiniciar" style="display: none;">reiniciar</button>
//       </div>
//       <div id="carton"></div>
//     </div>
//     <script type="module" src="/src/main.ts"></script>
//   </body>
// </html>

// @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");

// :root {
//   font-family: "Montserrat", sans-serif;
//   font-size: 16px;
//   line-height: 1.5;
//   font-weight: 400;
//   color-scheme: light dark;
//   color: rgba(255, 255, 255, 0.87);
//   background-color: #ff09095a;
//   font-synthesis: none;
//   text-rendering: optimizeLegibility;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   -webkit-tap-highlight-color: transparent;
//   -webkit-text-stroke: 1px transparent;
// }
// body {
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   min-height: 100vh;
//   background-color: #a535357d;
//   justify-content: center;
//   align-items: center;
//   min-height: 100vh;
//   font-family: "Montserrat", sans-serif;
//   font-size: 16px;
//   line-height: 1.5;
//   font-weight: 400;
//   color: #333;
//   gap: 20px; /* Added gap between elements */
// }

// #bola-actual-container {
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 100%;
//   gap: 0px;
//   margin-bottom: 0px;
//   color: #b90000a5;
// }

// #bola-actual {
//   background-color: #ffdddd;
//   color: #630606b1;
//   border: 1px solid #ccc;
//   border-radius: 50%;
//   width: 100px;
//   height: 100px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 40px;
//   font-weight: bold;
// }

// h1 {
//   color: #5c1717a6;
//   margin-bottom: 0px;
//   text-align: center;
// }

// #game-container {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 100%;
//   max-width: 800px;
//   gap: 20px;
//   padding: 20px;
//   background-color: #4f262672;
// }

// #bolas-container {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 10px;
//   width: 100%;
//   color: #510303;
// }

// #bolasRestantes,
// #bolasSacadas {
//   background-color: #e60d0d1d;
//   border: 1px solid #ccc;
//   padding: 10px;
//   font-weight: bold;
//   border-radius: 5px;
//   text-align: center;
//   width: 45%;
//   color: #3506068e;
// }

// #bolasSacadas .bolas-list {
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   gap: 5px;
//   margin-top: 0px;
//   background-color: #510303;
// }

// .bola-sacada {
//   background-color: #000000;
//   color: #6b0707;
//   border: 1px solid #ccc;
//   border-radius: 50%;
//   width: 30px;
//   height: 30px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 16px;
//   font-weight: bold;
// }

// #mensaje {
//   margin-bottom: 0px;
//   font-weight: bold;
//   color: #5c1717a6;
// }

// .button-container {
//   display: flex;
//   gap: 20px;
//   justify-content: center;
//   width: 100%;
//   margin-top: 0px;
//   color: #5c1717a6;
// }

// button {
//   color: #510303;
//   padding: 10px 20px;
//   background-color: #ff000012;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   font-size: 16px;
//   transition: background-color 0.3s;
// }

// button:hover {
//   background-color: #b3000059;
// }

// button:disabled {
//   background-color: #4107072b;
//   cursor: default;
// }

// #carton {
//   display: grid;
//   grid-template-columns: repeat(1, 2fr);
//   grid-template-rows: repeat(1, 2fr);
//   gap: 0px;
//   height: 50%;
//   width: 13%;
//   margin-top: 0px;
//   background-color: #ff000061;
//   border: 1px solid #ccc;
//   padding: 10px;
//   border-radius: 5px;
//   text-align: center;
//   color: #510303;
// }

// .fila {
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   gap: 5px;
// }

// .numero {
//   background-color: #eee;
//   border: 1px solid #ccc;
//   width: 100%;
// }

// .numero {
//   background-color: #eee;
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   width: 50px;
//   height: 50px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 18px;
//   font-weight: bold;
// }

// .numero.tachado {
//   background-color: #f86c6c;
//   text-decoration: line-through;
// }

// @media (prefers-color-scheme: light) {
//   :root {
//     color: #213547;
//     background-color: #ffffff;
//   }

//   a:hover {
//     color: #747bff;
//   }

//   button {
//     background-color: #f9f9f9;
//   }
// }
