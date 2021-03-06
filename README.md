# fullpage-template

This project provides a starting point for creating fullpage.js web applications.

# Setup

To start working just follow these steps

## 1. Clone this repo:

Navigate into your workspace directory.

Run:

`git clone https://github.com/shadskii/fullpage-template.git`

## 2. Install node.js and npm:

https://nodejs.org/en/

## 3. Install dependencies:

Navigate to the cloned repo’s directory.

Run:

`npm install`

## 4. Run the development server:

Run:

`npm start`

This will run a server so you can run the example in a browser
Open your browser and enter localhost:9000 into the address bar.
Also this will start a watch process, so you can change the source and the process will recompile and refresh the browser.

# Project Structure

```
*root*
|
├── */src/*
│   ├── */assets/* where images and stuff are stored
│   ├── *index.html* entry point
│   ├── *index.jsx* javascript entry point
│   ├── *style.css* styling
|
├── *package.json* the whole package.json with every dependency and script nothing is kept hidden
├── *.eslintrc* eslint config
├── *.babelrc* babel config
├── *webpack.config.js* webpack config, it has a dev and prod environment
└── *README.md* this file
```

# Scripts

```
// Start the dev server on localhost:9000
npm start
```

```
// Build for production to /dist
npm run build
```

```
// Deploy your project to the github pages specified by the hompage specified in package.json
npm run deploy
```

# Eslint

This project uses Google's javascript rules so you can write error-free javasctipt code, if you use Visual Studio Code, you can install eslint from the extension tab to activate this function, for other editors just google name of the editor + eslint you will find how to enable it in your editor.
