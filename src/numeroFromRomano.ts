type AlgarismoRomano = 'I' | 'V' | 'X' | 'L' | 'C' | 'D' | 'M';

const dicionarioNumerosRomanos: { [k in AlgarismoRomano]: number } = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const letraToNum = (ch: string): number | undefined =>
  dicionarioNumerosRomanos[ch.charAt(0) as AlgarismoRomano];

export const numeroToRomano = (numRomano: string): number => {
  let resultado = 0;

  for (let i = 0; i < numRomano.length; i++) {
    const valAtual = letraToNum(numRomano[i]) || 0;

    if ((i + 1) < numRomano.length) {
      const valProxLetra = letraToNum(numRomano[i + 1]) || 0;

      if (valAtual >= valProxLetra) {
        resultado += valAtual;
      } else {
        resultado += valProxLetra - valAtual;
        i += 1;
      }
    } else {
      resultado += valAtual;
      i += 1;
    }
  }

  return resultado;
};

export default numeroToRomano;

