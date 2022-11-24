const btnCV = document.querySelector('.btn.btn-pink');
btnCV.addEventListener("click", abrirPDF);  

function abrirPDF(){
    window.open("Profile.pdf", "_blank");
}