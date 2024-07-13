function homeElement(){
 const content = document.getElementById("content");
 content.src = "inicio.html";
 const othersBtns = document.getElementsByClassName("nav-link");
 const btnInicio = document.getElementById("btnInicio");
 btnInicio.classList.add("active")
}

function posicionElement(){
    const content = document.getElementById("content")
    content.src = "posiciones.html"
    const othersBtns = document.getElementsByClassName("nav-link");
    const btnPosiciones = document.getElementById("btnPosiciones");
    btnPosiciones.classList.add("active")
}