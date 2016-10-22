import React, { PropTypes } from 'react';
import shortid from 'shortid';
import styled from 'styled-components';

const Row = styled.tr`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Body = ({ variableValues, booleanFunction }) => {
  return (
    <tbody>
      {
        variableValues.map(variableValue => {
                        return (
                          <Row key={shortid.generate()}>
                            {
                              Object.keys(variableValue)
                                    .map(key => <td key={shortid.generate()}>{variableValue[key]}</td>)
                            }
                            <td>{ booleanFunction(variableValue) }</td>
                          </Row>
                        );
                      })
      }
    </tbody>
  );
};

Body.PropTypes = {
  variableValues: PropTypes.array.isRequired,
  booleanFunction: PropTypes.func.isRequired
};

export default Body;
