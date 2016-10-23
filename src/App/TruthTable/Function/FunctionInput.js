import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  outline: none;
  border: none;
  background-color: orange;
  color: white;
  font-family: Arial;
`;

const FunctionInput = ({ expression, updateExpression }) => {
  return (
    <Input type="text" value={expression} onChange={e => updateExpression(e.target.value)} />
  );
};

FunctionInput.PropTypes = {
  updateExpression: PropTypes.func.isRequired
};

export default FunctionInput;
