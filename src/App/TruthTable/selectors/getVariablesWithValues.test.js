import getVariablesWithValues from './getVariablesWithValues';

xdescribe('The getVariablesWithValues selector', () => {
  it('should return an array of objects with each key being the variable and the value', () => {
    // Given
    const variables = [
      'x',
      'y',
      'z'
    ];

    const values = [
      '000',
      '001',
      '011',
      '110',
      '100',
      '111'
    ];

    // When
    const result = getVariablesWithValues(variables, values);

    // Then
    expect(result.length).toBe(6);
    expect(result[0].x).toBe(0);
    expect(result[0].y).toBe(0);
    expect(result[0].z).toBe(0);
  });
});
