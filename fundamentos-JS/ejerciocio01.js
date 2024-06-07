// Crea una variable de tipo string.
// Reemplaza el valor de null por el correspondiente.

const nuevoString = null;

module.exports = nuevoString;

//---------------------------------------------------------------------------------------//

const nuevoString = require('../ejercicios/01');

test('Debe ser un string', function () {
  expect(typeof nuevoString).toBe('string');
});