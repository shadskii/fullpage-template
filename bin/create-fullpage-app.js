#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const https = require('https');
const {exec} = require('child_process');

const packageJson = require('../package.json');

/**
 * we pass the object key dependency || devdependency to this function
 * @param {object} deps object key that we want to extract
 * @return {string} a string of 'dependencies@version'
 * that we can attach to an `npm i {value}` to install
 * every dep the exact version speficied in package.json
 */
const getDeps = (deps) =>
  Object.entries(deps)
    .map((dep) => `${dep[0]}@${dep[1]}`)
    .toString()
    .replace(/,/g, ' ')
    .replace(/^/g, '')
    // exclude the plugin only used in this file, nor relevant to the boilerplate
    .replace(/fs-extra[^\s]+/g, '');

const dirName = process.argv[2];
console.log('Initializing project..');

exec(
  `mkdir ${dirName} && cd ${dirName} && npm init -f`,
  (initErr, initMsg, initErrMsg) => {
    if (initErr) {
      console.error(`Oops something went wrong: ${initErrMsg}`);
      return;
    }

    const filesToCopy = [
      'README.md',
      'webpack.config.js',
      '.eslintrc.sjon',
      '.babelrc.json',
    ];
    filesToCopy.forEach((f) => {
      fs.createReadStream();
    });
  }
);
