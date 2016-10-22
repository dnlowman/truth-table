import getPermutations from './getPermutations';

it('should create all of the binary permutations for two variables', () => {
  // Given
  const variables = ['a', 'b'];

  // When
  const result = getPermutations(variables);

  // Then
  expect(result.length).toBe(4);
  expect(result[0].a).toBe(0);
  expect(result[0].b).toBe(0);

  expect(result[1].a).toBe(0);
  expect(result[1].b).toBe(1);

  expect(result[2].a).toBe(1);
  expect(result[2].b).toBe(0);

  expect(result[3].a).toBe(1);
  expect(result[3].b).toBe(1);
});

it('should create all of the binary permutations for three variables', () => {
  // Given
  const variables = ['a', 'b', 'c'];

  // When
  const result = getPermutations(variables);

  // Then
  expect(result.length).toBe(8);

  expect(result[0].a).toBe(0);
  expect(result[0].b).toBe(0);
  expect(result[0].c).toBe(0);

  expect(result[1].a).toBe(0);
  expect(result[1].b).toBe(0);
  expect(result[1].c).toBe(1);

  expect(result[2].a).toBe(0);
  expect(result[2].b).toBe(1);
  expect(result[2].c).toBe(0);

  expect(result[3].a).toBe(0);
  expect(result[3].b).toBe(1);
  expect(result[3].c).toBe(1);

  expect(result[4].a).toBe(1);
  expect(result[4].b).toBe(0);
  expect(result[4].c).toBe(0);

  expect(result[5].a).toBe(1);
  expect(result[5].b).toBe(0);
  expect(result[5].c).toBe(1);

  expect(result[6].a).toBe(1);
  expect(result[6].b).toBe(1);
  expect(result[6].c).toBe(0);

  expect(result[7].a).toBe(1);
  expect(result[7].b).toBe(1);
  expect(result[7].c).toBe(1);
});
