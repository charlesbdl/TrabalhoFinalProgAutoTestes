// test/calculadora.test.js
const { expect } = require('chai'); // Importa o Chai para asserções
const { soma, subtrai } = require('../test/calculadora');
describe('Testes da Calculadora', () => { // Agrupa os testes
  // Teste 1: Soma correta
  it('Deve somar 2 + 3 e retornar 5', () => {
    const resultado = soma(2, 3);
    expect(resultado).to.equal(5); // Chai: verifica se o resultado é igual a 5
  });

  // Teste 2: Subtração correta
  it('Deve subtrair 5 - 3 e retornar 2', () => {
    const resultado = subtrai(5, 3);
    expect(resultado).to.equal(2);
  });

  // Teste 3: Edge case (caso especial)
  it('Deve somar números negativos corretamente', () => {
    expect(soma(-1, -2)).to.equal(-3);
  });
});