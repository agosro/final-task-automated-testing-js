import LoginPage from '../pages/login.pages';
import assert from 'assert';

describe('SauceDemo Login Feature', () => {

  beforeEach(async () => {
    console.log('Opening login page...');
    await LoginPage.open();
  });

  it('UC-1: Given empty credentials, when user clicks Login, then show "Username is required"', async () => {
    console.log('Running UC-1: Empty credentials');
    await LoginPage.inputUsername.setValue('Agosro');
    await LoginPage.inputPassword.setValue('1234');
    await LoginPage.clearInputs();

    // Paso 2: Esperar a que ambos campos estén realmente vacíos
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
  });

  it('UC-2: Given username but no password, when user clicks Login, then show "Password is required"', async () => {
    console.log('Running UC-2: Missing password'); // Log the start of UC-2 test
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
  });

  it('UC-3: Given valid credentials, when user clicks Login, then see "Swag Labs" title', async () => {
    console.log('Running UC-3: Valid credentials'); // Log the start of UC-3 test
    await LoginPage.login('standard_user', 'secret_sauce'); // realizar login con credenciales validas
    await expect(browser).toHaveTitle('Swag Labs'); // verificar que el titulo de la pagina sea "Swag Labs"
  });
});
