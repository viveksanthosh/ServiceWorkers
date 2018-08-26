import App from './App';
import React from 'react';
import { readFileSync } from 'fs'
import { StaticRouter } from 'react-router-dom';
import express from 'express';
import { renderToString } from 'react-dom/server';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();
server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/worker.js', (req, res) => {
    res.set({ "Service-Worker": "script", "Service-Worker-Allowed": "/", "Content-Type": "text/javascript	" });
    let file = readFileSync('./src/worker.js', 'utf-8');
    res.status(200).send(file)

  })
  .get('/*', (req, res) => {
    const context = {};
    const markup = renderToString(
      <App />
    );

    res.status(200).send(
      `<!doctype html>
    <html lang="">
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charset="utf-8" />
        <title>Welcome to Razzle</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script>
        navigator.serviceWorker.register('worker.js').then(e => console.log('registered')).catch(console.log)
        </script>
        ${
      assets.client.css
        ? `<link rel="stylesheet" href="${assets.client.css}">`
        : ''
      }
       
    </head>
    <body>
        <div id="root">${markup}</div>
        ${
      process.env.NODE_ENV === 'production'
        ? `<script src="${assets.client.js}" defer></script>`
        : `<script src="${assets.client.js}" defer crossorigin></script>
            `
      }
    </body>
</html>`
    );
  });

export default server;
