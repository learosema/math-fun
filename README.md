# Maths for fun and profit

Welcome to my maths for fun and profit repository. In this repo, I'm creating useful math functions via vanilla JavaScript.
Vanilla JavaScript means, this repo does not use the Babel/Webpack toolchain, but instead rely on a modern JS environment that supports the ES module syntax.

Also, the test framework is also fairly minimal; it's just a wrapper around `console.assert`. There's no [jest](https://jestjs.io) magic happening here.

# Running the tests

At this time of writing, I needed the [ESM](https://npmjs.com/package/esm) package to get the ES module syntax to work with the current stable node. So, run a `npm install` before running the tests via `npm test`.

Alternatively, you can start a web server inside the project and execute the tests directly in the browser, without the need to install any npm dependencies. `npm run server` starts a web server via `npx http-server`, use any web server you like, or just test it on the [github page](https://terabaud.github.io/math-fun/index.html) of this repository.