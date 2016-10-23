import React, { Component } from 'react';
import TruthTable from './TruthTable';
import Container from './Container';
import Title from './Title';

const App = () => {
  return (
    <Container>
      <Title>Truth Table</Title>
      <TruthTable />
    </Container>
  );
};

export default App;
