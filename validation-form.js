// document.getElementById("contactForm").addEventListener("submit", function (event) {
//   event.preventDefault();

//   let isValid = true;

//   const nameField = document.getElementById("name");
//   const emailField = document.getElementById("email");
//   const numberField = document.getElementById("number");
//   const messageField = document.getElementById("menssage");

//   const nameError = document.getElementById("nameError");
//   const emailError = document.getElementById("emailError");
//   const messageError = document.getElementById("messageError");

//   nameError.textContent = "";
//   emailError.textContent = "";
//   messageError.textContent = "";

//   if (nameField.value.trim() === "") {
//     nameError.textContent = "O nome é obrigatório.";
//     isValid = false;
//   } else if (nameField.value.trim().length < 6) {
//     nameError.textContent = "O nome deve ter pelo menos 6 caracteres.";
//     isValid = false;
//   }

//   if (numberField.value.trim() === "") {
//     nameError.textContent = "O número é obrigatório.";
//     isValid = false;
//   } else if (numberField.value.trim().length < 6) {
//     nameError.textContent = "O número deve ter pelo menos 6 caracteres.";
//     isValid = false;
//   }

//   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (emailField.value.trim() === "") {
//     emailError.textContent = "O email é obrigatório.";
//     isValid = false;
//   } else if (!emailPattern.test(emailField.value.trim())) {
//     emailError.textContent = "Insira um email válido.";
//     isValid = false;
//   }

//   if (messageField.value.trim() === "") {
//     messageError.textContent = "A mensagem é obrigatória.";
//     isValid = false;
//   } else if (messageField.value.trim().length < 10) {
//     messageError.textContent = "A mensagem deve ter pelo menos 10 caracteres.";
//     isValid = false;
//   }

//   if (isValid) {
//     alert("Formulário enviado com sucesso!");
//   }
// });