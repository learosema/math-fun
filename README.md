# Maths for fun and profit

[![Build Status](https://travis-ci.org/terabaud/math-fun.svg?branch=master)](https://travis-ci.org/terabaud/math-fun)

Welcome to my maths for fun and profit repository. In this repo, I'm creating useful math functions via vanilla JavaScript.
Vanilla JavaScript means, this repo does not use the Babel/Webpack toolchain, but instead rely on a modern JS environment that supports the ES module syntax.

Also, the test framework is also fairly minimal; it's just a wrapper around `console.assert`. There's no [jest](https://jestjs.io) magic happening here.

# Running the tests

To run the test in node, type `npm install` and `npm test`.

Alternatively, you can start a web server inside the project and execute the tests directly in the browser, without the need to install any npm dependencies. `npm run server` starts a local web server at port 1337. You can also just go to the [github page](https://terabaud.github.io/math-fun/index.html) of this repository and open the dev console.
