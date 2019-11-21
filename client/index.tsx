import ApolloClient from 'apollo-boost';
import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { render } from 'react-dom';

import { Application } from './components/Application';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
});

const application = (
  <ApolloProvider client={client}>
    <Application />
  </ApolloProvider>
);

render(application, document.querySelector('#app'));
