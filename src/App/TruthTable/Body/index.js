import React from 'react';
import Body from './Body';
import extractVariables from '../selectors/extractVariables';
import { connect } from 'react-redux';
import getPermutations from '../selectors/getPermutations';

const mapStateToProps = (state) => {
  const pins = extractVariables(state.expression);

  return {
    pins: getPermutations(pins),
    variables: pins,
    booleanFunction: (variableValues) => {
      let expression = state.expression;

      pins.forEach(pin => expression = expression.replace(pin, `${variableValues[pin]}`));

      return eval(expression) ? 1 : 0;
    }
  };
};

export default connect(mapStateToProps)(Body);