import logger from "..//../configs/utils/logger";

class LoginPage {
  get inputUsername() { return $('#user-name'); }
  get inputPassword() { return $('#password'); }
  get btnLogin() { return $('#login-button'); }
  get errorMessage() { return $('h3[data-test="error"]'); }

  async open() {
    logger.info('Opening login page...');
    await browser.url('/'); // navegar a la url base
  }

  async login(username, password) {
    logger.info('Attempting to log in...');

    logger.debug(`Logging in with username: ${username}`);
    if (username !== null) await this.inputUsername.setValue(username); // usuario si se proporciona

    logger.debug(`Filling in password field with: ${password}`);
    if (password !== null) await this.inputPassword.setValue(password); // contraseña si se proporciona

    logger.debug('Clicking login button');
    await this.btnLogin.click(); // click boton de login
  }

  async clearInputs() {
    logger.debug('Clearing input fields...');
    // Limpiar el campo de usuario
    await this.inputUsername.click();

    logger.debug('Selecting all text in username field');
    await browser.keys(['Control', 'a']); // seleccionar todo el texto

    logger.debug('Deleting selected text in username field');
    await browser.keys('Backspace'); // borrar el texto seleccionado

    // Limpiar el campo de contraseña
    await this.inputPassword.click(); // hacer click en el campo de password

    logger.debug('Selecting all text in password field');
    await browser.keys(['Control', 'a']); // seleccionar todo el texto

    logger.debug('Deleting selected text in password field');
    await browser.keys('Backspace'); // borrar el texto seleccionado
  }

  async clearPassword() {
  logger.debug('Clearing password field...');
  await this.inputPassword.click();

  logger.debug('Selecting all text in password field');
  await browser.keys(['Control', 'a']);

  logger.debug('Deleting selected text in password field');
  await browser.keys('Backspace');
}


  async getErrorMessage() { // funcion para obtener el mensaje de error
    logger.debug('Waiting for error message to be displayed');
    await this.errorMessage.waitForDisplayed({ timeout: 5000 }); // esperar a que el mensaje de error sea visible

    const message = await this.errorMessage.getText();
    logger.debug(`Error message obtained: ${message}`);
    return message; 
  }
}

export default new LoginPage();
