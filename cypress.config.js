// cypress.config.js

const { defineConfig } = require('cypress');
const e2eConfig = require('./e2e.config.js');

module.exports = defineConfig({
  e2e: e2eConfig,
});

