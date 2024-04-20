const setupNodeEvents = require("./preprocessor.config.js").cucumber;

module.exports = {
  setupNodeEvents,
  experimentalWebKitSupport: true,
  specPattern: "cypress/e2e/**/*.feature",
  excludeSpecPattern: "other/path/to/**/*.js",
  supportFile: "cypress/support/e2e.js",
  reporter: "cypress-mochawesome-reporter",
  projectId: "ibntfg",
  record: true,
  key: "8886f7c2-cf3d-4d0f-91d5-35a93235df18",
  parallel: true,
  defaultCommandTimeout: 30000,
  responseTimeout: 30000,
  requestTimeout: 30000,
  viewportWidth: 1200,
  viewportHeight: 960,
    retries: {
      runMode: 2,
      openMode: 1,
    }
}
