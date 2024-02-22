export function formatDecimalToReal(valor) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(valor);
}

export function formatBrazilianToDecimal(valor) {
  const adjustedScore = valor.replace('.', '').replace(',', '.');
  return parseFloat(adjustedScore);
}