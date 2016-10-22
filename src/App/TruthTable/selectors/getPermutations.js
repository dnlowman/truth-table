export default function getPermutations(variables) {
  const maxNumber = Math.pow(2, variables.length);
  const permutations = [];

  for(let i = 0; i < maxNumber; ++i) {
    permutations.push((i >>> 0).toString(2));

    while(permutations[i].length < variables.length)
      permutations[i] = '0' + permutations[i];
  }

  return permutations.map(permutation => {
    return permutation.split('')
                      .reduce((prev, value, index) => {
                        prev[variables[index]] = parseInt(value);
                        return prev;
                      }, {});
  });
}
