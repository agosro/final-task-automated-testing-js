import LoginPage from '../po/pages/login.page';
import assert from 'assert';
import logger from '../configs/utils/logger';

describe('SauceDemo Login Feature', () => {

  beforeEach(async () => {
    await LoginPage.open();
  });

  it('UC-1: Given empty credentials, When user clicks Login, Then show "Username is required"', async () => {
    logger.info('Running UC-1: Empty credentials');
    await LoginPage.inputUsername.setValue('Agosro');
    await LoginPage.inputPassword.setValue('1234');

    await LoginPage.clearInputs();

    // Esperar a que ambos campos estén realmente vacíos
    await browser.waitUntil(
      async () => {
        const user = await LoginPage.inputUsername.getValue();
        const pass = await LoginPage.inputPassword.getValue();
        return user === '' && pass === '';
      },
      { timeout: 2000, timeoutMsg: 'Inputs did not clear in time' }
    );

    await LoginPage.btnLogin.click();

    const error = await LoginPage.getErrorMessage();
    assert.strictEqual(error, 'Epic sadface: Username is required');
    logger.info('UC-1 passed successfully');
  });

  it('UC-2: Given username but no password, When user clicks Login, Then show "Password is required"', async () => {
    logger.info('Running UC-2: Missing password'); // Log the start of UC-2 test

    await LoginPage.inputUsername.setValue('standard_user'); // pasar el username
    await LoginPage.inputPassword.setValue('secret_sauce'); // pasar el password
    await LoginPage.clearPassword(); // limpiar correctamente el input de password

    await browser.waitUntil(
      async () => {
        const pass = await LoginPage.inputPassword.getValue();
        return pass === '';
      },
      { timeout: 2000, timeoutMsg: 'Password input did not clear in time' }
    );
    
    await LoginPage.btnLogin.click(); // click boton de login
    const error = await LoginPage.getErrorMessage(); // obtener el mensaje de error
    assert.strictEqual(error, 'Epic sadface: Password is required'); // verificar que el mensaje de error sea el esperado
    logger.info('UC-2 passed successfully');
  });

  it('UC-3: Given valid credentials, When user clicks Login, Then see "Swag Labs" title', async () => {
    logger.info('Running UC-3: Valid credentials'); // Log the start of UC-3 test

    await LoginPage.login('standard_user', 'secret_sauce'); // realizar login con credenciales validas
    await expect(browser).toHaveTitle('Swag Labs'); // verificar que el titulo de la pagina sea "Swag Labs"
    logger.info('UC-3 passed successfully');
  });
});
