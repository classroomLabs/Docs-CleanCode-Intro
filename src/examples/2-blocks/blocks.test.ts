import { getPrimes } from './blocks_ok';

describe('sieve of Eratosthenes', () => {
  test('no primes under two', () => {
    expect(getPrimes(1)).toEqual([]);
  });

  test('finds first prime', () => {
    expect(getPrimes(2)).toEqual([2]);
  });

  test('finds primes up to 10', () => {
    expect(getPrimes(10)).toEqual([2, 3, 5, 7]);
  });

  test('finds primes up to 50', () => {
    expect(getPrimes(50)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]);
  });

  test('limit is prime', () => {
    expect(getPrimes(13)).toEqual([2, 3, 5, 7, 11, 13]);
  });
});
