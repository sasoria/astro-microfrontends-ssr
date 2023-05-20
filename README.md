# astro-microfrontends

This demo takes advantage of remote EcmaScript Modules (ESM) to server-side render micro-frontends. Express is used for serving assets, but ideally one would have a dedicated CDN hosting them.

## Features

- :astronaut: Server-side rendering of micro-frontends
- :sparkles: Server-side composition of micro-frontends
- :package: Cacheable remote modules with Deno

## Usage

### Micro-frontends

- Build each microfrontend with `npm run build`
- Start each microfrontend with `node server.js`

### Shell application

- Build the shell with `npm run build`
- Start the shell with `npm run preview`
