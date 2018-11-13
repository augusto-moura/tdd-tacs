const isDivisivel = (dividendo: number) => (divisor: number) =>
  (divisor % dividendo) === 0;

const isDivisivelPor400 = isDivisivel(400);
const isDivisivelPor100 = isDivisivel(100);
const isDivisivelPor4 = isDivisivel(4);

export const isBissexto = (ano: number): boolean =>
  isDivisivelPor400(ano) || (isDivisivelPor4(ano) && !isDivisivelPor100(ano));


export default isBissexto;

