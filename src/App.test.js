import React from 'react';
import { mount } from '@cypress/react';
import App from './App';

it('count initialized with 0', () => {
  mount(<App />);
  cy.get('[data-cy="count"]').contains('0');
})





