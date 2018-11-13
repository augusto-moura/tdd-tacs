import numeroFromRomano from '../numeroFromRomano'


describe('conversor de notação romana para números', () => {
  it('deve converter os 10 primeiros números corretamente', () => {
    expect(numeroFromRomano('I')).toBe(1);
    expect(numeroFromRomano('II')).toBe(2);
    expect(numeroFromRomano('III')).toBe(3);
    expect(numeroFromRomano('IV')).toBe(4);
    expect(numeroFromRomano('V')).toBe(5);
    expect(numeroFromRomano('VI')).toBe(6);
    expect(numeroFromRomano('VII')).toBe(7);
    expect(numeroFromRomano('VIII')).toBe(8);
    expect(numeroFromRomano('IX')).toBe(9);
    expect(numeroFromRomano('X')).toBe(10);
  });

  it('deve converter os numeros de limiar entre 10 e 100', () => {
    expect(numeroFromRomano('XL')).toBe(40);
    expect(numeroFromRomano('XLIV')).toBe(44);
    expect(numeroFromRomano('XLI')).toBe(41);
    expect(numeroFromRomano('XLIX')).toBe(49);
    expect(numeroFromRomano('L')).toBe(50);
    expect(numeroFromRomano('LI')).toBe(51);
    expect(numeroFromRomano('XC')).toBe(90);
    expect(numeroFromRomano('XCIX')).toBe(99);
    expect(numeroFromRomano('C')).toBe(100);
  });

  it('deve converter os numeros de limiar entre 100 e 1000', () => {
    expect(numeroFromRomano('CD')).toBe(400);
    expect(numeroFromRomano('CDXL')).toBe(440);
    expect(numeroFromRomano('CDXCIX')).toBe(499);
    expect(numeroFromRomano('D')).toBe(500);
    expect(numeroFromRomano('CM')).toBe(900);
    expect(numeroFromRomano('M')).toBe(1000);
  });

  it('deve converter os numeros de limiar entre 1000 e 4999', () => {
    expect(numeroFromRomano('MCD')).toBe(1400);
    expect(numeroFromRomano('DCCLI')).toBe(1751);
    expect(numeroFromRomano('MCMXC')).toBe(1990);
    expect(numeroFromRomano('MMMM')).toBe(4000);
    expect(numeroFromRomano('MMMMCMXCIX')).toBe(4999);
  });
});

