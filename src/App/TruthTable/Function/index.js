import React from 'react';
import { connect } from 'react-redux';
import FunctionInput from './FunctionInput';
import { updateExpression } from './actionCreators';

function mapStateToProps(state) {
  return {
    expression: state.expression
  }
}

const mapDispatchToProps = {
  updateExpression
};

const Function = connect(
  mapStateToProps,
  mapDispatchToProps
)(FunctionInput);

export default Function;
