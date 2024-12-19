const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/purchaseFlow/**/*.cy.js', 
    supportFile: false,
  },
});