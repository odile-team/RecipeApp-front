import { percentOf } from 'utils/percentOf';

describe('test percentOf function', () => {
  it('should return 20 when asking 20% of a 100 value', () => {
    const result = percentOf(100, 20);
    const expectValue = 20;
    expect(result).toBe(expectValue);
  });
});
