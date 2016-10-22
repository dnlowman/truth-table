import React, { PropTypes } from 'react';
import shortid from 'shortid';
import styled from 'styled-components';

const Row = styled.tr`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Body = ({ pins, variables, booleanFunction }) => {

  let test = pins.map(pin => pin.split("").map(bit => parseInt(bit)));

  return (
    <tbody>
      {
        test.map(pin => {
          const expression = {};
          variables.forEach((variable, index) => expression[variable] = pin[index]);

          return (
            <Row key={shortid.generate()}>
              { pin.map(pin => <td key={shortid.generate()}>{pin}</td>) }
              <td>{ booleanFunction(expression) }</td>
            </Row>
          );
        })
      }
    </tbody>
  );
};

Body.PropTypes = {
  pins: PropTypes.array.isRequired,
  variables: PropTypes.array.isRequired,
  booleanFunction: PropTypes.func.isRequired
};

export default Body;
