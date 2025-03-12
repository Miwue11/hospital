const boton = document.getElementById("boton");
const input = document.getElementById("input");
const resultado = document.getElementById("resultado");
const intentosR = document.getElementById("intentos");
const mayor = document.getElementById("mayor");
const menor = document.getElementById("menor");
const acierto = document.getElementById("acierto");
let numeroAdivinar=Math.random()*100;
numeroAdivinar=Math.round(numeroAdivinar);
console.log(numeroAdivinar);
let intentos=6;
intentosR.innerHTML="Vas a tener solo 6 intentos...";

boton.addEventListener("click",function(){
    const numeroUsuario=parseInt(input.value);
    if(numeroUsuario<0 || numeroUsuario>100){
        resultado.innerHTML="El número debe estar entre 0 y 100";
        intentos++;
    }
    if(numeroAdivinar===numeroUsuario){
        boton.disabled=true;
        mayor.innerHTML="";
        menor.innerHTML="";
        intentosR.innerHTML="";
        acierto.innerHTML="¡Has acertado!";
        resultado.innerHTML="";

    }
    if(numeroAdivinar>numeroUsuario){
        menor.innerHTML="";
        mayor.innerHTML="El número es mayor";

        
    }
    if(numeroAdivinar<numeroUsuario){
        mayor.innerHTML="";
        menor.innerHTML="El número es menor";

    }
    if(intentos>0 && numeroAdivinar!==numeroUsuario){
        intentos--;
        intentosR.innerHTML="te quedan "+intentos+" intentos";

    }
    if(intentos===0){
        boton.disabled=true;
        mayor.innerHTML="";
        menor.innerHTML="";
        intentosR.innerHTML="";
        resultado.innerHTML="¡Has fallado!, el numero era "+numeroAdivinar;
    }
});
