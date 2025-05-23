// trabalho.js

/**
 * @param {string} nome 
 * @returns {string} 
 */

export function geradorDeTagsDeIdentificacao(nome) {
  return nome.toUpperCase();
}

/**
 * @param {number} idade - Idade do pet em anos
 * @param {string} porte - Porte do pet (P, M, G)
 * @returns {boolean} true se pode ser adotado
 */
export function verificarSePodeSerAdotado(idade, porte) {
  return idade >= 1 && porte === 'M';
}

/**
 * Calcula o consumo diário de ração em gramas
 * @param {string} nome - Nome do pet
 * @param {number} idade - Idade em anos
 * @param {number} peso - Peso em kg
 * @returns {number} Consumo diário em gramas
 */
export function calcularConsumoDeRacao(nome, idade, peso) {
  return peso * 300; // 300g por kg de peso
}

/**
 * Decide o tipo de atividade baseado no porte pequeno
 * @param {string} porte -  somente pequeno, pois é o único implementado
 * @returns {string} Atividade recomendada
 */
export function decidirTipoDeAtividadePorPorte(porte) {
  const atividades = {
    pequeno: 'brincar dentro de casa',
  };
  return atividades[porte.toLowerCase()] || 'atividade não especificada';
}

/**
 * Simula uma busca assíncrona de dados
 * @returns {Promise<string>} Nome do pet
 */
export async function buscarDadoAsync() {
  return new Promise(resolve => {
    setTimeout(() => resolve('Pipoca'), 100);
  });
}