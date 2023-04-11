/* Acordeón */
const container = document.getElementById("container");

container.addEventListener("click", (e) =>{
  if(e.target.classList.contains("carita")){
    e.target.parentElement.classList.toggle("scale")
    (e.target.children[1].classList.toggle("rotate"));
  };
})

/* Formulario */

const formulario = document.querySelector('#contacto-formulario');
const enviarBtn = document.querySelector('#enviar');

enviarBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (formulario.checkValidity()) {
    enviarFormulario();
  } else {
    formulario.reportValidity();
  }
});

function enviarFormulario() {

}
