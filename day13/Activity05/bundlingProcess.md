# Bundling process using a module bundler Webpack
1. Create a new project directory and initialise a new node.js project
```shell
mkdir my-webpack-project
cd my-webpack-project
```
```shell
npm init -y
```
2. Install Webpack and Webpack CLI:
```shell
npm install --save-dev webpack webpack-cli
```
3. Create the source directory and JavaScript files:
```shell
mkdir src
touch src/index.js src/module1.js src/module2.js
touch webpack.config.js
```
4. Edit these `src/index.js` `src/module1.js` `src/module2.js` as below:
```javascript
// src/module1.js
export const greet = () => {
  return 'Hello from Module 1';
};
```
```javascript
// src/module2.js
export const farewell = () => {
  return 'Goodbye from Module 2';
};
```
```javascript
// src/index.js
import { greet } from './module1';
import { farewell } from './module2';

console.log(greet());
console.log(farewell());
```
5. Edit `webpack.config.js`:
```javascript
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development'
};
```
6. Update `package.json`
```shell
"scripts": {
  "build": "webpack"
}
```
7. Run `npm run build`
```shell
npm run build
```
8. The bundled file `bundle.js` will be created in the dist directory.
