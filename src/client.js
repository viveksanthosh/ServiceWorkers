import App from './App';
import React from 'react';
import { hydrate } from 'react-dom';

hydrate(
  <App />,
  document.getElementById('root')
);

// document.getElementById('root').onclick = () => {
//   fetch('https://google.com').then(r => r.text()).then((r) => {
//     console.log(r.substr(0, 100));
//   })
// }

if (module.hot) {
  module.hot.accept();
}
