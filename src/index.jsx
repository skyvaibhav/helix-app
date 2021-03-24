/* eslint-disable no-undef */
// recommended by webpacker
import 'core-js/stable';
import 'regenerator-runtime/runtime';

// Import dependencies
import React from 'react';
import { render } from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './app';
import './index.scss';

// Import media
require.context('./app/images', true);

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('react-container');

  render(
    <App />,
    container,
  );
});

serviceWorker.unregister();
