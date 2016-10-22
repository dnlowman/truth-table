import React, { PropTypes } from 'react';

const FunctionInput = ({ expression, updateExpression }) => {
  return (
    <input type="text" value={expression} onChange={e => updateExpression(e.target.value)} />
  );
};

FunctionInput.PropTypes = {
  updateExpression: PropTypes.func.isRequired
};

export default FunctionInput;
