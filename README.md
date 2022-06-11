# Test ESM in Node

Purpose of this demo is to showcase how to use ESM modules natively in the browser to render react application.

Demo uses [import-maps](https://github.com/WICG/import-maps) to define import aliases and [es-module-shims](https://github.com/guybedford/es-module-shims) to polyfill import-map support in all modern browsers.

## How to run the demo?

Make sure you have Node 14+ installed on your machine.

```bash
# Quickly start http server https://www.npmjs.com/package/serve
$ npx serve
```

Open `http://localhost:3000/` in your browser.
