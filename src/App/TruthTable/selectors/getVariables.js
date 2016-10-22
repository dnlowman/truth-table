import { List } from 'immutable';

export default function getVariables(expression) {
  const variables = List.of(...expression.split(''));
  return variables.filter(variable => {
                    const charCode = variable.charCodeAt(0);
                    const normalizedCharCode = (charCode >= 92 ) ? charCode - 32 : charCode;
                    return normalizedCharCode >= 65 && normalizedCharCode <= 90;
                  })
                  .reduce((reduction, value) => {
                    if(!reduction.includes(value))
                      return reduction.push(value);
                    else
                      return reduction;
                  }, List())
                  .toJS();
};
