import getPermutations from './getPermutations';

it('should create all of the binary permutations for two variables', () => {
  // Given
  const variables = ['a', 'b'];

  // When
  const result = getPermutations(variables);

  // Then
  expect(result.length).toBe(4);
  expect(result[0]).toBe('00');
  expect(result[1]).toBe('01');
  expect(result[2]).toBe('10');
  expect(result[3]).toBe('11');
});

it('should create all of the binary permutations for three variables', () => {
  // Given
  const variables = ['a', 'b', 'c'];

  // When
  const result = getPermutations(variables);

  // Then
  expect(result.length).toBe(8);
  // 4 2 1
  expect(result[0]).toBe('000');
  expect(result[1]).toBe('001');
  expect(result[2]).toBe('010');
  expect(result[3]).toBe('011');
  expect(result[4]).toBe('100');
  expect(result[5]).toBe('101');
  expect(result[6]).toBe('110');
  expect(result[7]).toBe('111');
});
