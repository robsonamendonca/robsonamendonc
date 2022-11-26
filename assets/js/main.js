const btnCV = document.querySelector('.btn.btn-pink');

if(btnCV)
    btnCV.addEventListener("click", abrirPDF);  

function abrirPDF(){
    window.open("Profile.pdf", "_blank");
}

function abrirProjetos(){
    window.location.href = "projetos.html";
}