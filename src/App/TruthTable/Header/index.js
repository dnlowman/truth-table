import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import extractVariables from '../selectors/extractVariables';

const mapStateToProps = (state) => {
  return {
    columnNames: extractVariables(state.expression)
  };
};

export default connect(mapStateToProps, null)(Header);
