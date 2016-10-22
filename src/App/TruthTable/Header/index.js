import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import getVariables from '../selectors/getVariables';

const mapStateToProps = (state) => {
  return {
    columnNames: getVariables(state.expression)
  };
};

export default connect(mapStateToProps, null)(Header);
