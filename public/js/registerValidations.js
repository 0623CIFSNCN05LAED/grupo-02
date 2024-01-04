document.addEventListener("DOMContentLoaded", function () {

const validations = [
    {
      field: "nombre",
      check: (input) => input.value.length >= 3,
      message: "Debe contener al menos tres caracteres",
    },
    {
      field: "usuario",
      check: (input) => input.value.length >= 3,
      message: "Debe contener al menos tres caracteres",
    },
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
    {
      field: "addres",
      check: (input) => input.value.length >= 3,
      message: "Debe contener al menos tres caracteres",
    },
    {
      field: "city",
      check: (input) => input.value.length >= 3,
      message: "Debe contener al menos tres caracteres",
    },
    {
      field: "country",
      check: (input) => input.value.length >= 3,
      message: "Debe contener al menos tres caracteres",
    }
  ];
  
  validations.forEach((validation) => {
    const inputId = validation.field;
    const input = document.getElementById(inputId);
    const inputErrorMsg = document.getElementById(inputId + "Error");
  
    function validate() {
      inputValidation(validation, input, inputErrorMsg);
    }
  
    input.addEventListener("blur", validate);
    input.addEventListener("input", validate);
  });

const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const validationsResult = [];

  validations.forEach((validation) => {
    const inputId = validation.field;
    const input = document.getElementById(inputId);
    const inputErrorMsg = document.getElementById(inputId + "Error");
    const result = inputValidation(validation, input, inputErrorMsg);
    validationsResult.push(result);
  });

  if (validationsResult.every((val) => val == true)) {
    form.submit();
  }
});

function inputValidation(validation, input, inputErrorMsg) {
  if (!input.value) {
    inputErrorMsg.innerText = "El campo no debe estar vacío";
    inputErrorMsg.classList.add("display");
    return false;
  }

  if (!validation.check(input)) {
    inputErrorMsg.innerText = validation.message;
    inputErrorMsg.classList.add("display");
    return false;
  }

  inputErrorMsg.innerText = "";
  inputErrorMsg.classList.remove("display");
  return true;
}

});