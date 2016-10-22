import getVariables from './getVariables';

describe('The extractVariables function', () => {
  it('should extract out the distinct variables in the expression', () => {
    // Given
    const expression = '(x || y) || (!x && z)';

    // When
    const result = getVariables(expression);

    // Then
    expect(result.length).toBe(3);
    expect(result[0]).toBe('x');
    expect(result[1]).toBe('y');
    expect(result[2]).toBe('z');
  });
});
