const { expect } = require('chai');
const {
  validatePrice,
  validateCapacity,
  validateName,
  validateDescription
} = require('../utils/validation');

describe('Pruebas de Validación', () => {
  it('debería validar el precio dentro del rango aceptado', () => {
    expect(validatePrice(500)).to.be.true;
    expect(validatePrice(5)).to.be.false;
    expect(validatePrice(2000)).to.be.false;
  });

  it('debería validar la capacidad dentro del rango aceptado', () => {
    expect(validateCapacity(10)).to.be.true;
    expect(validateCapacity(0)).to.be.false;
    expect(validateCapacity(30)).to.be.false;
  });

  it('debería validar la longitud del nombre dentro del rango aceptado', () => {
    expect(validateName('Sala de Ejemplo')).to.be.true;
    expect(validateName('A')).to.be.false;
    expect(validateName('Esta es una sala con un nombre largo que excede el límite')).to.be.false;
  });

  it('debería validar la longitud de la descripción dentro del rango aceptado', () => {
    expect(validateDescription('Una descripción')).to.be.true;
    expect(validateDescription('Demasiado corto')).to.be.false;
    expect(validateDescription('Una descripción muy larga que excede el límite permitido para la descripción de una habitación.')).to.be.false;
  });
});
