function mostrarCarta(){

document.getElementById("carta").style.display="block";

}

function crearPetalo(){

const petalo=document.createElement("div");

petalo.classList.add("petalo");

petalo.innerHTML="🌸";

petalo.style.left=Math.random()*100+"vw";

petalo.style.animationDuration=(Math.random()*4+4)+"s";

petalo.style.fontSize=(Math.random()*20+20)+"px";

document.body.appendChild(petalo);

setTimeout(()=>{

petalo.remove();

},8000);

}

setInterval(crearPetalo,250);