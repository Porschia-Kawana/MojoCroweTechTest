import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
} from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import App from './App';

import './index.scss';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://graphql.mojocrowe.dev',
});

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>
);
