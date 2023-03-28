/* Acordeón */

const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {



    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if (accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }

  });
});

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


