class FormSubmit {
  constructor(settings) {
    this.settings = settings;
    this.form = document.querySelector(settings.form);
    if (this.form) {
      this.url = this.form.getAttribute("action");
    }
    this.sendForm = this.sendForm.bind(this);
  }

  displaySuccess() {
    alert("Formulário enviado com sucesso!"); // Exibe o alerta
    this.form.innerHTML = this.settings.success; // Substitui o conteúdo do formulário
  }

  displayError() {
    alert("Houve um erro ao enviar o formulário."); // Exibe o alerta
    this.form.innerHTML = this.settings.error; // Substitui o conteúdo do formulário
  }

  getFormObject() {
    const formObject = {};
    const fields = this.form.querySelectorAll("[name]");
    fields.forEach((field) => {
      formObject[field.getAttribute("name")] = field.value;
    });
    return formObject;
  }

  onSubmission(event) {
    event.preventDefault(); // Impede o comportamento padrão do navegador
    const submitButton = this.form.querySelector("[type='submit']");
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.innerText = "Enviando...";
      console.log(submitButton.value)
    }
  }

  async sendForm(event) {
    try {
      this.onSubmission(event);
      const response = await fetch(this.url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(this.getFormObject()),
      });
      if (response.ok) {
        this.displaySuccess(); // Chama o método de sucesso
      } else {
        this.displayError(); // Chama o método de erro
      }
    } catch (error) {
      this.displayError(); // Chama o método de erro
      console.error(error);
    }
  }

  init() {
    if (this.form) {
      // Escuta o evento de 'submit' no formulário
      this.form.addEventListener("submit", this.sendForm);
    }
    return this;
  }
}

const formSubmit = new FormSubmit({
  form: "[data-form]",
  success: "<h1 class='success'>Mensagem enviada!</h1>",
  error: "<h1 class='error'>Não foi possível enviar sua mensagem.</h1>",
});
formSubmit.init();