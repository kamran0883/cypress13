const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const fs = require("fs-extra");
const path = require("path");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");

function cucumberPlugin(on, config) {
  addCucumberPreprocessorPlugin(on, config, {
    omitBeforeRunHandler: true,
    omitAfterRunHandler: true,
    omitBeforeSpecHandler: true,
    omitAfterSpecHandler: true,
    omitAfterScreenshotHandler: true,
  });
 
  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    })
  );

  const file = config.env.fileConfig || "stage";
  const pathToConfigFile = path.resolve(__dirname, "./cypress/env", `${file}.json`);

  try {
    const jsonData = fs.readJsonSync(pathToConfigFile);

    // Merge the JSON data with the existing environment variables
    config.env = { ...config.env, ...jsonData };
    

    console.log("Final Cypress Configuration:", config.env);
  } catch (error) {
    console.error("Error reading config file:", error);
    throw error;
  }
  return config;
  
}

module.exports = { cucumber: cucumberPlugin };
