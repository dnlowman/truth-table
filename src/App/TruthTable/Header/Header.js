import React, { PropTypes } from 'react';
import shortid from 'shortid';
import styled from 'styled-components';
import Function from '../Function';

const Row = styled.tr`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Header = ({ columnNames }) => {
  return (
    <thead>
      <Row>
        {
          columnNames.map(columnName => (
            <th key={shortid.generate()}>{columnName}</th>
          ))
        }
        <td>
          f(
          <Function />
          )
        </td>
      </Row>
    </thead>
  );
};

Header.PropTypes = {
  columnNames: PropTypes.array.isRequired
};

export default Header;
