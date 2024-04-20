// cypress/e2e/duckduckgo.ts
import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";

When("I visit duckduckgo.com", () => {
  // // Access the 'url' environment variable using Cypress.env()
  // const url = Cypress.env("baseUrl");
  // cy.visit(url);
});

Then("I should see a search bar", () => {
  // cy.get("input").should(
  //   "have.attr",
  //   "placeholder",
  //   "Search the web without being tracked"
  // );
});

Given('Set Login & Signup Joureny',()=>{
  cy.Login(Cypress.env('email'),Cypress.env("password"))
 
})