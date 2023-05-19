# astro-microfrontends

This demo takes advantage of remote EcmaScript Modules (ESM) to do server-side rendering of micro-frontends. Express is used for serving assets, but ideally one would have a dedicated CDN hosting them.

## Features

- Server-side composition of microfrontends
- Server-side rendring of micro-frontends

## Usage

- Build each microfrontend with `npm run build`
- Start each microfrontend with `node server.js`
- Start the shell with `npm run dev`
