## Webpack Boilerplate

Prepared configuration for Webpack 2 for fast web development using the latest compiling tools.

## Motivation

The goal of this project is to provide simple and reliable boilerplate for creating new projects using webpack. It is the skeleton for any webpack project, and it easily extensible. Nevertheless, it still remains highly usable in its original shape. In case you're wondering why did I create something like this and didn't stick with the many already prepared alternatives, the answer is simple. I wanted something that is simple, a configuration, a prepared project I can use over and over and that won't pull many unnecessary libraries to my project. I didn't manage to find anything like this, so I decided to create my own boilerplate. And here it is.

## Installation

To install it just simply clone this repository and then enter the folder.
```
git clone https://github.com/KubqoA/webpack-boilerplate.git
cd webpack-boilerplate/
```

Then you need to install all the npm dependencies, to do so you can use _yarn_ or classic _npm_.

**Using yarn:**
```
yarn install
```

**Using npm:**
```
npm install
```

There are a few already prepacked scripts, there is a script for **production** (compile the assets and minify them), for **development** (compile the assets without minifying), and for creating a _webpack-dev-server_ running on localhost on port 9000 and serving from the dist directory.

When compiling the outputs are stored in the **dist** directory. The outputs are:
* app.css
* app.css.map (when using production)
* app.js
* app.js.map (when using production)

To run the scripts use following commmands:
```
Production:
npm run-script production
or
npm run-script prod

Development:
npm run-script development
or
npm run-script dev

webpack-dev-server:
npm-run script watch
```

## License

This project is licensed under MIT license.