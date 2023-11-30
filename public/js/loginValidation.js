
document.addEventListener("DOMContentLoaded", function () { 

const validarlogin = [ 
    {
        field: "email",
        check: (input) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value),
        message: "Por favor, ingrese un correo electrónico válido.",
      },
    {
        field: "password",
        check: (input) => input.value.length >= 8,
        message: "Debe contener al menos ocho caracteres",
      },
];

const input = document.getElementById(inputId);
const inputErrorMsg = document.getElementById(inputId + "Error");
const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const validationsResult = [];

    validarlogin.forEach((validation) => {
        const inputId = validation.field;
        const input = document.getElementById(inputId);
        const inputErrorMsg = document.getElementById(inputId + "Error");
        validationsResult.push(result);
      
        function validate() {
          inputValidation(validation, input, inputErrorMsg);
        }
      
        input.addEventListener("blur", validate);
        input.addEventListener("input", validate);
    });

});


function inputValidation(validarlogin, input, inputErrorMsg) {
    if (!input.value) {
      inputErrorMsg.innerText = "El campo no debe estar vacío";
      inputErrorMsg.classList.add("display");
      return false;
    }
  
    if (!validarlogin.check(input)) {
      inputErrorMsg.innerText = validarlogin.message;
      inputErrorMsg.classList.add("display");
      return false;
    }
  
    inputErrorMsg.innerText = "";
    inputErrorMsg.classList.remove("display");
    return true;
}
});

