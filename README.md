# astro-microfrontends

This demo takes advantage of remote EcmaScript Modules (ESM) to server-side rendering micro-frontends. Express is used for serving assets, but ideally one would have a dedicated CDN hosting them.

## Features

- :sparkles: Server-side composition of microfrontends
- :astronaut: Server-side rendring of micro-frontends
- :package: Caching with Deno

## Usage

- Build each microfrontend with `npm run build`
- Start each microfrontend with `node server.js`
- Start the shell with `npm run dev`
