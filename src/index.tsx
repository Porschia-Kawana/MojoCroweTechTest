import './index.scss';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://graphql.mojocrowe.dev',
});

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
