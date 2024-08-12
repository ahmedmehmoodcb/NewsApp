import React from 'react';
import Articles from './components/Articles';
import Preferences from './components/Preferences';
import { Container } from 'react-bootstrap';
import './App.css';

const App = () => (
  <Container>
    <Preferences />
    <Articles />
  </Container>
);

export default App;
