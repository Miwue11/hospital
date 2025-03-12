let numeroAdivinar=Math.random()*100;
numeroAdivinar=Math.round(numeroAdivinar);
console.log(numeroAdivinar);
let intentos=6;
alert("Vas a tener solo 6 intentos...")
const boton = document.getElementById("boton");
const input = document.getElementById("input");

boton.addEventListener("click",function(){
    const numeroUsuario=parseInt(input.value);
    if(numeroAdivinar===numeroUsuario){
        alert("¡Has acertado!");
    }
    else if(numeroAdivinar>numeroUsuario){
        alert("El número es mayor");
        
    }
    else if (intentos ===0){
        alert("Has agotado los intentos");
    }
    else{
        alert("El número es menor");
    }
});
boton.addEventListener("click",function(){
    intentos--;
        alert(`Te quedan ${intentos} intentos`);
        if (intentos ===0){
            boton.disabled=true;
        }
    });
