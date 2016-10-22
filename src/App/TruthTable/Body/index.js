import React from 'react';
import Body from './Body';
import getVariables from '../selectors/getVariables';
import { connect } from 'react-redux';
import getPermutations from '../selectors/getPermutations';

const mapStateToProps = (state) => {
  const variables = getVariables(state.expression);

  return {
    variableValues: getPermutations(variables),
    booleanFunction: (variableValues) => {
      const expression = variables.reduce((expression, variable) => expression.replace(variable, `${variableValues[variable]}`), state.expression);

      try {
        return eval(expression) ? 1 : 0;
      }
      catch(e) {
        return 0;
      }
    }
  };
};

export default connect(mapStateToProps)(Body);
