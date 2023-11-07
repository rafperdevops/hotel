const assert = require('assert');
const { Builder, By, until } = require('selenium-webdriver');

(async function example() {
  let browser;

  try {
    browser = await new Builder().forBrowser('firefox').build();

    await browser.get('http://localhost:3000/');

    const idField = await browser.findElement(By.id('id'));
    const nameField = await browser.findElement(By.id('name'));
    const descriptionField = await browser.findElement(By.id('description'));
    const capacityField = await browser.findElement(By.id('capacity'));
    const priceField = await browser.findElement(By.id('price'));
    const submitButton = await browser.findElement(By.id('submitButton'));

    await idField.sendKeys('1');
    await nameField.sendKeys('Nombre de la habitación');
    await descriptionField.sendKeys('Descripción de la habitación');
    await capacityField.sendKeys('5');
    await priceField.sendKeys('100');

    await submitButton.click();

    await browser.wait(until.elementLocated(By.id('resultado')), 10000);
    const successMessage = await browser.findElement(By.id('resultado'));
    const messageText = await successMessage.getText();

    assert.ok(messageText.includes('Éxito'), 'El mensaje de éxito no se mostró');

    const idValue = await idField.getAttribute('value');
    const nameValue = await nameField.getAttribute('value');
    const descriptionValue = await descriptionField.getAttribute('value');
    const capacityValue = await capacityField.getAttribute('value');
    const priceValue = await priceField.getAttribute('value');

    assert.strictEqual(idValue, '1', 'El campo ID no coincide');
    assert.strictEqual(nameValue, 'Nombre de la habitación', 'El campo Nombre no coincide');
    assert.strictEqual(descriptionValue, 'Descripción de la habitación', 'El campo Descripción no coincide');
    assert.strictEqual(capacityValue, '5', 'El campo Capacidad no coincide');
    assert.strictEqual(priceValue, '100', 'El campo Precio no coincide');

    console.log('La prueba fue exitosa: el formulario se envió correctamente y los valores coinciden.');

  } catch (error) {
    console.error('Error durante la ejecución de la prueba:', error);
  } finally {
    if (browser) {
      await browser.quit();
    }
  }
})();

