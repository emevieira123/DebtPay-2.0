# React + TypeScript + Vite + ChakraUI

### Link Project: https://debtpay-new.vercel.app/
</br>

# Instructions for local development

To run the web project, you must have the following installed on your machine:

- [NodeJS](https://nodejs.org/en/) (Version LTS)
- [Yarn](https://classic.yarnpkg.com/pt-BR/docs/install) (Using NPM can generate conflicts in dependency management) </br>
After these installations, inside the project folder run:​

</br>

```js
yarn && yarn dev
```

By executing this command, all dependencies will be installed and the project will start immediately.
</br>
</br>

## Development Command
```js
yarn dev
```

Run the project in development mode at the url: </br>
http://localhost:3000 </br>
​Any change made to the files will cause an automatic reload of the page​.
</br>
</br>

```
yarn build
```
Builds the application to the build folder.

</br>

# About the project

## Description

This is a personal project that was developed with the aim of creating a platform where I could register and manage some personal debts in a more organized way.

</br>

## Technologies used for development

- React with vite and typescript
- Chakra UI
- React Query
- Zustand

<b>`Observation:`</b> Some features are still being developed, but it is now possible to test the application. Feel free to register and test the application.

</br>

## Info Configuration Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
