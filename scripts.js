//animacion de la barra de progreso
function efectoHabilidades(){
    var skills = document.getElementById("soft-skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("trabajo");
        habilidades[1].classList.add("creatividad");
        habilidades[2].classList.add("comunicacion");
        habilidades[3].classList.add("dedicacion");
        habilidades[4].classList.add("liderazgo");
        habilidades[5].classList.add("altruismo");
    }
}

window.onscroll = function(){
    efectoHabilidades();
}