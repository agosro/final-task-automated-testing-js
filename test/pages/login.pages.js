class LoginPage {
  get inputUsername() { return $('#user-name'); }
  get inputPassword() { return $('#password'); }
  get btnLogin() { return $('#login-button'); }
  get errorMessage() { return $('h3[data-test="error"]'); }

  async open() {
    await browser.url('/'); // navegar a la url base
  }

  async login(username, password) { 
    if (username !== null) await this.inputUsername.setValue(username); // usuario si se proporciona
    if (password !== null) await this.inputPassword.setValue(password); // contraseña si se proporciona
    await this.btnLogin.click(); // click boton de login
  }

  async clearInputs() {
    // Limpiar el campo de usuario
    await this.inputUsername.click();
    await browser.keys(['Control', 'a']); // seleccionar todo el texto
    await browser.keys('Backspace'); // borrar el texto seleccionado

    // Limpiar el campo de contraseña
    await this.inputPassword.click(); // hacer click en el campo de password
    await browser.keys(['Control', 'a']); // seleccionar todo el texto
    await browser.keys('Backspace'); // borrar el texto seleccionado
  }

  async clearPassword() {
  await this.inputPassword.click();
  await browser.keys(['Control', 'a']);
  await browser.keys('Backspace');
}


  async getErrorMessage() { // funcion para obtener el mensaje de error
    await this.errorMessage.waitForDisplayed({ timeout: 5000 }); // esperar a que el mensaje de error sea visible
    return await this.errorMessage.getText(); // retornar el texto del mensaje de error
  }
}

export default new LoginPage();
